import { Activity, Globe as Globe2, MapPin, Search, Star, Users } from 'lucide-react';
import { Reveal, SectionHeading } from './primitives';

const metrics = [
  { label: 'Visibility Score', value: '92%', change: '+8.4%', icon: Search },
  { label: 'Website Health', value: '96%', change: '+4.2%', icon: Globe2 },
  { label: 'Local Presence', value: '89%', change: '+6.1%', icon: MapPin },
  { label: 'AI Visibility', value: '84%', change: '+11.7%', icon: Activity },
  { label: 'New Leads', value: '127', change: '+18.2%', icon: Users },
];

const navItems = ['Overview', 'Website', 'Local SEO', 'AI Visibility', 'Reviews', 'Content', 'Leads'];
const activity = ['Website optimization completed', 'New inquiry received', 'Content opportunity identified', 'Review response generated'];
const trend = [35, 48, 42, 58, 54, 72, 66, 82, 77, 92, 85, 96];

export function Dashboard() {
  return (
    <section id="platform" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="One connected platform"
          title={<>See your digital presence <span className="gradient-text">from one place.</span></>}
          subtitle="A clear view of the signals that help customers find, trust, and choose your business."
        />
        <Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f17]/90 shadow-2xl">
            <div className="flex flex-col border-b border-white/10 sm:flex-row">
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 sm:w-56 sm:border-b-0 sm:border-r">
                <img src="/ChatGPT_Image_Aug_2,_2026,_11_51_44_PM.png" alt="AIO Matrix" className="h-8 w-8 rounded-lg object-cover" />
                <span className="text-sm font-semibold text-white">AIO Matrix</span>
              </div>
              <div className="flex gap-1 overflow-x-auto px-3 py-3 text-xs text-white/50">
                <span className="rounded-lg bg-white/10 px-3 py-2 text-white">Overview</span>
                {navItems.slice(1).map((item) => (
                  <span key={item} className="whitespace-nowrap rounded-lg px-3 py-2">{item}</span>
                ))}
              </div>
            </div>
            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_280px]">
              <div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                  {metrics.map(({ label, value, change, icon: Icon }) => (
                    <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between text-white/40">
                        <span className="text-[11px] leading-tight">{label}</span>
                        <Icon size={15} />
                      </div>
                      <div className="mt-4 text-2xl font-semibold text-white">{value}</div>
                      <div className="mt-1 text-[11px] text-cyan">{change} this period</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">Visibility trend</div>
                      <div className="mt-1 text-xs text-white/40">Search presence across key business queries</div>
                    </div>
                    <span className="rounded-lg bg-cyan/10 px-2 py-1 text-xs text-cyan">Demo data</span>
                  </div>
                  <div className="mt-6 flex h-32 items-end gap-2">
                    {trend.map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-electric/30 to-cyan" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold text-white">Recent activity</div>
                <div className="mt-4 space-y-4">
                  {activity.map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan/10 text-cyan">
                        <Star size={12} />
                      </div>
                      <div>
                        <div className="text-xs text-white/75">{item}</div>
                        <div className="mt-1 text-[10px] text-white/35">{index + 1} day{index ? 's' : ''} ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
