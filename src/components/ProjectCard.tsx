import Link from "next/link";
import type { Project } from "@/content/projects";

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
          <Link
            href={project.demoUrl}
            className="inline-block rounded-full bg-accent text-accent-foreground px-5 py-2 text-base font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent no-underline"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Link>
        )}
        {project.repoUrl && (
          <Link
            href={project.repoUrl}
            className="inline-block rounded-full border border-accent text-accent px-5 py-2 text-base font-semibold hover:bg-accent/10 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent no-underline"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </Link>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-block rounded-full border border-muted text-muted px-5 py-2 text-base font-semibold hover:bg-muted/10 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-muted no-underline"
          style={{ textDecoration: "none" }}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
