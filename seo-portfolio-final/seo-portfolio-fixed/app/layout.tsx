import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { StructuredData } from "@/components/seo/StructuredData";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seoexpert.pk"),
  title: {
    default: "SEO Expert | AI-Era SEO Strategist & Technical SEO Consultant",
    template: "%s | SEO Expert Pakistan",
  },
  description:
    "Premium SEO consultant specializing in Technical SEO, AI SEO, AEO, GEO, LLM Visibility, and Semantic SEO. Based in Pakistan, serving global clients.",
  keywords: [
    "SEO Expert Pakistan",
    "Technical SEO",
    "AI SEO",
    "AEO",
    "GEO",
    "LLM Visibility",
    "Semantic SEO",
    "Entity SEO",
    "Local SEO",
    "SEO Consultant",
  ],
  authors: [{ name: "SEO Expert" }],
  creator: "SEO Expert Pakistan",
  publisher: "SEO Expert Pakistan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seoexpert.pk",
    siteName: "SEO Expert Pakistan",
    title: "SEO Expert | AI-Era SEO Strategist",
    description:
      "Premium SEO consultant specializing in Technical SEO, AI SEO, AEO, GEO, and LLM Visibility.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Expert Pakistan - AI-Era SEO Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Expert | AI-Era SEO Strategist",
    description:
      "Premium SEO consultant specializing in Technical SEO, AI SEO, AEO, GEO, and LLM Visibility.",
    images: ["/og-image.jpg"],
    creator: "@seoexpertpk",
  },
  alternates: {
    canonical: "https://seoexpert.pk",
  },
  // Preconnect hints via Next.js metadata (App Router correct way)
  other: {
    "preconnect-unsplash":  "https://images.unsplash.com",
    "preconnect-formspree": "https://formspree.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} min-h-screen bg-dark text-foreground overflow-x-hidden`}
      >
        <StructuredData />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
