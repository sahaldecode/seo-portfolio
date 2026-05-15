import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { caseStudies } from "@/content/case-studies/data";

export const metadata: Metadata = {
  title: "Case Studies | SEO Expert Pakistan",
  description: "Explore proven SEO results: +340% traffic growth, local SEO domination, and B2B SaaS scale-ups. Real data from real clients.",
  openGraph: {
    title: "Case Studies | SEO Expert Pakistan",
    description: "Proven SEO results with real client data and metrics.",
    url: "https://seoexpert.pk/case-studies/",
  },
};

const industryImages: Record<string, string> = {
  "E-Commerce":     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=380&fit=crop",
  "Restaurant":     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=380&fit=crop",
  "SaaS":           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop",
  "Local Business": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=380&fit=crop",
  "Healthcare":     "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=380&fit=crop",
  "Finance":        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=380&fit=crop",
};
const fallbackImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=380&fit=crop";

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="section-label">Portfolio</span>
            <h1 className="font-heading font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-6">
              Results That<br /><span className="text-lime-accent">Speak Loud</span>
            </h1>
            <p className="text-xl text-light-muted max-w-2xl">
              Real clients. Real data. Real impact. Every case study includes full transparency on strategy, implementation, and outcomes.
            </p>
          </ScrollReveal>
        </div>

        {/* Stats bar */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-xl">
            {[
              { value: "50+",    label: "Projects" },
              { value: "+340%", label: "Avg Traffic Lift" },
              { value: "15+",   label: "Countries" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-dark-secondary border border-white/[6%]">
                <div className="font-heading font-extrabold text-2xl text-lime-accent">{s.value}</div>
                <div className="text-xs text-light-muted font-mono mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.12}>
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link href={`/case-studies/${study.slug}/`}>
                <article className="group block bg-dark-secondary rounded-2xl border border-white/[6%] overflow-hidden hover:border-lime-accent/25 transition-all duration-300 h-full shadow-lg shadow-black/20">
                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden bg-dark-tertiary">
                    <Image
                      src={industryImages[study.industry] ?? fallbackImg}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-lime-accent border border-lime-accent/25 backdrop-blur-sm" style={{background:"rgba(8,8,8,0.75)"}}>
                        {study.industry}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-white/70 border border-white/10 backdrop-blur-sm" style={{background:"rgba(8,8,8,0.75)"}}>
                        {study.location}
                      </span>
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-lime-accent flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-dark" />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-base text-white mb-1.5 group-hover:text-lime-accent transition-colors line-clamp-1">
                      {study.title}
                    </h3>
                    <p className="text-xs text-light-muted mb-4 line-clamp-2 leading-relaxed">{study.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.slice(0, 2).map((result) => (
                        <div key={result.metric} className="p-2.5 rounded-lg border border-white/[6%]" style={{background:"rgba(232,255,71,0.04)"}}>
                          <div className="font-heading font-bold text-sm text-lime-accent leading-none mb-0.5">{result.value}</div>
                          <div className="text-[9px] text-light-muted uppercase font-mono tracking-wide">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center p-10 rounded-2xl bg-dark-secondary border border-white/[6%]">
            <h2 className="font-heading font-bold text-2xl text-white mb-3">Want to be the next success story?</h2>
            <p className="text-light-muted mb-6 max-w-md mx-auto text-sm">Book a free 30-minute strategy call and let's map out your growth plan.</p>
            <Link href="/contact/"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-lime-accent text-dark font-bold rounded-full hover:bg-white transition-all text-sm"
              style={{boxShadow:"0 0 30px rgba(232,255,71,0.18)"}}>
              Get Free Audit
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
