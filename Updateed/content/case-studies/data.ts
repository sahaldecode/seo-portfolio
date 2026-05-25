// ═══════════════════════════════════════════════════════════════════
// 📁 CASE STUDIES DATA FILE
// ═══════════════════════════════════════════════════════════════════
//
// 🔥 NAYA CASE STUDY KAISE ADD KARO:
//
// 1. Neeche di gayi template copy karo
// 2. caseStudies array mein paste karo (last item ke baad, ] se pehle)
// 3. Comma lagana mat bhulna pichle entry ke baad
// 4. "slug" unique hona chahiye (URL ban jata hai)
//    Example: "my-new-client" → /case-studies/my-new-client/
// 5. File save karo → website automatically update ho jaegi
//    (npm run dev chal raha ho toh, ya deploy karo)
//
// 🖼️ IMAGE: CaseStudiesPreview.tsx mein "industryImages" object mein
//    apni industry ka naam add karo agar wahan nahi hai
//
// ✅ CHECKLIST naya case study add karte waqt:
//    □ slug (unique, lowercase, hyphens only)
//    □ title + client + industry + location
//    □ description (1-2 sentences)
//    □ results (4 metrics) ← yeh hero section mein dikhta hai
//    □ challenge (paragraph)
//    □ strategy (bullet points array)
//    □ aiSeoImplementation (bullet points array)
//    □ technicalImprovements (bullet points array)
//    □ tools (array of tool names)
//    □ testimonial (client quote)
//    □ trafficGrowth (8 months ka data)
//    □ keywordWins (5 keywords)
//
// ═══════════════════════════════════════════════════════════════════

export const caseStudies = [
  {
    slug: "ecommerce-pakistan",
    title: "E-Commerce SEO Transformation",
    client: "FashionHub PK",
    industry: "E-Commerce",
    location: "Pakistan",
    description: "Complete technical SEO overhaul and AI-powered content strategy for a leading Pakistani fashion e-commerce platform.",
    results: [
      { metric: "Organic Traffic", value: "+340%", label: "in 8 months" },
      { metric: "Revenue", value: "+280%", label: "from organic" },
      { metric: "Keywords", value: "12,000+", label: "top 10 rankings" },
      { metric: "Core Web Vitals", value: "95+", label: "all metrics" },
    ],
    challenge: "FashionHub PK was struggling with poor site architecture, duplicate content issues across 50,000+ product pages, and slow mobile performance. Their organic traffic had plateaued for 18 months despite aggressive paid marketing.",
    strategy: [
      "Comprehensive technical SEO audit identifying 200+ critical issues",
      "Implementation of faceted navigation with proper canonicalization",
      "AI-driven content gap analysis and semantic topic clustering",
      "Entity-based internal linking architecture",
      "Mobile-first performance optimization",
    ],
    aiSeoImplementation: [
      "Deployed LLM-powered content optimization for product descriptions",
      "Implemented generative AI schema markup for rich snippets",
      "Created AI-driven FAQ sections targeting conversational queries",
      "Optimized for AI overviews and featured snippets",
      "Built predictive keyword trend analysis pipeline",
    ],
    technicalImprovements: [
      "Reduced LCP from 4.2s to 1.1s through image optimization and CDN",
      "Implemented edge caching and dynamic rendering",
      "Fixed 15,000+ broken links and redirect chains",
      "Migrated to Next.js with App Router for SSR/SSG",
      "Implemented advanced structured data (Product, Offer, FAQ, Breadcrumb)",
    ],
    tools: ["Screaming Frog", "Ahrefs", "Semrush", "Google Search Console", "PageSpeed Insights", "Looker Studio", "ChatGPT API", "Claude API"],
    testimonial: {
      quote: "The transformation was incredible. We went from SEO being an afterthought to it being our primary revenue driver.",
      author: "Ahmed Khan",
      role: "CEO",
      company: "FashionHub PK",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 45000 },
      { month: "Feb", traffic: 52000 },
      { month: "Mar", traffic: 68000 },
      { month: "Apr", traffic: 89000 },
      { month: "May", traffic: 112000 },
      { month: "Jun", traffic: 135000 },
      { month: "Jul", traffic: 158000 },
      { month: "Aug", traffic: 198000 },
    ],
    keywordWins: [
      { keyword: "pakistani designer clothes", position: 1, volume: 14800 },
      { keyword: "buy lawn suits online", position: 2, volume: 9900 },
      { keyword: "bridal dresses pakistan", position: 1, volume: 8100 },
      { keyword: "men shalwar kameez online", position: 3, volume: 6600 },
      { keyword: "kids ethnic wear pakistan", position: 2, volume: 4400 },
    ],
  },
  {
    slug: "restaurant-dubai",
    title: "Local SEO Domination — Dubai F&B",
    client: "Dubai Bites",
    industry: "Restaurant",
    location: "UAE",
    description: "Multi-location local SEO strategy for a Dubai restaurant chain, dominating Google Maps and local pack results across all 8 locations.",
    results: [
      { metric: "Map Pack Rankings", value: "#1–3", label: "all locations" },
      { metric: "Reservations", value: "+210%", label: "from organic" },
      { metric: "Local Keywords", value: "800+", label: "top 3 positions" },
      { metric: "Review Score", value: "4.9★", label: "avg Google rating" },
    ],
    challenge: "Dubai Bites had 8 locations but was virtually invisible in local search. Competitors dominated the map pack and the brand had inconsistent NAP data across directories, hurting local rankings significantly.",
    strategy: [
      "Full NAP audit and consistency fix across 50+ directories",
      "Google Business Profile optimization for all 8 locations",
      "Hyperlocal content strategy targeting neighborhood-specific keywords",
      "Review generation system implementation",
      "Local link building through Dubai food media and influencers",
    ],
    aiSeoImplementation: [
      "AI-powered review response templates maintaining brand voice",
      "Automated local schema markup for all locations",
      "Menu optimization using NLP for food-related search queries",
      "AI-generated local landing pages for each neighborhood",
    ],
    technicalImprovements: [
      "Implemented LocalBusiness schema with all required properties",
      "Created location-specific landing pages with structured data",
      "Fixed mobile UX issues causing high bounce rates",
      "Integrated reservation system with rich snippets",
    ],
    tools: ["BrightLocal", "Google Business Profile", "Ahrefs", "Semrush Local", "Moz Local"],
    testimonial: {
      quote: "We went from page 3 to dominating the local pack for every single location. Best marketing investment we've made.",
      author: "Fatima Al-Rashid",
      role: "Marketing Director",
      company: "Dubai Bites",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 12000 },
      { month: "Feb", traffic: 15500 },
      { month: "Mar", traffic: 21000 },
      { month: "Apr", traffic: 28000 },
      { month: "May", traffic: 35500 },
      { month: "Jun", traffic: 41000 },
      { month: "Jul", traffic: 46000 },
      { month: "Aug", traffic: 52000 },
    ],
    keywordWins: [
      { keyword: "best restaurant dubai marina", position: 1, volume: 5400 },
      { keyword: "pakistani food dubai", position: 1, volume: 3600 },
      { keyword: "halal restaurant jbr", position: 2, volume: 2900 },
      { keyword: "dinner downtown dubai", position: 3, volume: 4400 },
      { keyword: "best biryani dubai", position: 1, volume: 6600 },
    ],
  },
  {
    slug: "saas-growth-uk",
    title: "SaaS Organic Growth — UK B2B",
    client: "CloudSync Pro",
    industry: "SaaS",
    location: "United Kingdom",
    description: "Full-funnel organic growth strategy for a UK B2B SaaS platform, shifting from paid-only acquisition to organic-led growth.",
    results: [
      { metric: "Organic Leads", value: "+180%", label: "in 6 months" },
      { metric: "Trial Signups", value: "+95%", label: "from organic" },
      { metric: "CAC Reduction", value: "-62%", label: "vs paid channels" },
      { metric: "Domain Rating", value: "52→71", label: "in 6 months" },
    ],
    challenge: "CloudSync Pro was spending £40K/month on PPC with declining returns. Organic search was an afterthought — no content strategy, weak backlink profile, and poor conversion optimization on landing pages.",
    strategy: [
      "Full content audit and topical authority mapping",
      "Bottom-of-funnel content targeting high-intent keywords",
      "SaaS comparison and alternative pages strategy",
      "Digital PR and link building through B2B publications",
      "Conversion rate optimization on key landing pages",
    ],
    aiSeoImplementation: [
      "AI-assisted content scaling for 50+ SEO articles monthly",
      "LLM visibility optimization — cited in ChatGPT for key queries",
      "Semantic keyword clustering for topical authority",
      "AI-powered internal linking architecture",
    ],
    technicalImprovements: [
      "Fixed JavaScript rendering issues blocking Googlebot",
      "Implemented dynamic rendering for SPA pages",
      "Core Web Vitals optimization (LCP from 3.8s to 1.4s)",
      "Structured data for SoftwareApplication and Review schemas",
    ],
    tools: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "Hotjar", "Clearbit"],
    testimonial: {
      quote: "The shift from paid-only to organic-driven growth transformed our unit economics. Best investment in company history.",
      author: "James Mitchell",
      role: "Head of Growth",
      company: "CloudSync Pro",
    },
    trafficGrowth: [
      { month: "Jan", traffic: 8500 },
      { month: "Feb", traffic: 11200 },
      { month: "Mar", traffic: 15800 },
      { month: "Apr", traffic: 22100 },
      { month: "May", traffic: 29500 },
      { month: "Jun", traffic: 38000 },
      { month: "Jul", traffic: 47000 },
      { month: "Aug", traffic: 58000 },
    ],
    keywordWins: [
      { keyword: "cloud data sync software", position: 1, volume: 2900 },
      { keyword: "enterprise file sharing", position: 2, volume: 4400 },
      { keyword: "best data migration tools", position: 3, volume: 3600 },
      { keyword: "secure cloud storage business", position: 1, volume: 2200 },
      { keyword: "gdpr compliant cloud storage", position: 2, volume: 1800 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // ➕ NAYA CASE STUDY ADD KARO — Template copy karo neeche se
  // ════════════════════════════════════════════════════════════
  //
  // {
  //   slug: "client-name-industry",           // URL: /case-studies/client-name-industry/
  //   title: "Project Title",
  //   client: "Client Company Name",
  //   industry: "E-Commerce",                 // Options: E-Commerce, Restaurant, SaaS,
  //                                           //          Local Business, Healthcare, Finance
  //   location: "Pakistan",
  //   description: "Ek ya do sentence mein project ka summary.",
  //   results: [
  //     { metric: "Organic Traffic", value: "+250%", label: "in 6 months" },
  //     { metric: "Revenue",         value: "+180%", label: "from organic" },
  //     { metric: "Keywords",        value: "5,000+", label: "top 10" },
  //     { metric: "Domain Rating",   value: "45→68", label: "6 months" },
  //   ],
  //   challenge: "Client ka masla kya tha...",
  //   strategy: [
  //     "Step 1...",
  //     "Step 2...",
  //   ],
  //   aiSeoImplementation: [
  //     "AI implementation detail 1...",
  //   ],
  //   technicalImprovements: [
  //     "Technical fix 1...",
  //   ],
  //   tools: ["Ahrefs", "Semrush", "Screaming Frog"],
  //   testimonial: {
  //     quote: "Client ka quote...",
  //     author: "Client Name",
  //     role: "CEO",
  //     company: "Company Name",
  //   },
  //   trafficGrowth: [
  //     { month: "Jan", traffic: 5000 },
  //     { month: "Feb", traffic: 7000 },
  //     { month: "Mar", traffic: 10000 },
  //     { month: "Apr", traffic: 14000 },
  //     { month: "May", traffic: 18000 },
  //     { month: "Jun", traffic: 23000 },
  //     { month: "Jul", traffic: 29000 },
  //     { month: "Aug", traffic: 36000 },
  //   ],
  //   keywordWins: [
  //     { keyword: "your main keyword", position: 1, volume: 5000 },
  //     { keyword: "second keyword",    position: 2, volume: 3000 },
  //     { keyword: "third keyword",     position: 3, volume: 2000 },
  //     { keyword: "fourth keyword",    position: 1, volume: 1500 },
  //     { keyword: "fifth keyword",     position: 2, volume: 1000 },
  //   ],
  // },
];
