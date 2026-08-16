import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Calendar } from 'lucide-react';
import { Reveal, SectionHeading } from './primitives';
import { PageHero, CTASection } from './ServicePage';

const posts = [
  {
    title: 'How AI Is Changing the Way Customers Find Local Businesses',
    excerpt: 'AI-powered search is reshaping local discovery. Here is what it means for your business and how to prepare.',
    category: 'AI Search',
    date: 'Aug 10, 2026',
    readTime: '5 min read',
    slug: 'ai-changing-local-discovery',
  },
  {
    title: 'The Complete Guide to Local SEO in 2026',
    excerpt: 'Everything you need to know about ranking in local search, from business profiles to review management.',
    category: 'Local SEO',
    date: 'Aug 5, 2026',
    readTime: '8 min read',
    slug: 'local-seo-guide-2026',
  },
  {
    title: 'Why Website Performance Directly Impacts Conversions',
    excerpt: 'Slow websites lose customers. Learn how to audit and improve your site speed for better results.',
    category: 'Web Development',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
    slug: 'website-performance-conversions',
  },
  {
    title: 'Building Trust Through Consistent Review Management',
    excerpt: 'Reviews are the first thing many customers see. Here is how to manage them professionally and consistently.',
    category: 'Reputation',
    date: 'Jul 20, 2026',
    readTime: '4 min read',
    slug: 'review-management-trust',
  },
  {
    title: 'Content Strategy for Service Businesses: A Practical Framework',
    excerpt: 'How to plan, create, and optimize content that attracts customers at every stage of their journey.',
    category: 'Content',
    date: 'Jul 12, 2026',
    readTime: '7 min read',
    slug: 'content-strategy-service-businesses',
  },
  {
    title: 'Understanding AI Search Visibility and Why It Matters',
    excerpt: 'AI assistants are recommending businesses. Learn how to make sure yours is the one they choose.',
    category: 'AI Search',
    date: 'Jul 5, 2026',
    readTime: '5 min read',
    slug: 'ai-search-visibility',
  },
];

const categories = ['All', 'AI Search', 'Local SEO', 'Web Development', 'Reputation', 'Content'];

export function BlogsPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Blog"
        title="Ideas for better visibility"
        subtitle="Practical insights on search, trust, content, and growing a modern local business."
        breadcrumb={
          <>
            <Link to="/" className="text-blue-200/50 hover:text-white">Home</Link>
            <ChevronRight size={13} className="text-blue-200/30" />
            <span className="text-white">Blogs</span>
          </>
        }
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category filter */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <span
                  key={c}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    c === 'All'
                      ? 'bg-gradient-to-r from-electric to-purple text-white shadow-glow'
                      : 'glass text-white/60 hover:text-white'
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Blog grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-shadow hover:shadow-glow">
                  {/* Visual header */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-electric/20 via-purple/10 to-cyan/20">
                      <span className="rounded-full glass px-4 py-1.5 text-xs font-medium text-white/70">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-cyan opacity-0 transition group-hover:opacity-100">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
