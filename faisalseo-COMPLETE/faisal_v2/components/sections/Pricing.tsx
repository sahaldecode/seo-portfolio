"use client";
import { useEffect, useRef } from "react";

interface PricingProps { onNavigate: (page: string) => void; preview?: boolean; }

const plans = [
  {
    label: "Starter", name: "SEO Audit", price: "$1,500", period: "/ one-time",
    desc: "For businesses that need clarity, a full issues report, quick wins and a focused SEO roadmap before committing to ongoing work.",
    features: ["Full website SEO audit","GBP audit & competitor review","Keyword opportunity report","Technical issues checklist","Priority action roadmap","1 follow-up Q&A call"],
    cta: "Start Audit", featured: false,
  },
  {
    label: "Most Popular", name: "Growth Plan", price: "$3,500", period: "/ month",
    desc: "For local businesses wanting active SEO implementation, consistent improvements and measurable month-over-month growth.",
    features: ["Local SEO implementation","GBP optimization & posting","Technical fixes & monitoring","Service & location page SEO","Citation building","Monthly performance reporting","Direct communication"],
    cta: "Book Strategy Call →", featured: true,
  },
  {
    label: "Custom", name: "Enterprise / Agency", price: "Custom", period: "",
    desc: "For agencies, multi-location businesses and larger SEO growth systems requiring a fully custom scope and delivery model.",
    features: ["White-label SEO support","Multi-location SEO strategy","AI SEO / GEO campaigns","Advanced tracking & reporting","Custom roadmap & delivery","Priority support"],
    cta: "Discuss Project", featured: false,
  },
];

export function Pricing({ onNavigate, preview }: PricingProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={preview ? "bg-dark2" : ""}>
      <div className="section">
        {preview && (
          <div className="sec-center reveal">
            <div className="sec-label">Investment</div>
            <h2 className="sec-title">Invest in <span className="gold">Visibility &amp; Growth</span></h2>
            <div className="divider-line" />
            <p className="sec-desc">Simple starting packages. Final scope customized after reviewing your site, competition and goals.</p>
          </div>
        )}
        <div className="g3 pricing-grid" style={{ marginTop: preview ? 50 : 0, alignItems: "start" }}>
          {plans.map(p => (
            <div key={p.name} className={`card price-card reveal ${p.featured ? "price-feat" : ""}`}>
              <div className="price-label">{p.label}</div>
              <h3 style={{ fontSize: p.featured ? 24 : 22 }}>{p.name}</h3>
              <div className="price-val" style={p.price === "Custom" ? { fontSize: 44 } : {}}>
                {p.price} {p.period && <small>{p.period}</small>}
              </div>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, margin: "12px 0" }}>{p.desc}</p>
              <ul className="feat-list">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button onClick={() => onNavigate("contact")} className={p.featured ? "btn-gold" : "btn-outline"} style={{ width: "100%", justifyContent: "center", marginTop: 26, border: "none", cursor: "pointer" }}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 36, fontSize: "14.5px" }}>
          💬 Need a custom plan?{" "}
          <button onClick={() => onNavigate("contact")} style={{ color: "var(--gold)", cursor: "pointer", fontWeight: 600, background: "none", border: "none", fontSize: "14.5px" }}>Get in touch</button>
          {" "}— I&apos;ll build one around your exact goals and budget.
        </p>
      </div>
    </div>
  );
}
