import { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { saveAs } from 'file-saver';
import { Download, Loader2 } from 'lucide-react';
import { resumes } from '../data/resumes';
import Section from './ui/Section';

GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function Resume() {
  const [activeId, setActiveId] = useState(resumes[0].id);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const active = resumes.find((r) => r.id === activeId) ?? resumes[0];

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      setLoading(true);
      setError(null);
      try {
        const pdf = await getDocument(active.file).promise;
        const page = await pdf.getPage(1);
        const canvas = canvasRef.current;
        const frame = frameRef.current;
        if (!canvas || !frame || cancelled) return;

        const maxWidth = Math.min(frame.clientWidth - 16, 760);
        const unscaled = page.getViewport({ scale: 1 });
        const scale = maxWidth / unscaled.width;
        const viewport = page.getViewport({ scale: Math.max(scale, 0.8) });
        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: context, viewport }).promise;
      } catch {
        if (!cancelled) setError('Could not render this PDF. Download it instead.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    render();
    window.addEventListener('resize', render);
    return () => {
      cancelled = true;
      window.removeEventListener('resize', render);
    };
  }, [active.file]);

  const download = async () => {
    setDownloading(true);
    try {
      const response = await fetch(active.file);
      const blob = await response.blob();
      saveAs(blob, active.downloadName);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Section
      id="resume"
      kicker="06 — Resume"
      title="Pick a cut. Preview it. Take the PDF."
      lede="Same person, different emphasis. All of these are static files on this site — no backend, no generated fluff."
    >
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {resumes.map((resume) => (
            <button
              key={resume.id}
              onClick={() => setActiveId(resume.id)}
              className={`min-w-[160px] rounded-xl border px-4 py-3 text-left transition lg:min-w-0 ${
                resume.id === activeId
                  ? 'border-mint bg-mint/10 text-paper'
                  : 'border-slate-line bg-soot text-mist hover:border-mint/40'
              }`}
            >
              <span className="block font-medium text-paper">{resume.label}</span>
              <span className="mt-1 block text-xs text-mist">{resume.focus}</span>
            </button>
          ))}
        </div>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-mist">
              Viewing <span className="text-paper">{active.label}</span> — {active.focus}
            </p>
            <button
              onClick={download}
              disabled={downloading}
              className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-medium text-ink hover:bg-paper disabled:opacity-60"
            >
              {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
              Download PDF
            </button>
          </div>

          <div
            ref={frameRef}
            className="relative min-h-[480px] overflow-auto rounded-2xl border border-slate-line bg-[#11141b] p-3 shadow-bronze"
          >
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#11141b]/70 text-mist">
                <Loader2 className="animate-spin" />
              </div>
            )}
            {error && <p className="p-8 text-center text-sm text-bronze">{error}</p>}
            <canvas ref={canvasRef} className="mx-auto max-w-full rounded-xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}
