export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "SEO Expert Pakistan",
    jobTitle: "SEO Strategist & Technical SEO Consultant",
    description:
      "Premium SEO consultant specializing in Technical SEO, AI SEO, AEO, GEO, and LLM Visibility. Based in Pakistan, serving global clients.",
    url: "https://seoexpert.pk",
    sameAs: [
      "https://twitter.com/seoexpertpk",
      "https://linkedin.com/in/seoexpertpk",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    knowsAbout: [
      "Technical SEO", "AI SEO", "AEO", "GEO", "LLM Visibility",
      "Semantic SEO", "Entity SEO", "Local SEO", "Core Web Vitals", "Schema Markup",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SEO Expert Pakistan",
    url: "https://seoexpert.pk",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://seoexpert.pk/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SEO Expert Pakistan",
    description: "Premium SEO consulting services for global brands",
    url: "https://seoexpert.pk",
    areaServed: { "@type": "Place", name: "Global" },
    serviceType: [
      "Technical SEO", "AI SEO", "AEO", "GEO", "LLM Visibility Optimization",
      "Semantic SEO", "Entity SEO", "Local SEO",
    ],
    provider: { "@type": "Person", name: "SEO Expert Pakistan" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
    </>
  );
}
