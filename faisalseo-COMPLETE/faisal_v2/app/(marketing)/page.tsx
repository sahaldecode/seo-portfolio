"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar }             from "@/components/layout/Navbar";
import { Footer }             from "@/components/layout/Footer";
import { Hero }               from "@/components/sections/Hero";
import { About }              from "@/components/sections/About";
import { Services }           from "@/components/sections/Services";
import { SkillsGrid }         from "@/components/sections/SkillsGrid";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { Pricing }            from "@/components/sections/Pricing";
import { BookingCalendar }    from "@/components/sections/BookingCalendar";
import { ProcessTimeline }    from "@/components/sections/ProcessTimeline";
import { Testimonials }       from "@/components/sections/Testimonials";
import { FAQ }                from "@/components/sections/FAQ";
import { Stats }              from "@/components/sections/Stats";
import { Contact }            from "@/components/sections/Contact";
import { Industries }         from "@/components/sections/Industries";
import { Locations }          from "@/components/sections/Locations";

type Page = "home"|"services"|"industries"|"location"|"pricing"|"faq"|"about"|"contact";

function Inner() {
  const sp = useSearchParams();
  const goto = (sp.get("goto") ?? "home") as Page;
  const [page, setPage] = useState<Page>(goto);

  useEffect(() => { setPage(goto); }, [goto]);

  const navigate = (p: string) => {
    if (p === "case-studies") { window.location.href = "/case-studies/"; return; }
    setPage(p as Page);
    window.scrollTo({ top:0, behavior:"smooth" });
  };

  return (
    <>
      <Navbar currentPage={page} onNavigate={navigate} />
      <main>
        {page === "home" && (
          <>
            <Hero onNavigate={navigate} />
            <About />
            <Services onNavigate={navigate} preview />
            <SkillsGrid />
            <CaseStudiesPreview preview />
            <Pricing onNavigate={navigate} preview />
            <BookingCalendar />
            <ProcessTimeline />
            <Testimonials />
            <FAQ onNavigate={navigate} preview />
            <Stats onNavigate={navigate} />
          </>
        )}
        {page === "services" && (
          <>
            <div className="page-hero">
              <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                <div className="sec-label" style={{ justifyContent:"center" }}>What I Offer</div>
                <h1>Premium <span className="gold">SEO Services</span></h1>
                <p style={{ color:"var(--muted)", marginTop:14, maxWidth:540, margin:"14px auto 0", lineHeight:1.8 }}>Comprehensive local SEO solutions tailored to your business goals.</p>
              </div>
            </div>
            <Services onNavigate={navigate} />
          </>
        )}
        {page === "industries" && <Industries onNavigate={navigate} />}
        {page === "location"   && <Locations  onNavigate={navigate} />}
        {page === "pricing" && (
          <>
            <div className="page-hero">
              <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                <div className="sec-label" style={{ justifyContent:"center" }}>Investment</div>
                <h1>Transparent <span className="gold">Pricing</span></h1>
                <p style={{ color:"var(--muted)", marginTop:14, maxWidth:540, margin:"14px auto 0", lineHeight:1.8 }}>Simple, results-focused packages. No hidden fees.</p>
              </div>
            </div>
            <Pricing onNavigate={navigate} />
          </>
        )}
        {page === "faq" && (
          <>
            <div className="page-hero">
              <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                <div className="sec-label" style={{ justifyContent:"center" }}>FAQ</div>
                <h1>Frequently Asked <span className="gold">Questions</span></h1>
              </div>
            </div>
            <FAQ onNavigate={navigate} />
          </>
        )}
        {page === "about" && (
          <>
            <div className="page-hero">
              <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                <div className="sec-label" style={{ justifyContent:"center" }}>Who I Am</div>
                <h1>About <span className="gold">Faisal Rehman</span></h1>
              </div>
            </div>
            <About full />
            <div className="bg-dark2">
              <div className="section">
                <div className="sec-center" style={{ marginBottom:36 }}>
                  <div className="sec-label">Core Values</div>
                  <h2 className="sec-title">My <span className="gold">Principles</span></h2>
                  <div className="divider-line" />
                </div>
                <div className="g2">
                  {[
                    { icon:"✅", h:"White-Hat Only",           p:"No shortcuts. Sustainable strategies that build lasting authority and withstand Google updates." },
                    { icon:"📊", h:"Data-Driven Decisions",     p:"Every recommendation backed by analytics, keyword data and real search behavior." },
                    { icon:"🤝", h:"Transparent Communication", p:"Monthly reports and direct access — no account managers or runaround." },
                    { icon:"🎯", h:"Results-Focused",           p:"I track what matters — calls, leads, appointments and revenue growth." },
                  ].map(v => (
                    <div key={v.h} className="card">
                      <div className="card-icon" style={{ fontSize:22 }}>{v.icon}</div>
                      <h3>{v.h}</h3><p>{v.p}</p>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign:"center", marginTop:48 }}>
                  <button onClick={() => navigate("contact")} className="btn-gold">Work With Me →</button>
                </div>
              </div>
            </div>
          </>
        )}
        {page === "contact" && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
      <a href="https://wa.link/rxsrsw" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        style={{ position:"fixed", bottom:22, right:22, zIndex:998, width:52, height:52, borderRadius:"50%", background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 6px 24px rgba(37,211,102,.4)", fontSize:22, textDecoration:"none" }}>
        💬
      </a>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div style={{ background:"#080810", minHeight:"100vh" }} />}>
      <Inner />
    </Suspense>
  );
}
