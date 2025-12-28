"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { useState } from "react";

const TAGS = [
  { value: "nlp", label: "NLP" },
  { value: "tabular", label: "Tabular" },
  { value: "time-series", label: "Time Series" },
  { value: "llm", label: "LLM" },
  { value: "rag", label: "RAG" }
];

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-hero font-extrabold mb-6 text-headline">ML Projects</h1>
          <p className="text-body-lg text-muted max-w-2xl">
            End-to-end machine learning projects demonstrating practical skills, from problem framing to production deployment.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-semibold text-muted uppercase tracking-wide">Filter by:</span>
            <div className="flex gap-2 flex-wrap">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  selectedTag === null
                    ? "bg-accent text-white shadow-sm"
                    : "bg-surface text-muted border border-border hover:bg-border/50"
                }`}
                onClick={() => setSelectedTag(null)}
              >
                All Projects
              </button>
              {TAGS.map((tag) => (
                <button
                  key={tag.value}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                    selectedTag === tag.value
                      ? "bg-accent text-white shadow-sm"
                      : "bg-surface text-muted border border-border hover:bg-border/50"
                  }`}
                  onClick={() => setSelectedTag(selectedTag === tag.value ? null : tag.value)}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects
                .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                .map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-body-lg text-muted">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
