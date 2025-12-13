import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 bg-background">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 font-sans">{profile.title}</h1>
        <p className="text-lg mb-8">{profile.subtitle}</p>
        <div className="flex gap-4 mb-10">
          {profile.ctas.map((cta, idx) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={`rounded-full ${idx === 0 ? "bg-accent text-accent-foreground shadow hover:bg-accent/90 hover:shadow-accent/40" : "border border-accent text-accent hover:bg-accent/10"} px-6 py-3 font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.credibility.map((chip) => (
            <span
              key={chip}
              className="bg-muted px-3 py-1 rounded-full text-xs font-semibold border border-muted/20 text-white"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* Transition Story */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4">Transition Story</h2>
        <ul className="ml-6 space-y-2">
  {profile.transitionStory.map((item) => (
    <li key={item} className="flex items-center gap-3 mb-2">
  <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
    <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
      <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
        <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
        <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
      </svg>
    </span>
  </span>
  <span className="align-middle">{item}</span>
</li>
  ))}
</ul>
      </section>

      {/* Featured Projects */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <div key={project.slug}>
              {/* Use ProjectCard for consistent style */}
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4">Skills Snapshot</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-1">Machine Learning</h3>
            <ul className="ml-5">
  {profile.skills.machineLearning.map((s) => (
    <li key={s} className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{s}</span>
    </li>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">MLOps / Production ML</h3>
            <ul className="ml-5">
  {profile.skills.mlOps.map((s) => (
    <li key={s} className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{s}</span>
    </li>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Software Engineering Strengths</h3>
            <ul className="ml-5">
  {profile.skills.software.map((s) => (
    <li key={s} className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{s}</span>
    </li>
  ))}
</ul>
          </div>
        </div>
      </section>

      {/* Proof of Seriousness */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4">Proof of Seriousness</h2>
        <ul className="ml-6">
  {profile.seriousness.map((item) => (
    <li key={item} className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{item}</span>
    </li>
  ))}
</ul>
      </section>

      {/* Recruiter Quick Scan */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4">Recruiter Quick Scan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-1">Roles Targeted</h3>
            <ul className="ml-5">
  {profile.recruiterQuickScan.roles.map((r) => (
    <li key={r} className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{r}</span>
    </li>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Strengths</h3>
            <ul className="ml-5">
  {profile.recruiterQuickScan.strengths.map((s) => (
    <li key={s} className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{s}</span>
    </li>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Looking For</h3>
            <ul className="ml-5">
  {profile.recruiterQuickScan.lookingFor.map((l) => (
    <li key={l} className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{l}</span>
    </li>
  ))}
</ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Contact
          </Link>
          <a
            href={profile.contact.linkedin}
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github}
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link
            href="/resume"
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
