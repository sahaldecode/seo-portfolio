"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface AboutProps {
  onNavigate?: (page: string) => void;
  full?: boolean;
}

export function About({ full }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-dark2">
      <div className="section">
        <div
          className="about-inner-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 52,
            alignItems: "start",
          }}
        >
          {/* Photo */}
          <div style={{ position: "relative" }} className="reveal">
            <Image
              src="/images/Faisal.png"
              alt="Faisal Rehman – Local SEO Expert"
              width={460}
              height={560}
              style={{
                width: "100%",
                borderRadius: 22,
                border: "1px solid var(--line)",
                display: "block",
              }}
              priority
            />
            <div
              className="about-img-badge"
              style={{
                position: "absolute",
                bottom: "-10%",
                right: -18,
                background: "var(--gold)",
                color: "#000",
                padding: "15px 20px",
                borderRadius: 14,
                fontWeight: 800,
                fontSize: 12.5,
                textAlign: "center",
                boxShadow: "0 12px 32px rgba(201,168,76,.3)",
                fontFamily: "'Inter',sans-serif",
                lineHeight: 1.4,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 26,
                  fontFamily: "'Cormorant Garamond',serif",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                05+
              </span>
              Years of
              <br />
              Excellence
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="sec-label reveal">About &amp; Strategy</div>
            <h2 className="sec-title reveal">
              Local SEO &amp; AI SEO Strategist{" "}
              <span className="gold">for Service Businesses</span>
            </h2>
            <div className="divider-line" />

            {full ? (
              <>
                <p className="sec-desc reveal" style={{ marginBottom: 18 }}>
                  I am Faisal Rehman, a Local SEO Expert specializing in helping
                  HVAC companies, healthcare clinics, chiropractors, dentists,
                  and local service businesses increase their online visibility.
                  Through technical SEO, Google Business Profile optimization,
                  local website development, and AI search optimization, I help
                  businesses improve Google rankings, dominate Google Maps
                  results, and generate more qualified leads.
                </p>
                {/* <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 15.5,
                    lineHeight: 1.82,
                  }}
                  className="reveal"
                >
                  What sets me apart is my full-stack background. I don&apos;t
                  just optimize content — I understand how search engines crawl,
                  how users behave and how to build websites that convert. From
                  Google Business Profile to AI search visibility, I build
                  systems that deliver measurable ROI.
                </p> */}
              </>
            ) : (
              <p className="sec-desc reveal">
                I am Faisal Rehman, a Local SEO Expert specializing in helping
                HVAC companies, healthcare clinics, chiropractors, dentists, and
                local service businesses increase their online visibility.
                Through technical SEO, Google Business Profile optimization,
                local website development, and AI search optimization, I help
                businesses improve Google rankings, dominate Google Maps
                results, and generate more qualified leads.
              </p>
            )}

            <div className="xp-grid reveal" style={{ marginTop: 24 }}>
              {[
                ["Local SEO Expert", "5+ Yrs"],
                ["GMB Optimization", "5+ Yrs"],
                ["Technical SEO", "5+ Yrs"],
                ["Local Service Ads", "5+ Yrs"],
                ["Local Website Development", "5+ Yrs"],
                ["AI/AEO/GEO SEO", "5+ Yrs"],
              ].map(([b, s]) => (
                <div key={b} className="xp-item">
                  <div className="xp-dot" />
                  <b>{b}</b>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
