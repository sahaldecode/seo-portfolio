import type { Metadata } from "next";
import dynamic from "next/dynamic";

// ─── Above the fold — load immediately ───────────────────────────
import { Hero }  from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";

// ─── Below the fold — lazy loaded (improves initial JS bundle) ───
const AIDifferentiator   = dynamic(() => import("@/components/sections/AIDifferentiator").then(m => ({ default: m.AIDifferentiator })));
const SkillsGrid         = dynamic(() => import("@/components/sections/SkillsGrid").then(m => ({ default: m.SkillsGrid })));
const CaseStudiesPreview = dynamic(() => import("@/components/sections/CaseStudiesPreview").then(m => ({ default: m.CaseStudiesPreview })));
const Services           = dynamic(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const BookingCalendar    = dynamic(() => import("@/components/sections/BookingCalendar").then(m => ({ default: m.BookingCalendar })));
const ProcessTimeline    = dynamic(() => import("@/components/sections/ProcessTimeline").then(m => ({ default: m.ProcessTimeline })));
const Testimonials       = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ                = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const Contact            = dynamic(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export const metadata: Metadata = {
  title: "SEO Expert Pakistan | AI-Era SEO Strategist & Technical SEO Consultant",
  description: "Premium SEO consultant from Pakistan specializing in Technical SEO, AI SEO, AEO, GEO, and LLM Visibility. Proven results for global brands.",
  openGraph: {
    title: "SEO Expert Pakistan | AI-Era SEO Strategist",
    description: "Premium SEO consultant specializing in Technical SEO, AI SEO, AEO, GEO, and LLM Visibility.",
    url: "https://seoexpert.pk",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <AIDifferentiator />
      <SkillsGrid />
      <CaseStudiesPreview />
      <Services />
      <BookingCalendar />
      <ProcessTimeline />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
