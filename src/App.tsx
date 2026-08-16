import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background } from './components/Background';
import { ScrollProgress, BackToTop, Loader } from './components/Chrome';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Dashboard } from './components/Dashboard';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AssistantLauncher } from './components/AssistantLauncher';

const Assistant = lazy(() => import('./components/Assistant').then((m) => ({ default: m.Assistant })));

function App() {
  const [loading, setLoading] = useState(true);
  const [assistantOpen, setAssistantOpen] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 1400); return () => window.clearTimeout(timer); }, []);
  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <ScrollProgress />
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Dashboard />
          <Services />
          <WhyChooseUs />
          <Process />
          <Industries />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      {assistantOpen ? <Suspense fallback={null}><Assistant onClose={() => setAssistantOpen(false)} /></Suspense> : <AssistantLauncher onOpen={() => setAssistantOpen(true)} />}
      <BackToTop />
    </>
  );
}
export default App;
