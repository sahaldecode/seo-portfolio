"use client";

import { useEffect, useRef } from "react";
import {
BarChart3,
Brain,
Clapperboard,
Globe2,
MapPin,
Megaphone,
RadioTower,
SearchCheck,
Sparkles,
} from "lucide-react";

interface ServicesProps {
onNavigate?: (page: string) => void;
preview?: boolean;
}

const services = [
{
icon: MapPin,
title: "Local SEO",
desc: "Rank higher for city, service, and near me searches with local SEO focused on Google visibility, local intent, service pages, and lead generation.",
best: "Best for: Service businesses, clinics, and contractors",
},
{
icon: BarChart3,
title: "GMB / GBP Optimization",
desc: "Optimize your Google Business Profile with the right categories, services, photos, posts, reviews, and local signals to improve Maps rankings.",
best: "Best for: Any local business with a GBP listing",
},
{
icon: Globe2,
title: "Local Website Development",
desc: "Get a modern, custom, and personalized website in any language or CMS, built for speed, trust, mobile experience, and more leads.",
best: "Best for: New sites, redesigns, and landing pages",
},
{
icon: RadioTower,
title: "Local Service Ads (LSA)",
desc: "Set up and optimize Google Local Service Ads to generate verified, high-intent calls with better targeting and lower cost per lead.",
best: "Best for: Home services, healthcare, and legal businesses",
},
{
icon: Sparkles,
title: "Technical SEO",
desc: "Fix speed, indexing, crawlability, Core Web Vitals, schema, site structure, internal links, headings, and mobile SEO issues.",
best: "Best for: Sites with traffic drops or indexing issues",
},
{
icon: Brain,
title: "AI SEO / GEO",
desc: "Improve your visibility in ChatGPT, Gemini, Perplexity, Google AI Overviews, and answer engines through entity SEO and structured content.",
best: "Best for: Brands wanting future-proof SEO visibility",
},
{
icon: SearchCheck,
title: "Local SEO Audit",
desc: "Get a clear audit of your website, Google Business Profile, rankings, competitors, citations, technical issues, and missed local growth opportunities.",
best: "Best for: Businesses wanting clarity before investing",
},
{
icon: Megaphone,
title: "Social Media Management",
desc: "Build trust and stay active online with consistent posts, branded content, profile optimization, local engagement, and monthly content planning.",
best: "Best for: Businesses wanting stronger brand presence",
},
{
icon: Clapperboard,
title: "Video Editing",
desc: "Create clean, professional videos for reels, ads, YouTube, testimonials, and promotions with captions, engaging cuts, and branded visuals.",
best: "Best for: Businesses wanting better reels, ads, and video content",
},
];


export function Services({ onNavigate, preview }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const displayed = preview ? services.slice(0, 6) : services;

  return (
    <div ref={ref} className="section">
      <div className="sec-center reveal">
        <div className="sec-label">Premium Services</div>
        <h2 className="sec-title"><span className="gold">Local SEO </span>Services Built to <span className="gold">Rank, Convert &amp; Scale</span></h2>
        <div className="divider-line" />
        <p className="sec-desc">SEO systems designed for Google Search, Google Maps, AI search engines, and high-converting local websites.</p>
      </div>
      <div className="g3" style={{ marginTop: 44 }}>
        {displayed.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="card reveal">
              <div className="card-icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {!preview && <><div className="divider-line" style={{ marginTop: 16 }} /><p style={{ fontSize: 13, color: "var(--gold)", fontWeight: 600 }}>{s.best}</p></>}
            </div>
          );
        })}
      </div>
      {preview && onNavigate && (
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <button onClick={() => onNavigate("services")} className="btn-gold">View All Services →</button>
        </div>
      )}
      {!preview && onNavigate && (
        <div style={{ textAlign: "center", marginTop: 48 }} className="cta-band reveal">
          <h2 style={{ fontSize: 32 }}>Ready to Rank Higher?</h2>
          <p style={{ color: "var(--muted)", margin: "12px auto 28px", maxWidth: 480 }}>Book a free 30-minute strategy call to discuss which services will make the biggest impact for your business.</p>
          <button onClick={() => onNavigate("contact")} className="btn-gold">Book Free Strategy Call →</button>
        </div>
      )}
    </div>
  );
}
