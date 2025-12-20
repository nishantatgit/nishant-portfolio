import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { BulletListItem } from "@/components/BulletListItem";

// Required for static export: generateStaticParams for all project slugs
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 bg-background">
      <h1 className="text-4xl font-bold mb-4 font-sans">{project.title}</h1>
      <p className="text-lg text-neutral-700 mb-8">{project.oneLiner}</p>

      {/* 1. Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>{project.whyItMatters}</p>
      </section>

      {/* 2. Problem & Constraints */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Problem & Constraints</h2>
        <p>{project.problem}</p>
      </section>

      {/* 3. Data */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Data</h2>
        <p>{project.dataSummary}</p>
      </section>

      {/* 4. Approach */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Approach</h2>
        <p>{project.methods}</p>
      </section>

      {/* 5. Evaluation */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Evaluation</h2>
        <p>{project.metrics}</p>
      </section>

      {/* 6. Results */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Results</h2>
        <p>{project.resultsHighlights}</p>
      </section>

      {/* 7. Production / Engineering */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Production / Engineering</h2>
        <ul className="ml-6 text-neutral-700">
  <BulletListItem>Inference design: See repo for details</BulletListItem>
  <BulletListItem>Latency & cost: {project.metrics.match(/Latency|inference/i) ? project.metrics : "See highlights"}</BulletListItem>
  <BulletListItem>Monitoring: Monitoring ideas in repo</BulletListItem>
</ul>
      </section>

      {/* 8. Demo */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Demo</h2>
        {project.images.length > 0 ? (
          <div className="flex gap-4 flex-wrap">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="rounded border w-64"
              />
            ))}
          </div>
        ) : (
          <p>Demo coming soon.</p>
        )}
      </section>

      {/* 9. Links */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Links</h2>
        <div className="flex gap-6">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="underline text-accent font-semibold hover:text-accent-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="underline text-accent font-semibold hover:text-accent-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
          {project.writeupUrl && (
            <a
              href={project.writeupUrl}
              className="underline text-accent font-semibold hover:text-accent-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write-up
            </a>
          )}
        </div>
      </section>

      {/* 10. What I'd Do Next */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">What I'd Do Next</h2>
        <p>See repo for future improvements and roadmap.</p>
      </section>
    </main>
  );
}
