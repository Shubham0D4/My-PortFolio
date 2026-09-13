import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'kai',
    title: 'Kai',
    tagline: 'Four-agent investment analysis with a structured debate loop.',
    description:
      'A multi-agent orchestration system where specialist agents argue fundamentals, sentiment, and valuation before a judge writes an Alpha Packet. Built as a full-stack FastAPI + React product over live market data.',
    date: '2025',
    kind: 'agents',
    technologies: ['Python', 'FastAPI', 'React', 'Groq', 'Gemini', 'PostgreSQL'],
    highlights: [
      'Coordinator, Fundamental, Sentiment, and Valuation agents across two LLM providers',
      'Live data from Yahoo Finance and SEC EDGAR',
      'Five-plus Recharts dashboards for the resulting Alpha Packet',
    ],
    repoUrl: 'https://github.com/Shubham0D4/Kai-The-Smart-Investor',
  },
  {
    id: 'govrfp',
    title: 'GovRFP360AI',
    tagline: 'Multi-agent RFP automation with ChromaDB retrieval.',
    description:
      'A real multi-agent system for government RFP drafting, compliance checks, and semantic search over proposal documents. Vector store is ChromaDB — not a slide-deck RAG demo.',
    date: '2025',
    kind: 'agents',
    technologies: ['TypeScript', 'Python', 'ChromaDB', 'LLMs'],
    highlights: [
      'Document generation and regulatory compliance checks',
      'Semantic retrieval over proposal collections',
      'Shipped as a live web platform',
    ],
    repoUrl: 'https://github.com/zuberkhan01st/GovRFP360AI',
    liveUrl: 'https://gov-rfp-360-ai.vercel.app',
  },
  {
    id: 'vbsc',
    title: 'VBSC',
    tagline: 'Zero-trust, vault-based secure communication server.',
    description:
      'Final-year project: a communication server designed around vault-backed secrets and zero-trust assumptions rather than a trusted internal network.',
    date: '2025 — 2026',
    kind: 'systems',
    technologies: ['Systems', 'Security', 'Server design'],
    highlights: [
      'Vault-based secret handling',
      'Zero-trust communication model',
      'Capstone systems work, not a CRUD wrapper',
    ],
    repoUrl: 'https://github.com/Shubham0D4/VBSC',
  },
  {
    id: 'shelf',
    title: 'Shelf',
    tagline: 'Personal digital library with a Spring Boot API and object storage.',
    description:
      'Kindle-style library for uploading, storing, and reading PDF/EPUB books. Relational metadata in MySQL, document metadata in MongoDB, files in MinIO, auth via Spring Security JWT.',
    date: 'Aug 2025',
    kind: 'backend',
    technologies: ['Java 21', 'Spring Boot', 'React', 'MySQL', 'MongoDB', 'MinIO', 'Docker'],
    highlights: [
      'Spring Boot 3 REST API with Spring Data JPA + MongoDB',
      'JWT auth and Dockerized backend services',
      'S3-compatible object storage for books',
    ],
    repoUrl: 'https://github.com/Shubham0D4/Shelf',
  },
  {
    id: 'htrl',
    title: 'HTRL',
    tagline: 'YOLOv8 traffic monitoring with audited emergency dispatch.',
    description:
      'Real-time accident monitoring across 10+ simulated CCTV feeds. Confidence-threshold classification keeps false positives under 5%, then a React dashboard dispatches to emergency services with a SQL event store.',
    date: '2025',
    kind: 'research',
    technologies: ['Python', 'YOLOv8', 'SQL', 'React'],
    highlights: [
      'YOLOv8 across multiple simulated camera feeds',
      'Automated dispatch to three emergency services',
      'Full audit trail in SQL',
    ],
  },
  {
    id: 'tvita',
    title: 'TvitaTerminal',
    tagline: 'Live agency and client operations platform.',
    description:
      'Production operations software for an agency and its clients. The repo is private; the product is deployed and in use.',
    date: '2025',
    kind: 'product',
    technologies: ['Full-stack', 'Operations'],
    highlights: [
      'Live at tvita-terminal.vercel.app',
      'Client and agency operations in one surface',
    ],
    liveUrl: 'https://tvita-terminal.vercel.app',
    privateRepo: true,
  },
  {
    id: 'workarail',
    title: 'workarail',
    tagline: 'Workforce operations — data model, leave, and payroll.',
    description:
      'Collaborator on a Next.js / Prisma / PostgreSQL workforce platform. The work that holds up under a screen: a 15-model data design, leave and payroll logic, and the surrounding architecture.',
    date: '2025',
    kind: 'backend',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    highlights: [
      '15-model relational design',
      'Leave and payroll logic',
      'Architecture and data modelling, not auth folklore',
    ],
    repoUrl: 'https://github.com/Shubham0D4/workarail',
  },
  {
    id: 'aauth',
    title: 'aAuth',
    tagline: 'Published JWT auth library for Node/Express.',
    description:
      'Plug-and-play authentication: signup, login, OTP, password reset, access/refresh rotation, device tracking, and BCrypt hashing for a reusable multitenant service.',
    date: 'Jun — Jul 2025',
    kind: 'open-source',
    technologies: ['Node.js', 'Express', 'Prisma', 'MySQL', 'JWT'],
    highlights: [
      'Access/refresh token rotation',
      'Documented test suite before publish',
    ],
    repoUrl: 'https://github.com/Shubham0D4/aAuth',
  },
  {
    id: 'alpha-sql',
    title: 'alpha-sql',
    tagline: 'Fluent MySQL query builder on npm.',
    description:
      'A mysql2 wrapper with 15+ utilities for CRUD, joins, subqueries, grouping, and window functions — so backend code does not have to hand-write every query.',
    date: 'Mar 2025',
    kind: 'open-source',
    technologies: ['JavaScript', 'Node.js', 'MySQL'],
    highlights: [
      'Fluent API over mysql2',
      'Tests for valid and invalid inputs',
    ],
    repoUrl: 'https://github.com/Shubham0D4/apha-sql',
    liveUrl: 'https://alpha-sql.vercel.app/',
    npmUrl: 'https://www.npmjs.com/package/alpha-sql',
  },
  {
    id: 'loan-docs',
    title: 'Loan Document Processor',
    tagline: 'RAG + OCR for lending documents.',
    description:
      'Gemini-backed RAG pipeline that extracts fields from 5+ document types, estimates CIBIL, and answers questions over ingested files through a conversational interface.',
    date: '2025',
    kind: 'agents',
    technologies: ['Python', 'Gemini', 'RAG', 'OCR', 'SQL'],
    highlights: [
      'Prompt-engineered extraction templates',
      'Chat over ingested documents',
    ],
    repoUrl: 'https://github.com/Shubham0D4/Loan-Document-Processor',
  },
  {
    id: 'zion',
    title: 'Zion 2K25',
    tagline: 'College techfest site — frontend, on purpose.',
    description:
      'Tech lead for the official Zion 2K25 site. Frontend-only by design: GSAP motion, maps, and a public face for the fest. Kept here because it shipped, not because it is the career thesis.',
    date: 'Feb — Mar 2025',
    kind: 'product',
    technologies: ['React', 'GSAP'],
    highlights: [
      'Tech lead for a live college fest site',
      'Motion-heavy frontend, Google Maps',
    ],
    repoUrl: 'https://github.com/Shubham0D4/ZION-2K25',
  },
];
