"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps { currentPage: string; onNavigate: (page: string) => void; }

const SPA_LINKS = [
  { label: "Home",       page: "home"       },
  { label: "Services",   page: "services"   },
  { label: "Industries", page: "industries" },
  { label: "Locations",  page: "location"   },
  { label: "Pricing",    page: "pricing"    },
  { label: "FAQ",        page: "faq"        },
  { label: "About",      page: "about"      },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  /* scroll effect — pure DOM, no React state → no hydration mismatch */
  useEffect(() => {
    const el = document.getElementById("site-nav") as HTMLElement | null;
    if (!el) return;
    const fn = () => {
      el.style.background =
        window.scrollY > 50 ? "rgba(8,8,16,.97)" : "rgba(8,8,16,.82)";
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (page: string) => { setOpen(false); onNavigate(page); };

  const linkCss = (active: boolean): React.CSSProperties => ({
    display: "block",
    padding: "7px 11px",
    borderRadius: 7,
    fontSize: 11.5,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: ".06em",
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
    transition: ".18s",
    background: active ? "rgba(201,168,76,.08)" : "transparent",
    color:      active ? "var(--gold)" : "var(--muted)",
    textDecoration: "none",
  });

  return (
    <>
      {/* ── MOBILE MENU OVERLAY ────────────────── */}
      {open && (
        <div style={{
          position:"fixed", inset:0, zIndex:1000,
          background:"rgba(8,8,16,.98)",
          backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
          display:"flex", flexDirection:"column", overflowY:"auto",
        }}>
          {/* top row */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 20px", borderBottom:"1px solid var(--line)" }}>
            <button onClick={() => go("home")}
              style={{ background:"none", border:"none", cursor:"pointer", padding:0, textAlign:"left" }}>
              <div style={{ fontFamily:"var(--font-cormorant,serif)", fontSize:20, fontWeight:700, color:"#fff", lineHeight:1.2 }}>
                Faisal <span style={{ color:"var(--gold)" }}>Rehman</span>
              </div>
              <div style={{ fontSize:9, color:"var(--gold)", letterSpacing:".18em", textTransform:"uppercase", fontWeight:600 }}>
                Local SEO Expert · 05+ Years
              </div>
            </button>
            <button onClick={() => setOpen(false)} aria-label="Close menu"
              style={{ width:40, height:40, borderRadius:10, background:"rgba(255,255,255,.07)", border:"1px solid var(--line)", color:"#fff", cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              ✕
            </button>
          </div>

          {/* nav links */}
          <div style={{ flex:1, padding:"10px 18px 0" }}>
            {SPA_LINKS.map(l => (
              <button key={l.page} onClick={() => go(l.page)}
                style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderRadius:12, marginBottom:4, background: currentPage===l.page ? "rgba(201,168,76,.1)" : "transparent", border:`1px solid ${currentPage===l.page ? "rgba(201,168,76,.25)" : "transparent"}`, color: currentPage===l.page ? "var(--gold)" : "var(--text)", fontFamily:"var(--font-cormorant,serif)", fontSize:21, fontWeight:700, cursor:"pointer", textAlign:"left", transition:".18s" }}>
                {l.label} <span style={{ color:"var(--muted)", fontSize:13 }}>→</span>
              </button>
            ))}
            <Link href="/case-studies/" onClick={() => setOpen(false)}
              style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderRadius:12, marginBottom:4, background: currentPage==="case-studies" ? "rgba(201,168,76,.1)" : "transparent", border:`1px solid ${currentPage==="case-studies" ? "rgba(201,168,76,.25)" : "transparent"}`, color: currentPage==="case-studies" ? "var(--gold)" : "var(--text)", fontFamily:"var(--font-cormorant,serif)", fontSize:21, fontWeight:700, textDecoration:"none" }}>
              Case Studies <span style={{ color:"var(--muted)", fontSize:13 }}>→</span>
            </Link>
            <button onClick={() => go("contact")}
              style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderRadius:12, marginBottom:4, background: currentPage==="contact" ? "rgba(201,168,76,.1)" : "transparent", border:`1px solid ${currentPage==="contact" ? "rgba(201,168,76,.25)" : "transparent"}`, color: currentPage==="contact" ? "var(--gold)" : "var(--text)", fontFamily:"var(--font-cormorant,serif)", fontSize:21, fontWeight:700, cursor:"pointer", textAlign:"left" }}>
              Contact <span style={{ color:"var(--muted)", fontSize:13 }}>→</span>
            </button>
          </div>

          {/* bottom CTA */}
          <div style={{ padding:"18px 18px 34px", borderTop:"1px solid var(--line)", marginTop:10 }}>
            <button onClick={() => go("contact")} className="btn-gold"
              style={{ width:"100%", justifyContent:"center", fontSize:15 }}>
              Book Free SEO Audit →
            </button>
            <div style={{ display:"flex", gap:10, marginTop:14, justifyContent:"center" }}>
              {[
                { href:"https://www.linkedin.com/in/faisallseo/", label:"in" },
                { href:"https://www.upwork.com/freelancers/~01caf2a54582f779b8", label:"Up" },
                { href:"mailto:contact@faisalseo.com", label:"@" },
                { href:"https://wa.link/rxsrsw", label:"W" },
              ].map(s => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer" className="social-link">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── DESKTOP / STICKY NAV ───────────────── */}
      <nav id="site-nav" style={{
        position:"sticky", top:0, zIndex:999,
        padding:"0 32px", height:68,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        background:"rgba(8,8,16,.82)",
        backdropFilter:"blur(22px)", WebkitBackdropFilter:"blur(22px)",
        borderBottom:"1px solid var(--line)",
        transition:"background .28s",
      }}>

        {/* logo */}
        <button onClick={() => go("home")}
          style={{ background:"none", border:"none", cursor:"pointer", padding:0, flexShrink:0, textAlign:"left" }}>
          <div style={{ fontFamily:"var(--font-cormorant,serif)", fontSize:20, fontWeight:700, color:"#fff", lineHeight:1.2 }}>
            Faisal <span style={{ color:"var(--gold)" }}>Rehman</span>
          </div>
          <div style={{ fontFamily:"var(--font-inter,sans-serif)", fontSize:9, color:"var(--gold)", letterSpacing:".2em", textTransform:"uppercase", fontWeight:600 }}>
            Local SEO Expert · 05+ Years
          </div>
        </button>

        {/* desktop links */}
        <ul className="nav-desktop-links"
          style={{ display:"flex", gap:1, listStyle:"none", alignItems:"center" }}>
          {SPA_LINKS.map(l => (
            <li key={l.page}>
              <button onClick={() => go(l.page)} style={linkCss(currentPage === l.page)}>
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <Link href="/case-studies/" style={linkCss(currentPage === "case-studies")}>
              Cases
            </Link>
          </li>
        </ul>

        {/* right side */}
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <button onClick={() => go("contact")} className="nav-cta-btn"
            style={{ background:"var(--gold)", color:"#000", padding:"9px 20px", borderRadius:6, fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:".05em", cursor:"pointer", border:"none", transition:".22s", flexShrink:0 }}>
            Hire Me →
          </button>
          <button onClick={() => setOpen(true)} className="mobile-hamburger" aria-label="Menu"
            style={{ display:"none", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,.06)", border:"1px solid var(--line2)", color:"#fff", width:42, height:42, borderRadius:10, cursor:"pointer", flexShrink:0 }}>
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
