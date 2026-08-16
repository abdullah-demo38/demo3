import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import { findService, findSubService, services } from '../data/services';
import { Reveal, SectionHeading } from './primitives';
import { PageHero } from './PageHero';

export function ServicePage() {
  const { serviceSlug, subServiceSlug } = useParams<{ serviceSlug: string; subServiceSlug?: string }>();

  if (subServiceSlug) {
    const result = findSubService(serviceSlug!, subServiceSlug);
    if (!result) return <Navigate to="/404" />;
    const { category, subService } = result;
    return <SubServicePage categoryName={category.name} categorySlug={category.slug} subService={subService} />;
  }

  const service = findService(serviceSlug!);
  if (!service) return <Navigate to="/404" />;

  const benefits = [
    `Clear, measurable improvements to your ${service.name.toLowerCase()} efforts`,
    'Data-driven recommendations tailored to your business',
    'Ongoing optimization based on real performance data',
    'A connected approach that works alongside your other channels',
  ];

  const capabilities = service.subServices.map((s) => s.name);

  const process = [
    ['Discover', 'We assess your current state and identify the most impactful opportunities.'],
    ['Strategize', 'We build a clear plan aligned with your business goals and audience.'],
    ['Execute', 'We implement the plan with attention to quality and detail.'],
    ['Optimize', 'We monitor results and continuously improve performance.'],
  ];

  const faqs: [string, string][] = [
    [`What does ${service.name} include?`, `${service.name} at AIO Matrix covers ${service.subServices.slice(0, 4).map((s) => s.name).join(', ')}, and more. Every engagement is tailored to your business needs.`],
    ['How long until I see results?', 'Most clients begin seeing meaningful improvements within the first few months. Timelines vary based on your starting point and goals.'],
    ['Do you work with businesses of all sizes?', 'Yes. We tailor our approach to your stage — whether you are building a foundation or scaling an established presence.'],
    ['How do I get started?', 'Book a free consultation through our contact page. We will review your goals and recommend the clearest next step.'],
  ];

  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Services"
        title={service.name}
        subtitle={service.description}
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <Link to="/services" className="text-blue-200/50 hover:text-white">Services</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">{service.name}</span>
          </>
        }
        icon={service.icon}
      />

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center={false}
            eyebrow="Benefits"
            title={<>Why <span className="gradient-text">{service.name}</span> matters</>}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl glass p-6">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <Check size={20} />
                  </div>
                  <p className="pt-1.5 text-sm leading-relaxed text-white/70">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Sub-services */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center={false}
            eyebrow="Capabilities"
            title={<>What we cover under <span className="gradient-text">{service.name}</span></>}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub, i) => (
              <Reveal key={sub.slug} delay={i * 0.04}>
                <Link
                  to={`/services/${service.slug}/${sub.slug}`}
                  className="group flex h-full flex-col rounded-2xl glass p-5 transition-shadow hover:shadow-glow"
                >
                  <h3 className="text-sm font-semibold text-white">{sub.name}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50">{sub.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-cyan opacity-0 transition group-hover:opacity-100">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
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

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTASection />
    </div>
  );
}

function SubServicePage({
  categoryName,
  categorySlug,
  subService,
}: {
  categoryName: string;
  categorySlug: string;
  subService: { name: string; slug: string; description: string };
}) {
  const benefits = [
    `Targeted approach focused on ${subService.name.toLowerCase()}`,
    'Clear, actionable recommendations',
    'Measurable improvements to your digital presence',
    'Ongoing support and optimization',
  ];

  const process = [
    ['Assess', `We evaluate your current ${subService.name.toLowerCase()} situation and identify gaps.`],
    ['Plan', 'We create a tailored plan with clear priorities and timelines.'],
    ['Implement', 'We execute the plan with attention to detail and quality.'],
    ['Measure', 'We track results and refine the approach for continuous improvement.'],
  ];

  const faqs: [string, string][] = [
    [`What is ${subService.name}?`, `${subService.name} is part of our ${categoryName} offering. ${subService.description}`],
    ['How long does it take?', 'Timelines depend on the scope of work. We provide a clear timeline after the initial assessment.'],
    ['How do I get started?', 'Book a free consultation through our contact page and we will guide you through the next steps.'],
  ];

  return (
    <div className="relative z-10">
      <PageHero
        eyebrow={categoryName}
        title={subService.name}
        subtitle={subService.description}
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <Link to="/services" className="text-blue-200/50 hover:text-white">Services</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <Link to={`/services/${categorySlug}`} className="text-blue-200/50 hover:text-white">{categoryName}</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">{subService.name}</span>
          </>
        }
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading center={false} eyebrow="Benefits" title={<>What you <span className="gradient-text">gain</span></>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl glass p-6">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <Check size={20} />
                  </div>
                  <p className="pt-1.5 text-sm leading-relaxed text-white/70">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Process" title={<>Our <span className="gradient-text">approach</span></>} />
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

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}

export function ServicesIndexPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="A complete suite of digital growth services — from web development and SEO to AI solutions and conversion optimization."
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">Services</span>
          </>
        }
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl glass p-6 transition-shadow hover:shadow-glow"
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <service.icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.subServices.slice(0, 3).map((sub) => (
                      <span key={sub.slug} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-white/40">{sub.name}</span>
                    ))}
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-white/40">+{service.subServices.length - 3} more</span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-cyan opacity-0 transition group-hover:opacity-100">
                    Explore <ArrowRight size={12} />
                  </span>
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

export function FAQSection({ faqs }: { faqs: [string, string][] }) {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title={<>Questions, <span className="gradient-text">answered.</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question} delay={index * 0.025}>
              <div className="rounded-2xl glass p-6">
                <h3 className="font-display text-base font-medium text-white">{question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center sm:p-16">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-electric/20 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan/20 blur-[100px]" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Ready to get started?</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 sm:text-base">
                Book a free consultation and we will help you find the clearest next step for your business.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric via-purple to-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Book Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
