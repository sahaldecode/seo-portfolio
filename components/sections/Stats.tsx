"use client";
import { useEffect, useRef } from "react";

interface StatsProps { onNavigate: (page: string) => void; }

export function Stats({ onNavigate }: StatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="section bg-dark2">
      <div className="cta-band reveal">
        <div className="sec-label" style={{ justifyContent: "center" }}>Start Now</div>
        <h2 className="sec-title" style={{ fontSize: "clamp(28px,4vw,52px)", marginBottom: 16 }}>Let&apos;s Build Your <span className="gold">SEO Growth System</span></h2>
        <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.8 }}>Get a clear, no-pressure review of your website, GBP, competitors and the best SEO opportunities for your specific business.</p>
        <div className="hero-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => onNavigate("contact")} className="btn-gold">Book Free Audit →</button>
          <button onClick={() => onNavigate("pricing")} className="btn-outline">View Pricing Plans</button>
        </div>
      </div>
    </div>
  );
}
