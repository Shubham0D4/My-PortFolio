import { Github } from 'lucide-react';
import { research } from '../data/research';
import Section from './ui/Section';

const statusLabel = {
  ongoing: 'Ongoing',
  experiment: 'Experiment',
  built: 'Built',
};

export default function Research() {
  return (
    <Section
      id="research"
      kicker="04 — Independent work"
      title="Lab notes, not a publication list."
      lede="Transformer toys, a spectral-field architecture, sparse backprop that collapsed, and a graph memory that is not another RAG wrapper."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {research.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-line bg-slate-panel/70 p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mint">
                {statusLabel[item.status]}
              </span>
              {item.repoUrl && (
                <a href={item.repoUrl} target="_blank" rel="noreferrer" className="text-mist hover:text-mint" aria-label="Repository">
                  <Github size={16} />
                </a>
              )}
            </div>
            <h3 className="mt-3 font-display text-2xl text-paper">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
            {item.notes && <p className="mt-3 text-xs italic text-bronze">{item.notes}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
