import type { Metadata } from "next";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { Services } from "@/components/sections/Services";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Cpu, Brain, Globe, MapPin, FileCode, BarChart3, ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | SEO Expert Pakistan",
  description: "Comprehensive SEO services: Technical SEO, AI SEO, AEO, GEO, LLM Visibility, Semantic SEO, Entity SEO, and Local SEO.",
  openGraph: {
    title: "Services | SEO Expert Pakistan",
    description: "Comprehensive SEO services for the AI search era.",
    url: "https://faisalseo.com/services/",
  },
};

const serviceDetails: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}[] = [
  {
    icon: Cpu,
    title: "Technical SEO",
    description: "Engineering-grade technical optimization that fixes crawlability, indexation, and performance issues at the root level.",
    features: ["Site architecture & crawl optimization", "Core Web Vitals optimization", "JavaScript SEO & dynamic rendering", "Schema markup implementation", "XML sitemaps & robots.txt optimization", "Canonicalization & pagination"],
  },
  {
    icon: Brain,
    title: "AI SEO & LLM Visibility",
    description: "Future-proof your search presence by optimizing for AI engines, not just traditional search algorithms.",
    features: ["LLM citation optimization", "Generative Engine Optimization (GEO)", "AI content system design", "Conversational query optimization", "Structured data for AI comprehension", "Predictive search trend analysis"],
  },
  {
    icon: Globe,
    title: "AEO — Answer Engine Optimization",
    description: "Be the answer that AI assistants and voice search provide. Structured for featured snippets and direct answers.",
    features: ["Featured snippet optimization", "Voice search preparation", "FAQ schema & structured answers", "People Also Ask targeting", "Knowledge panel optimization", "Zero-click search strategy"],
  },
  {
    icon: MapPin,
    title: "Semantic & Entity SEO",
    description: "Move beyond keywords to topics and entities. Build topical authority that algorithms truly understand.",
    features: ["Entity recognition & optimization", "Topical authority mapping", "Internal linking architecture", "Content clustering strategy", "Knowledge graph integration", "E-E-A-T signal enhancement"],
  },
  {
    icon: FileCode,
    title: "Local SEO",
    description: "Dominate local search results and map packs. From GBP optimization to local citation ecosystems.",
    features: ["Google Business Profile optimization", "Local citation building", "Review generation strategy", "Local content creation", "Geo-targeted landing pages", "Near-me query optimization"],
  },
  {
    icon: BarChart3,
    title: "SEO Analytics & Reporting",
    description: "Custom dashboards and reporting that show real business impact, not just vanity metrics.",
    features: ["Custom Looker Studio dashboards", "Revenue attribution tracking", "Conversion path analysis", "Competitor monitoring", "Monthly strategy reviews", "Real-time alert systems"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="section-label">Services</span>
            <h1 className="font-heading font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-6">
              Everything You Need<br /><span className="text-lime-accent">To Rank & Convert</span>
            </h1>
            <p className="text-xl text-light-muted">
              Comprehensive SEO services engineered for the AI search era. No fluff—just strategies that deliver measurable ROI.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24" staggerDelay={0.1}>
          {serviceDetails.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="group p-6 rounded-xl bg-dark-secondary border border-white/5 hover:border-lime-accent/20 transition-all h-full">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-lime-accent/10 text-lime-accent mb-4 group-hover:bg-lime-accent/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-light-muted mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-light-muted">
                        <ArrowUpRight className="w-3 h-3 text-lime-accent mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal>
          <div className="text-center mb-6">
            <Link href="/contact/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-accent text-dark font-bold rounded-full hover:bg-white transition-all text-sm"
              style={{boxShadow:"0 0 30px rgba(232,255,71,0.18)"}}>
              Get Free Audit
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <Services />
      <ProcessTimeline />
    </div>
  );
}
