import { certifications, educations } from '../data/education';
import Section from './ui/Section';

export default function Education() {
  return (
    <Section
      id="education"
      kicker="07 — Education"
      title="School and the certificates that matter."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {educations.map((edu) => (
            <article key={edu.id} className="rounded-2xl border border-slate-line bg-soot p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">{edu.date}</p>
              <h3 className="mt-2 font-display text-2xl text-paper">{edu.degree}</h3>
              {edu.field && <p className="text-bronze">{edu.field}</p>}
              <p className="mt-2 text-sm text-mist">
                {edu.institution} · {edu.location}
              </p>
              {edu.score && (
                <p className="mt-3 inline-block rounded-full bg-ink px-3 py-1 font-mono text-xs text-mint">
                  {edu.score}
                </p>
              )}
            </article>
          ))}
        </div>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <article key={cert.id} className="rounded-2xl border border-slate-line bg-slate-panel/80 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">{cert.date}</p>
              <h3 className="mt-2 font-display text-2xl text-paper">{cert.title}</h3>
              <p className="mt-1 text-sm text-mist">{cert.organization}</p>
              {cert.credentialId && (
                <p className="mt-3 break-all font-mono text-[11px] text-mist">ID {cert.credentialId}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
