"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Search, Zap, Globe, Star } from "lucide-react";

const tickerItems = [
  "Technical SEO","AI SEO","AEO","GEO","LLM Visibility",
  "Semantic SEO","Entity SEO","Local SEO","Core Web Vitals",
  "Schema Markup","Content Strategy","Link Building",
];

const stats = [
  { icon: TrendingUp, label: "Organic Traffic",  value: "+340%",  sub: "vs last month"    },
  { icon: Search,     label: "Keywords Ranked",  value: "12,400", sub: "top 10 positions"  },
  { icon: Zap,        label: "Perf Score",        value: "98/100", sub: "core web vitals"   },
  { icon: Globe,      label: "Visibility",        value: "94.2%",  sub: "search visibility" },
];

const chartBars = [28, 38, 32, 52, 45, 68, 60, 95];
const chartMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

const clientAvatars = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces", alt: "Client 1" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces", alt: "Client 2" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces", alt: "Client 3" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces", alt: "Client 4" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-30" />
      <div className="absolute top-1/4 -left-20 w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none" style={{background:"rgba(232,255,71,0.05)"}} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{background:"rgba(232,255,71,0.04)"}} />

      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 lg:py-16">
          {/* <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-10 lg:gap-14 items-center"> */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_500px] gap-10 lg:gap-14 items-center">

            {/* LEFT */}
            <div>
              <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-dark-tertiary mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" />
                <span className="font-mono text-[11px] text-lime-accent uppercase tracking-widest">Available for Projects</span>
              </motion.div>

              <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}
                className="font-heading font-extrabold text-white leading-[0.92] tracking-tight mb-6"
                style={{fontSize:"clamp(3rem,7vw,5.5rem)"}}>
                AI-Era<br /><span className="text-lime-accent">SEO</span><br />Strategist
              </motion.h1>

              <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}
                className="text-base lg:text-lg text-light-muted leading-relaxed mb-8 max-w-[460px]">
                Premium SEO consultant from Pakistan specializing in Technical SEO,
                AI-powered optimization, and LLM Visibility for global brands.
              </motion.p>

              <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.3}}
                className="flex flex-wrap items-center gap-3 mb-10">
                <Link href="/contact/" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-lime-accent text-dark font-bold rounded-full hover:bg-white transition-all duration-300 text-sm"
                  style={{boxShadow:"0 0 30px rgba(232,255,71,0.2)"}}>
                  Start Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="/case-studies/" className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm">
                  View Results
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>

              {/* Social proof — next/image avatars */}
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7,delay:0.5}}
                className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {clientAvatars.map((av, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-dark overflow-hidden bg-dark-tertiary ring-1 ring-white/10 relative">
                      <Image src={av.src} alt={av.alt} fill sizes="36px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-lime-accent text-lime-accent" />)}
                  </div>
                  <p className="text-xs text-light-muted">Trusted by <span className="text-white font-semibold">50+ clients</span> worldwide</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Dashboard */}
            <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:0.9,delay:0.35}} className="relative">
              <motion.div animate={{y:[0,-9,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}
                className="absolute -top-5 -right-3 z-20 flex items-center gap-1.5 px-3.5 py-2 bg-lime-accent text-dark font-mono text-[11px] font-bold rounded-full shadow-xl"
                style={{boxShadow:"0 8px 24px rgba(232,255,71,0.35)"}}>
                <TrendingUp className="w-3.5 h-3.5" /> #1 Ranking
              </motion.div>
              <motion.div animate={{y:[0,9,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}
                className="absolute -bottom-4 -left-3 z-20 flex items-center gap-2 px-3.5 py-2 bg-dark-secondary border border-white/10 text-white font-mono text-[11px] rounded-full shadow-xl backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" /> AI Optimized
              </motion.div>

              <div className="relative bg-dark-secondary border border-white/[8%] rounded-2xl overflow-hidden shadow-2xl"
                style={{boxShadow:"0 25px 80px rgba(0,0,0,0.5),0 0 40px rgba(232,255,71,0.04)"}}>
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5" style={{background:"rgba(8,8,8,0.5)"}}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-[9px] text-light-muted/50 uppercase tracking-widest">SEO Analytics Dashboard</span>
                  <div className="w-14" />
                </div>

                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className="bg-dark p-3 rounded-xl border border-white/[5%] hover:border-lime-accent/15 transition-colors cursor-default">
                          <div className="flex items-center gap-1.5 mb-2">
                            <Icon className="w-3 h-3 text-lime-accent" />
                            <span className="text-[9px] text-light-muted/60 uppercase font-mono tracking-wide leading-none">{stat.label}</span>
                          </div>
                          <div className="text-[18px] font-heading font-bold text-white leading-none mb-1">{stat.value}</div>
                          <div className="text-[9px] text-lime-accent/60 font-mono">{stat.sub}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-dark rounded-xl border border-white/[5%] p-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] text-light-muted/60 font-mono uppercase tracking-widest">Traffic Growth</span>
                      <span className="text-[9px] font-mono text-lime-accent px-2 py-0.5 rounded-full" style={{background:"rgba(232,255,71,0.1)"}}>+340% YoY</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-14">
                      {chartBars.map((h,i) => (
                        <motion.div key={i} initial={{scaleY:0}} animate={{scaleY:1}}
                          transition={{duration:0.6,delay:0.9+i*0.07,ease:"easeOut"}}
                          className="flex-1 rounded-t-sm origin-bottom"
                          style={{height:`${h}%`,background:i===7?"#e8ff47":`rgba(232,255,71,${0.10+i*0.025})`}} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {chartMonths.map((m) => <span key={m} className="text-[8px] text-light-muted/30 font-mono">{m}</span>)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" />
                      <span className="text-[9px] text-light-muted/40 font-mono">Live data</span>
                    </div>
                    <span className="text-[9px] text-light-muted/30 font-mono">Updated just now</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-3 overflow-hidden" style={{background:"rgba(17,17,17,0.65)"}}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems,...tickerItems,...tickerItems,...tickerItems].map((item,i) => (
            <span key={i} className="mx-8 font-mono text-[10px] text-light-muted/40 uppercase tracking-widest flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-lime-accent/40" />{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
