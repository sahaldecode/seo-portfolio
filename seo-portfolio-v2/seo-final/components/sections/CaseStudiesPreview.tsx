"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { caseStudies } from "@/content/case-studies/data";

// High-quality Unsplash placeholder images per industry
const industryImages: Record<string, string> = {
  "E-Commerce":   "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=380&fit=crop",
  "Restaurant":   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=380&fit=crop",
  "SaaS":         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop",
  "Local Business": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=380&fit=crop",
  "Healthcare":   "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=380&fit=crop",
  "Finance":      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=380&fit=crop",
};

const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=380&fit=crop";

export function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <span className="section-label">Portfolio</span>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight">
                Proven Results,<br /><span className="text-lime-accent">Real Impact</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <Link href="/case-studies/" className="group inline-flex items-center gap-2 text-sm font-medium text-lime-accent hover:text-white transition-colors">
              View All Case Studies
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.12}>
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link href={`/case-studies/${study.slug}/`}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group block bg-dark rounded-2xl border border-white/5 overflow-hidden hover:border-lime-accent/25 transition-all duration-300 h-full shadow-lg shadow-black/20"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden bg-dark-tertiary">
                    <Image
                      src={industryImages[study.industry] ?? fallbackImage}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-lime-accent border border-lime-accent/25 backdrop-blur-sm" style={{background:"rgba(8,8,8,0.7)"}}>
                        {study.industry}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-white/70 border border-white/10 backdrop-blur-sm" style={{background:"rgba(8,8,8,0.7)"}}>
                        {study.location}
                      </span>
                    </div>

                    {/* Arrow on hover */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-lime-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4 text-dark" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-base text-white mb-1.5 group-hover:text-lime-accent transition-colors line-clamp-1">
                      {study.title}
                    </h3>
                    <p className="text-xs text-light-muted mb-4 line-clamp-2 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Result chips */}
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.slice(0, 2).map((result) => (
                        <div key={result.metric} className="p-2.5 rounded-lg border border-white/[6%]" style={{background:"rgba(232,255,71,0.04)"}}>
                          <div className="font-heading font-bold text-sm text-lime-accent leading-none mb-0.5">{result.value}</div>
                          <div className="text-[9px] text-light-muted uppercase font-mono tracking-wide">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
