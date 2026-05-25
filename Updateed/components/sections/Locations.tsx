"use client";
import { useEffect, useRef } from "react";

interface Props { onNavigate: (page: string) => void; }

const locations = [
  { name: "🗽 New York, NY", areas: "Manhattan, Brooklyn, Queens, Bronx, Staten Island" },
  { name: "🌴 Los Angeles, CA", areas: "Hollywood, Santa Monica, Long Beach, Pasadena" },
  { name: "🌆 Chicago, IL", areas: "Loop, Lincoln Park, Naperville, Aurora" },
  { name: "🤠 Houston, TX", areas: "Downtown, The Woodlands, Sugar Land, Katy" },
  { name: "☀️ Phoenix, AZ", areas: "Scottsdale, Mesa, Chandler, Glendale" },
  { name: "🔔 Philadelphia, PA", areas: "Center City, King of Prussia, Cherry Hill" },
  { name: "🌵 San Antonio, TX", areas: "Alamo Heights, Stone Oak, Boerne" },
  { name: "🌊 San Diego, CA", areas: "La Jolla, Carlsbad, Oceanside, Chula Vista" },
  { name: "🌟 Dallas, TX", areas: "Plano, Frisco, Irving, Garland, McKinney" },
  { name: "🏖️ Miami, FL", areas: "Coral Gables, Aventura, Fort Lauderdale, Boca" },
  { name: "🌹 Seattle, WA", areas: "Bellevue, Redmond, Kirkland, Everett" },
  { name: "🎸 Nashville, TN", areas: "Brentwood, Franklin, Murfreesboro, Smyrna" },
];

export function Locations({ onNavigate }: Props) {
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
          <div className="sec-label" style={{ justifyContent: "center" }}>Service Areas</div>
          <h1 style={{ fontSize: "clamp(36px,5vw,64px)" }}>Service <span className="gold">Locations</span></h1>
          <p style={{ color: "var(--muted)", marginTop: 16, fontSize: 17, maxWidth: 540, marginLeft: "auto", marginRight: "auto", lineHeight: 1.8 }}>Helping local businesses rank across cities and regions — 100% remote, anywhere in the USA and beyond.</p>
        </div>
      </div>
      <div className="section">
        <div className="sec-center reveal" style={{ marginBottom: 44 }}>
          <div className="sec-label">Locations</div>
          <h2 className="sec-title">Where I <span className="gold">Deliver Results</span></h2>
          <div className="divider-line" />
        </div>
        <div className="g4 locs-grid reveal">
          {locations.map(l => (
            <div key={l.name} className="card loc-card">
              <h3>{l.name}</h3>
              <p>{l.areas}</p>
            </div>
          ))}
        </div>
        <div className="cta-band reveal" style={{ textAlign: "center", marginTop: 48 }}>
          <h2 style={{ fontSize: 28 }}>Don&apos;t See Your City?</h2>
          <p style={{ color: "var(--muted)", margin: "12px auto 24px", maxWidth: 460, lineHeight: 1.8 }}>I work with businesses everywhere remotely. Contact me to discuss your specific location and market.</p>
          <button onClick={() => onNavigate("contact")} className="btn-gold">Contact Me →</button>
        </div>
      </div>
    </div>
  );
}
