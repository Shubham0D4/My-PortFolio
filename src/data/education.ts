import { Certification, Education } from '../types';

export const educations: Education[] = [
  {
    id: 'be',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science',
    institution: 'Dr. D. Y. Patil Institute of Technology',
    location: 'Pune, Maharashtra',
    date: 'Aug 2022 — May 2026',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate',
    field: 'Science',
    institution: 'Maharashtra Junior College',
    location: 'Ahmednagar, Maharashtra',
    date: '2020 — 2022',
    score: '83.50%',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate',
    institution: 'Bhausaheb Firodiya High School',
    location: 'Ahmednagar, Maharashtra',
    date: '2019 — 2020',
    score: '94.80%',
  },
];

export const certifications: Certification[] = [
  {
    id: 'nptel-dbms',
    title: 'Database Management Systems',
    organization: 'NPTEL / IIT',
    date: '2024',
    credentialId: 'NPTEL24CS75S24480285502656381',
  },
  {
    id: 'udemy-ml',
    title: 'Machine Learning, Feature Engineering, Advanced SQL, Python, ETL & Data Warehousing',
    organization: 'Udemy Professional Certificates',
    date: '2024 — 2025',
  },
];
