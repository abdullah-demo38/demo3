import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './primitives';

const phrases = ['Website visibility', 'Local search presence', 'AI discovery', 'Customer conversations'];

function useTypewriter() {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    let timeout: number;
    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
    } else if (!deleting && text.length === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), 28);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % phrases.length);
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, idx]);

  return text;
}

const snippets = [
  { code: 'Visibility Score\n92% ↑', top: '18%', left: '6%', delay: 0.4 },
  { code: 'Local Presence\n89% ↑', top: '62%', left: '4%', delay: 0.7 },
  { code: 'AI Visibility\n84% ↑', top: '28%', right: '5%', delay: 0.5 },
  { code: 'New Leads\n127 ↑', top: '70%', right: '3%', delay: 0.8 },
];

export function Hero() {
  const typed = useTypewriter();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Floating code snippets */}
      {snippets.map((s, i) => (
        <motion.div
          key={i}
          className="absolute hidden rounded-2xl glass px-4 py-3 font-mono text-[11px] leading-relaxed text-white/45 lg:block"
          style={{ top: s.top, left: s.left, right: s.right }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: s.delay, duration: 0.8 }}
        >
          <span className="block whitespace-pre">{s.code}</span>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-white/70"
        >
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" /></span>AI-powered visibility for modern businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-[5.2rem]"
        >
          Make Your Business Easier to Find.{' '}<span className="gradient-text-animated">Easier to Trust. Easier to Choose.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 h-7 font-mono text-sm text-cyan/80"
        >
          <span className="text-white/40">Designed for </span>
          {typed}
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-cyan align-middle" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
        >
          An intelligent growth platform that helps businesses strengthen their online presence, improve local visibility, engage customers and turn more searches into real opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#contact" className="w-full sm:w-auto">
            Get Your Free Visibility Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </MagneticButton>
          <MagneticButton href="#platform" variant="ghost" className="w-full sm:w-auto">
            Explore the Platform
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { v: '92%', l: 'Visibility score' },
            { v: '96%', l: 'Website health' },
            { v: '89%', l: 'Local presence' },
            { v: '127', l: 'New leads' },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl glass px-4 py-5">
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs text-white/45">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-1.5 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
