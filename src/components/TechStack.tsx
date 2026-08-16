import { SectionHeading } from './primitives';

const tech = [
  'React', 'Next.js', 'Vite', 'TypeScript', 'Node.js', 'Express', 'NestJS',
  'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase',
  'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub', 'Cloudflare', 'Vercel', 'Netlify',
];

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max animate-marquee gap-4" style={reverse ? { animationDirection: 'reverse' } : undefined}>
      {[...tech, ...tech].map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="flex items-center gap-2 whitespace-nowrap rounded-2xl glass px-5 py-3 text-sm font-medium text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-electric to-cyan" />
          {t}
        </span>
      ))}
    </div>
  );
}

export function TechStack() {
  return (
    <section className="relative z-10 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Tech stack"
          title={<>Tools we <span className="gradient-text">master</span></>}
          subtitle="A modern, battle-tested toolkit — chosen for longevity, performance, and developer happiness."
        />
      </div>

      <div className="mt-14 space-y-4">
        <div className="mask-fade-x overflow-hidden">
          <Row />
        </div>
        <div className="mask-fade-x overflow-hidden">
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
