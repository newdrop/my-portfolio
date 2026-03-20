import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundLiquid } from './components/BackgroundLiquid';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-transparent text-text-soft font-sans selection:bg-accent-warm/30 selection:text-accent-warm">
        <BackgroundLiquid />
        <Navbar />
        <main>
          <Hero />
          <Reviews />
          <Projects />
          <Pricing />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

