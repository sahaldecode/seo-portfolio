import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/content/case-studies/data";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Case Studies | Local SEO Results – Faisal Rehman",
  description:
    "Real local SEO results: +300% monthly leads, #1 Google Maps rankings, +120% organic traffic. Case studies for HVAC, Dental, Healthcare, Cleaning and more.",
  openGraph: {
    title: "Case Studies | Local SEO Results – Faisal Rehman",
    description: "Proven local SEO results with real data from real clients.",
    url: "https://faisalseo.com/case-studies/",
  },
  alternates: { canonical: "https://faisalseo.com/case-studies/" },
};

const industryImg: Record<string, string> = {
  Cleaning: "/images/case-cleaning.svg",
  HVAC: "/images/case-hvac.svg",
  Healthcare: "/images/case-healthcare.svg",
  Roofing: "/images/case-roofing.svg",
  Dental: "/images/case-dental.svg",
  "Home Services": "/images/case-security.svg",
};
const fallback = "/images/case-default.svg";

export default function CaseStudiesPage() {
  return (
    <div>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div className="sec-label" style={{ justifyContent: "center" }}>
            Portfolio
          </div>
          <h1 style={{ fontSize: "clamp(32px,6vw,64px)", marginBottom: 16 }}>
            Real SEO Results.
            <br />
            <span className="gold">Real Client Growth.</span>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "clamp(14px,2vw,17px)",
              lineHeight: 1.8,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Every case study includes the full story — strategy, execution, and
            transparent results. No fluff.
          </p>
          {/* Quick stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            {[
              { v: "6+", l: "Case Studies" },
              { v: "300%+", l: "Avg Traffic Lift" },
              { v: "100%", l: "White-Hat SEO" },
              { v: "5+yrs", l: "Experience" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  padding: "12px 22px",
                  borderRadius: 14,
                  border: "1px solid var(--line)",
                  background: "rgba(201,168,76,.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    marginTop: 3,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CASE STUDY GRID ── */}
      <div className="section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
          className="cases-list-grid"
        >
          {caseStudies.map((study, idx) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}/`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                style={{
                  background:
                    "linear-gradient(145deg,rgba(255,255,255,.048),rgba(255,255,255,.016))",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: ".32s cubic-bezier(.2,.8,.2,1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                className="cs-card"
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    background: "var(--dark2)",
                  }}
                >
                  <Image
                    src={industryImg[study.industry] ?? fallback}
                    alt={study.title}
                    fill
                    sizes="(max-width:767px) 100vw, (max-width:1024px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform .5s ease",
                    }}
                    className="cs-card-img"
                    priority={idx < 3}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(8,8,16,.85) 0%, transparent 50%)",
                    }}
                  />
                  {/* Tags */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      display: "flex",
                      gap: 7,
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: 999,
                        fontSize: 10.5,
                        fontWeight: 700,
                        background: "var(--gold)",
                        color: "#000",
                      }}
                    >
                      {study.industry}
                    </span>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: 999,
                        fontSize: 10.5,
                        fontWeight: 600,
                        background: "rgba(0,0,0,.6)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,.14)",
                      }}
                    >
                      {study.location}
                    </span>
                  </div>
                  {/* Arrow */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transform: "translateY(4px)",
                      transition: ".28s",
                    }}
                    className="cs-arrow"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                {/* Body */}
                <div
                  style={{
                    padding: "20px 22px 24px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 8,
                      lineHeight: 1.2,
                      transition: "color .2s",
                    }}
                    className="cs-title"
                  >
                    {study.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      flex: 1,
                    }}
                  >
                    {study.description}
                  </p>
                  {/* Result pills */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                    }}
                  >
                    {study.results.slice(0, 2).map((r) => (
                      <div
                        key={r.metric}
                        style={{
                          padding: "10px 12px",
                          borderRadius: 12,
                          border: "1px solid rgba(201,168,76,.14)",
                          background: "rgba(201,168,76,.05)",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Cormorant Garamond',serif",
                            fontSize: 22,
                            fontWeight: 700,
                            color: "var(--gold)",
                            lineHeight: 1,
                          }}
                        >
                          {r.value}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "var(--muted)",
                            textTransform: "uppercase",
                            letterSpacing: ".04em",
                            fontWeight: 600,
                            marginTop: 3,
                          }}
                        >
                          {r.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 16,
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "var(--gold)",
                    }}
                  >
                    View Full Case Study{" "}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      

        {/* Bottom CTA */}
        <div
          className="cta-band"
          style={{ marginTop: 64, textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(24px,4vw,40px)",
              marginBottom: 12,
              fontFamily: "'Cormorant Garamond',serif",
            }}
          >
            Want to be the next success story?
          </h2>
          <p
            style={{
              color: "var(--muted)",
              marginBottom: 28,
              maxWidth: 460,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.8,
            }}
          >
            Book a free strategy call and let&apos;s map out your growth plan
            together.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
          {/* <button onClick={() => onNavigate("contact")} className="btn-gold">Book Free Audit →</button> */}

            <Link 
              href="/contact/"
              className="btn-gold"
              style={{
                fontSize: 14,
                padding: "13px 28px",
                border: "2px solid var(--gold)",
                borderRadius: 8,
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Book Free Audit →
            </Link>
            <Link
              href="/contact/"
              className="btn-outline"
              style={{ fontSize: 14, padding: "13px 28px" }}
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div> 

      <style>{`
        .cases-list-grid { }
        .cs-card:hover { transform: translateY(-8px); border-color: rgba(201,168,76,.28) !important; box-shadow: 0 20px 56px rgba(0,0,0,.4); }
        .cs-card:hover .cs-arrow   { opacity: 1 !important; transform: translateY(0) !important; }
        .cs-card:hover .cs-card-img { transform: scale(1.05); }
        .cs-card:hover .cs-title   { color: var(--gold) !important; }
        @media(max-width:1024px) { .cases-list-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:767px)  { .cases-list-grid { grid-template-columns: 1fr !important; } .cs-card:hover { transform: none; } }
      `}</style>
    </div>
  );
}
