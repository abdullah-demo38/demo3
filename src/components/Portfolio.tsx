import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, SectionHeading } from './primitives';

const categories = ['All', 'Web App', 'Mobile', 'SaaS', 'Enterprise'];

const projects = [
  { title: 'Nimbus Analytics', cat: 'Web App', type: 'laptop', tag: 'AI dashboard', gradient: 'from-electric via-purple to-cyan' },
  { title: 'Pulse Health', cat: 'Mobile', type: 'phone', tag: 'Healthcare', gradient: 'from-cyan to-electric' },
  { title: 'Ledger Pay', cat: 'SaaS', type: 'laptop', tag: 'FinTech', gradient: 'from-purple to-electric' },
  { title: 'Orbit CRM', cat: 'Enterprise', type: 'laptop', tag: 'Enterprise', gradient: 'from-electric to-purple' },
  { title: 'Stay Suite', cat: 'Mobile', type: 'phone', tag: 'Hotels', gradient: 'from-cyan to-purple' },
  { title: 'CartFlow', cat: 'Web App', type: 'laptop', tag: 'E-commerce', gradient: 'from-purple to-cyan' },
];

function LaptopMockup({ gradient, title }: { gradient: string; title: string }) {
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

function PhoneMockup({ gradient, title }: { gradient: string; title: string }) {
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

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Work we're <span className="gradient-text">proud of</span></>}
          subtitle="A selection of products we've designed, built, and scaled for clients."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
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
                className="group rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-glow"
              >
                <div className="mb-5">
                  {p.type === 'laptop' ? (
                    <LaptopMockup gradient={p.gradient} title={p.title} />
                  ) : (
                    <PhoneMockup gradient={p.gradient} title={p.title} />
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
  );
}
