"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Cpu, Zap, FileCode, Brain, PenTool, Layers, MapPin, Database, Globe, Link2, BarChart3 } from "lucide-react";

const categories = ["All", "Technical", "AI & Content", "Local & Entity", "Analytics"];

const skillsData = [
  { name: "Technical SEO",   category: "Technical",       level: 98, icon: Cpu      },
  { name: "Core Web Vitals", category: "Technical",       level: 95, icon: Zap      },
  { name: "Schema Markup",   category: "Technical",       level: 96, icon: FileCode  },
  { name: "JavaScript SEO",  category: "Technical",       level: 92, icon: FileCode  },
  { name: "AI SEO",          category: "AI & Content",    level: 94, icon: Brain    },
  { name: "Content Strategy",category: "AI & Content",    level: 93, icon: PenTool  },
  { name: "Semantic SEO",    category: "AI & Content",    level: 91, icon: Layers   },
  { name: "Local SEO",       category: "Local & Entity",  level: 95, icon: MapPin   },
  { name: "Entity SEO",      category: "Local & Entity",  level: 90, icon: Database },
  { name: "GEO / AEO",       category: "Local & Entity",  level: 88, icon: Globe    },
  { name: "Link Building",   category: "Analytics",       level: 89, icon: Link2    },
  { name: "Data Analytics",  category: "Analytics",       level: 92, icon: BarChart3 },
];

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = activeCategory === "All" ? skillsData : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none" style={{background:"rgba(232,255,71,0.03)"}} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal>
            <span className="section-label">Expertise</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-4">
              Skills That <span className="text-lime-accent">Drive Results</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Category filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-lime-accent text-dark shadow-lg"
                    : "bg-dark text-light-muted hover:text-white border border-white/10 hover:border-white/20"
                }`}
                style={activeCategory === cat ? {boxShadow:"0 4px 16px rgba(232,255,71,0.2)"} : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills */}
        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.25 }}
                    whileHover={{ y: -2 }}
                    className="group p-4 rounded-xl bg-dark border border-white/[6%] hover:border-lime-accent/20 transition-colors duration-200 cursor-default"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent group-hover:scale-110 transition-transform duration-200" style={{background:"rgba(232,255,71,0.08)"}}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-white text-sm">{skill.name}</span>
                      </div>
                      <span className="font-mono text-sm font-bold text-lime-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-dark-tertiary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-lime-accent/50 to-lime-accent"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
