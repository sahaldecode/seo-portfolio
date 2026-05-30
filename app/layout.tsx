import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faisalseo.com"),
  title: {
    default: "Faisal Rehman | Local SEO & AI SEO Expert for HVAC, Healthcare & Local Businesses",
    template: "%s | Faisal Rehman | Local SEO & AI SEO Expert for HVAC, Healthcare & Local Businesses",
  },
  description:
    "Local SEO & AI SEO expert specializing in Technical SEO, Google Business Profile optimization, Local Services Ads, and SEO-focused WordPress websites for HVAC companies, healthcare clinics, dentists, chiropractors, and local service businesses. Improve Google rankings, Maps visibility, calls, and local leads.",
  keywords: [
    "Local SEO Expert",
    "GMB Optimization",
    "Google Business Profile",
    "Technical SEO",
    "AI SEO",
    "AEO GEO SEO",
    "HVAC SEO",
    "Healthcare SEO",
    "Local Service Ads",
    "Faisal Rehman SEO",
  ],
  authors: [{ name: "Faisal Rehman" }],
  creator: "Faisal Rehman",
  publisher: "Faisal Rehman",
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
    url: "https://faisalseo.com",
    siteName: "Faisal Rehman – Local SEO Expert",
    title: "Faisal Rehman – Local SEO Expert | Dominate Google Maps & AI Search",
    description:
      "Helping local businesses rank #1 on Google Maps, Google Search, and AI Search with 5+ years of Local SEO expertise.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Faisal Rehman – Local SEO Expert" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Rehman – Local SEO Expert",
    description: "Helping local businesses dominate Google Maps & AI Search.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://faisalseo.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* search console */}
        <meta name="google-site-verification" content="4QiCV71ONxUtPxVIuhECRgBMfSp5un-O08K1wvKA3MU" />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} ${sora.variable} min-h-screen overflow-x-hidden`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
