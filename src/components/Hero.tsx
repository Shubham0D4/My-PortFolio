import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { site } from '../data/site';

const HeroScene = lazy(() => import('./three/HeroScene'));

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/55 to-ink" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-kicker"
            >
              Pune · Graduating {site.graduating}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-4 font-display text-5xl leading-[0.95] text-paper sm:text-7xl lg:text-[5.4rem]"
            >
              {site.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-4 font-mono text-sm uppercase tracking-[0.22em] text-bronze"
            >
              {site.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-mist"
            >
              {site.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <button
                onClick={() => go('projects')}
                className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-paper"
              >
                Selected work
                <ArrowDownRight size={16} />
              </button>
              <button
                onClick={() => go('resume')}
                className="rounded-full border border-slate-line px-5 py-2.5 text-sm text-paper transition hover:border-mint hover:text-mint"
              >
                Read the resume
              </button>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-transparent px-5 py-2.5 text-sm text-mist transition hover:text-paper"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-mint/10 blur-3xl" />
            <div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
                const y = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
                setTilt({ x, y });
              }}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-soot shadow-glow"
            >
              <img
                src={site.portrait}
                alt={`${site.name}, professional portrait`}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/50 to-transparent p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mint">Available</p>
                <p className="mt-1 text-sm text-paper">Software / AI / backend roles</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
