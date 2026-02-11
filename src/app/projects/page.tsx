import type { Metadata } from "next";
import { ProjectsPageClient } from "@/components/ProjectsPageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { projects } from "@/content/projects";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ML Projects - Nishant Kumar",
  description:
    "Explore end-to-end machine learning projects covering NLP, tabular ML, time-series forecasting, and RAG systems.",
  path: "/projects",
  keywords: [
    "machine learning projects",
    "ml portfolio projects",
    "nlp project",
    "rag project",
    "time series forecasting project",
  ],
});

export default function ProjectsPage() {
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ML Projects",
    url: `${SITE_URL}/projects`,
    description:
      "End-to-end machine learning projects demonstrating practical skills from problem framing to deployment.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/projects/${project.slug}`,
        name: project.title,
      })),
    },
  };

  return (
    <div className="bg-background">
      <JsonLd data={projectsStructuredData} />
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-hero font-extrabold mb-6 text-headline">ML Projects</h1>
          <p className="text-body-lg text-muted max-w-2xl">
            End-to-end machine learning projects demonstrating practical skills, from problem framing to production deployment.
          </p>
        </div>
      </section>
      <ProjectsPageClient />
    </div>
  );
}
