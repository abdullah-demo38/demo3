import { Link } from 'react-router-dom';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Reveal, SectionHeading } from './primitives';
import { PageHero, FAQSection, CTASection } from './ServicePage';

const plans = [
  {
    name: 'Foundation',
    price: 275,
    description: 'For businesses building a stronger digital foundation.',
    features: [
      'Website health review',
      'Local presence essentials',
      'Visibility recommendations',
      'Monthly performance snapshot',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: 348,
    description: 'For businesses focused on visibility and lead generation.',
    recommended: true,
    features: [
      'Everything in Foundation',
      'AI search visibility insights',
      'Content opportunity planning',
      'Lead and inquiry tracking',
      'Reputation support',
      'Priority email support',
    ],
  },
  {
    name: 'Advanced',
    price: 575,
    description: 'For businesses looking for a complete growth system.',
    features: [
      'Everything in Growth',
      'Multi-location visibility',
      'Advanced content workflows',
      'Priority strategy support',
      'Custom reporting',
      'Dedicated account manager',
    ],
  },
];

const faqs: [string, string][] = [
  ['Can I change plans later?', 'Yes. You can upgrade or change your plan at any time. Changes take effect immediately.'],
  ['Is there a long-term contract?', 'No. Plans are month-to-month. You can cancel anytime without penalty.'],
  ['What is included in the free consultation?', 'We review your current digital presence, discuss your goals, and recommend the clearest next step — no obligation.'],
  ['Do you offer custom plans?', 'Yes. If your needs go beyond the Advanced plan, contact us and we will build a tailored proposal.'],
];

export function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Pricing"
        title="Plans for every stage of growth"
        subtitle="Choose the level of support that fits your next step. Every plan starts with a practical view of your current digital presence."
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">Pricing</span>
          </>
        }
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Billing toggle */}
          <div className="flex justify-center">
            <div className="flex rounded-xl border border-white/10 bg-white/[0.03] p-1 text-sm">
              <button
                onClick={() => setYearly(false)}
                className={`rounded-lg px-4 py-2 transition-colors ${!yearly ? 'bg-white/10 text-white' : 'text-white/45'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`rounded-lg px-4 py-2 transition-colors ${yearly ? 'bg-white/10 text-white' : 'text-white/45'}`}
              >
                Yearly <span className="ml-1 text-cyan">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const displayPrice = yearly ? Math.round(plan.price * 0.8) : plan.price;
              return (
                <Reveal key={plan.name} delay={index * 0.08}>
                  <div
                    className={`relative flex h-full flex-col rounded-3xl p-7 ${
                      plan.recommended
                        ? 'border border-cyan/50 bg-cyan/[0.06] shadow-[0_0_50px_rgba(34,211,238,0.08)]'
                        : 'border border-white/10 glass'
                    }`}
                  >
                    {plan.recommended && (
                      <span className="absolute right-6 top-6 rounded-full bg-cyan px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                        Recommended
                      </span>
                    )}
                    <h3 className="font-display text-xl font-semibold capitalize text-white">{plan.name}</h3>
                    <p className="mt-3 min-h-12 text-sm leading-relaxed text-white/50">{plan.description}</p>
                    <div className="mt-7 text-4xl font-semibold text-white">
                      ${displayPrice}
                      <span className="text-sm font-normal text-white/35"> / month</span>
                    </div>
                    <ul className="mt-7 flex-1 space-y-3 border-t border-white/10 pt-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm text-white/65">
                          <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                        plan.recommended
                          ? 'bg-cyan text-ink hover:bg-white'
                          : 'bg-white/8 text-white hover:bg-white/15'
                      }`}
                    >
                      Book Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
