"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone, Clock, ArrowUpRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔧 APNA FORMSPREE ID YAHAN DAALO
// Step 1: formspree.io par free account banao
// Step 2: "New Form" banao, apna email dalo
// Step 3: Form ID milega (jaise: xpzgkqvr) — woh yahan paste karo
const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // ← SIRF YEH CHANGE KARO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 📱 APNA WHATSAPP NUMBER YAHAN DAALO (country code ke saath, no + or spaces)
const WHATSAPP_NUMBER = "923001234567"; // ← Yeh bhi change karo

const contactInfo = [
  { icon: Mail,    label: "Email",    value: "hello@seoexpert.pk",  href: "mailto:hello@seoexpert.pk" },
  { icon: Phone,   label: "Phone",    value: "+92 300 1234567",     href: "tel:+923001234567" },
  { icon: MapPin,  label: "Location", value: "Karachi, Pakistan",   href: null },
  { icon: Clock,   label: "Response", value: "Within 24 hours",     href: null },
];

export function Contact() {
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New SEO Inquiry from ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I found your SEO portfolio and I'm interested in discussing a project."
  )}`;

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-dark border text-white text-sm placeholder-light-muted/30 focus:border-lime-accent/40 focus:outline-none focus:ring-1 focus:ring-lime-accent/20 transition-all duration-200";
  const borderStyle = { borderColor: "rgba(255,255,255,0.08)" };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[220px] pointer-events-none" style={{ background: "rgba(232,255,71,0.04)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(232,255,71,0.03)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ─── LEFT INFO ─── */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal>
              <span className="section-label">Contact</span>
              <h2 className="font-heading font-extrabold text-4xl lg:text-4xl text-white leading-[1.05] mb-4">
                Let&apos;s Start<br /><span className="text-lime-accent">Something Great</span>
              </h2>
              <p className="text-sm text-light-muted leading-relaxed">
                Ready to transform your organic visibility? Choose how you&apos;d like to connect.
              </p>
            </ScrollReveal>

            {/* WhatsApp CTA — prominent */}
            <ScrollReveal delay={0.08}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "rgba(37,211,102,0.06)", borderColor: "rgba(37,211,102,0.25)", boxShadow: "0 0 30px rgba(37,211,102,0.06)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg" style={{ background: "#25D366", boxShadow: "0 4px 16px rgba(37,211,102,0.35)" }}>
                  {/* WhatsApp SVG icon */}
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-bold text-white text-sm mb-0.5">Chat on WhatsApp</div>
                  <div className="text-xs font-mono" style={{ color: "#25D366" }}>+92 300 1234567 · Usually replies in minutes</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white shrink-0 transition-colors" />
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="space-y-2">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-dark-secondary border border-white/[6%] hover:border-lime-accent/20 transition-all duration-200 group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-lime-accent" style={{ background: "rgba(232,255,71,0.08)" }}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[9px] text-light-muted/50 uppercase font-mono tracking-wider mb-0.5">{item.label}</div>
                        <div className="text-sm text-white font-medium truncate">{item.value}</div>
                      </div>
                      {item.href && <ArrowUpRight className="w-3 h-3 text-lime-accent/30 group-hover:text-lime-accent ml-auto shrink-0 transition-colors" />}
                    </div>
                  );
                  return item.href ? <a key={item.label} href={item.href}>{inner}</a> : <div key={item.label}>{inner}</div>;
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="p-4 rounded-2xl border" style={{ background: "rgba(232,255,71,0.04)", borderColor: "rgba(232,255,71,0.18)" }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-lime-accent flex items-center justify-center shrink-0 mt-0.5" style={{ boxShadow: "0 4px 14px rgba(232,255,71,0.25)" }}>
                    <span className="text-dark font-bold text-xs">✦</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm mb-1">Free SEO Audit — $1,500 Value</h3>
                    <p className="text-xs text-light-muted leading-relaxed mb-2">Comprehensive technical audit with full action plan. Free for new clients.</p>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" />
                      <span className="text-xs text-lime-accent font-mono font-medium">Only 3 spots remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ─── RIGHT FORM ─── */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.15}>
              <div className="bg-dark-secondary rounded-2xl border border-white/[6%] p-6 lg:p-8 shadow-2xl shadow-black/30">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div key="success" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                      <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.15 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                        style={{ background: "rgba(232,255,71,0.1)", border: "1px solid rgba(232,255,71,0.2)" }}
                      >
                        <CheckCircle className="w-7 h-7 text-lime-accent" />
                      </motion.div>
                      <h3 className="font-heading font-bold text-xl text-white mb-2">Message Sent! 🎉</h3>
                      <p className="text-sm text-light-muted mb-3 max-w-xs mx-auto">Thanks! I&apos;ll get back to you within 24 hours.</p>
                      <p className="text-xs text-light-muted/60 mb-6">Ya phir WhatsApp par seedha message karo fast reply ke liye.</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                          style={{ background: "#25D366" }}>
                          <MessageCircle className="w-4 h-4" /> WhatsApp karo
                        </a>
                        <button onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", company: "", service: "", message: "" }); }}
                          className="text-sm text-lime-accent font-medium hover:underline px-5 py-2.5">
                          Dobara message bhejo
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading font-bold text-white text-base">Send a Message</h3>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full transition-colors"
                          style={{ background: "rgba(37,211,102,0.1)", color: "#25D366", border: "1px solid rgba(37,211,102,0.2)" }}>
                          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          WhatsApp se bhi kar sakte ho
                        </a>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono text-light-muted/70 uppercase tracking-widest mb-2">Name *</label>
                          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} style={borderStyle} placeholder="Aap ka naam" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono text-light-muted/70 uppercase tracking-widest mb-2">Email *</label>
                          <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} style={borderStyle} placeholder="email@company.com" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono text-light-muted/70 uppercase tracking-widest mb-2">Company</label>
                          <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} style={borderStyle} placeholder="Aapki company" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono text-light-muted/70 uppercase tracking-widest mb-2">Service</label>
                          <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={`${inputClass} appearance-none cursor-pointer`} style={borderStyle}>
                            <option value="">Select a service</option>
                            <option value="audit">SEO Audit</option>
                            <option value="growth">Growth Plan</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-light-muted/70 uppercase tracking-widest mb-2">Message</label>
                        <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} style={borderStyle} placeholder="Apna project detail batao..." />
                      </div>

                      {status === "error" && (
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
                          Kuch masla aaya. Please WhatsApp par message karo ya dobara try karo.
                        </div>
                      )}

                      <button type="submit" disabled={status === "loading"}
                        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime-accent text-dark font-bold rounded-xl hover:bg-white transition-all duration-300 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ boxShadow: "0 0 30px rgba(232,255,71,0.18)" }}>
                        {status === "loading" ? (
                          <><span className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" /> Bhej raha hoon...</>
                        ) : (
                          <>Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                        )}
                      </button>
                      <p className="text-center text-[11px] text-light-muted/40">
                        Form bharo ya seedha{" "}
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#25D366" }}>WhatsApp</a>
                        {" "}par message karo — 24 ghante mein reply guaranteed.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
