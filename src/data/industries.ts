import {
  Hotel, UtensilsCrossed, Stethoscope, Cross, Home, CarFront,
  Wrench, Building2, ShoppingBag, GraduationCap,
  type LucideIcon,
} from 'lucide-react';

export interface Industry {
  name: string;
  slug: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  benefits: string[];
  faqs: [string, string][];
}

export const industries: Industry[] = [
  {
    name: 'Hotels',
    slug: 'hotels',
    icon: Hotel,
    tagline: 'Fill more rooms with stronger visibility and trust.',
    description: 'Hotels compete in one of the most search-intensive industries. Travelers compare options across Google, review sites, and AI-powered recommendation engines before they ever visit your website. AIO Matrix helps hotels strengthen their digital presence across every discovery surface — from local search and business profiles to website performance and guest review workflows — so your property is easier to find, easier to trust, and easier to book.',
    challenges: [
      'High competition from OTAs and booking platforms that dominate search results',
      'Inconsistent business profile information across directories',
      'Guest reviews scattered across multiple platforms with slow response times',
      'Seasonal demand fluctuations that require flexible visibility strategies',
      'Website performance issues that drive potential guests to competitors',
    ],
    solutions: [
      'Local SEO to capture travelers searching for hotels in your area',
      'Business profile management to keep information accurate everywhere',
      'Reputation tools to monitor and respond to reviews consistently',
      'Website optimization for faster load times and better booking flows',
      'AI content tools to create location and amenity pages that rank',
    ],
    services: ['Local SEO', 'Website Optimization', 'Reputation & Reviews', 'AI Content', 'Business Profile'],
    benefits: [
      'Increase direct bookings by improving search visibility',
      'Build guest trust before arrival with consistent reviews and information',
      'Reduce dependence on third-party booking platforms',
      'Capture more last-minute and mobile searches',
    ],
    faqs: [
      ['Can AIO Matrix help us rank higher in local hotel searches?', 'Yes. Our local SEO and business profile tools help your hotel appear in map results and local search queries where travelers look for accommodations.'],
      ['How do you help with guest reviews?', 'Our reputation tools consolidate reviews from multiple platforms and help your team respond professionally and consistently.'],
      ['Can you improve our booking website?', 'Yes. We identify performance, structure, and conversion issues that may be causing guests to abandon the booking process.'],
    ],
  },
  {
    name: 'Restaurants',
    slug: 'restaurants',
    icon: UtensilsCrossed,
    tagline: 'Get discovered by more diners in your area.',
    description: 'Diners search for restaurants on Google, ask AI assistants for recommendations, and check reviews before deciding where to eat. AIO Matrix helps restaurants strengthen their presence across all these discovery surfaces — from local search and menu visibility to review management and content that attracts hungry customers searching nearby.',
    challenges: [
      'Fierce local competition with new restaurants opening constantly',
      'Outdated menu information and hours across directories',
      'Managing reviews across Google, Yelp, and social platforms',
      'Difficulty appearing in "near me" and cuisine-specific searches',
      'Low website traffic from potential diners searching online',
    ],
    solutions: [
      'Local SEO to rank for cuisine and neighborhood searches',
      'Business profile management for accurate hours, menus, and photos',
      'Review response workflows to build trust with new diners',
      'Content tools for menu pages, special events, and blog posts',
      'AI search visibility to appear in recommendation engines',
    ],
    services: ['Local SEO', 'AI Content', 'Reputation & Reviews', 'Business Profile', 'Website Optimization'],
    benefits: [
      'Attract more diners searching for restaurants nearby',
      'Keep menu, hours, and location accurate everywhere',
      'Build trust with consistent, professional review responses',
      'Stand out in cuisine-specific and local searches',
    ],
    faqs: [
      ['How does AIO Matrix help restaurants get found?', 'We strengthen your local search presence, business profile, and review management so diners find you when they search for restaurants in your area.'],
      ['Can you help manage reviews across platforms?', 'Yes. Our reputation tools help you monitor and respond to reviews from multiple sources in one place.'],
      ['Do you help with menu and hours updates?', 'Yes. We ensure your business profile information stays accurate across all major directories.'],
    ],
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    icon: Stethoscope,
    tagline: 'Connect with patients who need your care.',
    description: 'Patients research healthcare providers extensively before booking an appointment. They search for symptoms, read reviews, and ask AI tools for recommendations. AIO Matrix helps healthcare practices strengthen their online presence so patients can find, trust, and choose your practice with confidence.',
    challenges: [
      'Patients rely on search and reviews to choose providers',
      'Complex services that are hard to explain clearly online',
      'HIPAA-compliant communication and content requirements',
      'Competition from large healthcare systems and directories',
      'Difficulty ranking for condition and treatment-related searches',
    ],
    solutions: [
      'Local SEO to capture patients searching for care nearby',
      'Content tools for condition, treatment, and service pages',
      'Reputation management for patient reviews and feedback',
      'Website optimization for appointment scheduling flows',
      'AI search visibility for emerging discovery channels',
    ],
    services: ['Local SEO', 'AI Content', 'Website Optimization', 'Reputation & Reviews', 'Business Profile'],
    benefits: [
      'Attract new patients searching for care in your area',
      'Build credibility with informative, clear content',
      'Streamline appointment scheduling on your website',
      'Manage patient reviews professionally and consistently',
    ],
    faqs: [
      ['Is AIO Matrix compatible with healthcare compliance?', 'Our tools help you create clear, professional content. We recommend reviewing all content with your compliance team before publishing.'],
      ['Can you help us rank for specific treatments?', 'Yes. Our content and SEO tools help you create pages that address the treatments and conditions patients search for.'],
      ['How do you help with patient reviews?', 'Our reputation tools help you monitor reviews and respond professionally to build trust with prospective patients.'],
    ],
  },
  {
    name: 'Dental',
    slug: 'dental',
    icon: Cross,
    tagline: 'Grow your practice with more patient appointments.',
    description: 'Dental patients search for practices nearby, read reviews, and compare services before booking. AIO Matrix helps dental practices strengthen their local visibility, manage reviews, and create content that answers patient questions — so your practice is the one they choose.',
    challenges: [
      'High local competition among dental practices',
      'Patients comparing reviews and services before booking',
      'Difficulty explaining specialized procedures online',
      'Inconsistent business profile information across directories',
      'Need to attract new patients while retaining existing ones',
    ],
    solutions: [
      'Local SEO to rank for dental searches in your area',
      'Content tools for procedure and service pages',
      'Reputation management for patient reviews',
      'Business profile management for accurate information',
      'Website optimization for appointment scheduling',
    ],
    services: ['Local SEO', 'AI Content', 'Reputation & Reviews', 'Website Optimization', 'Business Profile'],
    benefits: [
      'Attract new patients searching for dental care nearby',
      'Build trust with clear, informative procedure content',
      'Keep practice information accurate across all directories',
      'Respond to reviews consistently to build credibility',
    ],
    faqs: [
      ['Can you help our dental practice rank in local searches?', 'Yes. Our local SEO tools help your practice appear in map results and local dental searches.'],
      ['Do you help with procedure content?', 'Yes. Our content tools help you create clear, informative pages for each procedure and service you offer.'],
      ['How do you help manage patient reviews?', 'Our reputation tools consolidate reviews and help you respond professionally to build trust.'],
    ],
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    icon: Home,
    tagline: 'Connect with buyers and sellers in your market.',
    description: 'Real estate clients research agents, neighborhoods, and properties extensively online. They search for market insights, read reviews, and ask AI tools for recommendations. AIO Matrix helps real estate professionals strengthen their digital presence so clients find and choose you first.',
    challenges: [
      'Intense competition from national portals and large brokerages',
      'Clients relying on online research before contacting an agent',
      'Need to rank for neighborhood and property-type searches',
      'Managing reputation across multiple review platforms',
      'Creating consistent content about markets and listings',
    ],
    solutions: [
      'Local SEO to capture buyers and sellers searching in your market',
      'Content tools for neighborhood guides and market insights',
      'Reputation management for client reviews and testimonials',
      'Website optimization for lead capture and property inquiries',
      'AI search visibility for modern discovery channels',
    ],
    services: ['Local SEO', 'AI Content', 'Website Optimization', 'Reputation & Reviews', 'Lead Generation'],
    benefits: [
      'Capture more buyer and seller leads in your market',
      'Build authority with neighborhood and market content',
      'Generate inquiries through an optimized website',
      'Manage client reviews to build trust and credibility',
    ],
    faqs: [
      ['Can AIO Matrix help me rank for neighborhood searches?', 'Yes. Our local SEO and content tools help you create neighborhood-specific pages that rank in local searches.'],
      ['How do you help with lead generation?', 'We optimize your website for lead capture and help you create content that attracts buyers and sellers.'],
      ['Can you help manage client reviews?', 'Yes. Our reputation tools help you monitor and respond to reviews across platforms.'],
    ],
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    icon: CarFront,
    tagline: 'Drive more service bookings and sales.',
    description: 'Car buyers and service customers search extensively before choosing a dealership or repair shop. They compare reviews, search for specific services, and ask for recommendations. AIO Matrix helps automotive businesses strengthen their visibility and reputation so customers choose you.',
    challenges: [
      'High competition from large automotive groups and directories',
      'Customers comparing reviews and prices before visiting',
      'Difficulty ranking for specific service and vehicle searches',
      'Managing reputation across multiple review platforms',
      'Seasonal service demand fluctuations',
    ],
    solutions: [
      'Local SEO to capture customers searching for automotive services',
      'Content tools for service and vehicle pages',
      'Reputation management for customer reviews',
      'Business profile management for accurate service information',
      'Website optimization for appointment and inquiry forms',
    ],
    services: ['Local SEO', 'AI Content', 'Reputation & Reviews', 'Website Optimization', 'Business Profile'],
    benefits: [
      'Attract more customers searching for automotive services nearby',
      'Build trust with consistent, professional reviews',
      'Keep service and inventory information accurate online',
      'Generate more service bookings and inquiries',
    ],
    faqs: [
      ['Can you help our auto shop rank in local searches?', 'Yes. Our local SEO tools help you appear in map results and local automotive service searches.'],
      ['How do you help with customer reviews?', 'Our reputation tools help you monitor and respond to reviews to build trust with potential customers.'],
      ['Can you help with service page content?', 'Yes. Our content tools help you create clear, informative pages for each service you offer.'],
    ],
  },
  {
    name: 'Home Services',
    slug: 'home-services',
    icon: Wrench,
    tagline: 'Win more jobs from local homeowners.',
    description: 'Homeowners search for trusted service providers for plumbing, electrical, HVAC, roofing, and more. They read reviews, compare options, and ask AI for recommendations. AIO Matrix helps home service businesses strengthen their local visibility and reputation so homeowners choose you.',
    challenges: [
      'Intense local competition for emergency and routine service calls',
      'Customers relying heavily on reviews before calling',
      'Difficulty ranking for service-specific local searches',
      'Managing reputation across Google, Yelp, and social platforms',
      'Need to capture emergency and same-day service searches',
    ],
    solutions: [
      'Local SEO to dominate service-area searches',
      'Reputation management for reviews that build trust',
      'Content tools for service pages that rank and convert',
      'Business profile management for accurate service information',
      'Website optimization for phone calls and form submissions',
    ],
    services: ['Local SEO', 'Reputation & Reviews', 'AI Content', 'Website Optimization', 'Business Profile'],
    benefits: [
      'Win more local service calls and inquiries',
      'Build trust with consistent, professional reviews',
      'Rank for the specific services homeowners search for',
      'Keep service area and contact information accurate',
    ],
    faqs: [
      ['Can you help us rank for emergency service searches?', 'Yes. Our local SEO tools help you appear in urgent, service-specific local searches.'],
      ['How do you help with reviews?', 'Our reputation tools help you monitor and respond to reviews across platforms to build trust with homeowners.'],
      ['Can you help with service page content?', 'Yes. Our content tools help you create pages for each service that rank and convert.'],
    ],
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    icon: Building2,
    tagline: 'Attract clients who need your expertise.',
    description: 'Professional service firms — legal, accounting, consulting, financial — compete for clients who research extensively before reaching out. AIO Matrix helps you build authority with content, strengthen your search presence, and manage your reputation so clients choose your firm.',
    challenges: [
      'Clients researching firms extensively before making contact',
      'Need to demonstrate expertise and authority online',
      'Competition from large firms and directories',
      'Managing reputation across professional review platforms',
      'Creating content that builds trust without being overly promotional',
    ],
    solutions: [
      'SEO and content strategy for authority-building content',
      'Website optimization for lead capture and consultations',
      'Reputation management for professional credibility',
      'AI search visibility for modern discovery channels',
      'Business profile management for accurate information',
    ],
    services: ['SEO', 'AI Content', 'Website Optimization', 'Reputation & Reviews', 'Lead Generation'],
    benefits: [
      'Attract clients searching for your specific expertise',
      'Build authority with informative, professional content',
      'Generate consultations through an optimized website',
      'Strengthen credibility with consistent review management',
    ],
    faqs: [
      ['Can you help our firm build authority online?', 'Yes. Our content and SEO tools help you create informative content that demonstrates expertise and ranks in search.'],
      ['How do you help with lead generation?', 'We optimize your website for consultation requests and create content that attracts potential clients.'],
      ['Can you help manage professional reviews?', 'Yes. Our reputation tools help you monitor and respond to reviews to build professional credibility.'],
    ],
  },
  {
    name: 'Local Retail',
    slug: 'local-retail',
    icon: ShoppingBag,
    tagline: 'Bring more customers through your doors.',
    description: 'Local retailers compete with online giants and nearby stores for every customer. Shoppers search for products, compare stores, and check inventory before visiting. AIO Matrix helps local retailers strengthen their local search presence, manage reviews, and create content that brings customers in.',
    challenges: [
      'Competition from e-commerce and big-box retailers',
      'Customers checking inventory and hours before visiting',
      'Difficulty ranking for product-specific local searches',
      'Managing reviews across Google and social platforms',
      'Need to drive foot traffic, not just website visits',
    ],
    solutions: [
      'Local SEO to capture shoppers searching for products nearby',
      'Business profile management for accurate inventory and hours',
      'Reputation management for customer reviews',
      'Content tools for product and promotion pages',
      'Social media content to drive local engagement',
    ],
    services: ['Local SEO', 'Reputation & Reviews', 'AI Content', 'Social Media Marketing', 'Business Profile'],
    benefits: [
      'Attract shoppers searching for products in your area',
      'Keep store hours, inventory, and promotions accurate',
      'Build trust with consistent, positive reviews',
      'Drive foot traffic with engaging local content',
    ],
    faqs: [
      ['Can you help our store rank for product searches?', 'Yes. Our local SEO tools help you appear when shoppers search for specific products in your area.'],
      ['How do you help with store information?', 'We keep your business profile accurate across directories so customers always find correct hours and inventory.'],
      ['Can you help with social media content?', 'Yes. Our content and social media tools help you create posts that drive local engagement and foot traffic.'],
    ],
  },
  {
    name: 'Education',
    slug: 'education',
    icon: GraduationCap,
    tagline: 'Reach more students and families searching for answers.',
    description: 'Students and families research educational options extensively — from schools and tutoring to courses and certifications. They search for programs, read reviews, and compare options online. AIO Matrix helps educational institutions and providers strengthen their digital presence so students find and choose your programs.',
    challenges: [
      'Students and families comparing programs across multiple institutions',
      'Need to rank for program and course-specific searches',
      'Managing reputation across review and rating platforms',
      'Creating content that answers prospective student questions',
      'Competition from large educational platforms and directories',
    ],
    solutions: [
      'SEO and content strategy for program and course pages',
      'Website optimization for inquiries and applications',
      'Reputation management for student and parent reviews',
      'AI search visibility for modern discovery channels',
      'Social media content to engage prospective students',
    ],
    services: ['SEO', 'AI Content', 'Website Optimization', 'Reputation & Reviews', 'Social Media Marketing'],
    benefits: [
      'Attract students searching for programs and courses',
      'Build credibility with informative, authoritative content',
      'Generate more inquiries and applications',
      'Engage prospective students with social media content',
    ],
    faqs: [
      ['Can you help our institution rank for program searches?', 'Yes. Our SEO and content tools help you create program-specific pages that rank in search results.'],
      ['How do you help with student inquiries?', 'We optimize your website for inquiries and applications, making it easy for prospective students to reach out.'],
      ['Can you help with social media for education?', 'Yes. Our content and social media tools help you engage prospective students and families across platforms.'],
    ],
  },
];

export function findIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
