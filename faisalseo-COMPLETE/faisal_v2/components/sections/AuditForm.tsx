"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(232,255,71,0.1)", border: "1px solid rgba(232,255,71,0.25)" }}>
          <CheckCircle className="w-6 h-6 text-lime-accent" />
        </div>
        <h3 className="font-heading font-bold text-white text-lg">Request Sent!</h3>
        <p className="text-sm text-light-muted max-w-xs">
          I&apos;ll review your site and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-lime-accent underline mt-2"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-3 flex-1"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <input type="email" placeholder="Email address" required
        className="w-full px-4 py-3 rounded-xl bg-dark border border-white/[8%] text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
      <input type="tel" placeholder="Phone / WhatsApp"
        className="w-full px-4 py-3 rounded-xl bg-dark border border-white/[8%] text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
      <input type="text" placeholder="Your name" required
        className="w-full px-4 py-3 rounded-xl bg-dark border border-white/[8%] text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
      <input type="url" placeholder="Website URL"
        className="w-full px-4 py-3 rounded-xl bg-dark border border-white/[8%] text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all" />
      <textarea rows={3} placeholder="Tell me about your business..."
        className="w-full px-4 py-3 rounded-xl bg-dark border border-white/[8%] text-white text-sm placeholder-light-muted/40 focus:border-lime-accent/40 focus:outline-none transition-all resize-none" />
      <button type="submit"
        className="w-full py-3.5 rounded-xl bg-lime-accent text-dark font-bold text-sm hover:bg-white transition-all mt-auto"
        style={{ boxShadow: "0 0 24px rgba(232,255,71,0.2)" }}>
        Submit Audit Request
      </button>
    </form>
  );
}
