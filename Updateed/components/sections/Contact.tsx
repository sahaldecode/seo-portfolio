"use client";
import { useEffect, useRef, useState } from "react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name:"", email:"", phone:"", website:"", service:"", message:"" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
    }), { threshold: .08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { obs.disconnect(); try { document.body.removeChild(script); } catch {} };
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
  };

  const field = (label: string, key: string, type: string, placeholder: string, required = false) => (
    <div key={key} className="form-group">
      <label>{label}</label>
      <input
        type={type} placeholder={placeholder} required={required}
        value={(form as Record<string,string>)[key]}
        onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
      />
    </div>
  );

  return (
    <div ref={ref}>
      {/* Hero */}
      <div className="contact-hero" style={{ minHeight:"40vh", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"110px 24px 52px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 50% at 50% 50%,rgba(201,168,76,.06),transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1, maxWidth:560, width:"100%" }}>
          <div className="sec-label" style={{ justifyContent:"center" }}>Let&apos;s Talk</div>
          <h1 style={{ fontSize:"clamp(28px,7vw,60px)" }}>Get In <span className="gold">Touch</span></h1>
          <p style={{ color:"var(--muted)", marginTop:14, fontSize:"clamp(14px,2.5vw,17px)", lineHeight:1.8 }}>Ready to grow your local visibility? Tell me about your business and I&apos;ll get back to you within 2 hours.</p>
        </div>
      </div>

      {/* Form + Calendly */}
      <div className="section">
        <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, alignItems:"start" }}>
          {/* Form */}
          <div className="card reveal" style={{ padding:28 }}>
            <div className="sec-label">Send a Message</div>
            <h3 style={{ fontSize:22, marginBottom:22 }}>Tell Me About Your Business</h3>
            {sent ? (
              <div style={{ textAlign:"center", padding:"40px 0" }}>
                <div style={{ fontSize:44, marginBottom:14 }}>✅</div>
                <h3 style={{ color:"var(--gold)", marginBottom:10 }}>Message Sent!</h3>
                <p style={{ color:"var(--muted)" }}>I&apos;ll get back to you within 2 business hours.</p>
              </div>
            ) : (
              <>
                {field("Your Name","name","text","John Smith",true)}
                {field("Email Address","email","email","john@company.com",true)}
                {field("Phone Number (Optional)","phone","tel","+1 (555) 000-0000")}
                {field("Your Website URL","website","url","https://yourwebsite.com")}
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}>
                    <option value="">Select a service...</option>
                    {["Local SEO","GMB / GBP Optimization","WordPress & Elementor Dev","Technical SEO","AI SEO / GEO","SEO Audit","Full Growth Plan","Enterprise / Agency"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Me About Your Goals</label>
                  <textarea placeholder="Tell me about your business, current rankings, challenges and what success looks like for you..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
                </div>
                <button onClick={handleSubmit} className="btn-gold" style={{ width:"100%", justifyContent:"center", border:"none", cursor:"pointer" }}>
                  Send Message →
                </button>
                <p style={{ fontSize:11.5, color:"var(--muted)", marginTop:12, textAlign:"center" }}>I respond within 2 business hours. Your info is 100% confidential.</p>
              </>
            )}
          </div>

          {/* Right — contact info + Calendly */}
          <div>
            <div className="card reveal" style={{ padding:24, marginBottom:18 }}>
              <h3 style={{ marginBottom:16, fontSize:19 }}>Direct Contact</h3>
              {[
                { icon:"📧", label:"Email",    val:<a href="mailto:contact@faisalseo.com" style={{ color:"var(--gold)" }}>contact@faisalseo.com</a> },
                { icon:"💬", label:"WhatsApp", val:<span style={{ color:"var(--muted)" }}>+923466127774</span> },
                { icon:"🔗", label:"LinkedIn", val:<a href="https://www.linkedin.com/in/faisallseo/" target="_blank" rel="noopener noreferrer" style={{ color:"var(--gold)" }}>linkedin.com/in/faisallseo</a> },
                { icon:"⬆️", label:"Upwork",   val:<a href="https://www.upwork.com/freelancers/~01caf2a54582f779b8" target="_blank" rel="noopener noreferrer" style={{ color:"var(--gold)" }}>Upwork Profile</a> },
              ].map(c => (
                <p key={c.label} style={{ marginBottom:10, fontSize:14 }}>
                  <strong style={{ color:"#fff" }}>{c.icon} {c.label}:</strong>{" "}{c.val}
                </p>
              ))}
              <div style={{ marginTop:18, paddingTop:18, borderTop:"1px solid var(--line)" }}>
                <h4 style={{ color:"#fff", fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:700, marginBottom:8 }}>🕐 Availability</h4>
                <p style={{ color:"var(--muted)", fontSize:13 }}>Mon – Fri: 9am – 6pm PKT</p>
                <p style={{ color:"var(--muted)", fontSize:13 }}>Weekends: Limited availability</p>
              </div>
            </div>
            <div className="reveal" style={{ background:"#fff", borderRadius:22, overflow:"hidden", border:"1px solid var(--line)", boxShadow:"0 18px 60px rgba(0,0,0,.38)" }}>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/faisalrehman810/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth:280, height:700 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
