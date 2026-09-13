import { ReactNode, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, kicker, title, lede, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative border-t border-slate-line/80 px-5 py-24 sm:px-8 lg:px-12 ${className}`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl">
          {title}
        </h2>
        {lede && <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{lede}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
