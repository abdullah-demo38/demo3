import { motion } from 'framer-motion';
import { type LucideIcon, type ReactNode } from 'react';

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  breadcrumb?: ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-electric/15 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan/15 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-1.5 text-xs"
          >
            {breadcrumb}
          </motion.nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/70"
        >
          {Icon && <Icon size={14} className="text-cyan" />}
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
