"use client";
import { useEffect, useRef } from "react";

const skills1 = [
  { label: "Local SEO", w: 98 },
  { label: "GMB Optimization", w: 95 },
  { label: "Technical SEO", w: 96 },
  { label: "AI / AEO / GEO SEO", w: 92 },
];
const skills2 = [
  { label: "Local Website Development", w: 97 },
  { label: "LLM Optimization", w: 93 },
  { label: "CMS SEO", w: 91 },
  { label: "SEO Audit", w: 90 },
];

export function SkillsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const revObs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revObs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => revObs.observe(el));
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.width = el.dataset.w + "%";
          barObs.unobserve(el);
        }
      });
    }, { threshold: .3 });
    ref.current?.querySelectorAll<HTMLElement>(".skill-fill[data-w]").forEach(b => barObs.observe(b));
    return () => { revObs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="bg-dark2">
      <div className="section">
        <div className="sec-center reveal">
          <div className="sec-label">Expert Skills</div>
          <h2 className="sec-title">Skills That <span className="gold">Drive Results</span></h2>
          <div className="divider-line" />
        </div>
        <div className="g2 skills-grid" style={{ marginTop: 44 }}>
          {[skills1, skills2].map((group, gi) => (
            <div key={gi} className="card reveal">
              {group.map(s => (
                <div key={s.label} style={{ padding: "15px 0", borderBottom: gi === 0 && s === group[group.length - 1] ? "none" : "1px solid rgba(255,255,255,.06)" }} className={s === group[group.length - 1] ? "" : ""}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: "14.5px", fontWeight: 500 }}>
                    <span>{s.label}</span><span style={{ color: "var(--gold)" }}>{s.w}%</span>
                  </div>
                  <div className="skill-bar"><div className="skill-fill" data-w={s.w} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
