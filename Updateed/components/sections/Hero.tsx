"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters =
      countersRef.current?.querySelectorAll<HTMLElement>(".countup");
    if (!counters) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          if (el.dataset.counted) return;
          el.dataset.counted = "1";
          const target = parseInt(el.dataset.target || "0");
          let start: number | null = null;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / 1600, 1);
            const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
            el.textContent = String(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = String(target);
          };
          requestAnimationFrame(step);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const chips = [
    "Local SEO",
    "GMB / GBP SEO",
    "Google Maps SEO",
    "AI SEO / GEO",
    "Local Service Ads",
    "Technical SEO",
    "Healthcare SEO",
    "HVAC SEO",
    "Roofing SEO",
    "Lead Generation",
    "SEO Audits",
    "Webflow SEO",
  ];

  return (
    <>
      {/* ── HERO SECTION ── */}
      <div
        className="hero-wrap"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 48px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(201,168,76,.07),transparent 70%)",
            top: -100,
            right: -180,
            pointerEvents: "none",
            animation: "orbFloat 9s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(201,168,76,.04),transparent 70%)",
            bottom: -60,
            left: -80,
            pointerEvents: "none",
            animation: "orbFloat 12s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.028) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />

        <div
          className="hero-inner-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* LEFT */}
          <div>
            <div
              className="hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(201,168,76,.08)",
                border: "1px solid rgba(201,168,76,.25)",
                padding: "8px 18px",
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 600,
                color: "var(--gold)",
                marginBottom: 26,
                letterSpacing: ".03em",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  animation: "goldPulse 2.2s ease infinite",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              Available for New Projects — Local SEO Specialist
            </div>

            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(34px,5.5vw,60px)",
                fontWeight: 700,
                lineHeight: 1.08,
                marginBottom: 20,
                letterSpacing: "-.4px",
              }}
            >
              Helping{" "}
              <span
                style={{
                  color: "var(--gold)",
                  textShadow: "0 0 48px rgba(201,168,76,.18)",
                }}
              >
                Local Businesses
              </span>{" "}
              Dominate Google,{" "}
              <span
                style={{
                  color: "var(--gold)",
                  textShadow: "0 0 48px rgba(201,168,76,.18)",
                }}
              >
                Maps &amp; AI Search
              </span>
            </h1>

            <p
              className="hero-desc"
              style={{
                fontSize: 16.5,
                color: "var(--muted)",
                lineHeight: 1.82,
                marginBottom: 32,
              }}
            >
              I&apos;m{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Faisal Rehman
              </strong>{" "}
              — a Local SEO &amp; AI SEO Expert specializing in Technical SEO,
              Google Business Profile (GMB) Optimization, Local Website
              Development, and Local Services Ads. With 5+ years of hands-on
              experience, I help HVAC companies, healthcare clinics, and local
              service businesses improve Google rankings, generate more
              qualified calls and leads, and build a stronger presence across
              Google Search, Google Maps, and AI-driven search platforms.
            </p>

            <div
              className="hero-btns"
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <button
                onClick={() => onNavigate("contact")}
                className="btn-gold"
              >
                Book Free SEO Audit →
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="btn-outline"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div
              style={{
                borderRadius: 18,
                padding: 10,
                background:
                  "linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.03))",
                border: "1px solid rgba(255,255,255,.11)",
                boxShadow: "0 36px 90px rgba(0,0,0,.55)",
                animation: "vidFloat 7s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  borderRadius: 10,
                  overflow: "hidden",
                  background: "#000",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/RRirXvlIdpI"
                  title="Faisal Rehman SEO Portfolio"
                  allowFullScreen
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                />
              </div>
              <div
                className="video-metrics"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 8,
                  marginTop: 10,
                }}
              >
                {[
                  { num: "+48%", lbl: "Maps Visibility" },
                  { num: "+32%", lbl: "GBP Calls" },
                  { num: "Top 3", lbl: "Local Keywords" },
                ].map((m) => (
                  <div
                    key={m.lbl}
                    style={{
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid var(--line)",
                      borderRadius: 12,
                      padding: "12px 8px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="video-metric-num"
                      style={{
                        fontFamily: "'Sora',serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "var(--gold)",
                      }}
                    >
                      {m.num}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "var(--muted)",
                        fontWeight: 500,
                        marginTop: 2,
                        textTransform: "uppercase",
                        letterSpacing: ".05em",
                      }}
                    >
                      {m.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="xp-badges-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 24,
              }}
            >
              {[
                "AI/AEO/GEO SEO Expert",
                "05+ Years Technical SEO",
                "05+ Years Local SEO Expert",
                "05+ Years GMB SEO Expert",
              ].map((b) => (
                <div key={b} className="xp-badge">
                  <span className="dot" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div
        ref={countersRef}
        className="stats-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 18,
        }}
      >
        {[
          { target: 5, suf: "+", lbl: "Years Experience" },
          { target: 200, suf: "+", lbl: "Projects Delivered" },
          { target: 50, suf: "+", lbl: "Local SEO Campaigns" },
          { num: "AI", lbl: "Search Ready SEO" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "24px 12px",
              border: "1px solid var(--line)",
              borderRadius: 16,
              background: "var(--card-bg)",
              transition: ".28s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--line2)";
              el.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--line)";
              el.style.transform = "";
            }}
          >
            <div
              className="stat-big-num"
              style={{
                fontFamily: "'Sora',serif",
                fontSize: 44,
                fontWeight: 700,
                color: "var(--gold)",
                lineHeight: 1,
              }}
            >
              {"num" in s ? (
                s.num
              ) : (
                <>
                  <span className="countup" data-target={s.target}>
                    0
                  </span>
                  <span className="stat-suf" style={{ fontSize: 26 }}>
                    {s.suf}
                  </span>
                </>
              )}
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "var(--muted)",
                marginTop: 6,
                fontWeight: 500,
              }}
            >
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* ── TRUST BAR ── */}
      <div
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          background: "rgba(201,168,76,.022)",
        }}
      >
        <div
          className="trust-bar-inner"
          style={{
            padding: "18px 48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            {
              icon: "/images/cup.svg",
              text: (
                <>
                  <strong style={{ color: "var(--text)" }}>150+</strong> Clients
                  Served
                </>
              ),
            },
            {
              icon: "/images/map-pin.svg",
              text: (
                <>
                  <strong style={{ color: "var(--text)" }}>#1 Rankings</strong>{" "}
                  on Google Maps
                </>
              ),
            },
            {
              icon: "/images/star.svg",
              text: (
                <>
                  <strong style={{ color: "var(--text)" }}>4.9/5</strong>{" "}
                  Average Rating
                </>
              ),
            },
            {
              icon: "/images/rocket.svg",
              text: (
                <>
                  <strong style={{ color: "var(--text)" }}>3× Avg.</strong>{" "}
                  Traffic Growth
                </>
              ),
            },
            {
              icon: "/images/tickcom.svg",
              text: (
                <>
                  <strong style={{ color: "var(--text)" }}>100%</strong>{" "}
                  White-Hat SEO
                </>
              ),
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontSize: 13,
                fontWeight: 500,
                color: "var(--muted)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 7,
                  background: "rgba(201,168,76,.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image src={t.icon} alt="" width={16} height={16} />
              </div>
              {t.text}
            </div>
          ))}
        </div>
      </div>

      {/* ── TICKER ── */}
      <div
        className="ticker-wrap"
        style={{
          overflow: "hidden",
          padding: "14px 0",
          borderBottom: "1px solid var(--line)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 100,
            background: "linear-gradient(90deg,var(--dark),transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 100,
            background: "linear-gradient(270deg,var(--dark),transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "max-content",
            gap: 10,
            animation: "tickerMove 30s linear infinite",
          }}
        >
          {[...chips, ...chips].map((c, i) => (
            <span key={i} className="ticker-chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
