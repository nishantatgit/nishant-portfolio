"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const TAGS = [
  { value: "nlp", label: "NLP" },
  { value: "tabular", label: "Tabular" },
  { value: "time-series", label: "Time Series" },
  { value: "llm", label: "LLM" },
  { value: "rag", label: "RAG" },
];

export function ProjectsPageClient() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = useMemo(
    () => (selectedTag ? projects.filter((project) => project.tags.includes(selectedTag)) : projects),
    [selectedTag],
  );

  return (
    <>
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
                type="button"
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
                  type="button"
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
