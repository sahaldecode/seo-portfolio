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
  Cleaning: "/images/Seo.png",
  HVAC: "/images/Seo.png",
  Healthcare: "/images/Seo.png",
  Roofing: "/images/Seo.png",
  Dental: "/images/Seo.png",
  "Home Services": "/images/Seo.png",
};
export const DEFAULT_PLACEHOLDER = "/images/seo.png";

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
    image: "/images/Seo.png", // ← paste your image path here

    description:
      "How a complete Local SEO overhaul helped Fresh Start Facility Services improve organic visibility, attract more qualified visitors, and move important cleaning service keywords closer to Page 1.",
    results: [
      { metric: "Total Clicks", value: "2.1K", label: "in 6 months" },
      { metric: "Impressions", value: "82k", label: "organic search" },
      { metric: "Avg Position", value: "14.8", label: "was 29.6" },
      { metric: "Traffic Growth", value: "+425%", label: "organic traffic" },
    ],
    beforeAfter: {
      before: {
        clicks: "400",
        impressions: "33.3k",
        ctr: "1.2%",
        position: "35.2",
      },
      after: {
        clicks: "2,100",
        impressions: "82k",
        ctr: "2.6%",
        position: "14.8",
      },
    },
    challenge:
      "Fresh Start Facility Services had been operating for 2 years, providing commercial cleaning services for offices, warehouses, and medical facilities. The company had strong client relationships and positive feedback from existing customers, but its online presence was still very limited. Before the SEO campaign, the website had weak visibility in Google search, with an average position of 35.2. Most important keywords were ranking around Page 3 or Page 4, which made it difficult for new customers to find the business through organic search.The Google Business Profile was incomplete, the website lacked properly optimized service pages, and there were no strong location-based landing pages to capture high-intent local searches. Because of this, Fresh Start Facility Services was missing opportunities from people actively searching for commercial cleaning and facility cleaning services in their service area.",
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
      { month: "Jan", traffic: 400 },
      { month: "Feb", traffic: 620 },
      { month: "Mar", traffic: 890 },
      { month: "Apr", traffic: 1100 },
      { month: "May", traffic: 1450 },
      { month: "Jun", traffic: 1620 },
      { month: "Jul", traffic: 1840 },
      { month: "Aug", traffic: 2100 },
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
    title: "From Weak Local Visibility to #1 for “HVAC Bluffton”",
    client: "Go To Superior HVAC",
    industry: "HVAC",
    location: "Bluffton, USA",
    timeline: "8 Months",
    image: "/images/Seo.png", // ← e.g. "/images/go-to-superior-hvac.jpg"

    description:
      "A focused Local SEO and Google Business Profile campaign that helped Go To Superior HVAC rank #1 for “HVAC Bluffton,” improve Google Maps visibility, and increase inbound calls by 87% during both peak and off-peak seasons.",

    results: [
      { metric: "Inbound Calls", value: "+87%", label: "from Google" },
      { metric: "Maps Visibility", value: "+142%", label: "local impressions" },
      { metric: "Bookings", value: "+52%", label: "organic bookings" },
      { metric: "Local Keywords", value: "Top 3", label: "for 18 keywords" },
    ],

    beforeAfter: {
      before: {
        clicks: "320",
        impressions: "32K",
        ctr: "1.0%",
        position: "34.2",
      },
      after: {
        clicks: "1,850",
        impressions: "46K",
        ctr: "4.0%",
        position: "11.8",
      },
    },

    challenge:
      "Go To Superior HVAC was losing potential jobs to larger competitors that had stronger visibility in the Google Maps 3-pack. Even though the company provided reliable HVAC services, its online presence was not strong enough to consistently capture high-intent local searches. Before the campaign, the Google Business Profile had limited optimization, minimal photo activity, weak service area targeting, and missing local relevance signals. The website also lacked strong location-specific pages, which made it harder to rank for searches like “HVAC Bluffton” and other service-based local keywords. During slower seasons, organic call volume dropped significantly because the business was relying too heavily on paid ads and referrals. The main challenge was to build a stronger local SEO foundation that could generate calls, bookings, and visibility from Google Maps and organic search throughout both peak and off-peak seasons.",

    strategy: [
      "Completed a full Google Business Profile audit and re-optimization, including categories, services, attributes, business description, service areas, and photo updates.",
      "Created a local keyword strategy focused on high-intent HVAC searches in Bluffton and nearby service areas.",
      "Improved service page content for AC repair, HVAC repair, heating services, installation, maintenance, and emergency HVAC searches.",
      "Built location-focused content to strengthen local relevance for Bluffton and surrounding communities.",
      "Added internal links between HVAC service pages, location content, and conversion-focused pages.",
      "Improved calls-to-action, click-to-call buttons, and contact forms to convert more organic visitors into phone calls and booking requests.",
    ],

    aiSeoImplementation: [
      "Optimized service content around HVAC-specific search intent and natural customer questions.",
      "Added FAQ-style content for common HVAC problems, repair needs, maintenance questions, and emergency service searches.",
      "Improved entity signals around Go To Superior HVAC, HVAC services, Bluffton, service areas, and local business relevance.",
      "Optimized content for voice-style searches such as “HVAC repair near me,” “AC repair in Bluffton,” and “emergency HVAC service near me.”",
    ],

    technicalImprovements: [
      "Improved local service page structure with clearer headings, internal links, and conversion sections.",
      "Implemented LocalBusiness and service-focused schema markup.",
      "Improved mobile speed and user experience for local visitors.",
      "Added stronger click-to-call elements for mobile users.",
      "Created a consistent Google Business Profile posting and photo update plan.",
    ],

    tools: [
      "Google Business Profile",
      "Google Search Console",
      "Google Analytics 4",
      "BrightLocal",
      "Ahrefs",
      "PageSpeed Insights",
      "Screaming Frog",
    ],

    testimonial: {
      quote:
        "Our phone started ringing more consistently from Google, especially during the busy season. The SEO work helped us become much more visible in Bluffton and brought in better quality local leads.",
      author: "Tom R.",
      role: "Owner",
      company: "Go To Superior HVAC",
    },

    trafficGrowth: [
      { month: "Month 1", traffic: 320 },
      { month: "Month 2", traffic: 420 },
      { month: "Month 3", traffic: 600 },
      { month: "Month 4", traffic: 750 },
      { month: "Month 5", traffic: 820 },
      { month: "Month 6", traffic: 1200 },
      { month: "Month 7", traffic: 1400 },
      { month: "Month 8", traffic: 1850 },
    ],

    keywordWins: [
      { keyword: "HVAC Bluffton", position: 1, volume: 350 },
      { keyword: "HVAC repair Bluffton", position: 2, volume: 250 },
      { keyword: "AC repair Bluffton SC", position: 2, volume: 200 },
      { keyword: "emergency HVAC service Bluffton", position: 3, volume: 120 },
      { keyword: "air conditioning repair Bluffton", position: 3, volume: 180 },
    ],
  },
// 3. Cottijohnhvac -------------
   {
slug: "cotti-johnson-hvac",
title: "Improving Local HVAC Visibility Across Taunton & Raynham",
client: "Cotti-Johnson HVAC",
industry: "HVAC, Plumbing & Electrical",
location: "Taunton & Raynham, MA",
timeline: "6 Months",
image: "/images/Seo.png",

description:
"A local SEO and service-page optimization campaign that helped Cotti-Johnson HVAC improve visibility for heating, cooling, plumbing, and electrical searches across Taunton, Raynham, and nearby service areas.",

results: [
{ metric: "Inbound Calls", value: "+64%", label: "from Google" },
{ metric: "Maps Visibility", value: "+118%", label: "local impressions" },
{ metric: "Service Leads", value: "+46%", label: "from organic search" },
{ metric: "Local Keywords", value: "Top 5", label: "for 22 keywords" },
],

beforeAfter: {
before: {
clicks: "140",
impressions: "11.7K",
ctr: "1.2%",
position: "28.7",
},
after: {
clicks: "2,140",
impressions: "58K",
ctr: "3.7%",
position: "10.9",
},
},

challenge:
"Cotti-Johnson HVAC had strong real-world trust, years of service history, and a wide range of home comfort services, including HVAC, plumbing, electrical, heating, cooling, and duct cleaning. However, the website was not capturing enough local organic traffic from high-intent searches in Taunton, Raynham, and nearby service areas. Before the campaign, the website generated only 140 organic clicks from 11.7K impressions, with a 1.2% CTR and an average position of 28.7. Several important service pages were under-optimized, local keyword targeting was weak, and the site structure did not clearly connect core services with the main service areas. The main challenge was to improve rankings, increase qualified traffic, and turn stronger visibility into more calls and service leads.",

strategy: [
"Completed a full local SEO audit across HVAC, heating, cooling, plumbing, electrical, duct cleaning, and service area pages.",
"Improved keyword targeting for core services including AC repair, heating repair, furnace repair, boiler services, water heaters, electrical troubleshooting, and duct cleaning.",
"Strengthened local relevance for Taunton, Raynham, and surrounding Massachusetts service areas.",
"Optimized service page headings, metadata, internal links, FAQs, and calls-to-action to better match high-intent local searches.",
"Improved Google Business Profile signals with better service coverage, local updates, photo activity, and category alignment.",
"Built a clearer internal linking structure between primary services, sub-services, and service area pages.",
],

aiSeoImplementation: [
"Structured service content around natural customer questions for HVAC, plumbing, electrical, and emergency service searches.",
"Added FAQ-style content for AC repair, heating problems, water heater issues, duct cleaning, and electrical troubleshooting queries.",
"Improved entity signals around Cotti-Johnson HVAC, Taunton, Raynham, HVAC services, plumbing services, electrical services, and local home comfort solutions.",
"Optimized content for voice-style searches such as AC repair near me, heating repair in Taunton, plumber near me, and electrician near me.",
],

technicalImprovements: [
"Improved service page structure with clearer H1, H2, and FAQ sections.",
"Implemented LocalBusiness, HVACBusiness, Service, and FAQ schema where relevant.",
"Improved internal linking from main service categories to supporting sub-service pages.",
"Enhanced mobile user experience with clearer click-to-call and request service CTAs.",
"Reviewed indexability, metadata, and page structure for core service and location pages.",
"Improved page-level optimization to support both organic rankings and local conversion actions.",
],

tools: [
"Google Search Console",
"Google Business Profile",
"Google Analytics 4",
"BrightLocal",
"Ahrefs",
"Screaming Frog",
"PageSpeed Insights",
],

testimonial: {
quote:
"The SEO improvements helped us get stronger visibility across more of our service areas and service categories. We started seeing more calls from people searching for HVAC, plumbing, and electrical services locally.",
author: "Client Representative",
role: "Operations Team",
company: "Cotti-Johnson HVAC",
},

trafficGrowth: [
{ month: "Month 1", traffic: 10 },
{ month: "Month 2", traffic: 140 },
{ month: "Month 3", traffic: 285 },
{ month: "Month 4", traffic: 420 },
{ month: "Month 5", traffic: 725 },
{ month: "Month 6", traffic: 2140 },
],

keywordWins: [
{ keyword: "HVAC services Taunton MA", position: 3, volume: 250 },
{ keyword: "AC repair Taunton MA", position: 4, volume: 200 },
{ keyword: "heating repair Taunton MA", position: 4, volume: 180 },
{ keyword: "plumber Taunton MA", position: 5, volume: 300 },
{ keyword: "electrician Taunton MA", position: 5, volume: 220 },
],
},

  // ── 3. Fraum Center Healthcare ───────────────────────────────────
  {
slug: "fraum-center-healthcare",
title: "+120% Organic Traffic for Healthcare Clinic In Hilton Head Island",
client: "Fraum Center",
industry: "Healthcare",
location: "Hilton Head Island, SC",
timeline: "6 Months",
image: "/images/Seo.png",

description:
"A healthcare local SEO campaign that strengthened Fraum Center's online authority, improved visibility for high-value patient search terms, and increased organic traffic across chiropractic, restorative medicine, and non-surgical pain relief services.",

results: [
{ metric: "Organic Traffic", value: "+120%", label: "in 6 months" },
{ metric: "Patient Leads", value: "+72%", label: "from organic search" },
{ metric: "Local Visibility", value: "+96%", label: "healthcare searches" },
{ metric: "Treatment Keywords", value: "Top 5", label: "for 26 keywords" },
],

beforeAfter: {
before: {
clicks: "220",
impressions: "15.7K",
ctr: "1.4%",
position: "24.6",
},
after: {
clicks: "2,465",
impressions: "44K",
ctr: "5.6%",
position: "9.8",
},
},

challenge:
"Fraum Center had strong clinical credibility, an experienced care team, and a wide range of non-surgical treatment options, but the website needed a stronger SEO structure to capture high-intent patient searches. Before the campaign, the website generated only 220 organic clicks from 15.7K impressions, with a 1.4% CTR and an average position of 24.6. Important condition and treatment pages were not fully optimized around how patients actually search for care, such as back pain relief, knee pain treatment, spinal decompression, chiropractic care, neuropathy treatment, and non-surgical pain solutions in Hilton Head. The site also needed better topical authority, stronger internal linking, and clearer service-to-condition connections. The main challenge was to turn Fraum Center's real-world medical authority into stronger Google visibility, more qualified organic traffic, and more patient inquiries.",

strategy: [
"Completed a healthcare SEO audit across condition pages, treatment pages, provider pages, blog content, and local landing pages.",
"Improved keyword targeting for high-intent patient searches including back pain, knee pain, neck pain, neuropathy, spinal decompression, chiropractic care, and restorative medicine.",
"Rebuilt the content structure to connect patient conditions with relevant non-surgical treatment options.",
"Strengthened local relevance for Hilton Head Island and surrounding service areas.",
"Improved internal linking between condition pages, treatment pages, care team pages, FAQs, and conversion pages.",
"Optimized calls-to-action to help more organic visitors request consultations and contact the clinic.",
],

aiSeoImplementation: [
"Structured healthcare content around natural patient questions and symptom-based search intent.",
"Added FAQ-style content for common patient concerns related to knee pain, back pain, neck pain, shoulder pain, hip pain, neuropathy, and spinal decompression.",
"Improved entity signals around Fraum Center, Hilton Head Island, chiropractic care, restorative medicine, physician-led care, non-surgical pain relief, and patient wellness.",
"Optimized content for voice-style searches such as back pain doctor near me, knee pain treatment in Hilton Head, spinal decompression near me, and chiropractor in Hilton Head.",
],

technicalImprovements: [
"Improved page structure with clearer H1, H2, FAQ, and treatment explanation sections.",
"Implemented LocalBusiness, MedicalClinic, Physician, Service, and FAQ schema where relevant.",
"Improved metadata for condition pages, treatment pages, and local healthcare search terms.",
"Strengthened internal linking from high-authority pages to important treatment and condition pages.",
"Reviewed indexability, crawl structure, duplicate content risks, and page-level SEO issues.",
"Improved mobile conversion paths with clearer appointment, call, and consultation CTAs.",
],

tools: [
"Google Search Console",
"Google Business Profile",
"Google Analytics 4",
"Ahrefs",
"Screaming Frog",
"PageSpeed Insights",
"BrightLocal",
],

testimonial: {
quote:
"The SEO campaign helped us improve visibility for the treatments and conditions our patients are actively searching for. We saw stronger organic traffic, better local visibility, and more qualified patient inquiries from Google.",
author: "Client Representative",
role: "Practice Team",
company: "Fraum Center",
},

trafficGrowth: [
{ month: "Month 1", traffic: 220 },
{ month: "Month 2", traffic: 340 },
{ month: "Month 3", traffic: 620 },
{ month: "Month 4", traffic: 940 },
{ month: "Month 5", traffic: 1600 },
{ month: "Month 6", traffic: 2465 },
],

keywordWins: [
{ keyword: "chiropractor Hilton Head", position: 2, volume: 350 },
{ keyword: "spinal decompression Hilton Head", position: 3, volume: 120 },
{ keyword: "back pain treatment Hilton Head", position: 4, volume: 180 },
{ keyword: "knee pain treatment Hilton Head", position: 4, volume: 150 },
{ keyword: "neuropathy treatment Hilton Head", position: 5, volume: 110 },
],
},

  // ── 4. Elite Roofing ─────────────────────────────────────────────
  {
slug: "elite-roofing-local-seo",
title: "#1 Rankings & +300% Monthly Leads for Roofing Co In Toronto, CA.",
client: "Elite Roofing",
industry: "Roofing",
location: "Greater Toronto Area, Canada",
timeline: "8 Months",
image: "/images/Seo.png",

description:
"A comprehensive local SEO campaign that helped Elite Roofing improve visibility for high-value roofing searches across the Greater Toronto Area, reach #1 rankings for competitive service keywords, and increase monthly organic leads by 300%.",

results: [
{ metric: "Monthly Leads", value: "+300%", label: "from organic search" },
{ metric: "Keywords #1", value: "15+", label: "top positions" },
{ metric: "Call Volume", value: "+190%", label: "monthly calls" },
{ metric: "Revenue", value: "+240%", label: "organic-sourced" },
],

beforeAfter: {
before: {
clicks: "310",
impressions: "24.8K",
ctr: "1.3%",
position: "31.4",
},
after: {
clicks: "2,980",
impressions: "59.6K",
ctr: "5.0%",
position: "8.6",
},
},

challenge:
"Elite Roofing had strong real-world authority, decades of experience, and a wide range of roofing services across the Greater Toronto Area. However, the website was not fully capturing high-intent organic traffic for commercial roofing, industrial roofing, roof repair, roof replacement, roof maintenance, and flat roofing searches. Before the campaign, the website generated only 310 organic clicks from 24.8K impressions, with a 1.3% CTR and an average position of 31.4. Important roofing service pages were not ranking strongly enough against larger competitors, and local search visibility was spread across service categories without a clear SEO growth structure. The main challenge was to improve rankings for competitive roofing keywords, strengthen service-page authority, and turn organic search traffic into more calls, quote requests, and booked roofing projects.",

strategy: [
"Completed a full local SEO audit across commercial roofing, industrial roofing, residential roofing, roof repair, roof replacement, roof maintenance, and flat roofing pages.",
"Improved keyword targeting for high-intent searches connected to roofing contractors, commercial roof repair, flat roof replacement, roof inspections, and emergency roofing services.",
"Strengthened local relevance for the Greater Toronto Area and surrounding service locations.",
"Optimized service page headings, metadata, internal links, FAQs, and calls-to-action to better match buyer-intent roofing searches.",
"Improved Google Business Profile signals with stronger service coverage, photo activity, local updates, and category alignment.",
"Built a clearer internal linking structure between roofing services, project pages, blog resources, and conversion pages.",
],

aiSeoImplementation: [
"Structured roofing content around natural customer questions and commercial property owner search intent.",
"Added FAQ-style content for roof repair, roof replacement, flat roofing, commercial roofing, inspections, maintenance, and emergency roofing queries.",
"Improved entity signals around Elite Roofing, Greater Toronto Area, roofing contractors, industrial roofing, commercial roof repair, flat roofing systems, and roof maintenance.",
"Optimized content for voice-style and AI-search queries such as roofing contractor near me, commercial roof repair in Toronto, flat roof replacement GTA, and emergency roof repair near me.",
],

technicalImprovements: [
"Improved service page structure with clearer H1, H2, FAQ, project proof, and conversion sections.",
"Implemented LocalBusiness, RoofingContractor, Service, FAQ, and Review schema where relevant.",
"Improved metadata for core roofing service pages and local commercial roofing search terms.",
"Strengthened internal linking from high-authority project and blog pages to important service pages.",
"Reviewed crawl structure, indexability, duplicate metadata, broken links, and page-level SEO issues.",
"Improved mobile conversion paths with clearer call buttons, quote request CTAs, and service inquiry sections.",
],

tools: [
"Google Search Console",
"Google Business Profile",
"Google Analytics 4",
"Ahrefs",
"Screaming Frog",
"PageSpeed Insights",
"BrightLocal",
],

testimonial: {
quote:
"The SEO campaign helped us become more visible for important roofing searches across the GTA. We started receiving more qualified calls and quote requests from commercial and residential customers finding us through Google.",
author: "Client Representative",
role: "Marketing Team",
company: "Elite Roofing",
},

trafficGrowth: [
{ month: "Month 1", traffic: 310 },
{ month: "Month 2", traffic: 485 },
{ month: "Month 3", traffic: 720 },
{ month: "Month 4", traffic: 980 },
{ month: "Month 5", traffic: 1360 },
{ month: "Month 6", traffic: 1785 },
{ month: "Month 7", traffic: 2320 },
{ month: "Month 8", traffic: 2980 },
],

keywordWins: [
{ keyword: "commercial roofing Toronto", position: 1, volume: 450 },
{ keyword: "roofing contractors GTA", position: 1, volume: 350 },
{ keyword: "flat roof repair Toronto", position: 2, volume: 300 },
{ keyword: "commercial roof repair Toronto", position: 2, volume: 250 },
{ keyword: "roof replacement Toronto", position: 3, volume: 400 },
],
},

  // ── 5. Bright Smile Dental ───────────────────────────────────────
  {
slug: "dental-smiles-local-seo",
title: "#1 Local Pack for 9 Dental Keywords",
client: "Dental Smiles",
industry: "Dental",
location: "Lakewood, CA",
timeline: "5 Months",
image: "/images/Seo.png",

description:
"A Google Business Profile optimization and local SEO campaign that helped Dental Smiles improve local pack visibility for high-intent dental searches and grow new patient appointment requests by 87%.",

results: [
{ metric: "Local Pack #1", value: "9", label: "keywords" },
{ metric: "Appointments", value: "+87%", label: "new patients" },
{ metric: "GBP Calls", value: "+145%", label: "monthly" },
{ metric: "Review Rating", value: "4.8★", label: "avg Google" },
],

beforeAfter: {
before: {
clicks: "180",
impressions: "14.4K",
ctr: "1.3%",
position: "26.8",
},
after: {
clicks: "1,520",
impressions: "31.7K",
ctr: "4.8%",
position: "8.4",
},
},

challenge:
"Dental Smiles had a trusted local presence and years of experience helping families with dental care, but the practice was not capturing enough visibility from high-intent local searches. Before the campaign, the website generated only 180 organic clicks from 14.4K impressions, with a 1.3% CTR and an average position of 26.8. The Google Business Profile needed stronger optimization, procedure-specific pages were not fully aligned with patient search intent, and local citations needed better consistency. The main challenge was to improve Google Maps visibility, build stronger local trust signals, and help more new patients find the practice for searches like dentist near me, emergency dentist, teeth whitening, dental implants, and Invisalign provider.",

strategy: [
"Completed a full NAP consistency audit and cleaned up key local directory listings.",
"Optimized the Google Business Profile with stronger categories, services, appointment links, Q&A, photos, and local business details.",
"Improved procedure-specific pages for teeth whitening, dental implants, Invisalign, emergency dental care, family dentistry, and cosmetic dentistry.",
"Created a review generation workflow to help increase review velocity and strengthen patient trust signals.",
"Improved local relevance for Lakewood and nearby service areas through better on-page optimization and internal linking.",
"Built a Google Business Profile posting strategy focused on treatments, patient questions, seasonal dental offers, and appointment reminders.",
],

aiSeoImplementation: [
"Structured dental content around real patient questions and appointment-focused search intent.",
"Added FAQ-style content for common concerns about dental implants, Invisalign, teeth whitening, emergency dentistry, insurance, and treatment costs.",
"Improved entity signals around Dental Smiles, Lakewood, family dentistry, cosmetic dentistry, emergency dental care, Invisalign, and dental implants.",
"Optimized content for voice-style and AI-search queries such as dentist near me, emergency dentist near me, teeth whitening near me, and Invisalign provider near me.",
],

technicalImprovements: [
"Implemented Dentist, DentalClinic, LocalBusiness, Service, FAQ, and Review schema where relevant.",
"Improved appointment booking CTAs and mobile click-to-call visibility.",
"Improved procedure page structure with clearer H1, H2, FAQ, benefits, and conversion sections.",
"Reviewed indexability, metadata, internal linking, and duplicate page title issues.",
"Optimized image alt text and gallery elements for dental service relevance.",
"Improved mobile UX so patients could call, book, or request an appointment faster.",
],

tools: [
"Google Business Profile",
"Google Search Console",
"Google Analytics 4",
"BrightLocal",
"Ahrefs",
"PageSpeed Insights",
"Screaming Frog",
],

testimonial: {
quote:
"The local SEO campaign helped us increase calls and appointment requests from people searching for dental care nearby. We saw stronger visibility in Google Maps and better quality new patient inquiries.",
author: "Client Representative",
role: "Practice Team",
company: "Dental Smiles",
},

trafficGrowth: [
{ month: "Month 1", traffic: 180 },
{ month: "Month 2", traffic: 230 },
{ month: "Month 3", traffic: 285 },
{ month: "Month 4", traffic: 370 },
{ month: "Month 5", traffic: 455 },
],

keywordWins: [
{ keyword: "dentist Lakewood CA", position: 1, volume: 300 },
{ keyword: "dentist near me", position: 2, volume: 1200 },
{ keyword: "emergency dentist Lakewood", position: 2, volume: 180 },
{ keyword: "teeth whitening Lakewood CA", position: 3, volume: 150 },
{ keyword: "Invisalign provider Lakewood", position: 3, volume: 120 },
],
},

  // ── 6. Family Time Center ────────────────────────────────────────
  {
slug: "familytime-centers-therapy-seo",
title: "+138% Organic Growth for Online Therapy Center",
client: "FamilyTime Centers",
industry: "Mental Health & Therapy",
location: "Los Angeles, CA",
timeline: "6 Months",
image: "/images/Seo.png",

description:
"A healthcare and therapy SEO campaign that helped FamilyTime Centers improve visibility for online therapy, family counseling, couples therapy, and mental health searches across Los Angeles and California.",

results: [
{ metric: "Organic Growth", value: "+138%", label: "in 6 months" },
{ metric: "Therapy Leads", value: "+81%", label: "from organic search" },
{ metric: "Local Visibility", value: "+104%", label: "therapy searches" },
{ metric: "Service Keywords", value: "Top 5", label: "for 24 keywords" },
],

beforeAfter: {
before: {
clicks: "260",
impressions: "18.6K",
ctr: "1.4%",
position: "27.9",
},
after: {
clicks: "2,620",
impressions: "52.4K",
ctr: "5.0%",
position: "9.6",
},
},

challenge:
"FamilyTime Centers had strong clinical experience, trusted therapists, and a wide range of therapy services, including individual therapy, couples therapy, family therapy, child therapy, trauma therapy, addiction counseling, grief counseling, crisis support, and teen therapy. However, the website needed a stronger SEO structure to capture high-intent patient searches across Los Angeles and California. Before the campaign, the website generated only 260 organic clicks from 18.6K impressions, with a 1.4% CTR and an average position of 27.9. Important therapy service pages were not fully optimized around how people search for mental health support, and location/service intent was not clearly connected across the website. The main challenge was to improve visibility for therapy-related searches while building trust, topical authority, and stronger conversion paths for people looking for care.",

strategy: [
"Completed a full healthcare SEO audit across therapy service pages, location pages, provider sections, blog content, FAQs, and conversion pages.",
"Improved keyword targeting for online therapy, individual therapy, couples therapy, family therapy, child therapy, trauma therapy, grief counseling, addiction counseling, and teen therapy searches.",
"Strengthened local relevance for Los Angeles, California, and important service regions including Hollywood, Westside, San Fernando Valley, South Bay, East Los Angeles, and Central Los Angeles.",
"Rebuilt the content structure to connect therapy services with common patient needs, symptoms, life situations, and location-based search intent.",
"Improved internal linking between therapy service pages, condition-based content, provider trust sections, FAQs, insurance/payment pages, and booking CTAs.",
"Optimized calls-to-action to help more organic visitors book a therapist, call the center, or start the intake process.",
],

aiSeoImplementation: [
"Structured therapy content around natural patient questions and mental health search intent.",
"Added FAQ-style content for common concerns related to online therapy, anxiety, trauma, family conflict, couples therapy, teen therapy, grief, and crisis support.",
"Improved entity signals around FamilyTime Centers, Los Angeles, California, online therapy, counseling, psychotherapy, family therapy, and licensed therapist care.",
"Optimized content for voice-style and AI-search queries such as online therapy in Los Angeles, family therapist near me, couples therapy in California, and trauma therapist near me.",
],

technicalImprovements: [
"Improved page structure with clearer H1, H2, FAQ, service explanation, therapist trust, and conversion sections.",
"Implemented LocalBusiness, MedicalClinic, HealthAndBeautyBusiness, Service, FAQ, and Review schema where relevant.",
"Improved metadata for therapy services, location pages, insurance pages, and condition-based search terms.",
"Strengthened internal linking from high-authority pages to important therapy service and location pages.",
"Reviewed crawl structure, indexability, duplicate metadata, thin content risks, and page-level SEO issues.",
"Improved mobile conversion paths with clearer call, booking, and therapist-matching CTAs.",
],

tools: [
"Google Search Console",
"Google Business Profile",
"Google Analytics 4",
"Ahrefs",
"Screaming Frog",
"PageSpeed Insights",
"BrightLocal",
],

testimonial: {
quote:
"The SEO work helped us improve visibility for the therapy services people are actively searching for. We started receiving more qualified inquiries from individuals, couples, and families looking for care through Google.",
author: "Client Representative",
role: "Practice Team",
company: "FamilyTime Centers",
},

trafficGrowth: [
{ month: "Month 1", traffic: 260 },
{ month: "Month 2", traffic: 335 },
{ month: "Month 3", traffic: 410 },
{ month: "Month 4", traffic: 475 },
{ month: "Month 5", traffic: 540 },
{ month: "Month 6", traffic: 600 },
],

keywordWins: [
{ keyword: "online therapy Los Angeles", position: 2, volume: 350 },
{ keyword: "family therapy Los Angeles", position: 3, volume: 250 },
{ keyword: "couples therapy Los Angeles", position: 4, volume: 300 },
{ keyword: "child therapy Los Angeles", position: 4, volume: 180 },
{ keyword: "trauma therapy Los Angeles", position: 5, volume: 220 },
],
},

// ── 7. Trade Pro Academy ────────────────────────────────────────
  {
slug: "tradepro-academy-seo",
title: "+162% Organic Growth for Futures Trading Academy",
client: "TradePro Academy",
industry: "Trading Education",
location: "Online / North America",
timeline: "6 Months",
image: "/images/Seo.png",

description:
"A technical SEO, content optimization, and authority-building campaign that helped TradePro Academy improve visibility for futures trading, order flow, volume profile, and live trading education searches.",

results: [
{ metric: "Organic Growth", value: "+162%", label: "in 6 months" },
{ metric: "Course Leads", value: "+74%", label: "from organic search" },
{ metric: "Keyword Visibility", value: "+131%", label: "trading searches" },
{ metric: "High-Intent Keywords", value: "Top 10", label: "for 32 keywords" },
],

beforeAfter: {
before: {
clicks: "310",
impressions: "22.1K",
ctr: "1.4%",
position: "29.8",
},
after: {
clicks: "2,780",
impressions: "49.6K",
ctr: "5.6%",
position: "10.7",
},
},

challenge:
"TradePro Academy had strong expertise in futures trading education, order flow, live market analysis, Auction Market Theory, Volume Profile, footprint charts, delta, and DOM-based execution. However, the website needed a stronger SEO structure to capture high-intent searches from serious traders looking for futures trading courses, order flow training, live trading rooms, and professional trading education. Before the campaign, the website generated only 310 organic clicks from 22.1K impressions, with a 1.4% CTR and an average position of 29.8. Important course pages, live room pages, and educational blog content were not fully connected through a clear topical authority structure. The main challenge was to improve rankings for competitive trading education keywords, strengthen course-page visibility, and convert more organic visitors into course inquiries, live room signups, and education-focused leads.",

strategy: [
"Completed a full technical SEO audit across course pages, live trading room pages, blog content, category pages, and conversion pages.",
"Improved keyword targeting for futures trading course, order flow trading, volume profile trading, live trading room, Auction Market Theory, footprint charts, delta, DOM, and market structure searches.",
"Rebuilt content structure to connect beginner education, advanced order flow training, live room content, and course enrollment intent.",
"Optimized course pages with clearer headings, metadata, FAQs, curriculum sections, proof points, and conversion-focused CTAs.",
"Improved internal linking between educational blog posts, course landing pages, live room pages, and authority-building resources.",
"Strengthened E-E-A-T signals by improving founder expertise, trading education positioning, risk disclaimers, educational intent, and trust-focused content.",
],

aiSeoImplementation: [
"Structured trading education content around natural trader questions and intent-based learning paths.",
"Added FAQ-style content for futures trading, order flow, volume profile, Auction Market Theory, live trading rooms, DOM, delta, and footprint chart searches.",
"Improved entity signals around TradePro Academy, futures trading education, order flow trading, live market analysis, trading psychology, risk management, and professional trader development.",
"Optimized content for AI-search and voice-style queries such as best futures trading course, how to learn order flow trading, what is volume profile trading, and live futures trading room.",
],

technicalImprovements: [
"Improved page structure with clearer H1, H2, FAQ, curriculum, pricing, trust, and conversion sections.",
"Implemented Organization, Course, FAQ, Breadcrumb, and Article schema where relevant.",
"Improved metadata for course pages, live room pages, order flow pages, and educational blog posts.",
"Strengthened internal linking from high-traffic educational articles to course and live room conversion pages.",
"Reviewed crawl structure, indexability, duplicate metadata, thin content risks, broken links, and page-level SEO issues.",
"Improved mobile conversion paths with clearer course enrollment, live room signup, and consultation CTAs.",
],

tools: [
"Google Search Console",
"Google Analytics 4",
"Ahrefs",
"Screaming Frog",
"PageSpeed Insights",
"Surfer SEO",
"Schema Validator",
],

testimonial: {
quote:
"The SEO campaign helped us improve visibility for our futures trading education, order flow training, and live room content. We started attracting more qualified visitors who were actively searching for structured trading education.",
author: "Client Representative",
role: "Marketing Team",
company: "TradePro Academy",
},

trafficGrowth: [
{ month: "Month 1", traffic: 310 },
{ month: "Month 2", traffic: 385 },
{ month: "Month 3", traffic: 465 },
{ month: "Month 4", traffic: 510 },
{ month: "Month 5", traffic: 535 },
{ month: "Month 6", traffic: 575 },
],

keywordWins: [
{ keyword: "futures trading course", position: 4, volume: 900 },
{ keyword: "order flow trading course", position: 3, volume: 450 },
{ keyword: "live futures trading room", position: 5, volume: 300 },
{ keyword: "volume profile trading course", position: 4, volume: 250 },
{ keyword: "Auction Market Theory trading", position: 5, volume: 180 },
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
