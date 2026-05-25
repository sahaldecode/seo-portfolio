"use client";

interface FooterProps { onNavigate: (page: string) => void; }

export function Footer({ onNavigate }: FooterProps) {
  const go = (page: string) => { onNavigate(page); window.scrollTo({ top:0, behavior:"smooth" }); };

  return (
    <footer className="footer-wrap" style={{ padding:"72px 48px 32px", background:"linear-gradient(135deg,#080810,#0d0d1e 54%,#090f12)", borderTop:"1px solid var(--line)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div
          className="footer-grid-inner"
          style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr", gap:36 }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, color:"var(--gold)", marginBottom:10 }}>Faisal Rehman</div>
            <p style={{ maxWidth:260, lineHeight:1.8, color:"var(--muted)", fontSize:13.5 }}>
              Local SEO &amp; AI SEO Specialist helping local businesses grow through Technical SEO, Google Business Profile optimization, high-converting WordPress websites, and AI-driven search visibility strategies.
            </p>
            <div style={{ display:"flex", gap:9, marginTop:16 }}>
              {[
                { href:"https://www.linkedin.com/in/faisallseo/",                        label:"in" },
                { href:"https://www.upwork.com/freelancers/~01caf2a54582f779b8",        label:"Up" },
                { href:"mailto:contact@faisalseo.com",                                   label:"@" },
                { href:"https://wa.link/rxsrsw",                                         label:"W" },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="social-link">{s.label}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:"var(--gold)", marginBottom:16 }}>Services</h4>
            <ul style={{ listStyle:"none", display:"grid", gap:2 }}>
              {["Local SEO","GMB / GBP SEO","WordPress Dev","Local Service Ads","Technical SEO","AI SEO / GEO"].map(s => (
                <li key={s}>
                  <button onClick={() => go("services")} style={{ background:"none", border:"none", color:"var(--muted)", fontSize:13.5, lineHeight:2.1, cursor:"pointer", textAlign:"left", transition:".2s", padding:0 }}
                    onMouseEnter={e => (e.currentTarget.style.color="var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color="var(--muted)")}
                  >{s}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:"var(--gold)", marginBottom:16 }}>Industries</h4>
            <ul style={{ listStyle:"none", display:"grid", gap:2 }}>
              {["HVAC","Dental","Healthcare","Home Services","Roofing","Cleaning"].map(s => (
                <li key={s}>
                  <button onClick={() => go("industries")} style={{ background:"none", border:"none", color:"var(--muted)", fontSize:13.5, lineHeight:2.1, cursor:"pointer", textAlign:"left", transition:".2s", padding:0 }}
                    onMouseEnter={e => (e.currentTarget.style.color="var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color="var(--muted)")}
                  >{s}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:"var(--gold)", marginBottom:16 }}>Company</h4>
            <ul style={{ listStyle:"none", display:"grid", gap:2 }}>
              {[["About Faisal","about"],["Case Studies","case-studies"],["Pricing","pricing"],["Locations","location"],["FAQ","faq"],["Contact","contact"]].map(([label,page]) => (
                <li key={page}>
                  <button onClick={() => go(page)} style={{ background:"none", border:"none", color:"var(--muted)", fontSize:13.5, lineHeight:2.1, cursor:"pointer", textAlign:"left", transition:".2s", padding:0 }}
                    onMouseEnter={e => (e.currentTarget.style.color="var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color="var(--muted)")}
                  >{label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ marginTop:44, paddingTop:22, borderTop:"1px solid var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
          <p style={{ color:"var(--muted2)", fontSize:12.5 }}>© 2026 Faisal Rehman. All Rights Reserved. Local SEO Expert · Technical SEO · AI/AEO/GEO SEO Expert</p>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ color:"var(--muted2)", fontSize:12.5 }}>contact@faisalseo.com</span>
            <a href="mailto:contact@faisalseo.com" className="btn-gold" style={{ fontSize:12, padding:"8px 16px" }}>Hire Me →</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
