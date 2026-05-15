"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const faqsData = [
  {
    question: "What makes AI SEO different from traditional SEO?",
    answer: "AI SEO goes beyond keyword optimization. It focuses on semantic understanding, entity relationships, and optimizing for Large Language Models (LLMs) like ChatGPT and Gemini. This includes structured data for AI comprehension, conversational query optimization, and ensuring your brand is cited in AI-generated responses.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "Technical SEO improvements show results within 4–6 weeks. Content and authority building takes 3–6 months for significant impact. With AI-powered strategies, we often see faster initial gains because we're optimizing for emerging search patterns before competitors.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. While based in Pakistan, I serve clients globally including the UAE, UK, USA, and Australia. I have experience with multi-regional SEO, hreflang implementation, and local search optimization across different markets.",
  },
  {
    question: "What is LLM Visibility and why does it matter?",
    answer: "LLM Visibility ensures your brand appears in AI-generated answers from ChatGPT, Claude, Perplexity, and other AI engines. As search evolves, users increasingly get answers directly from AI without visiting traditional search results. Being cited by AI is becoming as important as ranking #1 on Google.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "I specialize in e-commerce, SaaS/B2B, and local businesses (restaurants, clinics, services). My technical background makes me particularly effective for JavaScript-heavy applications, large-scale sites, and businesses needing complex SEO architectures.",
  },
  {
    question: "How do you measure SEO success?",
    answer: "I track comprehensive metrics: organic traffic growth, keyword rankings, conversion rates, Core Web Vitals, revenue attribution, and LLM citation rates. Every client gets a custom dashboard with real-time data and monthly strategy reviews.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle, index }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void; index: number;
}) {
  return (
    <div className="border-b border-white/[6%] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group gap-4"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-lime-accent/40 shrink-0 w-5">{String(index + 1).padStart(2, "0")}</span>
          <span className={`font-heading font-semibold text-sm lg:text-base transition-colors ${isOpen ? "text-lime-accent" : "text-white group-hover:text-lime-accent"}`}>
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-lime-accent group-hover:border-lime-accent/30 transition-colors"
          style={isOpen ? { background: "rgba(232,255,71,0.08)", borderColor: "rgba(232,255,71,0.25)" } : {}}
        >
          <Plus className="w-3.5 h-3.5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-9 pr-12">
              <p className="text-sm text-light-muted leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <ScrollReveal>
            <span className="section-label">FAQ</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              Common <span className="text-lime-accent">Questions</span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="bg-dark rounded-2xl border border-white/[6%] overflow-hidden shadow-xl shadow-black/20 divide-y divide-white/[4%] px-6">
            {faqsData.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
