import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { navItems, site } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-slate-line bg-ink/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => go('home')} className="font-display text-xl tracking-tight text-paper">
          {site.shortName}
          <span className="text-mint">.</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-paper"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.github} target="_blank" rel="noreferrer" className="text-mist hover:text-mint" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-mist hover:text-mint" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>

        <button
          className="text-paper lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-line bg-ink/95 px-5 py-4 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="block w-full py-3 text-left font-mono text-xs uppercase tracking-[0.2em] text-mist"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-3 flex gap-4">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-mint">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-mint">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
