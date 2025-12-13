"use client";
// Projects listing page for ML Transition Portfolio

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { useState } from "react";

const TAGS = [
  "NLP",
  "Tabular",
  "Time-Series",
  "LLM",
  "RAG"
];

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-8 text-headline font-sans">ML Projects</h1>
      <div className="flex gap-2 mb-8 flex-wrap">
        {TAGS.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full border text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent ${
              selectedTag === tag
                ? "bg-accent text-white border-accent shadow"
                : "bg-muted text-white border-muted/20"
            }`}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects
          .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>
    </main>
  );
}
