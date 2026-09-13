import { ExternalLink, Github, Package } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectKind } from '../types';
import Section from './ui/Section';

const kindLabel: Record<ProjectKind, string> = {
  agents: 'Agents',
  systems: 'Systems',
  backend: 'Backend',
  research: 'Applied AI',
  product: 'Product',
  'open-source': 'Open source',
};

export default function Projects() {
  return (
    <Section
      id="projects"
      kicker="03 — Selected work"
      title="Things I can defend in a screen."
      lede="Older college CRUD apps are gone. What remains is agent systems, backends, a live product, and two published libraries."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col rounded-2xl border border-slate-line bg-soot/80 p-6 transition hover:border-mint/40 hover:shadow-glow"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bronze">
                {kindLabel[project.kind]}
              </span>
              <span className="font-mono text-[10px] text-mist">{project.date}</span>
            </div>
            <h3 className="mt-3 font-display text-3xl text-paper group-hover:text-mint">{project.title}</h3>
            <p className="mt-2 text-sm text-bronze">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-mist">{project.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-paper/80">
              {project.highlights.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-mist"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-mint">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-paper">
                  <Github size={14} /> Repo
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-paper">
                  <ExternalLink size={14} /> Live
                </a>
              )}
              {project.npmUrl && (
                <a href={project.npmUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-paper">
                  <Package size={14} /> npm
                </a>
              )}
              {project.privateRepo && <span className="text-mist">Private repository</span>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
