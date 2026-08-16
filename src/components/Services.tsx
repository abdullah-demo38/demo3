import { motion } from 'framer-motion';
import { Bot, FileText, Globe2, MapPin, MessageSquare, Search, Star } from 'lucide-react';
import { Reveal, SectionHeading, TiltCard } from './primitives';
const services = [
  [Search, 'AI Search Visibility', 'Be visible where your customers ask. Understand queries, visibility gaps, mentions, competitors, and opportunities.'],
  [Globe2, 'Website Optimization', 'Turn your website into a stronger growth asset with better health, metadata, structure, performance, and conversion readiness.'],
  [MapPin, 'Local SEO', 'Strengthen the location-focused signals that help customers discover your business in the places they search.'],
  [Star, 'Business Profile', 'Keep information, services, reviews, posts, hours, location, and performance signals useful and active.'],
  [FileText, 'AI Content', 'Create service pages, FAQs, local landing pages, blog ideas, social posts, and review responses faster.'],
  [MessageSquare, 'Reputation & Reviews', 'Build trust before customers call with consistent feedback monitoring and professional response workflows.'],
];
export function Services() { return <section id="services" className="relative z-10 py-28 sm:py-36"><div className="mx-auto max-w-7xl px-6"><SectionHeading eyebrow="The platform" title={<>Everything customers need to <span className="gradient-text">find and trust you.</span></>} subtitle="One connected growth platform for the systems that shape your digital presence." /><div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(([Icon, title, description], index) => { const ServiceIcon = Icon as typeof Search; return <Reveal key={title as string} delay={index * .05}><TiltCard className="group h-full rounded-2xl glass p-6 transition-shadow hover:shadow-glow"><motion.div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 text-cyan" whileHover={{ scale: 1.08, rotate: 4 }}><ServiceIcon size={22} /></motion.div><h3 className="font-display text-lg font-semibold text-white">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-white/50">{description as string}</p><a href="#contact" className="mt-5 inline-flex text-xs font-semibold uppercase tracking-widest text-cyan opacity-0 transition group-hover:opacity-100">Explore feature →</a></TiltCard></Reveal>; })}</div></div></section>; }
