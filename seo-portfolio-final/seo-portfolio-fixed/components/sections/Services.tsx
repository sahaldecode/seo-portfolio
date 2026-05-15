"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const plans = [
  {
    id: "audit",
    title: "SEO Audit",
    description: "Comprehensive technical & strategic audit",
    price: "$1,500",
    period: "one-time",
    features: [
      "Full technical SEO audit",
      "Content gap analysis",
      "Competitor benchmarking",
      "Actionable roadmap",
      "30-min strategy call",
      "Priority support (7 days)",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    id: "growth",
    title: "Growth Plan",
    description: "Monthly SEO management & optimization",
    price: "$3,500",
    period: "/month",
    features: [
      "Everything in Audit",
      "Monthly technical fixes",
      "Content strategy & creation",
      "Link building (10+ links/mo)",
      "AI SEO implementation",
      "Weekly reporting",
      "Dedicated Slack channel",
      "Schema markup management",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Full-scale SEO for large organizations",
    price: "Custom",
    period: "",
    features: [
      "Everything in Growth",
      "Multi-site management",
      "Custom AI integrations",
      "LLM visibility optimization",
      "Enterprise analytics setup",
      "Quarterly strategy reviews",
      "White-label reporting",
      "24/7 priority support",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[220px] pointer-events-none" style={{background:"rgba(232,255,71,0.04)"}} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="section-label">Pricing</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-4">
              Invest in <span className="text-lime-accent">Visibility</span>
            </h2>
            <p className="text-base text-light-muted">
              Transparent pricing with no hidden fees. Every plan delivers measurable ROI.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.12}>
          {plans.map((plan) => (
            <StaggerItem key={plan.id}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`relative p-6 rounded-2xl border h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-lime-accent/30 shadow-xl"
                    : "bg-dark-secondary border-white/[6%] hover:border-white/15"
                }`}
                style={plan.popular ? {background:"rgba(232,255,71,0.04)", boxShadow:"0 0 50px rgba(232,255,71,0.07)"} : {}}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-lime-accent text-dark text-[11px] font-bold rounded-full shadow-lg" style={{boxShadow:"0 4px 16px rgba(232,255,71,0.3)"}}>
                    <Star className="w-3 h-3 fill-dark" />
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-5 mt-1">
                  <h3 className="font-heading font-bold text-lg text-white mb-1">{plan.title}</h3>
                  <p className="text-xs text-light-muted">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-5 border-b border-white/5">
                  <div className="flex items-end gap-1">
                    <span className="font-heading font-extrabold text-4xl text-white leading-none">{plan.price}</span>
                    {plan.period && <span className="text-light-muted text-sm mb-1">{plan.period}</span>}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-light-muted">
                      <Check className="w-3.5 h-3.5 text-lime-accent mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact/"
                  className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-lime-accent text-dark hover:bg-white"
                      : "bg-dark-tertiary text-white border border-white/10 hover:border-lime-accent/30 hover:bg-dark-tertiary"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Guarantee strip */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-light-muted">
            {["30-day money-back guarantee", "No long-term contracts", "Cancel anytime", "Free onboarding call"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-lime-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
