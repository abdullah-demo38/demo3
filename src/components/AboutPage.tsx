import { Link } from 'react-router-dom';
import { ChevronRight, Target, Eye, Heart, Zap, Users, TrendingUp } from 'lucide-react';
import { Reveal, SectionHeading } from './primitives';
import { PageHero, CTASection } from './ServicePage';

const values = [
  [Eye, 'Visibility', 'We help businesses be seen where their customers are searching, asking, and discovering.'],
  [Heart, 'Trust', 'We believe trust is built through consistency, honesty, and genuine value.'],
  [Zap, 'Practicality', 'We focus on clear, actionable improvements — not vanity metrics.'],
  [Users, 'Partnership', 'We work alongside our clients as an extension of their team.'],
  [TrendingUp, 'Growth', 'Every decision we make is tied to helping your business grow.'],
  [Target, 'Focus', 'We prioritize what matters most for your specific business and stage.'],
];

const stats = [
  { value: '10+', label: 'Service categories' },
  { value: '10', label: 'Industries served' },
  { value: '1', label: 'Connected platform' },
  { value: '100%', label: 'Focus on your growth' },
];

export function AboutPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="About Us"
        title="Make your business easier to find, trust, and choose."
        subtitle="AIO Matrix is an intelligent growth platform that helps businesses strengthen their digital presence across websites, local search, AI discovery, and customer conversations."
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">About Us</span>
          </>
        }
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-white/65">
              <p>
                AIO Matrix was built on a simple idea: the systems that shape your digital presence — website, local search, business profile, reviews, content, and leads — should work together, not in isolation.
              </p>
              <p>
                Most businesses struggle not because they lack tools, but because their tools are disconnected. Information is scattered across platforms, reviews go unanswered, content is created without strategy, and opportunities are missed because no one is looking at the full picture.
              </p>
              <p>
                We built AIO Matrix to bring all of that into one connected workspace. A clear view of where you stand, practical recommendations for what to improve, and the tools to take action — all in one place.
              </p>
              <p>
                Whether you are a hotel looking to fill more rooms, a dental practice wanting more appointments, or a local retailer driving foot traffic, AIO Matrix helps you understand your digital presence and make better-informed improvements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-8 sm:p-12 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}>
                  <div className="font-display text-4xl font-semibold text-white sm:text-5xl">{s.value}</div>
                  <div className="mt-2 text-sm font-medium text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Values"
            title={<>What we <span className="gradient-text">stand for</span></>}
            subtitle="The principles that guide every decision we make."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([Icon, title, description], i) => {
              const ValueIcon = Icon as typeof Target;
              return (
                <Reveal key={title as string} delay={i * 0.06}>
                  <div className="rounded-2xl glass p-6">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 text-cyan">
                      <ValueIcon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{title as string}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{description as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
