"use client";
import { useEffect, useRef } from "react";

interface BookingProps { onNavigate?: (page: string) => void; }

export function BookingCalendar({ onNavigate }: BookingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
    }), { threshold: .08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => { try { document.body.removeChild(script); } catch {} obs.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="section">
      <div
        className="booking-grid"
        style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"center" }}
      >
        {/* Left info */}
        <div>
          <div className="sec-label reveal">Book a Call</div>
          <h2 className="sec-title reveal">Book a Free <span className="gold">30-Min Strategy Call</span></h2>
          <div className="divider-line" />
          <p className="sec-desc reveal">Let&apos;s review your website, Google Business Profile, rankings, competitors and low-hanging SEO opportunities. No pressure — just clear insights.</p>
          <div
            className="booking-mini-cards"
            style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginTop:24 }}
          >
            <div className="card reveal">
              <h3>Free SEO Discussion</h3>
              <p>No sales pressure. Clear insights about your visibility and real growth opportunities.</p>
            </div>
            <div className="card reveal">
              <h3>Website + GBP Review</h3>
              <p>A focused look at the most impactful local SEO growth areas for your business.</p>
            </div>
          </div>
        </div>

        {/* Calendly */}
        <div className="reveal" style={{ width:"100%", background:"#fff", borderRadius:24, overflow:"hidden", border:"1px solid rgba(201,168,76,.15)", boxShadow:"0 20px 70px rgba(0,0,0,.4)" }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/faisalrehman810/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth:280, height:700 }}
          />
        </div>
      </div>
    </div>
  );
}
