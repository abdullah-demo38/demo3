import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { label: 'Features', href: '#platform' },
  { label: 'Solutions', href: '#services' },
  { label: 'How it works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 60);
    }
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto max-w-7xl rounded-2xl border bg-white px-4 transition-[box-shadow,border-color] duration-300 sm:px-6 ${
          scrolled
            ? 'border-slate-200 shadow-[0_12px_32px_rgba(15,23,42,0.10)]'
            : 'border-slate-200/90 shadow-[0_4px_18px_rgba(15,23,42,0.06)]'
        }`}
      >
        <div className="flex h-[72px] items-center justify-between gap-6">
          <a href="#home" onClick={closeMenu} className="flex h-full shrink-0 items-center" aria-label="AIO Matrix home">
            <img
              src="/logo-cropped.png"
              alt="AIO Matrix"
              width="568"
              height="443"
              fetchPriority="high"
              decoding="sync"
              className="block h-[58px] w-[74px] object-contain object-center sm:h-[62px] sm:w-[82px]"
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden shrink-0 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-[13px] font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 hover:bg-slate-800 hover:shadow-[0_6px_16px_rgba(15,23,42,0.18)] active:translate-y-px lg:inline-flex"
          >
            Get Started
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-800 transition-colors hover:bg-slate-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-slate-100 py-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="mt-2 flex items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
