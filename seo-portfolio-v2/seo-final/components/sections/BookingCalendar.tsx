// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📅 GOOGLE CALENDAR BOOKING SECTION
//
// SETUP (5 minute kaam hai):
//
// OPTION A — Google Calendar Appointment Scheduling (FREE):
//   1. calendar.google.com → "+" New → "Appointment schedule"
//   2. Apna time slots set karo (e.g. 30-min slots, Mon-Fri)
//   3. "Open booking page" → URL copy karo
//   4. Neeche CALENDAR_URL mein paste karo
//
// OPTION B — Calendly (recommended, better UI):
//   1. calendly.com par free account banao
//   2. Event type banao "30-min SEO Call"
//   3. Settings → Embed → "Inline Embed" → URL copy karo
//   4. Neeche CALENDAR_URL mein paste karo
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, MessageCircle, ArrowUpRight, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// ← YEH APNI CALENDAR URL SE REPLACE KARO
// Google Calendar: https://calendar.google.com/calendar/appointments/schedules/YOUR_ID
// Calendly:        https://calendly.com/YOUR_USERNAME/seo-strategy-call
const CALENDAR_URL = "https://calendly.com/YOUR_USERNAME/seo-strategy-call";
const WHATSAPP_NUMBER = "923001234567";

const callFeatures = [
  "Aapki website ka quick audit",
  "Top 3 improvement opportunities",
  "Competitor analysis snapshot",
  "Custom action plan outline",
];

const callTypes = [
  { icon: Video,           label: "Google Meet",  value: "meet",      desc: "Video call" },
  { icon: MessageCircle,   label: "WhatsApp",      value: "whatsapp",  desc: "Voice/Video" },
  { icon: Calendar,        label: "Zoom",          value: "zoom",      desc: "Zoom call" },
];

export function BookingCalendar() {
  const [view, setView] = useState<"info" | "embed">("info");
  const [selectedType, setSelectedType] = useState("meet");

  const openWhatsApp = () => {
    const msg = "Hi! I'd like to book a free 30-minute SEO strategy call.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="book-call" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(232,255,71,0.04)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ─── LEFT — Info ─── */}
          <div>
            <ScrollReveal>
              <span className="section-label">Free Strategy Call</span>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-4">
                Book a Free<br /><span className="text-lime-accent">30-Min Call</span>
              </h2>
              <p className="text-base text-light-muted leading-relaxed mb-8 max-w-md">
                No sales pitch. Sirf aapki website ke baare mein baat, real opportunities identify karna, aur ek clear action plan banana — bilkul free.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-3 mb-8">
                {callFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-light-muted">
                    <CheckCircle className="w-4 h-4 text-lime-accent shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/[6%] bg-dark-secondary mb-6">
                <div className="w-11 h-11 rounded-xl bg-lime-accent flex items-center justify-center shrink-0" style={{ boxShadow: "0 4px 16px rgba(232,255,71,0.25)" }}>
                  <Clock className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">30 minutes · No obligation</div>
                  <div className="text-xs text-light-muted">Mon–Fri, 10am–6pm PKT (UTC+5)</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="mb-4">
                <p className="text-[10px] font-mono text-light-muted/50 uppercase tracking-widest mb-2">Call platform chunein:</p>
                <div className="flex gap-2">
                  {callTypes.map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.value}
                        onClick={() => setSelectedType(t.value)}
                        className={`flex-1 flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                          selectedType === t.value
                            ? "border-lime-accent/30 text-lime-accent"
                            : "border-white/10 text-light-muted hover:border-white/20 hover:text-white"
                        }`}
                        style={selectedType === t.value ? { background: "rgba(232,255,71,0.06)" } : {}}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{t.label}</span>
                        <span className="text-[9px] opacity-60 font-mono">{t.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Main CTA — opens embed or external */}
                <button
                  onClick={() => selectedType === "whatsapp" ? openWhatsApp() : setView(view === "embed" ? "info" : "embed")}
                  className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime-accent text-dark font-bold rounded-xl hover:bg-white transition-all duration-300 text-sm"
                  style={{ boxShadow: "0 0 30px rgba(232,255,71,0.2)" }}
                >
                  <Calendar className="w-4 h-4" />
                  {view === "embed" ? "Calendar Band karo" : "Abhi Book Karo"}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                {/* WhatsApp alternative */}
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white border transition-all"
                  style={{ background: "rgba(37,211,102,0.08)", borderColor: "rgba(37,211,102,0.25)", color: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* ─── RIGHT — Calendar Embed ─── */}
          <ScrollReveal delay={0.2}>
            <motion.div
              layout
              className="rounded-2xl overflow-hidden border border-white/[8%] shadow-2xl shadow-black/40"
              style={{ background: "#0d0d0d" }}
            >
              {view === "embed" ? (
                // ── ACTUAL CALENDAR EMBED ──
                <iframe
                  src={CALENDAR_URL}
                  width="100%"
                  height="600"
                  title="Book a Free SEO Strategy Call"
                  className="block"
                  style={{ minHeight: "580px", border: "none" }}
                />
              ) : (
                // ── PREVIEW STATE (before clicking Book) ──
                <div className="p-6">
                  {/* Calendar header */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[6%]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-lime-accent flex items-center justify-center">
                        <Calendar className="w-3.5 h-3.5 text-dark" />
                      </div>
                      <span className="font-heading font-bold text-white text-sm">Free SEO Strategy Call</span>
                    </div>
                    <span className="text-xs font-mono text-lime-accent px-2 py-1 rounded-full" style={{ background: "rgba(232,255,71,0.08)" }}>30 min</span>
                  </div>

                  {/* Mini calendar grid */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-light-muted/60 uppercase tracking-wider">May 2025</span>
                      <div className="flex gap-1">
                        <button className="w-6 h-6 rounded-lg bg-dark-tertiary text-light-muted text-xs flex items-center justify-center hover:text-white">‹</button>
                        <button className="w-6 h-6 rounded-lg bg-dark-tertiary text-light-muted text-xs flex items-center justify-center hover:text-white">›</button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {["M","T","W","T","F","S","S"].map((d, i) => (
                        <div key={i} className="text-[9px] font-mono text-light-muted/40 uppercase py-1">{d}</div>
                      ))}
                      {[...Array(31)].map((_, i) => {
                        const day = i + 1;
                        const isWeekend = [0, 6].includes((i + 3) % 7);
                        const isToday = day === 14;
                        const isAvail = !isWeekend && day > 13 && day < 28;
                        return (
                          <button
                            key={day}
                            onClick={() => isAvail && setView("embed")}
                            className={`aspect-square rounded-lg text-[11px] font-mono transition-all ${
                              isToday ? "bg-lime-accent text-dark font-bold" :
                              isAvail ? "text-white hover:bg-lime-accent/15 hover:text-lime-accent cursor-pointer" :
                              "text-white/15 cursor-default"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Available slots */}
                  <div>
                    <p className="text-[10px] font-mono text-light-muted/50 uppercase tracking-wider mb-2">Aaj ke available slots:</p>
                    <div className="grid grid-cols-3 gap-2">
                      {["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "4:00 PM", "5:00 PM"].map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setView("embed")}
                          className="py-2 rounded-lg border border-white/10 text-xs font-mono text-light-muted hover:border-lime-accent/30 hover:text-lime-accent hover:bg-lime-accent/5 transition-all"
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setView("embed")}
                    className="w-full mt-5 py-3 rounded-xl bg-lime-accent text-dark font-bold text-sm hover:bg-white transition-all"
                    style={{ boxShadow: "0 0 20px rgba(232,255,71,0.15)" }}
                  >
                    Slot Confirm Karo →
                  </button>
                </div>
              )}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default BookingCalendar;
