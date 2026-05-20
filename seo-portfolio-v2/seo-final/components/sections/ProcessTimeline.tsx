"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Search, FileSearch, Wrench, Rocket, BarChart3, Repeat } from "lucide-react";

const steps = [
  { number: "01", icon: Search,    title: "Discovery & Audit",         description: "Deep-dive technical audit, competitor analysis, and opportunity mapping across your entire digital footprint.",   duration: "Week 1",    color: "rgba(232,255,71,0.10)" },
  { number: "02", icon: FileSearch, title: "Strategy Development",     description: "Custom SEO roadmap with prioritized actions, AI-driven insights, and measurable milestone targets.",             duration: "Week 2",    color: "rgba(232,255,71,0.08)" },
  { number: "03", icon: Wrench,    title: "Technical Implementation",  description: "Fix critical issues, implement schema, optimize Core Web Vitals, and resolve crawl/indexation errors.",          duration: "Weeks 3–4", color: "rgba(232,255,71,0.10)" },
  { number: "04", icon: Rocket,    title: "Content & AI Optimization", description: "Deploy AI content strategy, build topical authority, launch link campaigns and LLM visibility tactics.",       duration: "Ongoing",   color: "rgba(232,255,71,0.08)" },
  { number: "05", icon: BarChart3, title: "Measure & Report",          description: "Real-time dashboards, weekly performance updates, and monthly strategy reviews with full attribution.",          duration: "Ongoing",   color: "rgba(232,255,71,0.10)" },
  { number: "06", icon: Repeat,    title: "Iterate & Scale",           description: "Continuous optimization based on data, algorithm updates, AI search trends, and competitive shifts.",            duration: "Ongoing",   color: "rgba(232,255,71,0.08)" },
];

export function ProcessTimeline() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-25" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[180px] pointer-events-none" style={{background:"rgba(232,255,71,0.04)"}} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="section-label">Process</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-4">
              How I Deliver <span className="text-lime-accent">Results</span>
            </h2>
            <p className="text-base text-light-muted">
              A proven 6-phase methodology that transforms websites into organic traffic machines.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps — clean vertical timeline on mobile, 2-col on desktop */}
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ borderColor: "rgba(232,255,71,0.25)", y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 p-5 rounded-2xl bg-dark-secondary border border-white/[6%] transition-all duration-300 group h-full"
                >
                  {/* Icon + number */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lime-accent group-hover:scale-110 transition-transform duration-200" style={{background:step.color}}>
                      <Icon className="w-4.5 h-4.5" style={{width:"18px", height:"18px"}} />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-lime-accent/40">{step.number}</span>
                  </div>

                  {/* Text */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-heading font-bold text-sm text-white">{step.title}</h3>
                      <span className="text-[9px] font-mono text-lime-accent/60 shrink-0 px-2 py-0.5 rounded-full" style={{background:"rgba(232,255,71,0.06)", border:"1px solid rgba(232,255,71,0.1)"}}>
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs text-light-muted leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
