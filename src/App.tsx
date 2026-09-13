import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Resume = lazy(() => import('./components/Resume'));

function App() {
  return (
    <div className="grain min-h-screen bg-ink text-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Suspense fallback={<div className="min-h-[40vh] border-t border-slate-line" />}>
          <Resume />
        </Suspense>
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
