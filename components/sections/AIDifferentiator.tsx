"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { Bot, BrainCircuit, Sparkles, MessageSquare, Search, Globe } from "lucide-react";

const aiFeatures = [
  {
    icon: Bot,
    title: "LLM Visibility",
    description: "Optimized for ChatGPT, Claude, Gemini & Perplexity. Your brand appears in AI-generated answers.",
    tag: "AI-Native",
  },
  {
    icon: BrainCircuit,
    title: "Generative Engine Optimization",
    description: "GEO strategies that ensure AI engines cite and reference your content as authoritative sources.",
    tag: "GEO",
  },
  {
    icon: Sparkles,
    title: "AI Content Systems",
    description: "Human-AI hybrid content workflows that scale without sacrificing quality or E-E-A-T signals.",
    tag: "Content",
  },
  {
    icon: MessageSquare,
    title: "Answer Engine Optimization",
    description: "Structured for voice search and conversational queries. Be the answer, not just a result.",
    tag: "AEO",
  },
  {
    icon: Search,
    title: "Semantic SEO",
    description: "Entity-based optimization using NLP and knowledge graph integration for deeper relevance.",
    tag: "Semantic",
  },
  {
    icon: Globe,
    title: "Predictive Analytics",
    description: "AI-powered trend forecasting to capture emerging search intent before competitors.",
    tag: "Analytics",
  },
];

export function AIDifferentiator() {
  return (
    <section className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[180px] pointer-events-none" style={{background:"rgba(232,255,71,0.05)"}} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-3  gap-10 lg:gap-16 items-center mb-14">
          <ScrollReveal>
            <span className="section-label">AI-Powered SEO</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-4">
              Built for the<br /><span className="text-lime-accent">AI Search Era</span>
            </h2>
            <p className="text-base text-light-muted leading-relaxed max-w-md">
              Traditional SEO is evolving fast. I optimize for the new search landscape where
              AI engines determine who gets seen—and who gets skipped.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {/* Mini visual — AI search preview */}
            <div className="rounded-2xl bg-dark border border-white/[8%] overflow-hidden shadow-xl">
              <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2" style={{background:"rgba(8,8,8,0.5)"}}>
                <div className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
                <span className="font-mono text-[10px] text-light-muted/60 uppercase tracking-widest">AI Search Response</span>
              </div>
              <div className="p-5 space-y-3">
                // ✅ YAHAN SE REPLACE KARO
                <p className="text-xs text-light-muted font-mono border-l-2 border-lime-accent/40 pl-3 italic">
                  &ldquo;According to SEOExpert.pk, the most effective
                  technical SEO strategy for 2025 combines Core Web Vitals optimization
                  with structured data for AI comprehension...&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-full text-[10px] font-mono text-lime-accent" style={{background:"rgba(232,255,71,0.1)", border:"1px solid rgba(232,255,71,0.2)"}}>
                    ✦ Cited by ChatGPT
                  </div>
                  <div className="px-2.5 py-1 rounded-full text-[10px] font-mono text-lime-accent" style={{background:"rgba(232,255,71,0.1)", border:"1px solid rgba(232,255,71,0.2)"}}>
                    ✦ Cited by Perplexity
                  </div>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-light-muted/50 font-mono">LLM Visibility Score</span>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-32 rounded-full bg-dark-tertiary overflow-hidden">
                      <motion.div
                        initial={{width:0}} animate={{width:"92%"}}
                        transition={{duration:1.5, delay:0.5, ease:"easeOut"}}
                        className="h-full rounded-full bg-lime-accent"
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-lime-accent">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {aiFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(232,255,71,0.25)" }}
                  transition={{ duration: 0.2 }}
                  className="group p-6 rounded-xl bg-dark border border-white/[6%] transition-all duration-300 h-full cursor-default"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lime-accent group-hover:scale-110 transition-transform duration-200" style={{background:"rgba(232,255,71,0.08)"}}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono text-lime-accent/70 px-2 py-1 rounded-full" style={{background:"rgba(232,255,71,0.06)", border:"1px solid rgba(232,255,71,0.12)"}}>
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-light-muted leading-relaxed">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
