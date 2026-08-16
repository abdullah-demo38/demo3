import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Background } from './components/Background';
import { ScrollProgress, BackToTop, Loader } from './components/Chrome';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Dashboard } from './components/Dashboard';
import { TechStack } from './components/TechStack';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AssistantLauncher } from './components/AssistantLauncher';
import { ServicePage, ServicesIndexPage } from './components/ServicePage';
import { IndustryPage, IndustriesIndexPage } from './components/IndustryPage';
import { PricingPage } from './components/PricingPage';
import { AboutPage } from './components/AboutPage';
import { BlogsPage } from './components/BlogsPage';
import { PortfolioPage } from './components/PortfolioPage';

const Assistant = lazy(() => import('./components/Assistant').then((m) => ({ default: m.Assistant })));

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Dashboard />
      <Testimonials />
      <TechStack />
      <WhyChooseUs />
      <Process />
      <Industries />
      <FAQ />
      <Contact />
    </main>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [assistantOpen, setAssistantOpen] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 1400); return () => window.clearTimeout(timer); }, []);
  return (
    <BrowserRouter>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <ScrollProgress />
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/services/:serviceSlug/:subServiceSlug" element={<ServicePage />} />
          <Route path="/industries" element={<IndustriesIndexPage />} />
          <Route path="/industries/:industrySlug" element={<IndustryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<div className="relative z-10 pt-32"><Contact /></div>} />
        </Routes>
        <Footer />
      </div>
      {assistantOpen ? <Suspense fallback={null}><Assistant onClose={() => setAssistantOpen(false)} /></Suspense> : <AssistantLauncher onOpen={() => setAssistantOpen(true)} />}
      <BackToTop />
    </BrowserRouter>
  );
}
export default App;
