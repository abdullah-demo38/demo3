import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Reveal, SectionHeading } from './primitives';
import { PageHero, CTASection } from './ServicePage';

const categories = ['All', 'Web App', 'Mobile', 'SaaS', 'Enterprise'];

const projects = [
  { title: 'Nimbus Analytics', cat: 'Web App', tag: 'AI dashboard', gradient: 'from-electric via-purple to-cyan' },
  { title: 'Pulse Health', cat: 'Mobile', tag: 'Healthcare', gradient: 'from-cyan to-electric' },
  { title: 'Ledger Pay', cat: 'SaaS', tag: 'FinTech', gradient: 'from-purple to-electric' },
  { title: 'Orbit CRM', cat: 'Enterprise', tag: 'Enterprise', gradient: 'from-electric to-purple' },
  { title: 'StaySuite', cat: 'Mobile', tag: 'Hotels', gradient: 'from-cyan to-purple' },
  { title: 'CartFlow', cat: 'Web App', tag: 'E-commerce', gradient: 'from-purple to-cyan' },
];

function LaptopMockup({ gradient }: { gradient: string }) {
  return (
    <div className="relative">
      <div className="mx-auto w-full overflow-hidden rounded-xl bg-ink-2 p-2 ring-1 ring-white/10">
        <div className="flex gap-1.5 px-1 pb-1.5 pt-0.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
        </div>
        <div className={`relative aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br ${gradient}`}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
            <div className="h-2 w-24 rounded-full bg-white/30" />
            <div className="h-2 w-40 rounded-full bg-white/20" />
            <div className="mt-2 flex gap-2">
              <div className="h-8 w-16 rounded-lg bg-white/15" />
              <div className="h-8 w-16 rounded-lg bg-white/10" />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((n) => (
                <div key={n} className="h-10 w-14 rounded-lg bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-2 w-[112%] -translate-x-[5%] rounded-b-xl bg-white/10" />
    </div>
  );
}

function PhoneMockup({ gradient }: { gradient: string }) {
  return (
    <div className="relative mx-auto w-40">
      <div className="overflow-hidden rounded-[2rem] bg-ink-2 p-2 ring-1 ring-white/15">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-white/20" />
        <div className={`relative mt-1 aspect-[9/18] overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
            <div className="h-12 w-12 rounded-2xl bg-white/20" />
            <div className="h-2 w-20 rounded-full bg-white/30" />
            <div className="h-2 w-16 rounded-full bg-white/20" />
            <div className="mt-3 w-full space-y-1.5">
              {[0, 1, 2].map((n) => (
                <div key={n} className="h-6 rounded-lg bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Portfolio"
        title="Work we are proud of"
        subtitle="A selection of products and experiences we have designed, built, and scaled."
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">Portfolio</span>
          </>
        }
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    filter === c
                      ? 'bg-gradient-to-r from-electric to-purple text-white shadow-glow'
                      : 'glass text-white/60 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl glass p-6 transition-shadow hover:shadow-glow"
                >
                  <div className="mb-5">
                    {p.type === 'laptop' || p.cat !== 'Mobile' ? (
                      <LaptopMockup gradient={p.gradient} />
                    ) : (
                      <PhoneMockup gradient={p.gradient} />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                      <p className="text-xs text-white/45">{p.tag}</p>
                    </div>
                    <span className="rounded-full glass px-3 py-1 text-[11px] text-white/55">{p.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
