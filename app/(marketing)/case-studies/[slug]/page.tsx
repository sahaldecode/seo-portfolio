import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft, ArrowUpRight, TrendingUp, Search, Zap,
  Wrench, Brain, FileCode, BarChart3, Quote, CheckCircle2
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { caseStudies } from "@/content/case-studies/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study`,
    description: study.description,
    openGraph: {
      title: `${study.title} | SEO Case Study`,
      description: study.description,
      url: `https://seoexpert.pk/case-studies/${study.slug}/`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <Link href="/case-studies/" className="inline-flex items-center gap-2 text-light-muted hover:text-lime-accent transition-colors mb-10 group text-sm">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>
        </ScrollReveal>

        <div className="mb-12">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-full bg-lime-accent/10 text-lime-accent text-xs font-mono border border-lime-accent/20">{study.industry}</span>
              <span className="px-3 py-1 rounded-full bg-dark-secondary text-light-muted text-xs font-mono border border-white/10">{study.location}</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-5">{study.title}</h1>
            <p className="text-lg text-light-muted max-w-3xl">{study.description}</p>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <ScrollReveal>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-dark-secondary border border-white/5 mb-14 shadow-2xl shadow-black/40">
            <Image
              src={
                study.industry === "E-Commerce"   ? "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop" :
                study.industry === "Restaurant"   ? "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=600&fit=crop" :
                study.industry === "SaaS"         ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop" :
                                                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop"
              }
              alt={study.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {study.results.map((result) => (
              <div
                key={result.metric}
                
                className="p-5 rounded-xl bg-dark-secondary border border-white/5 text-center"
              >
                <div className="font-heading font-bold text-2xl lg:text-3xl text-lime-accent mb-1">{result.value}</div>
                <div className="text-sm text-white font-medium mb-0.5">{result.metric}</div>
                <div className="text-[10px] text-light-muted font-mono">{result.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-lime-accent/10 flex items-center justify-center text-lime-accent">
                  <Search className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">The Challenge</h2>
              </div>
              <p className="text-light-muted leading-relaxed">{study.challenge}</p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-lime-accent/10 flex items-center justify-center text-lime-accent">
                  <Zap className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">SEO Strategy</h2>
              </div>
              <ul className="space-y-2.5">
                {study.strategy.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-light-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-lime-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-lime-accent/10 flex items-center justify-center text-lime-accent">
                  <Brain className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">AI SEO Implementation</h2>
              </div>
              <ul className="space-y-2.5">
                {study.aiSeoImplementation.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-light-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-lime-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-lime-accent/10 flex items-center justify-center text-lime-accent">
                  <Wrench className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">Technical Improvements</h2>
              </div>
              <ul className="space-y-2.5">
                {study.technicalImprovements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-light-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-lime-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-lime-accent/10 flex items-center justify-center text-lime-accent">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">Traffic Growth</h2>
              </div>
              <div className="p-5 rounded-xl bg-dark-secondary border border-white/5">
                <div className="flex items-end justify-between h-40 gap-2">
                  {study.trafficGrowth.map((data, i) => {
                    const maxTraffic = Math.max(...study.trafficGrowth.map((d) => d.traffic));
                    const height = (data.traffic / maxTraffic) * 100;
                    return (
                      <div key={data.month} className="flex-1 flex flex-col items-center gap-1.5">
                        <div
                          
                          
                          
                          
                          style={{height:`${height}%`}} className="w-full bg-lime-accent/20 rounded-t-sm hover:bg-lime-accent/40 transition-colors"
                        />
                        <span className="text-[9px] text-light-muted/60 font-mono">{data.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-lime-accent/10 flex items-center justify-center text-lime-accent">
                  <FileCode className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">Keyword Ranking Wins</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-3 text-[10px] font-mono text-light-muted uppercase">Keyword</th>
                      <th className="text-center py-3 px-3 text-[10px] font-mono text-light-muted uppercase">Position</th>
                      <th className="text-right py-3 px-3 text-[10px] font-mono text-light-muted uppercase">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.keywordWins.map((kw) => (
                      <tr key={kw.keyword} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-3 text-sm text-white">{kw.keyword}</td>
                        <td className="py-3 px-3 text-center">
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                            kw.position === 1 ? "bg-lime-accent/20 text-lime-accent" : kw.position === 2 ? "bg-yellow-500/20 text-yellow-500" : "bg-orange-500/20 text-orange-500"
                          }`}>#{kw.position}</span>
                        </td>
                        <td className="py-3 px-3 text-right text-sm text-light-muted font-mono">{kw.volume.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <div className="p-5 rounded-xl bg-dark-secondary border border-white/5">
                <h3 className="font-heading font-bold text-white text-sm mb-4">Client</h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between"><span className="text-light-muted">Name</span><span className="text-white">{study.client}</span></div>
                  <div className="flex justify-between"><span className="text-light-muted">Industry</span><span className="text-white">{study.industry}</span></div>
                  <div className="flex justify-between"><span className="text-light-muted">Location</span><span className="text-white">{study.location}</span></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-5 rounded-xl bg-dark-secondary border border-white/5">
                <h3 className="font-heading font-bold text-white text-sm mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-1.5">
                  {study.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-full bg-dark border border-white/10 text-[10px] font-mono text-light-muted">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-5 rounded-xl bg-lime-accent/5 border border-lime-accent/15">
                <Quote className="w-5 h-5 text-lime-accent/30 mb-3" />
                <p className="text-light-muted text-sm leading-relaxed mb-5">"{study.testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lime-accent/10 flex items-center justify-center">
                    <span className="font-heading font-bold text-sm text-lime-accent">{study.testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{study.testimonial.author}</div>
                    <div className="text-xs text-light-muted">{study.testimonial.role}, {study.testimonial.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center p-10 rounded-xl bg-dark-secondary border border-white/5">
            <h2 className="font-heading font-bold text-2xl text-white mb-3">Want Similar Results?</h2>
            <p className="text-light-muted mb-6 max-w-lg mx-auto text-sm">
              Let's discuss how we can apply these strategies to your business and achieve measurable growth.
            </p>
            <Link
              href="/contact/"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-lime-accent text-dark font-bold rounded-full hover:bg-lime-accent/90 transition-all text-sm"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
