"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const testimonialsData = [
  {
    quote: "The transformation was incredible. We went from SEO being an afterthought to it being our primary revenue driver. The AI-powered approach gave us a competitive edge we didn't know was possible.",
    author: "Ahmed Khan",
    role: "CEO",
    company: "FashionHub PK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
    result: "+340% Traffic",
  },
  {
    quote: "We went from being buried on page 3 to dominating the local pack for every single location. The reservation increase speaks for itself—this was the best marketing investment we've made.",
    author: "Fatima Al-Rashid",
    role: "Marketing Director",
    company: "Dubai Bites",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
    result: "+210% Reservations",
  },
  {
    quote: "The shift from paid-only to organic-driven growth transformed our unit economics. We're now acquiring enterprise customers at a fraction of the previous cost.",
    author: "James Mitchell",
    role: "Head of Growth",
    company: "CloudSync Pro",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
    result: "180% More Leads",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[220px] pointer-events-none" style={{background:"rgba(232,255,71,0.03)"}} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="section-label">Testimonials</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              Client <span className="text-lime-accent">Success Stories</span>
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {testimonialsData.map((t) => (
            <StaggerItem key={t.author}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="h-full flex flex-col p-6 rounded-2xl bg-dark-secondary border border-white/5 hover:border-lime-accent/20 transition-all duration-300 shadow-lg shadow-black/20"
              >
                {/* Stars + result badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-lime-accent text-lime-accent" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-lime-accent px-2.5 py-1 rounded-full" style={{background:"rgba(232,255,71,0.08)", border:"1px solid rgba(232,255,71,0.15)"}}>
                    {t.result}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-light-muted leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 relative">
                    <Image src={t.avatar} alt={t.author} fill sizes="40px" className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-light-muted">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
