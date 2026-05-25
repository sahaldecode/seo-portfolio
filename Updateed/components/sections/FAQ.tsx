"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  { q: "What makes your SEO different from traditional SEO?", a: "I connect technical SEO, local SEO, GBP optimization, content strategy, conversion UX and AI search visibility into one system — so SEO directly supports calls, leads and revenue, not just rankings." },
  { q: "How long does SEO take to show results?", a: "Typically 3–6 months for sustainable improvements. Some technical fixes can bring early wins in 4–6 weeks. Competition, website condition and niche all affect timeline." },
  { q: "Do you work with local businesses only?", a: "Local SEO is my main niche, but I also work with agencies, service-area businesses, healthcare clinics, WordPress, Webflow and Shopify websites." },
  { q: "Can you optimize my Google Business Profile?", a: "Yes. I optimize categories, services, descriptions, posts, photos, review strategy, Q&A, local signals and all conversion elements in GBP." },
  { q: "Can you build my local business website too?", a: "Yes. I build SEO-friendly local websites using WordPress and Elementor Pro — fast, clean and designed for both rankings and conversions." },
  { q: "Do you provide AI SEO / GEO?", a: "Yes. I improve entity clarity, citation-friendly content, brand signals and visibility for ChatGPT, Gemini, Perplexity and Google AI Overviews." },
  { q: "What is your experience level?", a: "I have 05+ years across Local SEO, WordPress & Elementor development, UI/UX design and graphic design — giving me a full-stack advantage when building and optimizing local business websites." },
  { q: "What is your pricing model?", a: "I offer monthly retainers starting at $3,500/mo, one-time audits starting at $1,500, and custom enterprise packages. All plans include transparent monthly reporting and direct communication." },
  { q: "Do you offer white-label SEO for agencies?", a: "Yes. I work as a white-label SEO partner for agencies that need reliable local SEO delivery for their clients. All work is done under your brand. Contact me to discuss terms." },
];

interface FAQProps { onNavigate?: (page: string) => void; preview?: boolean; }

export function FAQ({ onNavigate, preview }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const displayed = preview ? faqs.slice(0, 7) : faqs;

  return (
    <div ref={ref} className="bg-dark2">
      <div className="section">
        <div className="sec-center reveal">
          <div className="sec-label">FAQ</div>
          <h2 className="sec-title">{preview ? <>Common <span className="gold">Questions</span></> : <>Frequently Asked <span className="gold">Questions</span></>}</h2>
          <div className="divider-line" />
          {!preview && <p className="sec-desc" style={{ margin: "0 auto" }}>Everything you need to know about working with me, my process and what to expect.</p>}
        </div>
        <div style={{ maxWidth: 860, margin: "40px auto 0" }} className="reveal">
          {displayed.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <div className="faq-icon">+</div>
              </div>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
        {onNavigate && (
          <div style={{ textAlign: "center", marginTop: 52 }} className="reveal">
            {preview ? null : (
              <>
                <p style={{ color: "var(--muted)", marginBottom: 24, fontSize: 15 }}>Still have questions? I&apos;m happy to answer them on a free call.</p>
                <button onClick={() => onNavigate("contact")} className="btn-gold">Book a Free Call →</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
