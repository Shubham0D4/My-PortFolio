export type ProjectKind =
  | 'systems'
  | 'agents'
  | 'backend'
  | 'research'
  | 'product'
  | 'open-source';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  kind: ProjectKind;
  technologies: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  npmUrl?: string;
  privateRepo?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  status: 'ongoing' | 'experiment' | 'built';
  description: string;
  notes?: string;
  repoUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  date: string;
  score?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface ResumeVariant {
  id: string;
  label: string;
  focus: string;
  file: string;
  downloadName: string;
}
