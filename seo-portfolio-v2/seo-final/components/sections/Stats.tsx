"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const statsData = [
  { icon: TrendingUp, value: 340, suffix: "%", label: "Avg. Traffic Increase", prefix: "+", color: "rgba(232,255,71,0.08)" },
  { icon: Users,     value: 50,  suffix: "+", label: "Clients Worldwide",     prefix: "", color: "rgba(232,255,71,0.06)" },
  { icon: Award,     value: 12000, suffix: "+", label: "Keywords Ranked",     prefix: "", color: "rgba(232,255,71,0.08)" },
  { icon: Globe,     value: 15,  suffix: "+", label: "Countries Served",      prefix: "", color: "rgba(232,255,71,0.06)" },
];

function AnimatedCounter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => { setHasMounted(true); }, []);
  useEffect(() => {
    if (isInView && hasMounted) {
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else { setCount(Math.floor(current)); }
      }, 2000 / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value, hasMounted]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-3xl lg:text-4xl text-white" suppressHydrationWarning>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-white/5" style={{background:"rgba(17,17,17,0.8)"}}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-dark-secondary hover:bg-dark-tertiary transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{background:stat.color}}>
                  <Icon className="w-5 h-5 text-lime-accent" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <p className="mt-2 text-xs text-light-muted font-mono uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
