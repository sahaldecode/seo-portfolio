// "use client";
// import { useEffect, useRef } from "react";

// const services = [
//   { num: "01", title: "Local SEO", desc: "Improve visibility for service keywords, city searches, and 'near me' queries with local SEO strategies focused on rankings, Google Maps visibility, topical authority, internal linking, and local intent optimization." },
//   { num: "02", title: "GMB / GBP Optimization", desc: "Optimize your Google Business Profile with the right categories, services, business descriptions, reviews, local signals, photos, posts, and engagement strategies to improve Google Maps rankings and increase inbound calls." },
//   { num: "03", title: "Local Website Development", desc: "Fast, modern, conversion-focused local business websites built with WordPress and Elementor Pro — optimized for Core Web Vitals, local SEO, user experience, mobile performance, and lead generation." },
//   { num: "04", title: "Local Service Ads", desc: "Generate more verified local leads through optimized Google Local Services Ads campaigns focused on service areas, trust signals, conversion quality, and call-driven customer acquisition." },
//   { num: "05", title: "Technical SEO", desc: "Resolve technical SEO issues affecting rankings and visibility, including indexing, crawlability, page speed, schema markup, internal linking, Core Web Vitals, and website structure optimization." },
//   { num: "06", title: "AI / AEO / GEO SEO", desc: "Improve visibility across ChatGPT, Gemini, Perplexity, Google AI Overviews, and answer engines using entity SEO, semantic optimization, structured content, NLP-friendly formatting, and AI search optimization strategies." },
// ];

// export function ProcessTimeline() {
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .1 });
//     ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="bg-dark2">
//       <div className="section">
//         <div className="sec-center reveal">
//           <div className="sec-label">Services</div>
//           <h2 className="sec-title">Top Notch <span className="gold">Local SEO Services</span></h2>
//           <div className="divider-line" />
//         </div>
//         <div className="g3 process-grid" style={{ marginTop: 44 }}>
//           {services.map(s => (
//             <div key={s.num} className="card reveal">
//               <div className="process-num">{s.num}</div>
//               <h3>{s.title}</h3>
//               <p>{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
