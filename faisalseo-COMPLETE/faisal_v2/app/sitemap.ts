import { MetadataRoute } from "next";
import { caseStudies }   from "@/content/case-studies/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://faisalseo.com";
  return [
    { url: `${base}/`,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/case-studies/`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    ...caseStudies.map(s => ({
      url:             `${base}/case-studies/${s.slug}/`,
      lastModified:    new Date(),
      changeFrequency: "monthly" as const,
      priority:        0.8,
    })),
  ];
}
