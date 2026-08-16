import {
  Globe2, Search, Megaphone, Palette, Bot, FileText, Share2,
  ShoppingCart, Smartphone, TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export interface SubService {
  name: string;
  slug: string;
  description: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  subServices: SubService[];
}

export const services: ServiceCategory[] = [
  {
    name: 'Web Development',
    slug: 'web-development',
    icon: Globe2,
    description: 'Build fast, reliable, conversion-ready websites and web applications.',
    subServices: [
      { name: 'E-Commerce Development', slug: 'ecommerce', description: 'Online stores with secure checkout and product catalogs.' },
      { name: 'WordPress Development', slug: 'wordpress', description: 'Flexible, content-driven websites on WordPress.' },
      { name: 'Frontend Development', slug: 'frontend', description: 'Pixel-perfect, responsive user interfaces.' },
      { name: 'Backend Development', slug: 'backend', description: 'Robust APIs, databases, and server-side logic.' },
      { name: 'Custom Web Applications', slug: 'custom-web-applications', description: 'Tailored web apps built for your business needs.' },
      { name: 'Mobile-Friendly Websites', slug: 'mobile-friendly-websites', description: 'Sites that work flawlessly on every screen.' },
      { name: 'Business Websites', slug: 'business-websites', description: 'Professional websites that build trust and drive leads.' },
      { name: 'Landing Pages', slug: 'landing-pages', description: 'High-converting pages for campaigns and offers.' },
      { name: 'Web Portal Development', slug: 'web-portal-development', description: 'Customer, partner, and internal portals.' },
      { name: 'Website Maintenance', slug: 'website-maintenance', description: 'Ongoing updates, security, and performance care.' },
    ],
  },
  {
    name: 'SEO',
    slug: 'seo',
    icon: Search,
    description: 'Improve rankings, traffic, and visibility across search engines.',
    subServices: [
      { name: 'Search Engine Optimization', slug: 'search-engine-optimization', description: 'Comprehensive SEO strategy for sustainable growth.' },
      { name: 'On-Page SEO', slug: 'on-page-seo', description: 'Content, metadata, and structure optimization.' },
      { name: 'Off-Page SEO', slug: 'off-page-seo', description: 'Backlinks, citations, and authority building.' },
      { name: 'Technical SEO', slug: 'technical-seo', description: 'Site speed, indexing, and crawlability improvements.' },
      { name: 'Local SEO', slug: 'local-seo', description: 'Dominate local search and map results.' },
      { name: 'Keyword Research', slug: 'keyword-research', description: 'Find the terms your customers actually search for.' },
      { name: 'SEO Content Strategy', slug: 'seo-content-strategy', description: 'Content plans aligned with search demand.' },
      { name: 'Link Building', slug: 'link-building', description: 'Quality links that build domain authority.' },
      { name: 'SEO Audit', slug: 'seo-audit', description: 'Deep analysis of your current search performance.' },
      { name: 'E-Commerce SEO', slug: 'ecommerce-seo', description: 'Product and category page optimization.' },
    ],
  },
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: Megaphone,
    description: 'Reach and convert your audience across every channel.',
    subServices: [
      { name: 'Digital Marketing', slug: 'digital-marketing', description: 'Full-funnel marketing strategy and execution.' },
      { name: 'Google Ads / PPC', slug: 'google-ads-ppc', description: 'Targeted paid search campaigns that convert.' },
      { name: 'Social Media Advertising', slug: 'social-media-advertising', description: 'Paid social campaigns across major platforms.' },
      { name: 'Lead Generation', slug: 'lead-generation', description: 'Systems that capture and nurture qualified leads.' },
      { name: 'Conversion Rate Optimization', slug: 'conversion-rate-optimization', description: 'Turn more visitors into customers.' },
      { name: 'Email Marketing', slug: 'email-marketing', description: 'Lifecycle email campaigns that drive retention.' },
      { name: 'Marketing Strategy', slug: 'marketing-strategy', description: 'Data-driven plans aligned with business goals.' },
      { name: 'Funnel Optimization', slug: 'funnel-optimization', description: 'Streamline the path from awareness to purchase.' },
      { name: 'Retargeting', slug: 'retargeting', description: 'Re-engage visitors who did not convert.' },
      { name: 'Analytics & Reporting', slug: 'analytics-reporting', description: 'Clear reporting on what is working and why.' },
    ],
  },
  {
    name: 'Branding & Design',
    slug: 'branding-design',
    icon: Palette,
    description: 'Create a memorable, consistent brand identity.',
    subServices: [
      { name: 'Brand Strategy', slug: 'brand-strategy', description: 'Positioning, messaging, and brand architecture.' },
      { name: 'Logo Design', slug: 'logo-design', description: 'Distinctive logos that represent your business.' },
      { name: 'Visual Identity', slug: 'visual-identity', description: 'Cohesive color, typography, and design systems.' },
      { name: 'UI/UX Design', slug: 'ui-ux-design', description: 'Intuitive interfaces and seamless user journeys.' },
      { name: 'Graphic Design', slug: 'graphic-design', description: 'Print and digital design that communicates clearly.' },
      { name: 'Marketing Materials', slug: 'marketing-materials', description: 'Brochures, flyers, and sales collateral.' },
      { name: 'Social Media Design', slug: 'social-media-design', description: 'Scroll-stopping visuals for every platform.' },
      { name: 'Presentation Design', slug: 'presentation-design', description: 'Investor and sales decks that impress.' },
      { name: 'Creative Direction', slug: 'creative-direction', description: 'Guidance for a consistent creative vision.' },
      { name: 'Brand Guidelines', slug: 'brand-guidelines', description: 'Documented standards for brand consistency.' },
    ],
  },
  {
    name: 'AI Solutions',
    slug: 'ai-solutions',
    icon: Bot,
    description: 'Put artificial intelligence to work for your business.',
    subServices: [
      { name: 'AI Assistants', slug: 'ai-assistants', description: 'Custom assistants that handle real business tasks.' },
      { name: 'AI Chatbots', slug: 'ai-chatbots', description: 'Conversational bots for support and sales.' },
      { name: 'AI Automation', slug: 'ai-automation', description: 'Automate repetitive workflows with AI.' },
      { name: 'AI Lead Qualification', slug: 'ai-lead-qualification', description: 'Score and route leads automatically.' },
      { name: 'AI Content Systems', slug: 'ai-content-systems', description: 'Generate and optimize content at scale.' },
      { name: 'AI Customer Support', slug: 'ai-customer-support', description: '24/7 support that resolves issues faster.' },
      { name: 'AI Workflow Automation', slug: 'ai-workflow-automation', description: 'Connect tools and automate multi-step processes.' },
      { name: 'AI Analytics', slug: 'ai-analytics', description: 'Turn data into actionable business insights.' },
      { name: 'AI Knowledge Assistants', slug: 'ai-knowledge-assistants', description: 'Internal assistants trained on your knowledge base.' },
      { name: 'Custom AI Solutions', slug: 'custom-ai-solutions', description: 'Bespoke AI built for your specific needs.' },
    ],
  },
  {
    name: 'Content Marketing',
    slug: 'content-marketing',
    icon: FileText,
    description: 'Create content that attracts, educates, and converts.',
    subServices: [
      { name: 'SEO Content', slug: 'seo-content', description: 'Content designed to rank and drive organic traffic.' },
      { name: 'Website Copywriting', slug: 'website-copywriting', description: 'Clear, persuasive copy for every page.' },
      { name: 'Blog Content', slug: 'blog-content', description: 'Articles that build authority and engagement.' },
      { name: 'Service Pages', slug: 'service-pages', description: 'Dedicated pages for each service you offer.' },
      { name: 'Landing Page Copy', slug: 'landing-page-copy', description: 'Copy optimized for conversion.' },
      { name: 'Email Content', slug: 'email-content', description: 'Newsletters and sequences that get opened.' },
      { name: 'Social Media Content', slug: 'social-media-content', description: 'Posts that spark engagement and growth.' },
      { name: 'Content Strategy', slug: 'content-strategy', description: 'Plans that align content with business goals.' },
      { name: 'AI-Assisted Content', slug: 'ai-assisted-content', description: 'Faster content production with AI support.' },
      { name: 'Content Optimization', slug: 'content-optimization', description: 'Improve existing content for better results.' },
    ],
  },
  {
    name: 'Social Media Marketing',
    slug: 'social-media-marketing',
    icon: Share2,
    description: 'Grow your audience and engagement across platforms.',
    subServices: [
      { name: 'Social Media Management', slug: 'social-media-management', description: 'End-to-end management of your social presence.' },
      { name: 'Instagram Marketing', slug: 'instagram-marketing', description: 'Visual storytelling and growth on Instagram.' },
      { name: 'Facebook Marketing', slug: 'facebook-marketing', description: 'Community building and ads on Facebook.' },
      { name: 'LinkedIn Marketing', slug: 'linkedin-marketing', description: 'B2B growth and thought leadership on LinkedIn.' },
      { name: 'Social Media Strategy', slug: 'social-media-strategy', description: 'Platform-specific strategies that deliver results.' },
      { name: 'Content Planning', slug: 'content-planning', description: 'Calendars and workflows for consistent posting.' },
      { name: 'Creative Posts', slug: 'creative-posts', description: 'Scroll-stopping creative that fits your brand.' },
      { name: 'Short-Form Video Strategy', slug: 'short-form-video-strategy', description: 'Reels, Shorts, and TikTok strategy.' },
      { name: 'Community Management', slug: 'community-management', description: 'Engage and grow your online community.' },
      { name: 'Social Media Analytics', slug: 'social-media-analytics', description: 'Measure what matters and optimize.' },
    ],
  },
  {
    name: 'E-Commerce Solutions',
    slug: 'ecommerce-solutions',
    icon: ShoppingCart,
    description: 'Build, optimize, and scale your online store.',
    subServices: [
      { name: 'Shopify Development', slug: 'shopify-development', description: 'Custom Shopify stores that sell.' },
      { name: 'WooCommerce Development', slug: 'woocommerce-development', description: 'Flexible WooCommerce stores on WordPress.' },
      { name: 'E-Commerce Websites', slug: 'ecommerce-websites', description: 'Complete online stores built to convert.' },
      { name: 'Product Pages', slug: 'product-pages', description: 'Pages that showcase and sell products.' },
      { name: 'Payment Integration', slug: 'payment-integration', description: 'Secure checkout with major payment gateways.' },
      { name: 'Shopping Cart Optimization', slug: 'shopping-cart-optimization', description: 'Reduce abandonment and increase conversions.' },
      { name: 'Product SEO', slug: 'product-seo', description: 'Get products found in search results.' },
      { name: 'E-Commerce Analytics', slug: 'ecommerce-analytics', description: 'Understand customer behavior and sales.' },
      { name: 'Conversion Optimization', slug: 'conversion-optimization', description: 'Turn more visitors into paying customers.' },
      { name: 'E-Commerce Maintenance', slug: 'ecommerce-maintenance', description: 'Keep your store secure, fast, and updated.' },
    ],
  },
  {
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    icon: Smartphone,
    description: 'Build native and cross-platform mobile applications.',
    subServices: [
      { name: 'Android Apps', slug: 'android-apps', description: 'Native Android apps with great performance.' },
      { name: 'iOS Apps', slug: 'ios-apps', description: 'Native iOS apps for iPhone and iPad.' },
      { name: 'Cross-Platform Apps', slug: 'cross-platform-apps', description: 'One codebase for iOS and Android.' },
      { name: 'Flutter Development', slug: 'flutter-development', description: 'Beautiful, fast apps with Flutter.' },
      { name: 'React Native Development', slug: 'react-native-development', description: 'Cross-platform apps with React Native.' },
      { name: 'UI/UX for Apps', slug: 'ui-ux-for-apps', description: 'Intuitive mobile interfaces that users love.' },
      { name: 'API Integration', slug: 'api-integration', description: 'Connect your app to any service or database.' },
      { name: 'App Backend', slug: 'app-backend', description: 'Scalable backends to power your mobile app.' },
      { name: 'App Maintenance', slug: 'app-maintenance', description: 'Updates, bug fixes, and ongoing support.' },
      { name: 'Custom Mobile Applications', slug: 'custom-mobile-applications', description: 'Bespoke apps built for your specific use case.' },
    ],
  },
  {
    name: 'Conversion Optimization',
    slug: 'conversion-optimization',
    icon: TrendingUp,
    description: 'Maximize the value of every visitor.',
    subServices: [
      { name: 'Landing Page Optimization', slug: 'landing-page-optimization', description: 'Pages engineered to convert.' },
      { name: 'CRO Audits', slug: 'cro-audits', description: 'Identify where and why visitors drop off.' },
      { name: 'CTA Optimization', slug: 'cta-optimization', description: 'Calls-to-action that get clicked.' },
      { name: 'Lead Form Optimization', slug: 'lead-form-optimization', description: 'Forms that capture more qualified leads.' },
      { name: 'User Experience Optimization', slug: 'user-experience-optimization', description: 'Smoother journeys, better results.' },
      { name: 'A/B Testing', slug: 'a-b-testing', description: 'Data-driven decisions, not guesses.' },
      { name: 'Funnel Optimization', slug: 'funnel-optimization', description: 'Remove friction from every step.' },
      { name: 'Trust Optimization', slug: 'trust-optimization', description: 'Build credibility that converts visitors.' },
      { name: 'Heatmap Analysis', slug: 'heatmap-analysis', description: 'See where visitors click, scroll, and stop.' },
      { name: 'Conversion Analytics', slug: 'conversion-analytics', description: 'Track and improve conversion performance.' },
    ],
  },
];

export function findService(slug: string): ServiceCategory | undefined {
  return services.find((s) => s.slug === slug);
}

export function findSubService(categorySlug: string, subSlug: string): { category: ServiceCategory; subService: SubService } | undefined {
  const category = findService(categorySlug);
  if (!category) return undefined;
  const subService = category.subServices.find((s) => s.slug === subSlug);
  if (!subService) return undefined;
  return { category, subService };
}
