import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Code2, Brain, Target, Layers, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About | SEO Expert Pakistan",
  description: "Learn about the engineering-first SEO strategist behind SEO Expert Pakistan. 8+ years of technical SEO, AI optimization, and global client success.",
  openGraph: {
    title: "About | SEO Expert Pakistan",
    description: "Engineering-first SEO strategist with 8+ years of global experience.",
    url: "https://seoexpert.pk/about/",
  },
};

const milestones = [
  { year: "2016", title: "Started SEO Career",       description: "Began as a technical SEO specialist at a Lahore-based agency." },
  { year: "2018", title: "First Enterprise Client",   description: "Led SEO for a major Pakistani e-commerce platform with 100K+ products." },
  { year: "2020", title: "Global Expansion",           description: "Started serving international clients in UAE, UK, and USA." },
  { year: "2022", title: "AI SEO Pioneer",             description: "Began integrating AI and LLM optimization into SEO strategies." },
  { year: "2024", title: "LLM Visibility Focus",       description: "Launched dedicated GEO and AEO services for the AI search era." },
];

const values = [
  { icon: Code2,   title: "Technical Excellence", description: "Engineering-grade precision in every audit and implementation." },
  { icon: Brain,   title: "Data-Driven",           description: "Decisions backed by analytics, not assumptions." },
  { icon: Target,  title: "Client Partnership",    description: "Long-term relationships, not transactional projects." },
  { icon: Layers,  title: "Global Mindset",        description: "Local expertise with international best practices." },
];

const facts = [
  { label: "Experience",          value: "8+ Years"             },
  { label: "Clients Served",      value: "50+"                  },
  { label: "Countries",           value: "15+"                  },
  { label: "Keywords Ranked",     value: "12,000+"              },
  { label: "Avg. Traffic Lift",   value: "+340%"                },
  { label: "Certifications",      value: "Google, HubSpot, SEMrush" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* ── Hero ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <ScrollReveal>
              <span className="section-label">About</span>
              <h1 className="font-heading font-extrabold text-5xl lg:text-6xl text-white leading-[1.0] mb-6">
                The Mind Behind<br /><span className="text-lime-accent">The Metrics</span>
              </h1>
              <p className="text-lg text-light-muted leading-relaxed mb-6">
                I&apos;m not just an SEO consultant—I&apos;m a digital visibility engineer. My approach
                combines deep technical expertise with cutting-edge AI strategies.
              </p>
              <div className="flex items-center gap-2 text-sm text-light-muted">
                <MapPin className="w-4 h-4 text-lime-accent" />
                <span>Karachi, Pakistan</span>
                <span className="text-white/20 mx-1">·</span>
                <Calendar className="w-4 h-4 text-lime-accent" />
                <span>8+ Years Experience</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile image */}
          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-dark-tertiary border border-white/10 shadow-2xl shadow-black/50">
                <Image
                  src="/images/faisal.png"
                  alt="SEO Expert — professional workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-lime-accent text-dark rounded-xl font-bold text-sm shadow-xl" style={{ boxShadow: "0 8px 24px rgba(232,255,71,0.3)" }}>
                AI-Era SEO Expert
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Story + Stats ── */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-white">From Code to Rankings</h2>
              <p className="text-light-muted leading-relaxed text-sm">
                My journey began in software development. While building web applications, I became
                obsessed with why some sites performed better than others. That curiosity led me down
                the rabbit hole of search algorithms, technical architecture, and AI-powered optimization.
              </p>
              <p className="text-light-muted leading-relaxed text-sm">
                Today, I operate at the intersection of engineering and marketing. I don&apos;t just
                optimize meta tags—I architect entire digital ecosystems designed for maximum visibility
                across traditional search engines and emerging AI platforms.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Next.js", "React", "Python", "Node.js", "Google Cloud", "AWS", "TensorFlow", "NLP"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-dark-secondary border border-white/10 text-xs font-mono text-light-muted hover:border-lime-accent/30 hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="p-6 rounded-2xl bg-dark-secondary border border-white/[6%] shadow-lg">
              <h3 className="font-heading font-bold text-lg text-white mb-5">Quick Facts</h3>
              <div className="space-y-0 divide-y divide-white/[5%]">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between py-3">
                    <span className="text-sm text-light-muted">{fact.label}</span>
                    <span className="font-heading font-semibold text-white text-sm">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Core Principles ── */}
        <div className="mb-24">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl text-white text-center mb-10">Core Principles</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-dark-secondary border border-white/[6%] hover:border-lime-accent/20 transition-all duration-300 text-center h-full group">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-lime-accent mb-4 group-hover:scale-110 transition-transform duration-200" style={{ background: "rgba(232,255,71,0.08)" }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-sm mb-2">{value.title}</h3>
                    <p className="text-xs text-light-muted leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div>
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl text-white text-center mb-12">My Journey</h2>
          </ScrollReveal>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime-accent/25 to-transparent" />
            {milestones.map((ms, i) => (
              <ScrollReveal key={ms.year} delay={i * 0.1}>
                <div className="relative flex items-start gap-6 mb-8 last:mb-0">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-dark border-2 border-lime-accent/30 flex items-center justify-center shrink-0 group-hover:border-lime-accent transition-colors">
                    <span className="font-mono text-[10px] text-lime-accent font-bold">{ms.year}</span>
                  </div>
                  <div className="pt-2.5 pb-2">
                    <h3 className="font-heading font-bold text-base text-white mb-1">{ms.title}</h3>
                    <p className="text-sm text-light-muted">{ms.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
