import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
          ticking = false;
        });
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-electric via-purple to-cyan transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[70] grid h-12 w-12 place-items-center rounded-2xl glass-strong text-white shadow-glow"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onDone, 1500);
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-[spin_1.2s_linear_infinite] rounded-2xl border-2 border-electric border-r-transparent border-b-transparent" />
          <div className="absolute inset-0 animate-[spin_1.6s_linear_infinite_reverse] rounded-2xl border-2 border-purple border-l-transparent border-t-transparent" />
        </div>
        <p className="font-display text-sm tracking-[0.4em] text-white/60">AIO MATRIX</p>
      </div>
    </motion.div>
  );
}
