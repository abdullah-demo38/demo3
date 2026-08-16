import { Counter, Reveal, SectionHeading } from './primitives';
const stats = [
  { to: 92, suffix: '%', label: 'Visibility score', sub: 'Demonstration value' },
  { to: 96, suffix: '%', label: 'Website health', sub: 'Demonstration value' },
  { to: 89, suffix: '%', label: 'Local presence', sub: 'Demonstration value' },
  { to: 127, suffix: '', label: 'New leads', sub: 'Demonstration value' },
];
export function Stats() { return <section className="relative z-10 py-20"><div className="mx-auto max-w-7xl px-6"><Reveal><div className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-8 sm:p-12 lg:grid-cols-4">{stats.map((s, i) => <div key={s.label} className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}><div className="font-display text-4xl font-semibold text-white sm:text-5xl"><Counter to={s.to} suffix={s.suffix} /></div><div className="mt-2 text-sm font-medium text-white/70">{s.label}</div><div className="mt-1 text-xs text-white/35">{s.sub}</div></div>)}</div></Reveal></div></section>; }
