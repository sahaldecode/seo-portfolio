"use client";
import { useEffect, useRef } from "react";

interface Props { onNavigate: (page: string) => void; }

export function Industries({ onNavigate }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div style={{ minHeight: "48vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 48px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 50%,rgba(201,168,76,.06),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="sec-label" style={{ justifyContent: "center" }}>Specializations</div>
          <h1 style={{ fontSize: "clamp(36px,5vw,64px)" }}>Industries <span className="gold">We Serve</span></h1>
          <p style={{ color: "var(--muted)", marginTop: 16, fontSize: 17, maxWidth: 540, marginLeft: "auto", marginRight: "auto", lineHeight: 1.8 }}>Specialized local SEO strategies for your specific niche, audience and competitive landscape.</p>
        </div>
      </div>
      <div className="section">
        {[
          { label: "HVAC", title: "Heating, Ventilation & Air Conditioning", items: [{icon:"🗺️",h:"Maps Dominance",p:"Rank #1 in the local 3-pack for emergency HVAC searches where customers need immediate help."},{icon:"📄",h:"Service Page SEO",p:"Individual optimized pages for AC repair, furnace installation, duct cleaning, heat pumps and more."},{icon:"⭐",h:"Review Generation",p:"Automated review request systems to build your GBP reputation and local trust signals."}], dark: false },
          { label: "Dental", title: "Dental Clinics & Specialists", items: [{icon:"🦷",h:"GBP for Dentists",p:"Optimize categories, services, appointment links, photos and all local ranking signals specific to dental practices."},{icon:"🔑",h:"Local Keyword Strategy",p:'"Best dentist near me", "teeth whitening [city]", emergency dentist — target the searches that drive booked appointments.'},{icon:"🏆",h:"Patient Reviews & Trust",p:"Build authority with structured data, patient testimonials and E-E-A-T signals that Google's algorithms reward."}], dark: true },
          { label: "Healthcare", title: "Medical Practices & Clinics", items: [{icon:"🏥",h:"Medical SEO Compliance",p:"HIPAA-friendly, E-E-A-T optimized content that builds authority without violating healthcare advertising guidelines."},{icon:"📍",h:"Local Pack Ranking",p:"Rank for specialties like cardiology, dermatology, pediatrics, orthopedics and more in your service area."},{icon:"📅",h:"Appointment Optimization",p:"Convert clicks to calls and online bookings with conversion-focused pages and clear patient pathways."}], dark: false },
          { label: "Home Services", title: "Contractors, Cleaners & More", items: [{icon:"📢",h:"Local Service Ads",p:"Maximize LSAs for locksmiths, plumbers, electricians, roofers and cleaners — Google-verified leads at scale."},{icon:"🏙️",h:"Service Area Pages",p:"City-specific landing pages for every neighborhood and suburb you serve — rank where your customers search."},{icon:"📞",h:"Lead Capture",p:"Conversion-optimized forms, click-to-call buttons and clear CTAs that turn visitors into paying customers."}], dark: true },
        ].map(ind => (
          <div key={ind.label} className={ind.dark ? "bg-dark2" : ""} style={ind.dark ? { borderRadius: 20, padding: "40px", marginBottom: 40 } : { marginBottom: 56 }}>
            <div className="sec-label reveal">{ind.label}</div>
            <h2 className="sec-title reveal">{ind.title.split(" & ").map((part, i, arr) => <span key={i}>{part}{i < arr.length - 1 ? " & " : ""}</span>)}</h2>
            <div className="divider-line" />
            <div className="g3 industry-grid" style={{ marginTop: 24 }}>
              {ind.items.map(item => (
                <div key={item.h} className="card reveal">
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="cta-band reveal" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 30 }}>Don&apos;t See Your Industry?</h2>
          <p style={{ color: "var(--muted)", margin: "12px auto 28px", maxWidth: 480, lineHeight: 1.8 }}>I work with many local business types. Contact me for a free consultation about your specific niche.</p>
          <button onClick={() => onNavigate("contact")} className="btn-gold">Get a Free Audit →</button>
        </div>
      </div>
    </div>
  );
}
