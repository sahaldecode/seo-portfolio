import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin, Clock, Wrench, Brain, TrendingUp, Trophy, Key } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { caseStudies } from "@/content/case-studies/data";

// ─── Types ────────────────────────────────────────────────────────
type CaseStudy = (typeof caseStudies)[number] & {
  timeline?: string;
  beforeAfter?: {
    before: { clicks: string; impressions: string; ctr: string; position: string };
    after:  { clicks: string; impressions: string; ctr: string; position: string };
  };
};

// ─── Industry images ─────────────────────────────────────────────
const industryImages: Record<string, string> = {
  "E-Commerce":     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop",
  "Restaurant":     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=600&fit=crop",
  "SaaS":           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop",
  "Local Business": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=600&fit=crop",
  "Healthcare":     "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=600&fit=crop",
  "Finance":        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&h=600&fit=crop",
};
const fallback = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop";

// ─── Metadata ────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug) as CaseStudy | undefined;
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | SEO Expert Pakistan`,
    description: study.description,
    openGraph: { title: study.title, description: study.description, url: `https://seoexpert.pk/case-studies/${slug}/` },
  };
}

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

// ─── Bar chart heights ────────────────────────────────────────────
function getBarHeights(data: { traffic: number }[]) {
  const max = Math.max(...data.map((d) => d.traffic));
  return data.map((d) => Math.round((d.traffic / max) * 100));
}

// ─── Page ────────────────────────────────────────────────────────
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug) as CaseStudy | undefined;
  if (!study) notFound();

  const heights = getBarHeights(study.trafficGrowth);
  const imgSrc  = industryImages[study.industry] ?? fallback;

  const baMetrics = [
    { key: "clicks",      label: "Total Clicks"     },
    { key: "impressions", label: "Impressions"       },
    { key: "ctr",         label: "CTR"               },
    { key: "position",    label: "Avg Position"      },
  ] as const;

  return (
    <div className="min-h-screen bg-dark pt-[72px]">
      {/* ── HERO ── */}
      <section className="relative py-12 lg:py-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[160px] pointer-events-none" style={{background:"rgba(232,255,71,0.06)"}} />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <Link href="/case-studies/"
            className="inline-flex items-center gap-2 text-light-muted hover:text-white text-sm mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Case Studies
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-lime-accent border border-lime-accent/25" style={{background:"rgba(232,255,71,0.08)"}}>
              {study.industry}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-light-muted border border-white/10 bg-dark-secondary">
              <MapPin className="w-3 h-3" /> {study.location}
            </span>
            {study.timeline && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-light-muted border border-white/10 bg-dark-secondary">
                <Clock className="w-3 h-3" /> {study.timeline}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-heading font-extrabold text-white leading-[1.0] tracking-tight mb-5"
            style={{fontSize:"clamp(2.2rem,5vw,3.8rem)"}}>
            {study.title} —{" "}
            <span className="text-lime-accent">{study.industry} Growth</span>
          </h1>
          <p className="text-lg text-light-muted max-w-2xl mb-10 leading-relaxed">{study.description}</p>

          {/* ── Hero 2-col: Image + Contact Form ── */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 mb-10">
            {/* Left — banner image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <Image src={imgSrc} alt={study.title} fill sizes="(max-width:1024px) 100vw, 65vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
            </div>

            {/* Right — inline contact form */}
            <div className="rounded-2xl border border-white/10 bg-dark-secondary p-6 flex flex-col" id="audit">
              <h3 className="font-heading font-bold text-white text-lg mb-1">Get a Similar Growth Plan</h3>
              <p className="text-xs text-light-muted mb-5">Request a free audit and see what is holding your website back.</p>
              <form className="flex flex-col gap-3 flex-1" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" required
                  className="w-full px-4 py-3 rounded-xl bg-dark border border-white/8 text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
                <input type="tel" placeholder="Phone / WhatsApp"
                  className="w-full px-4 py-3 rounded-xl bg-dark border border-white/8 text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
                <input type="text" placeholder="Your name" required
                  className="w-full px-4 py-3 rounded-xl bg-dark border border-white/8 text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
                <input type="url" placeholder="Website URL"
                  className="w-full px-4 py-3 rounded-xl bg-dark border border-white/8 text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
                <textarea rows={3} placeholder="Tell me about your business..."
                  className="w-full px-4 py-3 rounded-xl bg-dark border border-white/8 text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all resize-none" />
                <button type="submit"
                  className="w-full py-3.5 rounded-xl bg-lime-accent text-dark font-bold text-sm hover:bg-white transition-all mt-auto"
                  style={{boxShadow:"0 0 24px rgba(232,255,71,0.2)"}}>
                  Submit Audit Request
                </button>
              </form>
            </div>
          </div>

          {/* ── 4 Result stats ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {study.results.map((r) => (
              <div key={r.metric} className="p-5 rounded-xl bg-dark-secondary border border-white/[6%] text-center hover:border-lime-accent/20 transition-colors">
                <div className="font-heading font-extrabold text-lime-accent text-3xl leading-none mb-1">{r.value}</div>
                <div className="text-xs text-light-muted font-mono uppercase tracking-wide">{r.metric}</div>
                <div className="text-[10px] text-lime-accent/50 font-mono mt-0.5">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN BODY ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* 2-col: content + sticky sidebar */}
          <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-12 lg:gap-14 items-start">

            {/* ── LEFT CONTENT ── */}
            <div className="space-y-14">

              {/* Challenge */}
              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent" style={{background:"rgba(232,255,71,0.1)"}}>
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-white">The Challenge</h2>
                  </div>
                  <p className="text-light-muted leading-relaxed text-[15px]">{study.challenge}</p>
                </div>
              </ScrollReveal>

              {/* Strategy */}
              <ScrollReveal delay={0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent" style={{background:"rgba(232,255,71,0.1)"}}>
                      <Trophy className="w-4 h-4" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-white">SEO Strategy</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {study.strategy.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-light-muted">
                        <CheckCircle2 className="w-4 h-4 text-lime-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* AI SEO */}
              <ScrollReveal delay={0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent" style={{background:"rgba(232,255,71,0.1)"}}>
                      <Brain className="w-4 h-4" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-white">AI SEO Implementation</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {study.aiSeoImplementation.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-light-muted">
                        <CheckCircle2 className="w-4 h-4 text-lime-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Technical */}
              <ScrollReveal delay={0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent" style={{background:"rgba(232,255,71,0.1)"}}>
                      <Wrench className="w-4 h-4" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-white">Technical Improvements</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {study.technicalImprovements.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-light-muted">
                        <CheckCircle2 className="w-4 h-4 text-lime-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Traffic Growth Chart */}
              <ScrollReveal delay={0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent" style={{background:"rgba(232,255,71,0.1)"}}>
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-white">Traffic Growth</h2>
                  </div>
                  <div className="rounded-2xl bg-dark-secondary border border-white/[6%] p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] text-light-muted/60 font-mono uppercase tracking-widest">Monthly Organic Traffic</span>
                      <span className="text-[10px] font-mono text-lime-accent px-2.5 py-1 rounded-full" style={{background:"rgba(232,255,71,0.08)"}}>
                        {study.results[0].value} Growth
                      </span>
                    </div>
                    <div className="flex items-end gap-2 h-36">
                      {heights.map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                          <div className="w-full rounded-t-sm transition-all"
                            style={{height:`${h}%`, background: i === heights.length-1 ? "#e8ff47" : `rgba(232,255,71,${0.12 + i * 0.025})`}} />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {study.trafficGrowth.map((d) => (
                        <span key={d.month} className="text-[9px] text-light-muted/40 font-mono flex-1 text-center">{d.month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Before / After */}
              {study.beforeAfter && (
                <ScrollReveal delay={0.05}>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent" style={{background:"rgba(232,255,71,0.1)"}}>
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h2 className="font-heading font-bold text-xl text-white">Before & After Results</h2>
                    </div>
                    <div className="rounded-2xl border border-white/[6%] overflow-hidden">
                      {/* Header row */}
                      <div className="grid grid-cols-5 gap-0 bg-dark-tertiary">
                        <div className="p-3 border-r border-white/5" />
                        {baMetrics.map((m) => (
                          <div key={m.key} className="p-3 text-center border-r border-white/5 last:border-r-0">
                            <span className="text-[10px] font-mono text-light-muted/60 uppercase tracking-wide">{m.label}</span>
                          </div>
                        ))}
                      </div>
                      {/* Before row */}
                      <div className="grid grid-cols-5 gap-0 bg-dark-secondary border-t border-white/5">
                        <div className="p-4 border-r border-white/5 flex items-center">
                          <span className="font-heading font-bold text-sm text-light-muted">Before</span>
                        </div>
                        {baMetrics.map((m) => (
                          <div key={m.key} className="p-4 text-center border-r border-white/5 last:border-r-0">
                            <div className="font-heading font-bold text-base text-white">{study.beforeAfter!.before[m.key]}</div>
                          </div>
                        ))}
                      </div>
                      {/* After row */}
                      <div className="grid grid-cols-5 gap-0 border-t border-white/5" style={{background:"rgba(232,255,71,0.03)"}}>
                        <div className="p-4 border-r border-white/5 flex items-center">
                          <span className="font-heading font-bold text-sm text-lime-accent">After</span>
                        </div>
                        {baMetrics.map((m) => (
                          <div key={m.key} className="p-4 text-center border-r border-white/5 last:border-r-0">
                            <div className="font-heading font-bold text-base text-lime-accent">{study.beforeAfter!.after[m.key]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Keyword Wins */}
              <ScrollReveal delay={0.05}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lime-accent" style={{background:"rgba(232,255,71,0.1)"}}>
                      <Key className="w-4 h-4" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-white">Keyword Ranking Wins</h2>
                  </div>
                  <div className="rounded-2xl border border-white/[6%] overflow-hidden">
                    <div className="grid grid-cols-3 bg-dark-tertiary px-5 py-3">
                      {["Keyword", "Position", "Search Intent"].map((h) => (
                        <div key={h} className="text-[10px] font-mono text-light-muted/60 uppercase tracking-wider">{h}</div>
                      ))}
                    </div>
                    {study.keywordWins.map((kw, i) => (
                      <div key={kw.keyword}
                        className={`grid grid-cols-3 px-5 py-4 border-t border-white/[5%] items-center hover:bg-dark-tertiary transition-colors ${i%2===0 ? "bg-dark-secondary" : "bg-dark"}`}>
                        <div className="text-sm text-white font-mono pr-4 truncate">{kw.keyword}</div>
                        <div>
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full font-heading font-bold text-lime-accent text-[11px]"
                            style={{background:"rgba(232,255,71,0.1)"}}>
                            #{kw.position}
                          </span>
                        </div>
                        <div className="text-xs text-light-muted font-mono">{kw.volume.toLocaleString()} / mo</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA panel */}
              <ScrollReveal delay={0.05}>
                <div className="rounded-2xl border p-8 text-center"
                  style={{background:"linear-gradient(135deg,rgba(17,17,17,0.95),rgba(12,12,12,0.95))", borderColor:"rgba(255,255,255,0.08)"}}>
                  <h2 className="font-heading font-extrabold text-2xl text-white mb-3">Want Similar Results?</h2>
                  <p className="text-light-muted max-w-lg mx-auto text-sm mb-6 leading-relaxed">
                    Let&apos;s review your website, competitors, and top SEO opportunities. You&apos;ll get a clear growth roadmap before you invest.
                  </p>
                  <a href="#audit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-lime-accent text-dark font-bold rounded-full hover:bg-white transition-all text-sm"
                    style={{boxShadow:"0 0 30px rgba(232,255,71,0.2)"}}>
                    Start Your SEO Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT STICKY SIDEBAR ── */}
            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">

              {/* Client info card */}
              <div className="rounded-2xl bg-dark-secondary border border-white/[6%] overflow-hidden">
                <div className="px-5 py-4 border-b border-white/5">
                  <span className="text-[10px] font-mono text-light-muted/60 uppercase tracking-widest">Client Details</span>
                </div>
                <div className="divide-y divide-white/[4%]">
                  {[
                    { label: "Client",    value: study.client   },
                    { label: "Industry",  value: study.industry  },
                    { label: "Location",  value: study.location  },
                    { label: "Timeline",  value: study.timeline ?? "Ongoing" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between px-5 py-3.5">
                      <span className="text-xs text-light-muted">{row.label}</span>
                      <span className="text-xs font-semibold text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools card */}
              <div className="rounded-2xl bg-dark-secondary border border-white/[6%] p-5">
                <span className="text-[10px] font-mono text-light-muted/60 uppercase tracking-widest block mb-4">Tools Used</span>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <span key={tool}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono text-light-muted border border-white/10 bg-dark hover:border-lime-accent/20 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial card */}
              <div className="rounded-2xl border p-5" style={{background:"rgba(232,255,71,0.04)", borderColor:"rgba(232,255,71,0.18)"}}>
                <div className="text-3xl text-lime-accent mb-2 font-heading leading-none">&ldquo;</div>
                <p className="text-sm text-light-muted leading-relaxed mb-4 italic">{study.testimonial.quote}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-lime-accent/10">
                  <div className="w-9 h-9 rounded-full bg-lime-accent flex items-center justify-center text-dark font-heading font-bold text-sm shrink-0">
                    {study.testimonial.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{study.testimonial.author}</div>
                    <div className="text-xs text-light-muted">{study.testimonial.role}, {study.testimonial.company}</div>
                  </div>
                </div>
              </div>

              {/* Related CTA */}
              <Link href="/case-studies/"
                className="group flex items-center justify-between p-4 rounded-xl bg-dark-secondary border border-white/[6%] hover:border-lime-accent/20 transition-all">
                <span className="text-sm font-medium text-white">View All Case Studies</span>
                <ArrowUpRight className="w-4 h-4 text-lime-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
