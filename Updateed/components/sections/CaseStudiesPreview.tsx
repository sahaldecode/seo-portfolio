"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface Props { onNavigate: (page: string) => void; preview?: boolean; }

const cases = [
  { tags: ["Cleaning","Local SEO"], title: "Fresh Start Facility Services", desc: "8.4K clicks, 3.01M impressions and average position improved from 29.6 to 16.5.", results: ["8.4K Clicks","3.01M Impressions","Pos. 16.5"], featured: false },
  { tags: ["HVAC","GBP SEO","Maps"], title: "Go To Superior HVAC", desc: "Local SEO campaign focused on Maps visibility, service pages and call growth. +87% calls.", results: ["+87% Calls","+52% Bookings"], featured: true },
  { tags: ["Healthcare","Tech SEO"], title: "Fraum Center", desc: "Healthcare local SEO with improved visibility, technical structure and stronger local presence.", results: ["+120% Organic Traffic"], featured: false },
  { tags: ["Roofing","Local SEO"], title: "Elite Roofing", desc: "Ranked #1 for 15+ high-value keywords in a competitive metro area. Monthly leads increased significantly.", results: ["+300% Monthly Leads","#1 Rankings"], featured: false },
  { tags: ["Dental","GBP SEO"], title: "Bright Smile Dental", desc: "GBP optimization + local citations → #1 in local pack for 9 service keywords. Appointments grew 87%.", results: ["#1 Local Pack","+87% Appointments"], featured: false },
  { tags: ["Home Services","LSA"], title: "HomeGuard Security", desc: "Technical SEO overhaul + Local Service Ads → conversion rate up 2.4×, cost per lead down 45%.", results: ["2.4× Conversion Rate","-45% CPL"], featured: false },
];

export function CaseStudiesPreview({ onNavigate, preview }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const displayed = preview ? cases.slice(0, 3) : cases;

  return (
    <div ref={ref} className="section">
      {preview && (
        <div className="sec-center reveal">
          <div className="sec-label">Portfolio</div>
          <h2 className="sec-title">Local SEO Case Studies & <span className="gold">Real Ranking Growth</span></h2>
          <div className="divider-line" />
          <p className="sec-desc">Result-focused SEO campaigns across local businesses, healthcare, cleaning, HVAC and service brands.</p>
        </div>
      )}
      <div className="g3" style={{ marginTop: preview ? 48 : 0 }}>
        {displayed.map(c => (
          <div key={c.title} className={`card reveal ${c.featured ? "case-featured" : ""}`} style={{ display: "flex", flexDirection: "column", minHeight: 420 }}>
            <div style={{ height: 180, margin: 14, borderRadius: 16, border: "1px solid var(--line)", overflow: "hidden", position: "relative" }}>
              <Image src="/images/seo-hero.jpg" alt={c.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "6px 24px 26px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 12 }}>
                {c.tags.map(t => <span key={t} className="case-tag">{t}</span>)}
              </div>
              <h3>{c.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "14.5px", lineHeight: 1.7 }}>{c.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                {c.results.map(r => <span key={r} className="case-result">{r}</span>)}
              </div>
              <button onClick={() => onNavigate("case-studies")} style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 18, color: "var(--gold)", fontWeight: 700, fontSize: 14, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                View Case Study →
              </button>
            </div>
          </div>
        ))}
      </div>
      {preview ? (
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <button onClick={() => onNavigate("case-studies")} className="btn-outline">View All Case Studies →</button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: 48 }} className="reveal">
          <button onClick={() => onNavigate("contact")} className="btn-gold">Start Your SEO Campaign →</button>
        </div>
      )}
    </div>
  );
}
