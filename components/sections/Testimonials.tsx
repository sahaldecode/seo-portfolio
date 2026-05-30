"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  { stars: 5, quote: "Faisal helped us understand exactly what was holding our local rankings back and built a clear SEO plan that noticeably improved our visibility and call volume.", author: "Local Business Owner", role: "Service Business, USA" },
  { stars: 5, quote: "Very professional, detail-oriented and focused on real business outcomes — not just technical SEO jargon. Our Google Maps presence improved significantly.", author: "Healthcare Clinic Manager", role: "Healthcare, USA" },
  { stars: 5, quote: "Our Google Business Profile and service pages became much stronger after Faisal's optimization. Clear communication, fast delivery and excellent results.", author: "Agency Partner", role: "SEO Agency, USA" },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="section bg-dark2">
      <div className="sec-center reveal">
        <div className="sec-label">Client Reviews</div>
        <h2 className="sec-title">What Clients &amp; <span className="gold">Partners Say</span></h2>
        <div className="divider-line" />
      </div>
      <div className="g3 testimonials-grid" style={{ marginTop: 44 }}>
        {testimonials.map(t => (
          <div key={t.author} className="card reveal" style={{ padding: 32 }}>
            <div style={{ color: "var(--gold)", letterSpacing: 3, fontSize: 17, marginBottom: 20 }}>{"★".repeat(t.stars)}</div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#C8D0DC", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
            <div style={{ marginTop: 24, fontWeight: 700, color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 18 }}>
              {t.author}
              <div style={{ color: "var(--muted)", fontSize: "12.5px", fontWeight: 400, fontFamily: "'Inter',sans-serif", marginTop: 3 }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
