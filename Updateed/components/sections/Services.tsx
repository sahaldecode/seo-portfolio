"use client";
import { useEffect, useRef } from "react";
import { BarChart3, Brain, Globe2, ImagePlus, MapPin, Paintbrush2, RadioTower, SearchCheck, Sparkles } from "lucide-react";

interface ServicesProps { onNavigate?: (page: string) => void; preview?: boolean; }

const services = [
  { icon: MapPin, title: "Local SEO", desc: "Improve visibility for service keywords, city searches, and 'near me' queries with local SEO strategies focused on rankings, Google Maps visibility, topical authority, internal linking, and local intent optimization.", best: "Best for: Service businesses, clinics, contractors" },
  { icon: BarChart3, title: "GMB / GBP Optimization", desc: "Optimize your Google Business Profile with the right categories, services, business descriptions, reviews, local signals, photos, posts, and engagement strategies to improve Google Maps rankings and increase inbound calls.", best: "Best for: Any local business with a GBP listing" },
  { icon: Globe2, title: "Local Website Development", desc: "Fast, modern, conversion-focused local business websites built with WordPress and Elementor Pro — optimized for Core Web Vitals, local SEO, user experience, mobile performance, and lead generation.", best: "Best for: New sites, redesigns, landing pages" },
  { icon: RadioTower, title: "Local Service Ads (LSA)", desc: "Full LSA setup and ongoing optimization for high-intent calls, Google-verified leads and precise service-area targeting at the best cost per lead.", best: "Best for: Home services, healthcare, legal" },
  { icon: Sparkles, title: "Technical SEO", desc: "Comprehensive fixes for speed, indexing, crawlability, Core Web Vitals, schema, internal link structure, heading hierarchy and mobile performance.", best: "Best for: Sites with traffic drops or indexing issues" },
  { icon: Brain, title: "AI SEO / GEO", desc: "Improve your brand's visibility in ChatGPT, Gemini, Perplexity, Google AI Overviews and answer engines through entity optimization and structured content.", best: "Best for: Brands wanting future-proof SEO" },
  { icon: Paintbrush2, title: "UI/UX Design", desc: "User-centered interface design that increases engagement, reduces bounce rate and turns more website visitors into customers and leads.", best: "Best for: Websites needing conversion improvements" },
  { icon: ImagePlus, title: "Graphic Design", desc: "Brand identity, social media graphics, banners and print-ready assets that reinforce trust, local recognition and professional credibility.", best: "Best for: New brands or rebrands" },
  { icon: SearchCheck, title: "SEO Audits", desc: "Comprehensive audits covering technical, on-page, local, GBP, competitor and AI search readiness — delivered with a clear, prioritized action roadmap.", best: "Best for: Businesses wanting clarity before investing" },
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
