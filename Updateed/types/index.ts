export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  description: string;
  results: { metric: string; value: string; label: string }[];
  challenge: string;
  strategy: string[];
  aiSeoImplementation: string[];
  technicalImprovements: string[];
  tools: string[];
  testimonial: { quote: string; author: string; role: string; company: string };
  trafficGrowth: { month: string; traffic: number }[];
  keywordWins: { keyword: string; position: number; volume: number }[];
}

export interface NavLink {
  label: string;
  href: string;
}
