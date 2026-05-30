// ════════════════════════════════════════════════════════════════════
//  📁  CASE STUDIES DATA FILE
//  ✏️  Edit this file to update ALL case study content on the website
// ════════════════════════════════════════════════════════════════════
//
//  ┌─────────────────────────────────────────────────────────────┐
//  │  HOW TO ADD AN IMAGE (3 easy steps)                         │
//  │                                                             │
//  │  1. Copy your image into:  public/images/                   │
//  │     e.g.  public/images/fresh-start.jpg                     │
//  │                                                             │
//  │  2. Set the  image  field in the case study below:          │
//  │     image: "/images/fresh-start.jpg"                        │
//  │                                                             │
//  │  3. Save — the website updates automatically ✅            │
//  │                                                             │
//  │  Tip: Supported formats → .jpg  .png  .webp  .svg          │
//  │  Recommended size     → 1200 × 675 px  (16:9 ratio)        │
//  │  If you leave  image  blank → a placeholder shows instead   │
//  └─────────────────────────────────────────────────────────────┘
//
//  ┌─────────────────────────────────────────────────────────────┐
//  │  HOW TO ADD A NEW CASE STUDY                                │
//  │                                                             │
//  │  1. Scroll to the bottom of this file                       │
//  │  2. Copy the template inside the ➕ ADD HERE block          │
//  │  3. Paste it BEFORE the closing  ];                         │
//  │  4. Add a comma  ,  after the case study above it           │
//  │  5. Fill in your content and image path                     │
//  │  6. Save — done! New page is live at /case-studies/slug/    │
//  └─────────────────────────────────────────────────────────────┘
//
//  INDUSTRY OPTIONS  (used for placeholder if no image set):
//  "Cleaning" | "HVAC" | "Healthcare" | "Roofing" | "Dental"
//  "Home Services" | "E-Commerce" | "Restaurant" | "SaaS"
//
// ════════════════════════════════════════════════════════════════════

export interface TrafficData {
  month: string;
  traffic: number;
}
export interface KeywordWin {
  keyword: string;
  position: number;
  volume: number;
}
export interface Result {
  metric: string;
  value: string;
  label: string;
}
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  timeline?: string;
  description: string;

  // ── IMAGE ─────────────────────────────────────────────────────
  // Set this to the path of your image inside /public/
  // Example:  image: "/images/my-client-screenshot.jpg"
  // Leave as "" to show an auto-generated placeholder
  image?: string;
  // ──────────────────────────────────────────────────────────────

  results: Result[];
  beforeAfter?: {
    before: {
      clicks: string;
      impressions: string;
      ctr: string;
      position: string;
    };
    after: {
      clicks: string;
      impressions: string;
      ctr: string;
      position: string;
    };
  };
  challenge: string;
  strategy: string[];
  aiSeoImplementation: string[];
  technicalImprovements: string[];
  tools: string[];
  testimonial: Testimonial;
  trafficGrowth: TrafficData[];
  keywordWins: KeywordWin[];
}

// ─────────────────────────────────────────────────────────────────
//  PLACEHOLDER MAP  (auto-used when image field is empty)
// ─────────────────────────────────────────────────────────────────
export const INDUSTRY_PLACEHOLDER: Record<string, string> = {
  Cleaning: "/images/case-cleaning.svg",
  HVAC: "/images/case-hvac.svg",
  Healthcare: "/images/case-healthcare.svg",
  Roofing: "/images/case-roofing.svg",
  Dental: "/images/case-dental.svg",
  "Home Services": "/images/case-security.svg",
};
export const DEFAULT_PLACEHOLDER = "/images/seo-hero.jpg";

// Helper used by both list page and detail page
export function getCaseImage(study: CaseStudy): string {
  if (study.image && study.image.trim() !== "") return study.image.trim();
  return INDUSTRY_PLACEHOLDER[study.industry] ?? DEFAULT_PLACEHOLDER;
}

// ════════════════════════════════════════════════════════════════════
//  CASE STUDIES  ↓  Edit content here
// ════════════════════════════════════════════════════════════════════
export const caseStudies: CaseStudy[] = [
  // ── 1. Fresh Start Facility Services ─────────────────────────────
  {
    slug: "fresh-start-facility-services",
    title: "From Page 3 to Page 1 in 6 Months",
    client: "Fresh Start Facility Services",
    industry: "Cleaning",
    location: "USA",
    timeline: "6 Months",

    // 🖼️  ADD YOUR IMAGE HERE
    // Step 1: Put your file in  public/images/  e.g.  fresh-start.jpg
    // Step 2: Set the path below, e.g:  image: "/images/fresh-start.jpg"
    image: "/images/fresh-start.jpg", // ← paste your image path here

    description:
      "How a complete Local SEO overhaul transformed Fresh Start Facility Services from invisible to dominant — generating 8.4K clicks, 3.01M impressions and a 45% improvement in average position.",
    results: [
      { metric: "Total Clicks", value: "8.4K", label: "in 6 months" },
      { metric: "Impressions", value: "3.01M", label: "organic search" },
      { metric: "Avg Position", value: "16.5", label: "was 29.6" },
      { metric: "Traffic Growth", value: "+124%", label: "organic traffic" },
    ],
    beforeAfter: {
      before: {
        clicks: "1,850",
        impressions: "620K",
        ctr: "1.2%",
        position: "29.6",
      },
      after: {
        clicks: "8,400",
        impressions: "3.01M",
        ctr: "2.8%",
        position: "16.5",
      },
    },
    challenge:
      "Fresh Start Facility Services had been operating for 4 years providing commercial cleaning to offices, warehouses and medical facilities — but their online presence was almost non-existent. Despite strong reviews from existing clients, they were invisible on Google. Average ranking position of 29.6 meant virtually zero organic traffic, their Google Business Profile was incomplete, and they had no individual service or location pages to capture specific search intent.",
    strategy: [
      "Full local SEO audit identifying 40+ technical and on-page issues",
      "Google Business Profile optimization — categories, services, photos, posts",
      "Created 8 service-specific pages (office cleaning, medical cleaning, etc.)",
      "Built 5 location pages targeting nearby cities",
      "Citation building across 40+ local directories with consistent NAP",
      "Review generation system to grow GBP social proof",
      "Internal linking architecture to distribute authority across all pages",
    ],
    aiSeoImplementation: [
      "NLP-optimized service descriptions targeting how customers actually search",
      "AI-assisted FAQ sections targeting voice search and near-me queries",
      "Entity SEO — strengthened brand entity in Google Knowledge Graph",
      "Structured content for Google AI Overviews visibility",
      "Schema markup: LocalBusiness, Service, FAQ, BreadcrumbList",
    ],
    technicalImprovements: [
      "Fixed 400+ crawl errors and broken internal links",
      "Improved Core Web Vitals — LCP from 4.8s to under 2.2s",
      "Mobile responsiveness overhaul — 100% mobile-friendly pages",
      "Canonical tags and duplicate content cleanup across service pages",
      "Implemented hreflang and geo-targeting signals for local relevance",
    ],
    tools: [
      "Google Search Console",
      "Google Business Profile",
      "Ahrefs",
      "Screaming Frog",
      "BrightLocal",
      "PageSpeed Insights",
      "SEMrush",
    ],
    testimonial: {
      quote:
        "Faisal completely transformed our online presence. We went from getting maybe one call a week from the web to now getting 8-10 qualified leads every week. The ROI has been incredible.",
      author: "Mark D.",
      role: "Owner",
      company: "Fresh Start Facility Services",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 480 },
      { month: "Feb", traffic: 620 },
      { month: "Mar", traffic: 890 },
      { month: "Apr", traffic: 1250 },
      { month: "May", traffic: 1680 },
      { month: "Jun", traffic: 2100 },
      { month: "Jul", traffic: 2640 },
      { month: "Aug", traffic: 3200 },
    ],
    keywordWins: [
      {
        keyword: "commercial cleaning services near me",
        position: 2,
        volume: 4400,
      },
      { keyword: "office cleaning company [city]", position: 1, volume: 2900 },
      {
        keyword: "medical facility cleaning services",
        position: 3,
        volume: 1600,
      },
      {
        keyword: "janitorial services for small business",
        position: 2,
        volume: 2200,
      },
      { keyword: "warehouse cleaning services", position: 1, volume: 1300 },
    ],
  },

  // ── 2. Go To Superior HVAC ───────────────────────────────────────
  {
    slug: "go-to-superior-hvac",
    title: "HVAC Company Dominates Local Maps",
    client: "Go To Superior HVAC",
    industry: "HVAC",
    location: "USA",
    timeline: "8 Months",
    image: "", // ← e.g.  "/images/go-to-superior-hvac.jpg"
    description:
      "Local SEO and GBP campaign that pushed Go To Superior HVAC to the top of Google Maps and increased inbound calls by 87% — during both peak and off-peak seasons.",
    results: [
      { metric: "Inbound Calls", value: "+87%", label: "from Google" },
      { metric: "Maps Visibility", value: "+210%", label: "impressions" },
      { metric: "Bookings", value: "+52%", label: "organic bookings" },
      { metric: "Local Keywords", value: "Top 3", label: "for 18 keywords" },
    ],
    beforeAfter: {
      before: {
        clicks: "920",
        impressions: "180K",
        ctr: "0.9%",
        position: "34.2",
      },
      after: {
        clicks: "4,100",
        impressions: "680K",
        ctr: "3.1%",
        position: "11.8",
      },
    },
    challenge:
      "Go To Superior HVAC was losing jobs to bigger competitors who dominated the Google Maps 3-pack. Their GBP had minimal photos, no service area definition, and their website lacked any location-specific pages. During the slow season, call volume dropped to almost zero from organic search — they were entirely dependent on paid ads.",
    strategy: [
      "Complete GBP audit and re-optimization — categories, attributes, service list",
      "Service area mapping strategy targeting 14 specific city/suburb combinations",
      "Emergency HVAC keyword targeting for high-urgency search queries",
      "Seasonal content strategy — cooling season vs heating season focus",
      "Before/after photo campaigns and review generation system",
      "Local backlink acquisition from HVAC supplier directories and local business associations",
    ],
    aiSeoImplementation: [
      "AI-optimized service descriptions for HVAC-specific search intent",
      "FAQ schema targeting HVAC troubleshooting questions",
      "Entity optimization for HVAC brand visibility in AI search",
      "Voice search optimization for urgent queries like HVAC repair near me",
    ],
    technicalImprovements: [
      "Built 14 location-specific landing pages with unique content",
      "Implemented LocalBusiness + HVAC-specific schema markup",
      "Site speed improved — mobile LCP from 5.2s to 1.9s",
      "Click-to-call buttons and contact forms optimized for conversion",
      "Google Business Profile posts automated — 2 posts per week",
    ],
    tools: [
      "Google Business Profile",
      "BrightLocal",
      "Ahrefs",
      "CallRail",
      "PageSpeed Insights",
      "Screaming Frog",
    ],
    testimonial: {
      quote:
        "Our phone rings constantly now. Last summer was our best season ever and we attribute most of that growth to Faisal's SEO work. We are ranking in maps for basically every city we service.",
      author: "Tom R.",
      role: "Owner",
      company: "Go To Superior HVAC",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 320 },
      { month: "Feb", traffic: 410 },
      { month: "Mar", traffic: 680 },
      { month: "Apr", traffic: 1100 },
      { month: "May", traffic: 1580 },
      { month: "Jun", traffic: 2200 },
      { month: "Jul", traffic: 2850 },
      { month: "Aug", traffic: 3400 },
    ],
    keywordWins: [
      { keyword: "HVAC repair near me", position: 1, volume: 8100 },
      { keyword: "AC installation [city]", position: 2, volume: 3600 },
      { keyword: "emergency HVAC service", position: 1, volume: 2900 },
      { keyword: "furnace repair near me", position: 3, volume: 4400 },
      {
        keyword: "air conditioning tune up near me",
        position: 2,
        volume: 2200,
      },
    ],
  },

  // ── 3. Fraum Center Healthcare ───────────────────────────────────
  {
    slug: "fraum-center-healthcare",
    title: "+120% Organic Traffic for Healthcare Clinic",
    client: "Fraum Center",
    industry: "Healthcare",
    location: "USA",
    timeline: "10 Months",
    image: "", // ← e.g.  "/images/fraum-center.jpg"
    description:
      "Healthcare local SEO campaign that rebuilt Fraum Center's entire online authority — resulting in 120% organic traffic growth and dominant positions for high-value patient search terms.",
    results: [
      { metric: "Organic Traffic", value: "+120%", label: "in 10 months" },
      { metric: "Appointment Calls", value: "+68%", label: "from organic" },
      { metric: "Local Pack", value: "Top 3", label: "for 22 keywords" },
      { metric: "Domain Authority", value: "28→46", label: "improvement" },
    ],
    beforeAfter: {
      before: {
        clicks: "1,200",
        impressions: "310K",
        ctr: "1.4%",
        position: "27.1",
      },
      after: {
        clicks: "3,800",
        impressions: "920K",
        ctr: "3.2%",
        position: "13.4",
      },
    },
    challenge:
      "Fraum Center was a well-established healthcare practice with strong patient outcomes — but their digital presence did not reflect their real-world reputation. Competing practices were outranking them despite offering lower quality care. Their website lacked E-E-A-T signals, had no condition-specific pages, and their GBP was losing to newer competitors with better optimization.",
    strategy: [
      "E-E-A-T authority building — doctor bios, credentials, patient outcome pages",
      "Condition and treatment-specific landing pages (12 new pages created)",
      "Local citation audit across 60+ healthcare directories",
      "GBP optimization with health-specific categories and attributes",
      "Patient review generation and response strategy",
      "Healthcare-specific link building through medical associations and local press",
    ],
    aiSeoImplementation: [
      "Medical FAQ schema targeting patient symptom searches",
      "Structured content for healthcare AI Overview eligibility",
      "Entity optimization for doctor names and medical specialties",
      "Semantic content cluster around each treatment area",
    ],
    technicalImprovements: [
      "HIPAA-compliant contact forms and privacy policy updates",
      "Core Web Vitals: LCP improved from 4.1s to 1.6s",
      "Structured data: MedicalBusiness, Physician, MedicalCondition schemas",
      "Internal linking restructured around patient journey",
      "Image optimization — 200+ images compressed and properly alt-tagged",
    ],
    tools: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "BrightLocal",
      "Google Analytics 4",
    ],
    testimonial: {
      quote:
        "We had tried SEO before with poor results. Faisal took a completely different approach — he understood healthcare marketing and built something that actually brings in new patients consistently.",
      author: "Dr. Sarah M.",
      role: "Medical Director",
      company: "Fraum Center",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 1100 },
      { month: "Feb", traffic: 1320 },
      { month: "Mar", traffic: 1580 },
      { month: "Apr", traffic: 1890 },
      { month: "May", traffic: 2200 },
      { month: "Jun", traffic: 2580 },
      { month: "Jul", traffic: 2800 },
      { month: "Aug", traffic: 3100 },
    ],
    keywordWins: [
      { keyword: "chiropractor near me", position: 2, volume: 9900 },
      { keyword: "physical therapy [city]", position: 1, volume: 4400 },
      { keyword: "sports injury clinic near me", position: 3, volume: 2900 },
      { keyword: "back pain treatment specialist", position: 2, volume: 3600 },
      { keyword: "neck pain chiropractor near me", position: 1, volume: 2200 },
    ],
  },

  // ── 4. Elite Roofing ─────────────────────────────────────────────
  {
    slug: "elite-roofing",
    title: "#1 Rankings & +300% Monthly Leads for Roofing Co.",
    client: "Elite Roofing",
    industry: "Roofing",
    location: "USA",
    timeline: "7 Months",
    image: "", // ← e.g.  "/images/elite-roofing.jpg"
    description:
      "Comprehensive local SEO strategy that pushed Elite Roofing to #1 for 15+ high-value keywords in a competitive metro market — tripling monthly leads from organic search.",
    results: [
      { metric: "Monthly Leads", value: "+300%", label: "from organic" },
      { metric: "Keywords #1", value: "15+", label: "top position" },
      { metric: "Call Volume", value: "+190%", label: "monthly calls" },
      { metric: "Revenue", value: "+240%", label: "organic-sourced" },
    ],
    challenge:
      "Elite Roofing was competing against national franchise brands with massive budgets. Despite 12 years of local experience, they were invisible online. Their website was outdated with no local SEO structure, no service pages for specific roofing types, and their GBP was unverified and incomplete.",
    strategy: [
      "Hyper-local keyword strategy targeting storm damage, insurance claims, specific roofing materials",
      "Individual pages for: roof replacement, repairs, gutters, storm damage, insurance claims",
      "Neighborhood and suburb targeting — 22 location pages created",
      "Seasonal campaign strategy around storm season and weather events",
      "Local link acquisition through homeowner associations and contractors network",
      "Review velocity campaign to outpace franchise competitors in ratings",
    ],
    aiSeoImplementation: [
      "Storm damage and emergency roofing intent optimization",
      "Insurance claim keyword targeting with dedicated landing pages",
      "AI Overview optimization for roofing cost and process queries",
      "Semantic content clusters around roofing materials and lifespan",
    ],
    technicalImprovements: [
      "Complete website rebuild with proper local SEO architecture",
      "Roofing contractor schema markup with license and insurance details",
      "Photo gallery optimization — 60+ before/after project photos",
      "Conversion rate optimization — estimate form conversion up 3.2x",
      "Page speed: mobile score from 32 to 91 on PageSpeed Insights",
    ],
    tools: [
      "Ahrefs",
      "SEMrush",
      "BrightLocal",
      "Google Business Profile",
      "CallRail",
      "PageSpeed Insights",
    ],
    testimonial: {
      quote:
        "I was skeptical because we had been burned by SEO agencies before. Faisal was different — he showed up with a real plan and delivered real results. Our busiest season ever.",
      author: "Jason K.",
      role: "Owner",
      company: "Elite Roofing",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 280 },
      { month: "Feb", traffic: 420 },
      { month: "Mar", traffic: 780 },
      { month: "Apr", traffic: 1280 },
      { month: "May", traffic: 1950 },
      { month: "Jun", traffic: 2600 },
      { month: "Jul", traffic: 3100 },
      { month: "Aug", traffic: 3800 },
    ],
    keywordWins: [
      { keyword: "roof replacement near me", position: 1, volume: 6600 },
      { keyword: "roofing contractor [city]", position: 1, volume: 4400 },
      { keyword: "storm damage roof repair", position: 2, volume: 3600 },
      { keyword: "roof repair cost near me", position: 3, volume: 8100 },
      { keyword: "emergency roof repair near me", position: 1, volume: 2900 },
    ],
  },

  // ── 5. Bright Smile Dental ───────────────────────────────────────
  {
    slug: "bright-smile-dental",
    title: "#1 Local Pack for 9 Dental Keywords",
    client: "Bright Smile Dental",
    industry: "Dental",
    location: "USA",
    timeline: "5 Months",
    image: "", // ← e.g.  "/images/bright-smile-dental.jpg"
    description:
      "GBP optimization and local SEO strategy that placed Bright Smile Dental at #1 in the local pack for 9 service keywords and grew new patient appointments by 87%.",
    results: [
      { metric: "Local Pack #1", value: "9", label: "keywords" },
      { metric: "Appointments", value: "+87%", label: "new patients" },
      { metric: "GBP Calls", value: "+145%", label: "monthly" },
      { metric: "Review Rating", value: "4.8★", label: "avg Google" },
    ],
    challenge:
      "Bright Smile Dental was a newer practice competing against well-established dental offices with hundreds of reviews. Their GBP was barely set up, they had no procedure-specific pages, and local citations were either missing or inconsistent across directories — causing Google to distrust their location signals.",
    strategy: [
      "Complete NAP consistency audit and cleanup across 50+ directories",
      "GBP optimization: categories, services, booking integration, Q&A",
      "Procedure pages: teeth whitening, implants, Invisalign, emergency dental",
      "Review generation workflow — automated post-appointment request system",
      "Local backlinks from dental associations and health directories",
      "Google Posts strategy — 2 posts per week with seasonal offers",
    ],
    aiSeoImplementation: [
      "Dental FAQ schema targeting patient pre-appointment questions",
      "Insurance and cost content targeting high commercial-intent queries",
      "Entity SEO — dentist name, practice name, and specialty optimization",
      "AI search optimization for best dentist near me type queries",
    ],
    technicalImprovements: [
      "Dentist and DentalClinic schema markup with opening hours and accepted insurance",
      "Appointment booking integration with schema markup",
      "Before/after gallery with proper image schema",
      "HTTPS security audit and mixed content fixes",
      "Mobile UX improvements — contact and booking CTAs above fold",
    ],
    tools: [
      "Google Business Profile",
      "BrightLocal",
      "Ahrefs",
      "Birdeye",
      "PageSpeed Insights",
    ],
    testimonial: {
      quote:
        "Within 3 months we were getting more new patient calls than from our paid ads — and those patients convert better because they found us organically. Faisal delivered exactly what he promised.",
      author: "Dr. Lisa C.",
      role: "Practice Owner",
      company: "Bright Smile Dental",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 580 },
      { month: "Feb", traffic: 720 },
      { month: "Mar", traffic: 980 },
      { month: "Apr", traffic: 1280 },
      { month: "May", traffic: 1620 },
      { month: "Jun", traffic: 1950 },
      { month: "Jul", traffic: 2300 },
      { month: "Aug", traffic: 2680 },
    ],
    keywordWins: [
      { keyword: "dentist near me", position: 1, volume: 12100 },
      { keyword: "teeth whitening near me", position: 2, volume: 5400 },
      { keyword: "dental implants [city]", position: 1, volume: 3600 },
      { keyword: "emergency dentist near me", position: 3, volume: 8100 },
      { keyword: "Invisalign provider near me", position: 2, volume: 2900 },
    ],
  },

  // ── 6. HomeGuard Security ────────────────────────────────────────
  {
    slug: "homeguard-security",
    title: "2.4x Conversion Rate & -45% Cost Per Lead",
    client: "HomeGuard Security",
    industry: "Home Services",
    location: "USA",
    timeline: "6 Months",
    image: "", // ← e.g.  "/images/homeguard-security.jpg"
    description:
      "Technical SEO overhaul combined with Local Service Ads optimization that cut HomeGuard Security cost per lead in half while more than doubling their conversion rate from organic traffic.",
    results: [
      { metric: "Conversion Rate", value: "2.4x", label: "improvement" },
      { metric: "Cost Per Lead", value: "-45%", label: "vs paid ads" },
      { metric: "Organic Traffic", value: "+180%", label: "in 6 months" },
      { metric: "LSA Calls", value: "+220%", label: "monthly" },
    ],
    challenge:
      "HomeGuard Security was spending heavily on Google Ads with rising CPCs and declining ROI. Their website had serious technical issues preventing Google from properly crawling service pages, their Local Service Ads account was unoptimized, and they had no organic strategy to reduce reliance on paid channels.",
    strategy: [
      "Technical SEO audit — identified JavaScript rendering blocking 40% of pages",
      "Local Service Ads complete rebuild — categories, service areas, lead types",
      "Landing page CRO — reduced form friction from 8 fields to 3",
      "Local SEO for security-specific keywords — home alarm, monitoring, installation",
      "Trust-building content — licensing, insurance, guarantees prominently featured",
      "Retargeting content for users who visited but did not convert",
    ],
    aiSeoImplementation: [
      "Security-specific FAQ schema for how much does home security cost queries",
      "Comparison content targeting best home security near me searches",
      "Entity optimization for home security brand in local context",
      "AI Overview optimization for security system setup and comparison queries",
    ],
    technicalImprovements: [
      "Fixed JavaScript rendering — all service pages now fully crawlable",
      "Implemented dynamic rendering for critical conversion pages",
      "Core Web Vitals all green — LCP 1.4s, FID 12ms, CLS 0.02",
      "LocalBusiness and Service schema with security-specific attributes",
      "HTTPS upgrade and mixed content cleanup across all pages",
    ],
    tools: [
      "Google Search Console",
      "Google Local Services Ads",
      "Screaming Frog",
      "Hotjar",
      "PageSpeed Insights",
      "CallRail",
    ],
    testimonial: {
      quote:
        "We were on the verge of cutting our marketing budget when Faisal turned things around completely. Our ads now work better AND we have organic leads coming in that cost us almost nothing.",
      author: "Mike T.",
      role: "Marketing Manager",
      company: "HomeGuard Security",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 620 },
      { month: "Feb", traffic: 780 },
      { month: "Mar", traffic: 1050 },
      { month: "Apr", traffic: 1380 },
      { month: "May", traffic: 1720 },
      { month: "Jun", traffic: 2100 },
      { month: "Jul", traffic: 2480 },
      { month: "Aug", traffic: 2900 },
    ],
    keywordWins: [
      { keyword: "home security systems near me", position: 2, volume: 5400 },
      {
        keyword: "security alarm installation [city]",
        position: 1,
        volume: 2900,
      },
      { keyword: "home alarm monitoring services", position: 3, volume: 3600 },
      { keyword: "smart home security near me", position: 2, volume: 4400 },
      {
        keyword: "security camera installation near me",
        position: 1,
        volume: 6600,
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════
  //  ➕  ADD A NEW CASE STUDY HERE  — copy this template:
  // ════════════════════════════════════════════════════════════════════
  //
  // {
  //   slug:        "your-client-slug",          // becomes the URL
  //   title:       "Result-Focused Title Here",
  //   client:      "Client Company Name",
  //   industry:    "HVAC",
  //   location:    "USA",
  //   timeline:    "6 Months",
  //
  //   // 🖼️ IMAGE — put your file in public/images/ then set the path:
  //   image: "/images/your-client-screenshot.jpg",
  //
  //   description: "One or two sentences summarising the campaign results.",
  //   results: [
  //     { metric: "Organic Traffic", value: "+250%", label: "in 6 months"  },
  //     { metric: "Monthly Leads",   value: "+180%", label: "from organic" },
  //     { metric: "Keywords Top 3",  value: "20+",   label: "positions"    },
  //     { metric: "Google Maps",     value: "#1",    label: "local pack"   },
  //   ],
  //   beforeAfter: {
  //     before: { clicks: "800",   impressions: "150K", ctr: "0.9%", position: "32.0" },
  //     after:  { clicks: "3,200", impressions: "680K", ctr: "3.2%", position: "12.5" },
  //   },
  //   challenge: "Describe the client situation and problems before working with you...",
  //   strategy: [
  //     "Strategy step 1",
  //     "Strategy step 2",
  //     "Strategy step 3",
  //   ],
  //   aiSeoImplementation: [
  //     "AI SEO action 1",
  //     "AI SEO action 2",
  //   ],
  //   technicalImprovements: [
  //     "Technical fix 1",
  //     "Technical fix 2",
  //   ],
  //   tools: ["Ahrefs", "SEMrush", "Google Search Console"],
  //   testimonial: {
  //     quote:   "Client quote here.",
  //     author:  "First Name L.",
  //     role:    "Owner",
  //     company: "Company Name",
  //   },
  //   trafficGrowth: [
  //     { month: "Jan", traffic: 500  },
  //     { month: "Feb", traffic: 800  },
  //     { month: "Mar", traffic: 1200 },
  //     { month: "Apr", traffic: 1700 },
  //     { month: "May", traffic: 2200 },
  //     { month: "Jun", traffic: 2800 },
  //     { month: "Jul", traffic: 3400 },
  //     { month: "Aug", traffic: 4000 },
  //   ],
  //   keywordWins: [
  //     { keyword: "main keyword near me",      position: 1, volume: 5000 },
  //     { keyword: "service + city",            position: 2, volume: 3000 },
  //     { keyword: "emergency keyword",         position: 1, volume: 2000 },
  //     { keyword: "industry keyword",          position: 3, volume: 1500 },
  //     { keyword: "local service keyword",     position: 2, volume: 1000 },
  //   ],
  // },
  //
  // ════════════════════════════════════════════════════════════════════
];
