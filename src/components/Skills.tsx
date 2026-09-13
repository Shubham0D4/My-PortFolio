import { lazy, Suspense } from 'react';
import { skillGroups, skillNotes } from '../data/skills';
import Section from './ui/Section';

const SkillOrbit = lazy(() => import('./three/SkillOrbit'));

export default function Skills() {
  return (
    <Section
      id="skills"
      kicker="05 — Stack"
      title="Confirmed. Constrained. No hedges."
      lede="If it cannot survive a screen, it is not listed. Learning PyTorch; that is why it is not here yet."
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Suspense fallback={<div className="h-[280px] md:h-[340px]" />}>
          <SkillOrbit />
        </Suspense>
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id} className="rounded-2xl border border-slate-line bg-soot p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-ink px-3 py-1 text-sm text-paper ring-1 ring-slate-line"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <ul className="mt-10 space-y-2 border-t border-slate-line pt-6 text-sm text-mist">
        {skillNotes.map((note) => (
          <li key={note}>— {note}</li>
        ))}
      </ul>
    </Section>
  );
}
