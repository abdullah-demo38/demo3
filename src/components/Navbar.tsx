import { useEffect, useState, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { industries } from '../data/industries';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', hasMega: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Industries', hasIndustries: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
];

const navBlue = 'rgba(8, 22, 48, 0.82)';
const navBlueSolid = 'rgba(6, 16, 38, 0.96)';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [activeSubService, setActiveSubService] = useState<number | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileSubService, setMobileSubService] = useState<number | null>(null);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) setIndustriesOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const closeAll = () => {
    setServicesOpen(false);
    setIndustriesOpen(false);
    setActiveSubService(null);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl overflow-visible rounded-2xl border transition-all duration-300"
        style={{
          background: scrolled ? navBlueSolid : navBlue,
          borderColor: scrolled ? 'rgba(59, 130, 246, 0.35)' : 'rgba(59, 130, 246, 0.2)',
          boxShadow: scrolled ? '0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.1)' : '0 4px 20px rgba(0,0,0,0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex h-[72px] items-center justify-between gap-6 pl-5 pr-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex h-full shrink-0 items-center" aria-label="AIO Matrix home">
            <img
              src="/logo-cropped.png"
              alt="AIO Matrix"
              width="568"
              height="443"
              fetchPriority="high"
              decoding="sync"
              className="block h-[56px] w-[72px] object-contain object-center sm:h-[60px] sm:w-[78px]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              if (link.hasMega) {
                return (
                  <div key={link.label} ref={servicesRef} className="relative">
                    <button
                      onClick={() => { setServicesOpen((v) => !v); setIndustriesOpen(false); }}
                      onMouseEnter={() => setServicesOpen(true)}
                      className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium text-blue-100 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <ServicesMegaMenu
                          activeSubService={activeSubService}
                          setActiveSubService={setActiveSubService}
                          onClose={closeAll}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              if (link.hasIndustries) {
                return (
                  <div key={link.label} ref={industriesRef} className="relative">
                    <button
                      onClick={() => { setIndustriesOpen((v) => !v); setServicesOpen(false); }}
                      onMouseEnter={() => setIndustriesOpen(true)}
                      className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium text-blue-100 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      aria-expanded={industriesOpen}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {industriesOpen && <IndustriesMegaMenu onClose={closeAll} />}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.href!}
                  className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-blue-100 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* BOOK NOW CTA */}
          <Link
            to="/contact"
            className="hidden shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-cyan px-5 py-3 text-[13px] font-bold text-white shadow-lg transition-all duration-200 hover:shadow-glow hover:brightness-110 active:translate-y-px lg:inline-flex"
          >
            Book Now
            <ArrowRight size={14} />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/30 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-blue-400/20 py-3 pl-5 pr-4">
                {/* Home */}
                <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>

                {/* Services expandable */}
                <div>
                  <button
                    onClick={() => { setMobileServicesOpen((v) => !v); setMobileIndustriesOpen(false); }}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-blue-100 hover:bg-white/10"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 border-l border-blue-400/20 pl-3">
                          {services.map((service, idx) => (
                            <div key={service.slug}>
                              <button
                                onClick={() => setMobileSubService(mobileSubService === idx ? null : idx)}
                                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium text-blue-100/80 hover:bg-white/5"
                              >
                                <span className="flex items-center gap-2">
                                  <service.icon size={15} className="text-cyan" />
                                  {service.name}
                                </span>
                                <ChevronDown size={13} className={`transition-transform ${mobileSubService === idx ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence initial={false}>
                                {mobileSubService === idx && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <Link
                                      to={`/services/${service.slug}`}
                                      onClick={() => setOpen(false)}
                                      className="block rounded-lg px-5 py-2 text-xs text-blue-100/60 hover:bg-white/5 hover:text-white"
                                    >
                                      Overview →
                                    </Link>
                                    {service.subServices.map((sub) => (
                                      <Link
                                        key={sub.slug}
                                        to={`/services/${service.slug}/${sub.slug}`}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-lg px-5 py-2 text-xs text-blue-100/60 hover:bg-white/5 hover:text-white"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Pricing */}
                <MobileLink to="/pricing" onClick={() => setOpen(false)}>Pricing</MobileLink>

                {/* Industries expandable */}
                <div>
                  <button
                    onClick={() => { setMobileIndustriesOpen((v) => !v); setMobileServicesOpen(false); }}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-blue-100 hover:bg-white/10"
                  >
                    Industries
                    <ChevronDown size={16} className={`transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 border-l border-blue-400/20 pl-3">
                          {industries.map((industry) => (
                            <Link
                              key={industry.slug}
                              to={`/industries/${industry.slug}`}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-[13px] text-blue-100/70 hover:bg-white/5 hover:text-white"
                            >
                              {industry.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remaining links */}
                <MobileLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</MobileLink>
                <MobileLink to="/about" onClick={() => setOpen(false)}>About Us</MobileLink>
                <MobileLink to="/blogs" onClick={() => setOpen(false)}>Blogs</MobileLink>

                {/* BOOK NOW */}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-cyan px-4 py-3 text-sm font-bold text-white"
                >
                  Book Now
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

function MobileLink({ to, onClick, children }: { to: string; onClick: () => void; children: ReactNode }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block rounded-xl px-3 py-3 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  );
}

function ServicesMegaMenu({
  activeSubService,
  setActiveSubService,
  onClose,
}: {
  activeSubService: number | null;
  setActiveSubService: (v: number | null) => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      onMouseLeave={onClose}
      className="absolute left-1/2 top-full mt-2 w-[min(900px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-2xl border border-blue-400/20 shadow-2xl"
      style={{ background: 'rgba(6, 16, 38, 0.98)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      <div className="grid grid-cols-2">
        {/* Left: service categories */}
        <div className="max-h-[480px] overflow-y-auto border-r border-blue-400/15 p-3">
          {services.map((service, idx) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              onClick={onClose}
              onMouseEnter={() => setActiveSubService(idx)}
              className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${
                activeSubService === idx ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan/10 text-cyan">
                <service.icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{service.name}</span>
                  <ArrowRight size={13} className="text-blue-300/50" />
                </div>
                <p className="mt-0.5 truncate text-xs text-blue-200/50">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right: sub-services of hovered category */}
        <div className="max-h-[480px] overflow-y-auto p-3">
          {activeSubService !== null ? (
            <>
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-cyan">
                {services[activeSubService].name}
              </div>
              {services[activeSubService].subServices.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/services/${services[activeSubService].slug}/${sub.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-blue-100/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {sub.name}
                  <ArrowRight size={12} className="opacity-0 transition-opacity group-hover:opacity-60" />
                </Link>
              ))}
            </>
          ) : (
            <div className="flex h-full min-h-[200px] items-center justify-center px-6 text-center">
              <p className="text-sm text-blue-200/40">Hover a service to see its sub-services</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function IndustriesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      onMouseLeave={onClose}
      className="absolute left-1/2 top-full mt-2 w-[min(560px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-2xl border border-blue-400/20 shadow-2xl"
      style={{ background: 'rgba(6, 16, 38, 0.98)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      <div className="grid grid-cols-2 gap-1 p-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            to={`/industries/${industry.slug}`}
            onClick={onClose}
            className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan/10 text-cyan">
              <industry.icon size={18} />
            </div>
            <div>
              <div className="text-sm font-medium text-white group-hover:text-cyan">{industry.name}</div>
              <div className="truncate text-xs text-blue-200/40">{industry.tagline}</div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
