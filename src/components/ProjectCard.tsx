import Link from "next/link";
import type { Project } from "@/content/projects";
import { Button } from "./Button";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow flex flex-col gap-6 transition-transform hover:-translate-y-1 hover:shadow-lg duration-200 h-full min-h-[340px] sm:min-h-[420px] w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">{project.title}</h2>
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted text-white px-3 py-1 rounded-full text-xs font-semibold border border-muted uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-base text-muted font-normal">{project.oneLiner}</p>
      <div className="flex flex-wrap gap-4 text-sm text-muted">
        <span className="bg-background border border-border rounded px-3 py-1 font-medium tracking-wide">Approach: <span className="font-semibold text-foreground">{project.methods}</span></span>
        <span className="bg-background border border-border rounded px-3 py-1 font-medium tracking-wide">Key Metric: <span className="font-semibold text-foreground">{project.metrics}</span></span>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4">
        {project.demoUrl && (
          <Button href={project.demoUrl} external className="inline-block text-base">
            Demo
          </Button>
        )}
        {project.repoUrl && (
          <Button href={project.repoUrl} external variant="secondary" className="inline-block text-base">
            Repo
          </Button>
        )}
        <Button href={`/projects/${project.slug}`} className="inline-block text-base border-muted text-muted hover:bg-muted/10 bg-transparent shadow-none">
          Details
        </Button>
      </div>
    </div>
  );
}
