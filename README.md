# SEO Expert Portfolio

A premium, production-ready SEO Expert Portfolio Website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Next.js 15 App Router** with dynamic routing
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** animations throughout
- **Scroll Reveal** animations with stagger
- **Glassmorphism Navbar** with mobile menu
- **Hero Section** with animated dashboard mockup
- **Animated Stats Counters**
- **Interactive Skills Filter**
- **Dynamic Case Studies** with full detail pages
- **SEO Process Timeline**
- **Testimonials Section**
- **FAQ Accordion**
- **Contact Form** with success state
- **Full SEO Implementation**: metadata, OpenGraph, sitemap, robots, JSON-LD schemas
- **Fully Responsive** (mobile-first)

## Tech Stack

- Next.js 15+
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
app/
  (marketing)/
    page.tsx              # Home page
    about/page.tsx        # About page
    services/page.tsx     # Services & pricing
    case-studies/page.tsx # Case studies listing
    case-studies/[slug]/  # Dynamic case study detail
    contact/page.tsx      # Contact page
  layout.tsx              # Root layout with fonts & SEO
  globals.css             # Global styles
  sitemap.ts              # Dynamic sitemap
  robots.ts               # Robots.txt

components/
  layout/                 # Navbar, Footer
  sections/               # All page sections
  animations/             # ScrollReveal, Stagger
  seo/                    # StructuredData

content/case-studies/     # Case study data
lib/                      # Utilities
 types/                    # TypeScript types
```

## Design System

- **Colors**: Lime accent (#e8ff47), Dark (#080808), Light (#f7f7f5)
- **Fonts**: Syne (headings), DM Sans (body), JetBrains Mono (labels)
- **Style**: Large typography, minimal UI, soft glows, glassmorphism, rounded cards
