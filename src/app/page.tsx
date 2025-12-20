import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";

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
    <BulletListItem key={item}>{item}</BulletListItem>
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
    <BulletListItem key={s}>{s}</BulletListItem>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">MLOps / Production ML</h3>
            <ul className="ml-5">
  {profile.skills.mlOps.map((s) => (
    <BulletListItem key={s}>{s}</BulletListItem>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Software Engineering Strengths</h3>
            <ul className="ml-5">
  {profile.skills.software.map((s) => (
    <BulletListItem key={s}>{s}</BulletListItem>
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
    <BulletListItem key={item}>{item}</BulletListItem>
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
    <BulletListItem key={r}>{r}</BulletListItem>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Strengths</h3>
            <ul className="ml-5">
  {profile.recruiterQuickScan.strengths.map((s) => (
    <BulletListItem key={s}>{s}</BulletListItem>
  ))}
</ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Looking For</h3>
            <ul className="ml-5">
  {profile.recruiterQuickScan.lookingFor.map((l) => (
    <BulletListItem key={l}>{l}</BulletListItem>
  ))}
</ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <Button href="/contact">Contact</Button>
          <Button href={profile.contact.linkedin} external>LinkedIn</Button>
          <Button href={profile.contact.github} external>GitHub</Button>
          <Button href="/resume">Resume</Button>
        </div>
      </section>
    </main>
  );
}
