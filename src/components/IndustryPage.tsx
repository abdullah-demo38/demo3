import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ChevronRight, AlertCircle, Sparkles, BarChart3 } from 'lucide-react';
import { findIndustry, industries } from '../data/industries';
import { Reveal, SectionHeading } from './primitives';
import { PageHero, FAQSection, CTASection } from './ServicePage';

export function IndustryPage() {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = findIndustry(industrySlug!);

  if (!industry) return <Navigate to="/404" />;

  const process = [
    ['Understand', `We learn about your ${industry.name.toLowerCase()} business, goals, and current digital presence.`],
    ['Analyze', 'We identify the visibility, content, and conversion opportunities specific to your industry.'],
    ['Strengthen', 'We implement targeted improvements across search, content, reviews, and your website.'],
    ['Grow', 'We monitor progress, capture leads, and keep optimizing for better results.'],
  ];

  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Industries"
        title={industry.name}
        subtitle={industry.tagline}
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <Link to="/industries" className="text-blue-200/50 hover:text-white">Industries</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">{industry.name}</span>
          </>
        }
        icon={industry.icon}
      />

      {/* Description */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-lg leading-relaxed text-white/65">{industry.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center={false}
            eyebrow="Challenges"
            title={<>Common <span className="gradient-text">challenges</span></>}
            subtitle="The obstacles that make it harder for your business to be found and chosen."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {industry.challenges.map((challenge, i) => (
              <Reveal key={challenge} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl glass p-5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-400/10 text-amber-300">
                    <AlertCircle size={18} />
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-white/65">{challenge}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center={false}
            eyebrow="Solutions"
            title={<>Our <span className="gradient-text">solutions</span></>}
            subtitle="How AIO Matrix helps your business overcome these challenges."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {industry.solutions.map((solution, i) => (
              <Reveal key={solution} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl glass p-5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan/10 text-cyan">
                    <Sparkles size={18} />
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-white/65">{solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center={false}
            eyebrow="Services"
            title={<>Relevant <span className="gradient-text">services</span></>}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {industry.services.map((service) => (
              <span key={service} className="rounded-full glass px-5 py-2.5 text-sm font-medium text-white/70">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center={false}
            eyebrow="Benefits"
            title={<>What you <span className="gradient-text">gain</span></>}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {industry.benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl glass p-5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-green-400/10 text-green-300">
                    <Check size={18} />
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-white/65">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Process" title={<>How we <span className="gradient-text">work</span></>} />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {process.map(([title, desc], i) => (
              <Reveal key={title as string} delay={i * 0.08}>
                <div className="rounded-2xl glass p-6">
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{title as string}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{desc as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={industry.faqs} />
      <CTASection />
    </div>
  );
}

export function IndustriesIndexPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        subtitle="Flexible visibility tools for the businesses customers discover locally and online."
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">Industries</span>
          </>
        }
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.04}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group flex flex-col items-center gap-4 rounded-2xl glass p-6 text-center transition-shadow hover:shadow-glow"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan/10 text-cyan ring-1 ring-white/10 transition-transform group-hover:scale-110">
                    <industry.icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-white/80">{industry.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
