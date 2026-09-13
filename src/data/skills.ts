import { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['Java 21', 'Python', 'JavaScript / TypeScript', 'C++', 'SQL', 'Bash'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    items: ['Spring Boot', 'FastAPI', 'Node.js / Express', 'REST', 'JWT', 'WebSockets'],
  },
  {
    id: 'data',
    title: 'Data',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Prisma', 'ChromaDB', 'ETL'],
  },
  {
    id: 'applied-ai',
    title: 'Applied AI',
    items: ['Multi-agent workflows', 'RAG (ChromaDB)', 'Prompting', 'YOLOv8', 'Gemini', 'Groq'],
  },
  {
    id: 'systems',
    title: 'Systems',
    items: ['Linux', 'systemd', 'VPS admin', 'Docker', 'Git', 'GCP (IAM, hosting)'],
  },
  {
    id: 'craft',
    title: 'Craft',
    items: ['SOLID', 'Design patterns', 'HLD / LLD', 'OOP', 'Automated tests'],
  },
];

export const skillNotes = [
  'Frontend (React, Vite) is learned and used; it is not the track I want to specialise in.',
  'Vector store experience is ChromaDB.',
  'Kubernetes is surface-level. Go and Rust are not claimed.',
  'LLM internals are theoretically strong; production ML engineering is still my own experiments.',
];
