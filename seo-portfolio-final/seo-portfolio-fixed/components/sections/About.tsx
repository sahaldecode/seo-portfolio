"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Code2, Brain, Target, Layers, MapPin, Award, Users, TrendingUp } from "lucide-react";

const capabilities = [
  { icon: Code2, text: "Full-Stack Technical SEO" },
  { icon: Brain, text: "AI & LLM Optimization" },
  { icon: Target, text: "Conversion-Focused Strategy" },
  { icon: Layers, text: "Enterprise-Scale Architecture" },
];

const quickStats = [
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Global Clients" },
  { icon: TrendingUp, value: "+340%", label: "Avg Traffic Lift" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[220px] pointer-events-none" style={{background:"rgba(232,255,71,0.03)"}} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — Profile image */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark-tertiary border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=800&fit=crop&crop=top"
                  alt="SEO Expert — Professional consultant"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-accent/30 mb-2" style={{background:"rgba(232,255,71,0.08)"}}>
                    <MapPin className="w-3.5 h-3.5 text-lime-accent" />
                    <span className="font-mono text-xs text-lime-accent">Karachi, Pakistan</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">SEO Expert</h3>
                  <p className="text-sm text-light-muted">AI-Era SEO Strategist</p>
                </div>
              </div>

              {/* Floating quick stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-10 bg-dark-secondary border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="space-y-3">
                  {quickStats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background:"rgba(232,255,71,0.1)"}}>
                          <Icon className="w-4 h-4 text-lime-accent" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-sm text-white leading-none">{s.value}</div>
                          <div className="text-[10px] text-light-muted font-mono">{s.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-5 py-2.5 bg-lime-accent text-dark font-bold text-xs rounded-xl shadow-xl"
                style={{boxShadow:"0 8px 24px rgba(232,255,71,0.3)"}}
              >
                8+ Years Experience
              </motion.div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Content */}
          <div className="space-y-6">
            <ScrollReveal>
              <span className="section-label">About Me</span>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-[1.05] mb-4">
                Engineering-First<br /><span className="text-lime-accent">SEO Strategist</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-light-muted leading-relaxed text-sm lg:text-base">
                I bridge the gap between engineering and marketing. With a background in software
                development and 8+ years in search optimization, I don&apos;t just do SEO—I architect
                digital visibility systems that scale.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-light-muted leading-relaxed text-sm lg:text-base">
                Based in Pakistan, I work with global brands across e-commerce, SaaS, and local
                businesses. My approach combines technical rigor with AI-powered insights to
                deliver measurable, lasting results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-2.5">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cap.text} className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-secondary border border-white/5 hover:border-lime-accent/20 transition-colors">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background:"rgba(232,255,71,0.08)"}}>
                        <Icon className="w-4 h-4 text-lime-accent" />
                      </div>
                      <span className="text-sm font-medium text-white leading-tight">{cap.text}</span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div>
                <p className="text-[11px] text-light-muted/60 font-mono uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Python", "Google Cloud", "AI/ML", "Data Analysis", "Schema.org"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-full bg-dark-tertiary border border-white/10 text-xs font-mono text-light-muted hover:border-lime-accent/30 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
