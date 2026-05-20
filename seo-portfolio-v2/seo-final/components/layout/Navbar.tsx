"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Contact", href: "/contact/" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
        style={isScrolled ? { background: "rgba(8,8,8,0.88)" } : {}}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-lime-accent flex items-center justify-center shadow-sm" style={{boxShadow:"0 0 12px rgba(232,255,71,0.3)"}}>
                  <span className="font-heading font-black text-dark text-sm">S</span>
                </div>
                <span className="font-heading font-bold text-base text-white hidden sm:block tracking-tight">
                  SEO<span className="text-lime-accent">.</span>Expert
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.replace(/\/$/, "")));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                      isActive
                        ? "text-lime-accent"
                        : "text-light-muted hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-4 right-4 h-px bg-lime-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-lime-accent text-dark font-bold text-[13px] rounded-full hover:bg-white transition-all duration-300"
                style={{boxShadow:"0 0 20px rgba(232,255,71,0.15)"}}
              >
                Free Audit
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 text-2xl font-heading font-bold transition-colors",
                      pathname === link.href ? "text-lime-accent" : "text-white hover:text-lime-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-lime-accent text-dark font-bold rounded-full text-base"
                  style={{boxShadow:"0 0 30px rgba(232,255,71,0.25)"}}
                >
                  Get Free Audit
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
