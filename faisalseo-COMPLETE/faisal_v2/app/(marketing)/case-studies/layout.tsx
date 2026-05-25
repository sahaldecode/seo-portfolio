"use client";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const navigate = (page: string) => {
    const map: Record<string, string> = {
      home:         "/",
      "case-studies": "/case-studies/",
      services:     "/?goto=services",
      about:        "/?goto=about",
      pricing:      "/?goto=pricing",
      faq:          "/?goto=faq",
      industries:   "/?goto=industries",
      location:     "/?goto=location",
      contact:      "/?goto=contact",
    };
    router.push(map[page] ?? "/");
  };

  return (
    <>
      <Navbar currentPage="case-studies" onNavigate={navigate} />
      <main>{children}</main>
      <Footer onNavigate={navigate} />
      <a href="https://wa.link/rxsrsw" target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position:"fixed", bottom:22, right:22, zIndex:998,
          width:52, height:52, borderRadius:"50%", background:"#25D366",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 6px 24px rgba(37,211,102,.4)",
          fontSize:22, textDecoration:"none",
        }}>💬</a>
    </>
  );
}
