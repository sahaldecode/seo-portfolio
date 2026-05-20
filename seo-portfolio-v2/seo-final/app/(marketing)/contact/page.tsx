import type { Metadata } from "next";
import { Contact }         from "@/components/sections/Contact";
import { BookingCalendar } from "@/components/sections/BookingCalendar";
import { ScrollReveal }    from "@/components/animations/ScrollReveal";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | SEO Expert Pakistan",
  description: "Get in touch for a free SEO audit or strategy consultation. Book a call, send a message, or WhatsApp directly.",
  openGraph: {
    title: "Contact | SEO Expert Pakistan",
    description: "Book a free SEO strategy call or send a message.",
    url: "https://seoexpert.pk/contact/",
  },
};

const quickInfo = [
  { icon: Mail,   label: "Email",         value: "hello@seoexpert.pk", href: "mailto:hello@seoexpert.pk" },
  { icon: Phone,  label: "Phone",         value: "+92 300 1234567",    href: "tel:+923001234567"         },
  { icon: MapPin, label: "Location",      value: "Karachi, Pakistan",  href: null                        },
  { icon: Clock,  label: "Response Time", value: "Within 24 hours",    href: null                        },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <ScrollReveal>
            <span className="section-label">Contact</span>
            <h1 className="font-heading font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-5">
              Let&apos;s Start<br /><span className="text-lime-accent">Something Great</span>
            </h1>
            <p className="text-lg text-light-muted">
              Book a free strategy call, send a message, or chat on WhatsApp — whatever works for you.
            </p>
          </ScrollReveal>
        </div>

        {/* Quick contact cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {quickInfo.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="group p-4 rounded-xl bg-dark-secondary border border-white/[6%] hover:border-lime-accent/20 transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-lime-accent mb-3 group-hover:scale-110 transition-transform" style={{background:"rgba(232,255,71,0.08)"}}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] text-light-muted/60 uppercase font-mono mb-1">{item.label}</div>
                  <div className="text-sm font-medium text-white">{item.value}</div>
                </div>
              );
              return item.href
                ? <a key={item.label} href={item.href}>{inner}</a>
                : <div key={item.label}>{inner}</div>;
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* Calendar booking section */}
      <BookingCalendar />

      {/* Contact form section */}
      <Contact />
    </div>
  );
}
