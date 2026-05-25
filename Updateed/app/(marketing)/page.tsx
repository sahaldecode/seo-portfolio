"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { Pricing } from "@/components/sections/Pricing";
import { BookingCalendar } from "@/components/sections/BookingCalendar";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";
import { Industries } from "@/components/sections/Industries";
import { Locations } from "@/components/sections/Locations";

type Page = "home"|"services"|"case-studies"|"industries"|"location"|"pricing"|"faq"|"about"|"contact";

export default function HomePage() {
  const [page, setPage] = useState<Page>("home");
  const navigate = (p: string) => { setPage(p as Page); window.scrollTo({ top: 0, behavior: "smooth" }); };

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
            <CaseStudiesPreview onNavigate={navigate} preview />
            <Pricing onNavigate={navigate} preview />
            <BookingCalendar onNavigate={navigate} />
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
                <p style={{ color:"var(--muted)", marginTop:16, fontSize:17, maxWidth:560, marginLeft:"auto", marginRight:"auto", lineHeight:1.8 }}>Comprehensive local SEO solutions tailored to your business goals, budget and competitive landscape.</p>
              </div>
            </div>
            <Services onNavigate={navigate} />
          </>
        )}
        {page === "case-studies" && (
          <>
            <div className="page-hero">
              <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                <div className="sec-label" style={{ justifyContent:"center" }}>Portfolio</div>
                <h1>Client Success <span className="gold">Stories</span></h1>
                <p style={{ color:"var(--muted)", marginTop:16, fontSize:17, maxWidth:540, marginLeft:"auto", marginRight:"auto", lineHeight:1.8 }}>Real results from real local SEO campaigns across multiple industries and locations.</p>
              </div>
            </div>
            <CaseStudiesPreview onNavigate={navigate} />
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
                <p style={{ color:"var(--muted)", marginTop:16, fontSize:17, maxWidth:540, marginLeft:"auto", marginRight:"auto", lineHeight:1.8 }}>Simple, results-focused packages. No hidden fees. Final scope customized after a free strategy call.</p>
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
                <p style={{ color:"var(--muted)", marginTop:16, fontSize:17, maxWidth:540, marginLeft:"auto", marginRight:"auto", lineHeight:1.8 }}>Everything you need to know about working with me, my process and what to expect.</p>
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
                <p style={{ color:"var(--muted)", marginTop:16, fontSize:17, maxWidth:540, marginLeft:"auto", marginRight:"auto", lineHeight:1.8 }}>05+ years of local SEO excellence, WordPress development and design expertise.</p>
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
                    { icon:"✅", h:"White-Hat Only",             p:"No black-hat shortcuts. Sustainable, algorithm-proof SEO strategies that build lasting authority and withstand Google updates." },
                    { icon:"📊", h:"Data-Driven Decisions",       p:"Every recommendation is backed by analytics, keyword data, competitor intelligence and real search behavior — never guesswork." },
                    { icon:"🤝", h:"Transparent Communication",   p:"Monthly reports, clear progress updates and direct access to me — no account managers, no corporate runaround." },
                    { icon:"🎯", h:"Results-Focused",             p:"Rankings are a means to an end. I track what matters — calls, leads, appointments and revenue growth for your business." },
                  ].map(v => (
                    <div key={v.h} className="card">
                      <div className="card-icon">{v.icon}</div>
                      <h3>{v.h}</h3>
                      <p>{v.p}</p>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign:"center", marginTop:52 }}>
                  <button onClick={() => navigate("contact")} className="btn-gold">Work With Me →</button>
                </div>
              </div>
            </div>
          </>
        )}
        {page === "contact" && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
      <a href="https://wa.link/rxsrsw" target="_blank" rel="noopener noreferrer"
        style={{ position:"fixed", bottom:28, right:28, width:56, height:56, borderRadius:"50%", background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 28px rgba(37,211,102,.4)", zIndex:998, fontSize:26, textDecoration:"none", transition:".25s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform="scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform=""; }}
        aria-label="WhatsApp"
      >💬</a>
    </>
  );
}
