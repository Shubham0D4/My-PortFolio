import { ResearchItem } from '../types';

export const research: ResearchItem[] = [
  {
    id: 'alsf',
    title: 'ALSF — Adaptive Localized Spectral Fields',
    status: 'built',
    description:
      'A model that represents data as interacting oscillatory fields instead of linear boundaries. Trainable frequencies, multi-resolution spectral layers, spawn/prune of units, and basin-memory optimisation.',
    notes: 'Independent architecture work. PyTorch is in the stack; I am still building fluency, so it stays off the skill list.',
    repoUrl: 'https://github.com/Shubham0D4/ALSF',
  },
  {
    id: 'sparse-backprop',
    title: 'Sparse vs standard backpropagation',
    status: 'ongoing',
    description:
      'Comparing sparse routing against standard backprop on Fashion-MNIST and CIFAR (Kaggle). Hit routing collapse and validation anomalies — documented, not papered over.',
  },
  {
    id: 'transformers',
    title: 'GPT-style transformer experiments',
    status: 'experiment',
    description:
      'Small next-token models: a pi-digit predictor, and an E. coli genome next-nucleotide predictor that beat Markov baselines. Built to understand the stack, not to ship a demo.',
  },
  {
    id: 'attention',
    title: 'Relevance-plus-relation attention',
    status: 'ongoing',
    description:
      'First-principles attention that splits relevance from relation, with connections to RESCAL, R-GCN, and RoPE. Still in the derivation stage.',
  },
  {
    id: 'graph-memory',
    title: 'Graph memory for agents',
    status: 'built',
    description:
      'Graph-structured agent memory using Kùzu and LanceDB as an alternative to flat RAG chunk stores.',
  },
  {
    id: 'code-graph',
    title: 'Codebase dependency visualizer',
    status: 'built',
    description:
      'Tool that turns a repository into an interactive dependency graph — useful for reading unfamiliar systems.',
  },
];
