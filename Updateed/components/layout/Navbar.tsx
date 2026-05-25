"use client";
import { useEffect, useState } from "react";

interface NavbarProps { currentPage: string; onNavigate: (page: string) => void; }

const navLinks = [
  { label: "Home",       page: "home" },
  { label: "Services",   page: "services" },
  { label: "Case Studies",      page: "case-studies" },
  { label: "Industries", page: "industries" },
  { label: "Locations",  page: "location" },
  { label: "Pricing",    page: "pricing" },
  { label: "FAQ",        page: "faq" },
  { label: "About",      page: "about" },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const go = (page: string) => { onNavigate(page); setMobileOpen(false); };

  return (
    <>
      {/* ── MOBILE OVERLAY ── */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(8,8,16,.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column",
          animation: "mobileMenuIn .22s ease",
          overflowY: "auto",
        }}>
          {/* Close + logo row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 22px", borderBottom: "1px solid var(--line)" }}>
            <div onClick={() => go("home")} style={{ cursor: "pointer" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#fff" }}>
                Faisal <span style={{ color: "var(--gold)" }}>Rehman</span>
              </div>
              <div style={{ fontSize: "9px", color: "var(--gold)", letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 600 }}>Local SEO Expert · 05+ Yrs</div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ background: "rgba(255,255,255,.07)", border: "1px solid var(--line)", color: "#fff", width: 40, height: 40, borderRadius: 10, cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              aria-label="Close menu"
            >✕</button>
          </div>

          {/* Nav links */}
          <div style={{ flex: 1, padding: "12px 22px 0" }}>
            {navLinks.map((l, i) => (
              <button
                key={l.page}
                onClick={() => go(l.page)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "15px 16px", borderRadius: 12, marginBottom: 4,
                  background: currentPage === l.page ? "rgba(201,168,76,.1)" : "transparent",
                  border: currentPage === l.page ? "1px solid rgba(201,168,76,.25)" : "1px solid transparent",
                  color: currentPage === l.page ? "var(--gold)" : "var(--text)",
                  fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700,
                  cursor: "pointer", textAlign: "left", transition: ".18s",
                  animationDelay: `${i * 40}ms`,
                }}
              >
                {l.label}
                <span style={{ color: "var(--muted)", fontSize: 14 }}>→</span>
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "15px 16px", borderRadius: 12, marginBottom: 4,
                background: currentPage === "contact" ? "rgba(201,168,76,.1)" : "transparent",
                border: currentPage === "contact" ? "1px solid rgba(201,168,76,.25)" : "1px solid transparent",
                color: currentPage === "contact" ? "var(--gold)" : "var(--text)",
                fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700,
                cursor: "pointer", textAlign: "left", transition: ".18s",
              }}
            >
              Contact
              <span style={{ color: "var(--muted)", fontSize: 14 }}>→</span>
            </button>
          </div>

          {/* Bottom CTA */}
          <div style={{ padding: "20px 22px 36px", borderTop: "1px solid var(--line)", marginTop: 12 }}>
            <button
              onClick={() => go("contact")}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center", fontSize: 15 }}
            >
              Book Free SEO Audit →
            </button>
            <div style={{ display: "flex", gap: 10, marginTop: 14, justifyContent: "center" }}>
              {[
                { href: "https://www.linkedin.com/in/faisallseo/", label: "in" },
                { href: "https://www.upwork.com/freelancers/~01caf2a54582f779b8", label: "Up" },
                { href: "mailto:contact@faisalseo.com", label: "@" },
                { href: "https://wa.link/rxsrsw", label: "W" },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="social-link">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 999,
        padding: "0 32px", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,16,.97)" : "rgba(8,8,16,.82)",
        backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)",
        borderBottom: "1px solid var(--line)", transition: "background .28s",
      }}>
        {/* Logo */}
        <div onClick={() => go("home")} style={{ cursor: "pointer", flexShrink: 0 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-.2px", lineHeight: 1.2 }}>
            Faisal <span style={{ color: "var(--gold)" }}>Rehman</span>
          </div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", color: "var(--gold)", letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 600 }}>
            Local SEO Expert · 05+ Years
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="nav-desktop-links" style={{ display: "flex", gap: 2, listStyle: "none", alignItems: "center" }}>
          {navLinks.map(l => (
            <li key={l.page}>
              <button onClick={() => go(l.page)} style={{
                color: currentPage === l.page ? "var(--gold)" : "var(--muted)",
                fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".06em",
                padding: "7px 12px", borderRadius: 8, cursor: "pointer", transition: ".2s",
                background: currentPage === l.page ? "rgba(201,168,76,.07)" : "transparent",
                border: "none",
              }}>{l.label}</button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={() => go("contact")} className="nav-cta-btn" style={{
            background: "var(--gold)", color: "#000", padding: "9px 20px",
            borderRadius: 6, fontSize: "12px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: ".05em", cursor: "pointer",
            transition: ".22s", border: "none",
          }}>Hire Me →</button>

          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-hamburger"
            aria-label="Open menu"
            style={{
              display: "none", alignItems: "center", justifyContent: "center",
              background: "rgba(255,255,255,.06)", border: "1px solid var(--line2)",
              color: "#fff", width: 42, height: 42, borderRadius: 10,
              cursor: "pointer", fontSize: 18, flexShrink: 0,
            }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect y="0"  width="18" height="2" rx="1" fill="currentColor"/>
              <rect y="6"  width="13" height="2" rx="1" fill="currentColor"/>
              <rect y="12" width="18" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
