import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/content/case-studies/data";

/* ──────────────────────────────────────────────────────────────
   IMAGE RESOLUTION
   Priority order:
   1. /public/images/case-{slug}.jpg   ← your real screenshot
   2. /public/images/case-{slug}.png
   3. /public/images/case-{industry}.svg (auto placeholder)
   4. /public/images/seo-hero.jpg      (final fallback)
─────────────────────────────────────────────────────────────── */
const INDUSTRY_SVG: Record<string, string> = {
  Cleaning: "/images/case-cleaning.svg",
  HVAC: "/images/case-hvac.svg",
  Healthcare: "/images/case-healthcare.svg",
  Roofing: "/images/case-roofing.svg",
  Dental: "/images/case-dental.svg",
  "Home Services": "/images/case-security.svg",
};

function getCaseImg(slug: string, industry: string): string {
  // We always return a path — Next.js will use whatever exists
  // Prefer real screenshots, fall back to SVG placeholder
  return `/images/case-${slug}.jpg`;
}
function getFallbackImg(industry: string): string {
  return INDUSTRY_SVG[industry] ?? "/images/seo-hero.jpg";
}

/* ── Metadata ─────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = caseStudies.find((x) => x.slug === slug);
  if (!s) return { title: "Not Found" };
  return {
    title: `${s.client} – ${s.title} | Faisal Rehman SEO`,
    description: s.description,
    alternates: { canonical: `https://faisalseo.com/case-studies/${slug}/` },
    openGraph: {
      title: `${s.title} | Faisal Rehman`,
      description: s.description,
      url: `https://faisalseo.com/case-studies/${slug}/`,
    },
  };
}
export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

/* ── Helpers  */
const Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C9A84C"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: 3 }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function SectionTitle({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "rgba(201,168,76,.1)",
          border: "1px solid rgba(201,168,76,.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(20px,2.8vw,26px)",
          fontWeight: 700,
          color: "#fff",
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {text}
      </h2>
    </div>
  );
}

function barPcts(data: { traffic: number }[]) {
  const max = Math.max(...data.map((d) => d.traffic));
  return data.map((d) => Math.round((d.traffic / max) * 100));
}

/* ── Page */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = caseStudies.find((x) => x.slug === slug);
  if (!s) notFound();

  const pcts = barPcts(s.trafficGrowth);
  const initials = s.client
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const heroImg = getCaseImg(slug, s.industry);
  const fallback = getFallbackImg(s.industry);

  /* ── RENDER ── */
  return (
    <article style={{ background: "#080810", minHeight: "100vh" }}>
      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <header
        style={{
          padding: "clamp(88px,12vw,130px) clamp(18px,5vw,60px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%,rgba(201,168,76,.07),transparent 64%)",
            pointerEvents: "none",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.025) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 100% 75% at 50% 0%,black,transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 75% at 50% 0%,black,transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          {/* back link */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Link
              href="/case-studies/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--muted)",
                border: "1px solid var(--line)",
                padding: "8px 16px",
                borderRadius: 6,
                textDecoration: "none",
                transition: ".2s",
              }}
            >
              ← Back to Case Studies
            </Link>
          </div>

          {/* eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(201,168,76,.08)",
              border: "1px solid rgba(201,168,76,.22)",
              padding: "8px 20px",
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--gold)",
                display: "inline-block",
              }}
            />
            Case Study · {s.industry}
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(30px,6vw,78px)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-1px",
              color: "#fff",
              marginBottom: 20,
            }}
          >
            {s.title}
          </h1>

          <p
            style={{
              fontSize: "clamp(14px,1.8vw,17px)",
              color: "var(--muted)",
              lineHeight: 1.82,
              maxWidth: 660,
              margin: "0 auto 44px",
            }}
          >
            {s.description}
          </p>

          {/* Result pills row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 52,
            }}
          >
            {s.results.map((r) => (
              <div
                key={r.metric}
                style={{
                  padding: "14px clamp(14px,2.5vw,24px)",
                  borderRadius: 14,
                  border: "1px solid rgba(201,168,76,.2)",
                  background: "rgba(201,168,76,.06)",
                  minWidth: 110,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "clamp(22px,3.5vw,30px)",
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {r.value}
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: "var(--muted)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    marginTop: 4,
                  }}
                >
                  {r.metric}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(201,168,76,.5)",
                    marginTop: 2,
                  }}
                >
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(12px,3vw,28px)",
              flexWrap: "wrap",
              borderTop: "1px solid var(--line)",
              paddingTop: 22,
              paddingBottom: 22,  
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  background: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontWeight: 900,
                  fontSize: 15,
                  color: "#000",
                  flexShrink: 0,
                }}
              >
                {initials}
              </div> */}
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>
                  {s.client}
                </div>
                <div style={{ fontSize: 11.5, color: "var(--muted)" }}>
                  {s.industry}
                </div>
              </div>
            </div>
            {[
              ["Industry", s.industry],
              ["Location", s.location],
              ["Timeline", s.timeline ?? "Ongoing"],
              ["Status",  "Completed"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  textAlign: "center",
                  padding: "0 12px",
                  borderLeft: "1px solid var(--line)",
                }}
              >
                <b
                  style={{
                    display: "block",
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {k}
                </b>
                <span
                  style={{
                    fontSize: 11,
                    color: k === "Status" ? "#34C759" : "var(--muted)",
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════
          BEFORE / AFTER
      ════════════════════════════════════ */}
      {s.beforeAfter && (
        <section
          style={{
            background: "var(--dark2)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "clamp(44px,7vw,80px) clamp(18px,5vw,60px)",
            }}
          >
            <div className="sec-label">Search Console Data</div>
            <h2 className="sec-title">
              Before &amp; After <span className="gold">Results</span>
            </h2>
            <div className="divider-line" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                marginTop: 30,
                borderRadius: 20,
                overflow: "hidden",
              }}
              className="ba-grid"
            >
              {/* BEFORE */}
              <div
                style={{
                  padding: "clamp(20px,3.5vw,32px)",
                  background: "rgba(255,59,48,.05)",
                  border: "1px solid rgba(255,59,48,.16)",
                  borderRadius: "16px 0 0 16px",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#FF3B30",
                    marginBottom: 22,
                  }}
                >
                  BEFORE
                </div>
                {[
                  [s.beforeAfter.before.clicks, "Monthly Clicks"],
                  [s.beforeAfter.before.impressions, "Impressions"],
                  [s.beforeAfter.before.ctr, "Click-Through Rate"],
                  [s.beforeAfter.before.position, "Avg. Position"],
                ].map(([val, lbl]) => (
                  <div key={lbl} style={{ marginBottom: 18 }}>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "clamp(22px,4vw,38px)",
                        fontWeight: 700,
                        lineHeight: 1,
                        color: "#FF3B30",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        marginTop: 4,
                      }}
                    >
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
              {/* AFTER */}
              <div
                style={{
                  padding: "clamp(20px,3.5vw,32px)",
                  background: "rgba(52,199,89,.05)",
                  border: "1px solid rgba(52,199,89,.16)",
                  borderRadius: "0 16px 16px 0",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#34C759",
                    marginBottom: 22,
                  }}
                >
                  AFTER
                </div>
                {[
                  [s.beforeAfter.after.clicks, "Monthly Clicks"],
                  [s.beforeAfter.after.impressions, "Impressions"],
                  [s.beforeAfter.after.ctr, "Click-Through Rate"],
                  [s.beforeAfter.after.position, "Avg. Position"],
                ].map(([val, lbl]) => (
                  <div key={lbl} style={{ marginBottom: 18 }}>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "clamp(22px,4vw,38px)",
                        fontWeight: 700,
                        lineHeight: 1,
                        color: "#34C759",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        marginTop: 4,
                      }}
                    >
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════
          MAIN BODY (2 col on desktop)
      ════════════════════════════════════ */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(48px,7vw,80px) clamp(18px,5vw,60px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 52,
            alignItems: "start",
          }}
          className="cs-body-grid"
        >
          {/* ─────── LEFT COLUMN ─────── */}
          <div>
            {/* Hero image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--line)",
                marginBottom: 52,
                boxShadow: "0 24px 60px rgba(0,0,0,.45)",
              }}
            >
              <Image
                src={heroImg}
                alt={`${s.client} – ${s.industry} SEO Case Study`}
                fill
                priority
                sizes="(max-width:767px) 100vw,(max-width:1024px) 70vw,65vw"
                style={{ objectFit: "cover" }}
                onError={undefined}
              />
              {/* overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top,rgba(8,8,16,.6) 0%,transparent 50%)",
                }}
              />
              {/* badges */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 16,
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    padding: "5px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    background: "var(--gold)",
                    color: "#000",
                  }}
                >
                  {s.industry}
                </span>
                <span
                  style={{
                    padding: "5px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 600,
                    background: "rgba(0,0,0,.65)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,.18)",
                  }}
                >
                  {s.location}
                </span>
              </div>
            </div>

            {/* ── The Challenge ── */}
            <div style={{ marginBottom: 52 }}>
              <SectionTitle
                text="The Challenge"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                }
              />
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "clamp(14px,1.6vw,15.5px)",
                  lineHeight: 1.88,
                }}
              >
                {s.challenge}
              </p>
            </div>

            {/* ── SEO Strategy ── */}
            <div style={{ marginBottom: 52 }}>
              <SectionTitle
                text="SEO Strategy & Execution"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                }
              />
              <div
                style={{
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                {s.strategy.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "13px 20px",
                      borderBottom:
                        i < s.strategy.length - 1
                          ? "1px solid rgba(255,255,255,.04)"
                          : "none",
                      background:
                        i % 2 === 0 ? "rgba(255,255,255,.01)" : "transparent",
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 7,
                        background: "rgba(201,168,76,.1)",
                        border: "1px solid rgba(201,168,76,.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--gold)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <span
                      style={{
                        color: "#C8D0D8",
                        fontSize: "clamp(13px,1.5vw,14.5px)",
                        lineHeight: 1.68,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── AI SEO ── */}
            <div style={{ marginBottom: 52 }}>
              <SectionTitle
                text="AI SEO / GEO Implementation"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                }
              />
              <div style={{ display: "grid", gap: 10 }}>
                {s.aiSeoImplementation.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "13px 16px",
                      background: "rgba(255,255,255,.025)",
                      border: "1px solid rgba(255,255,255,.06)",
                      borderRadius: 12,
                    }}
                  >
                    <Check />
                    <span
                      style={{
                        color: "#C8D0D8",
                        fontSize: "clamp(13px,1.5vw,14.5px)",
                        lineHeight: 1.68,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Technical ── */}
            <div style={{ marginBottom: 52 }}>
              <SectionTitle
                text="Technical SEO Improvements"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                }
              />
              <div style={{ display: "grid", gap: 10 }}>
                {s.technicalImprovements.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "13px 16px",
                      background: "rgba(255,255,255,.025)",
                      border: "1px solid rgba(255,255,255,.06)",
                      borderRadius: 12,
                    }}
                  >
                    <Check />
                    <span
                      style={{
                        color: "#C8D0D8",
                        fontSize: "clamp(13px,1.5vw,14.5px)",
                        lineHeight: 1.68,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Traffic Growth Chart ── */}
            <div style={{ marginBottom: 52 }}>
              <SectionTitle
                text="Traffic Growth (Monthly)"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                }
              />
              <div
                style={{
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 18,
                  padding: "clamp(16px,3vw,26px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "rgba(138,137,153,.55)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                    }}
                  >
                    Monthly Organic Traffic
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--gold)",
                      background: "rgba(201,168,76,.08)",
                      padding: "4px 12px",
                      borderRadius: 999,
                    }}
                  >
                    {s.results[0].value} Growth
                  </span>
                </div>
                {/* bars */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "clamp(3px,1vw,8px)",
                    height: "clamp(80px,14vw,120px)",
                    marginBottom: 8,
                  }}
                >
                  {pcts.map((pct, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        borderRadius: "3px 3px 0 0",
                        minHeight: 4,
                        background:
                          i === pcts.length - 1
                            ? "var(--gold)"
                            : `rgba(201,168,76,${0.11 + i * 0.028})`,
                        height: `${pct}%`,
                      }}
                    />
                  ))}
                </div>
                {/* labels */}
                <div style={{ display: "flex" }}>
                  {s.trafficGrowth.map((d) => (
                    <span
                      key={d.month}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: 9,
                        color: "rgba(138,137,153,.4)",
                        fontWeight: 600,
                      }}
                    >
                      {d.month}
                    </span>
                  ))}
                </div>
                {/* summary row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>
                    Start: {s.trafficGrowth[0].traffic.toLocaleString()} / mo
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--gold)",
                    }}
                  >
                    Peak:{" "}
                    {s.trafficGrowth[
                      s.trafficGrowth.length - 1
                    ].traffic.toLocaleString()}{" "}
                    / mo
                  </span>
                </div>
              </div>
            </div>

            {/* ── Keyword Rankings ── */}
            <div style={{ marginBottom: 52 }}>
              <SectionTitle
                text="Keyword Ranking Wins"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                }
              />
              <div
                style={{
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                {/* header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 76px 110px",
                    background: "rgba(255,255,255,.03)",
                    padding: "10px 18px",
                  }}
                >
                  {["Keyword", "Pos.", "Vol / mo"].map((h) => (
                    <span
                      key={h}
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                        color: "var(--muted2)",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
                {s.keywordWins.map((kw, i) => (
                  <div
                    key={kw.keyword}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 76px 110px",
                      padding: "12px 18px",
                      borderTop: "1px solid rgba(255,255,255,.04)",
                      background:
                        i % 2 === 0 ? "rgba(255,255,255,.015)" : "transparent",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(11px,1.3vw,13.5px)",
                        color: "#C8D0D8",
                        fontFamily: "monospace",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {kw.keyword}
                    </span>
                    <span>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "rgba(201,168,76,.1)",
                          fontSize: 11,
                          fontWeight: 800,
                          color: "var(--gold)",
                        }}
                      >
                        #{kw.position}
                      </span>
                    </span>
                    <span style={{ fontSize: 12, color: "var(--muted)" }}>
                      {kw.volume.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Testimonial ── */}
            <div
              style={{
                borderRadius: 22,
                padding: "clamp(24px,4vw,42px)",
                background:
                  "linear-gradient(145deg,rgba(201,168,76,.08),rgba(255,255,255,.02))",
                border: "1px solid rgba(201,168,76,.22)",
                position: "relative",
                overflow: "hidden",
                marginBottom: 52,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: 24,
                  fontSize: 110,
                  color: "rgba(201,168,76,.07)",
                  fontFamily: "'Cormorant Garamond',serif",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "clamp(15px,2vw,20px)",
                  lineHeight: 1.84,
                  color: "#DDD8CC",
                  fontStyle: "italic",
                  position: "relative",
                  zIndex: 1,
                  marginBottom: 0,
                }}
              >
                &ldquo;{s.testimonial.quote}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(201,168,76,.12)",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontWeight: 900,
                    fontSize: 18,
                    color: "#000",
                    flexShrink: 0,
                  }}
                >
                  {s.testimonial.author[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>
                    {s.testimonial.author}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    {s.testimonial.role}, {s.testimonial.company}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    color: "var(--gold)",
                    fontSize: 15,
                    letterSpacing: 3,
                  }}
                >
                  ★★★★★
                </div>
              </div>
            </div>

            {/* ── Bottom CTA ── */}
            <div
              style={{
                borderRadius: 24,
                padding: "clamp(32px,5vw,56px) clamp(20px,5vw,52px)",
                textAlign: "center",
                background:
                  "linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.015))",
                border: "1px solid rgba(201,168,76,.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse 80% 50% at 50% 100%,rgba(201,168,76,.07),transparent 62%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "clamp(24px,4vw,48px)",
                    fontWeight: 900,
                    color: "#fff",
                    marginBottom: 14,
                    lineHeight: 1.1,
                  }}
                >
                  Want{" "}
                  <em style={{ color: "var(--gold)", fontStyle: "normal" }}>
                    Similar Results?
                  </em>
                </h2>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "clamp(13px,1.5vw,16px)",
                    lineHeight: 1.8,
                    marginBottom: 28,
                    maxWidth: 460,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Let&apos;s review your website, competitors, and top SEO
                  opportunities — clear growth roadmap, no obligation.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href="/?goto=contact"
                    className="btn-gold"
                    style={{
                      fontSize: 14,
                      padding: "14px 30px",
                      borderRadius: 8,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      border: "2px solid var(--gold)",
                      textDecoration: "none",
                    }}
                  >
                    Start Your SEO Project →
                  </Link>
                  <Link
                    href="/case-studies/"
                    className="btn-outline"
                    style={{
                      fontSize: 14,
                      padding: "14px 30px",
                      textDecoration: "none",
                    }}
                  >
                    View More Cases
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ─────── STICKY SIDEBAR ─────── */}
          <aside
            style={{
              position: "sticky",
              top: 88,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
            className="cs-sidebar"
          >
            {/* Client card */}
            <div
              style={{
                borderRadius: 16,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "11px 16px",
                  borderBottom: "1px solid rgba(255,255,255,.05)",
                }}
              >
                <span
                  style={{
                    fontSize: 9.5,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".14em",
                    color: "var(--muted2)",
                  }}
                >
                  Client Details
                </span>
              </div>
              {[
                ["Client", s.client],
                ["Industry", s.industry],
                ["Location", s.location],
                ["Timeline", s.timeline ?? "Ongoing"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "11px 16px",
                    borderBottom: "1px solid rgba(255,255,255,.04)",
                  }}
                >
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>
                    {k}
                  </span>
                  <span
                    style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div
              style={{
                borderRadius: 16,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
                padding: 16,
              }}
            >
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  color: "var(--muted2)",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Tools Used
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tools.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--muted)",
                      border: "1px solid rgba(255,255,255,.1)",
                      background: "rgba(255,255,255,.03)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Mini testimonial */}
            <div
              style={{
                borderRadius: 16,
                padding: 16,
                background: "rgba(201,168,76,.04)",
                border: "1px solid rgba(201,168,76,.18)",
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  color: "var(--gold)",
                  fontFamily: "'Cormorant Garamond',serif",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: 12.5,
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: 14,
                }}
              >
                {s.testimonial.quote.length > 120
                  ? s.testimonial.quote.slice(0, 120) + "…"
                  : s.testimonial.quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  paddingTop: 12,
                  borderTop: "1px solid rgba(201,168,76,.1)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#000",
                    flexShrink: 0,
                    fontFamily: "'Cormorant Garamond',serif",
                  }}
                >
                  {s.testimonial.author[0]}
                </div>
                <div>
                  <div
                    style={{ fontSize: 12.5, fontWeight: 600, color: "#fff" }}
                  >
                    {s.testimonial.author}
                  </div>
                  <div style={{ fontSize: 10.5, color: "var(--muted)" }}>
                    {s.testimonial.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTAs */}
            <Link
              href="/?goto=contact"
              className="btn-gold"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: 13,
                padding: "12px 16px",
                borderRadius: 10,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 6,
                border: "2px solid var(--gold)",
                textDecoration: "none",
              }}
            >
              Get Similar Results →
            </Link>
            <Link
              href="/case-studies/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 15px",
                borderRadius: 12,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
                fontSize: 12.5,
                fontWeight: 500,
                color: "var(--muted)",
                textDecoration: "none",
                transition: ".2s",
              }}
            >
              ← All Case Studies
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </aside>
        </div>
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media(max-width:1024px){
          .cs-body-grid{ grid-template-columns:1fr !important; }
          .cs-sidebar  { display:none !important; }
        }
        @media(max-width:767px){
          .ba-grid{ grid-template-columns:1fr !important; }
          .ba-grid>div:first-child{ border-radius:16px 16px 0 0 !important; }
          .ba-grid>div:last-child { border-radius:0 0 16px 16px !important; border-left:1px solid rgba(52,199,89,.16) !important; border-top:none !important; }
        }
      `}</style>
    </article>
  );
}
