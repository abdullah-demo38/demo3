import { motion } from 'framer-motion';
import { Globe as Globe2, Layers, MapPin, MessageSquare, Search, ShieldCheck, ArrowRight } from 'lucide-react';
import { Reveal, SectionHeading } from './primitives';

const items = [
  [Search, 'AI Search Visibility', 'Understand how your business appears across modern discovery experiences, identify visibility gaps, monitor relevant queries, and uncover opportunities to strengthen how your brand is discovered.', '01', 'ai-search-analytics'],
  [Globe2, 'Website Optimization', 'Strengthen the technical foundation, structure, performance, metadata, content and conversion experience of your website so customers can find, understand and choose your business with greater confidence.', '02', 'website-optimization'],
  [MapPin, 'Local SEO', 'Strengthen the location-focused signals that help customers discover your business in the places they search, from map results and local directories to neighborhood-specific queries.', '03', 'local-seo-maps'],
  [MessageSquare, 'Customer Conversations', 'Make it easier for customers to ask questions and for your team to respond consistently and professionally, building trust at every touchpoint in the customer journey.', '04', 'customer-conversations'],
  [Layers, 'One Connected Platform', 'Bring website, local search, business profile, reviews, content, and leads together in one workspace so you can see the full picture, identify opportunities, and take coordinated action.', '05', 'connected-platform'],
  [ShieldCheck, 'Trust and Reputation', 'Build trust before customers call with consistent feedback monitoring, professional response workflows, and a reputation that holds up across every platform customers check.', '06', 'trust-reputation'],
];

export function WhyChooseUs() {
  return (
    <section className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why AIO Matrix"
          title={<>One platform for the work behind <span className="gradient-text">being found.</span></>}
          subtitle="The systems that shape your digital presence, connected so you can identify opportunities, take action, and keep improving."
        />
        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-purple to-cyan sm:left-1/2" />
          <div className="space-y-8">
            {items.map(([Icon, title, description, tag, imgQuery], index) => {
              const ItemIcon = Icon as typeof Search;
              const left = index % 2 === 0;
              return (
                <Reveal key={title as string} delay={index * 0.06}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${left ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl glass-strong text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                      <ItemIcon size={22} strokeWidth={1.8} className="text-cyan" />
                    </div>
                    <div className={`flex-1 sm:w-1/2 ${left ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'}`}>
                      <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl glass">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <img
                            src={`https://images.pexels.com/photos/${imgQuery as string}/pexels-photo-${imgQuery as string}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                            alt={title as string}
                            loading="lazy"
                            className="h-full w-full object-cover opacity-70 transition-opacity hover:opacity-90"
                            onError={(e) => { (e.currentTarget.style.display = 'none'); }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                          <div className={`mb-3 flex items-center gap-3 ${left ? 'sm:justify-end' : ''}`}>
                            <span className="font-mono text-xs text-white/35">{tag as string}</span>
                            <h3 className="font-display text-xl font-semibold text-white">{title as string}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-white/50">{description as string}</p>
                          <a href="#contact" className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-cyan transition hover:text-white ${left ? 'sm:justify-end' : ''}`}>
                            Explore More <ArrowRight size={12} />
                          </a>
                        </div>
                      </motion.div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
