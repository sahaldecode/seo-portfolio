"use client";
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/rxsrsw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position:"fixed", bottom:22, right:22, zIndex:998,
        width:52, height:52, borderRadius:"50%",
        background:"#25D366", color:"#fff",
        display:"flex", alignItems:"center", justifyContent:"center",
        boxShadow:"0 6px 24px rgba(37,211,102,.42)",
        transition:"transform .22s, box-shadow .22s",
        textDecoration:"none", fontSize:26,
      }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform="scale(1.1)"; el.style.boxShadow="0 10px 32px rgba(37,211,102,.5)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform=""; el.style.boxShadow="0 6px 24px rgba(37,211,102,.42)"; }}
    >
      💬
    </a>
  );
}
