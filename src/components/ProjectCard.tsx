import Link from "next/link";
import type { Project } from "@/content/projects";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="group bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Header with Title and Tags */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-headline tracking-tight flex-1">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-accent/10 text-accent border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-base leading-relaxed mb-6">
        {project.oneLiner}
      </p>

      {/* Metadata */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-start gap-3 text-sm">
          <span className="text-muted-foreground font-medium min-w-[80px]">Approach:</span>
          <span className="text-foreground font-semibold">{project.methods}</span>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <span className="text-muted-foreground font-medium min-w-[80px]">Key Metric:</span>
          <span className="text-foreground font-semibold">{project.metrics}</span>
        </div>
      </div>

      {/* Actions - pushed to bottom */}
      <div className="mt-auto pt-6 border-t border-border">
        <div className="flex flex-wrap gap-3">
          {project.demoUrl && (
            <Button href={project.demoUrl} external variant="primary" size="sm">
              Demo
            </Button>
          )}
          {project.repoUrl && (
            <Button href={project.repoUrl} external variant="outline" size="sm">
              Repo
            </Button>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/link"
          >
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
