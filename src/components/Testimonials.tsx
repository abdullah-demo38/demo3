import { SectionHeading } from './primitives';

const testimonials = [
  { quote: 'Having our website, local visibility and customer inquiries organized in one place has made managing our online presence much easier.', name: 'Sarah Mitchell', role: 'Hospitality Business' },
  { quote: 'We finally have a clearer picture of where our online presence needs improvement. The platform makes the process much easier to understand.', name: 'Daniel Brooks', role: 'Professional Services' },
  { quote: 'The AI tools save our team a lot of time when creating content and responding to common customer questions.', name: 'Emily Carter', role: 'Local Business' },
  { quote: 'It gives our team a more consistent way to think about visibility, reviews, and the next customer experience.', name: 'Michael Reynolds', role: 'Home Services' },
  { quote: 'The connected view of our digital presence helps us make better decisions about where to focus our efforts.', name: 'Jennifer Park', role: 'Healthcare Practice' },
  { quote: 'We have a much clearer understanding of how customers find us and what we can do to improve that journey.', name: 'David Thompson', role: 'Real Estate' },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('');
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-electric via-purple to-cyan text-sm font-semibold text-white">
      {initials}
    </div>
  );
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Sample perspectives"
          title={<>Built for the work behind <span className="gradient-text">being found.</span></>}
          subtitle="Illustrative testimonials for the approved demo. Replace with verified customer reviews before public launch."
        />
      </div>
      <div className="mt-14 overflow-hidden">
        <div className="flex w-max gap-5 animate-[scroll_38s_linear_infinite]">
          {doubled.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="w-[320px] shrink-0 rounded-2xl glass p-6 sm:w-[370px]">
              <div className="mb-5 flex gap-0.5">{[0, 1, 2, 3, 4].map((star) => <span key={star} className="text-cyan">★</span>)}</div>
              <p className="text-sm leading-relaxed text-white/75">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <Avatar name={testimonial.name} />
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                  <div className="mt-1 text-xs text-white/45">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
