import Section from './ui/Section';
import { site } from '../data/site';

const facts = [
  { label: 'Name', value: 'Shubham Darekar' },
  { label: 'Based', value: site.location },
  { label: 'School', value: 'DYPIT, Pune · 2026' },
  { label: 'Track', value: 'Backend, AI, systems' },
];

export default function About() {
  return (
    <Section
      id="about"
      kicker="01 — About"
      title="I would rather be precise than impressive."
      lede="The work I keep is the work that survives a technical screen. If I have not built it hard enough to defend, it does not go on a resume — or here."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-slate-line">
            <img
              src={site.portrait}
              alt="Shubham Darekar"
              className="aspect-[4/5] w-full object-cover object-[center_15%] grayscale-[20%]"
            />
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
            Independent experiments · Linux on a 16GB laptop
          </p>
        </div>

        <div className="space-y-6 text-[17px] leading-relaxed text-mist">
          <p>
            I am a final-year Computer Science student at Dr. D. Y. Patil Institute of Technology. Day to
            day I sit between backend systems and applied GenAI. Longer term I care about LLM internals,
            multi-agent systems, and training algorithms that are not just another wrapper around an API.
          </p>
          <p>
            I completed a Cognizant GenC Next internship on ETL pipelines and applied ML. I have shipped
            agent orchestration, a vault-based communication server, published npm libraries, and a live
            operations product. Frontend is something I can do; it is not what I want to specialise in.
          </p>
          <p>
            I prefer solitary, unstructured thinking time and direct feedback. I will tell you what I have
            actually built — including the routing collapse and the skills I am still learning.
          </p>

          <dl className="grid grid-cols-2 gap-4 pt-2">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-slate-line bg-soot/70 p-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">{fact.label}</dt>
                <dd className="mt-1 text-sm text-paper">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
