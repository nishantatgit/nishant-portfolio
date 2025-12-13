import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

type Props = {
  params: { slug: string };
};

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
  <li className="flex items-center gap-3 mb-2">
    <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
      <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
        <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
          <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
          <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
        </svg>
      </span>
    </span>
    <span className="align-middle">Inference design: See repo for details</span>
  </li>
  <li className="flex items-center gap-3 mb-2">
    <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
      <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
        <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
          <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
          <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
        </svg>
      </span>
    </span>
    <span className="align-middle">Latency & cost: {project.metrics.match(/Latency|inference/i) ? project.metrics : "See highlights"}</span>
  </li>
  <li className="flex items-center gap-3 mb-2">
    <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
      <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
        <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
          <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
          <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
        </svg>
      </span>
    </span>
    <span className="align-middle">Monitoring: Monitoring ideas in repo</span>
  </li>
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
