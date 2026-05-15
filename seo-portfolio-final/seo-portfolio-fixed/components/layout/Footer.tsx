import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Technical SEO", href: "/services/" },
    { label: "AI SEO & LLM", href: "/services/" },
    { label: "AEO & GEO", href: "/services/" },
    { label: "Local SEO", href: "/services/" },
  ],
  Company: [
    { label: "About", href: "/about/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Contact", href: "/contact/" },
  ],
  Resources: [
    { label: "SEO Blog", href: "#" },
    { label: "Free Audit", href: "/contact/" },
    { label: "Newsletter", href: "#" },
  ],
};

const socials = [
  { icon: Twitter,  href: "#", label: "Twitter"  },
  { icon: Linkedin, href: "#", label: "LinkedIn"  },
  { icon: Github,   href: "#", label: "GitHub"    },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[6%] bg-dark overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(232,255,71,0.04)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-lime-accent flex items-center justify-center shadow-sm" style={{ boxShadow: "0 0 14px rgba(232,255,71,0.25)" }}>
                <span className="text-dark font-heading font-black text-base leading-none">S</span>
              </div>
              <span className="font-heading font-bold text-lg text-white group-hover:text-lime-accent transition-colors">
                SEO<span className="text-lime-accent">.</span>Expert
              </span>
            </Link>

            <p className="text-sm text-light-muted leading-relaxed max-w-[300px] mb-8">
              Premium SEO consultant specializing in Technical SEO, AI SEO, AEO, GEO,
              and LLM Visibility. Based in Pakistan, serving global clients.
            </p>

            <div className="space-y-2.5 mb-8">
              {[
                { icon: Mail,   value: "hello@seoexpert.pk",  href: "mailto:hello@seoexpert.pk" },
                { icon: Phone,  value: "+92 300 1234567",     href: "tel:+923001234567"         },
                { icon: MapPin, value: "Karachi, Pakistan",   href: null                        },
              ].map((item) => {
                const Icon = item.icon;
                const el = (
                  <div className="flex items-center gap-3 text-sm text-light-muted hover:text-white transition-colors group">
                    <Icon className="w-3.5 h-3.5 text-lime-accent shrink-0" />
                    <span>{item.value}</span>
                  </div>
                );
                return item.href
                  ? <a key={item.value} href={item.href}>{el}</a>
                  : <div key={item.value}>{el}</div>;
              })}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-light-muted hover:border-lime-accent/30 hover:text-lime-accent transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav cols */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-lime-accent mb-5">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="inline-flex items-center gap-1 text-sm text-light-muted hover:text-white transition-colors group">
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[6%] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-light-muted/60">
            &copy; {new Date().getFullYear()} SEO Expert Pakistan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-light-muted/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-light-muted/60 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
