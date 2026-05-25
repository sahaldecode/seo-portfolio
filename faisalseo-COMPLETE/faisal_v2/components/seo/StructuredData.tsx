export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Faisal Rehman",
    jobTitle: "Local SEO Expert",
    description: "Local SEO & AI SEO Specialist helping local businesses dominate Google Maps, Google Search, and AI-driven search platforms.",
    url: "https://faisalseo.com",
    email: "contact@faisalseo.com",
    telephone: "+923466127774",
    knowsAbout: ["Local SEO","GMB Optimization","Technical SEO","AI SEO","Google Business Profile","Local Service Ads"],
    sameAs: [
      "https://www.linkedin.com/in/faisallseo/",
      "https://www.upwork.com/freelancers/~01caf2a54582f779b8",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
