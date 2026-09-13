import Section from './ui/Section';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section
      id="work"
      kicker="02 — Experience"
      title="One internship, done for real."
      lede="Cognizant GenC Next. Pipelines, models, and SQL — the parts I can walk through on a whiteboard."
    >
      {experience.map((job) => (
        <article
          key={job.id}
          className="rounded-2xl border border-slate-line bg-gradient-to-br from-slate-panel to-soot p-6 sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mint">{job.date}</p>
              <h3 className="mt-2 font-display text-3xl text-paper">{job.org}</h3>
              <p className="mt-1 text-bronze">{job.role}</p>
            </div>
            <p className="font-mono text-xs text-mist">{job.location}</p>
          </div>
          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-mist">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  );
}
