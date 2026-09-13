import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-slate-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-display text-xl text-paper">
          {site.shortName}
          <span className="text-mint">.</span>
        </p>
        <p className="text-sm text-mist">
          © {new Date().getFullYear()} {site.name}. Static site. No backend.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze hover:text-mint"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
