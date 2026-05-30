"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { getCaseImage } from "@/content/case-studies/data";
import Image from "next/image";

interface Props {
  onNavigate?: (page: string) => void;
  preview?: boolean;
}

const cases = [
  {
    slug: "fresh-start-facility-services",
    industry: "Cleaning",
    images: "/images/Go-toSEOSuperior.png",
    tags: ["Cleaning", "Local SEO"],
    title: "Fresh Start Facility Services",
    desc: "8.4K clicks, 3.01M impressions and average position improved from 29.6 to 16.5 in 6 months.",
    results: ["8.4K Clicks", "3.01M Impressions", "Pos. 16.5"],
    featured: false,
  },
  {
    slug: "go-to-superior-hvac",
    industry: "HVAC",
    tags: ["HVAC", "GBP SEO", "Maps"],
    title: "Go To Superior HVAC",
    desc: "Local SEO campaign focused on Maps visibility, service pages and call growth. +87% calls in 8 months.",
    results: ["+87% Calls", "+52% Bookings"],
    featured: true,
  },
  {
    slug: "fraum-center-healthcare",
    industry: "Healthcare",
    tags: ["Healthcare", "Tech SEO"],
    title: "Fraum Center",
    desc: "Healthcare local SEO with improved visibility, technical structure and stronger local presence.",
    results: ["+120% Organic Traffic"],
    featured: false,
  },
  {
    slug: "elite-roofing",
    industry: "Roofing",
    tags: ["Roofing", "Local SEO"],
    title: "Elite Roofing",
    desc: "Ranked #1 for 15+ high-value keywords in a competitive metro area. Monthly leads tripled.",
    results: ["+300% Monthly Leads", "#1 Rankings"],
    featured: false,
  },
  {
    slug: "bright-smile-dental",
    industry: "Dental",
    tags: ["Dental", "GBP SEO"],
    title: "Bright Smile Dental",
    desc: "GBP optimization + local citations → #1 in local pack for 9 keywords. Appointments grew 87%.",
    results: ["#1 Local Pack", "+87% Appointments"],
    featured: false,
  },
  {
    slug: "homeguard-security",
    industry: "Home Services",
    tags: ["Home Services", "LSA"],
    title: "HomeGuard Security",
    desc: "Technical SEO + Local Service Ads → conversion rate up 2.4×, cost per lead down 45%.",
    results: ["2.4× Conversion Rate", "-45% CPL"],
    featured: false,
  },
];

export function CaseStudiesPreview({ onNavigate, preview }: Props) {
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
      { threshold: 0.08 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const displayed = preview ? cases.slice(0, 3) : cases;

  return (
    <div ref={ref} className="section">
      {/* Header */}
      <div className="sec-center reveal">
        <div className="sec-label">Portfolio</div>
        <h2 className="sec-title">
          Local SEO Case Studies &amp;{" "}
          <span className="gold">Real Ranking Growth</span>
        </h2>
        <div className="divider-line" />
        <p className="sec-desc">
          Result-focused SEO campaigns across local businesses, healthcare,
          cleaning, HVAC and service brands.
        </p>
      </div>

      {/* Cards grid */}
      <div className="g3" style={{ marginTop: 44 }}>
        {displayed.map((c, idx) => (
          <Link
            key={c.slug}
            href={`/case-studies/${c.slug}/`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              className={`card reveal cs-preview-card${c.featured ? " case-featured" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: 420,
                cursor: "pointer",
                padding: 0,
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 180,
                  margin: "14px 14px 0",
                  borderRadius: 14,
                  border: "1px solid var(--line)",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--dark2)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={getCaseImage(c as any)}
                  alt={c.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform .4s ease",
                  }}
                  className="cs-preview-img"
                  sizes="(max-width:767px) 100vw, (max-width:1024px) 50vw, 33vw"
                  priority={idx < 3}
                />
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "14px 22px 24px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {c.tags.map((t) => (
                    <span key={t} className="case-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, flex: 1 }}>
                  {c.desc}
                </p>

                {/* Results */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 7,
                    marginTop: 12,
                  }}
                >
                  {c.results.map((r) => (
                    <span key={r} className="case-result">
                      {r}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 16,
                    color: "var(--gold)",
                    fontWeight: 700,
                    fontSize: 13.5,
                  }}
                >
                  View Full Case Study →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom buttons */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        {preview ? (
          <Link href="/case-studies/" className="btn-outline">
            View All Case Studies →
          </Link>
        ) : (
          <Link href="/contact/" className="btn-gold">
            Start Your SEO Campaign →
          </Link>
        )}
      </div>

      <style>{`
        .cs-preview-card:hover .cs-preview-img { transform: scale(1.04); }
        @media(max-width:767px) { .cs-preview-card:hover { transform: none !important; } }
      `}</style>
    </div>
  );
}
