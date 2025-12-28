import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-hero font-extrabold mb-6 text-headline">
              {profile.title}
            </h1>
            <p className="text-body-lg text-muted mb-10 max-w-2xl">
              {profile.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              {profile.ctas.map((cta, idx) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={idx === 0 ? "primary" : "outline"}
                  size="lg"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {profile.credibility.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transition Story */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <h2 className="text-display font-bold mb-8 text-headline">Transition Story</h2>
          <ul className="space-y-4 max-w-3xl">
            {profile.transitionStory.map((item) => (
              <BulletListItem key={item}>
                <span className="text-body text-foreground">{item}</span>
              </BulletListItem>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-b border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="mb-12">
            <h2 className="text-display font-bold mb-4 text-headline">Featured Projects</h2>
            <p className="text-body-lg text-muted max-w-2xl">
              End-to-end machine learning projects showcasing practical skills and production mindset.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <h2 className="text-display font-bold mb-12 text-headline">Skills Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-headline">Machine Learning</h3>
              <ul className="space-y-3">
                {profile.skills.machineLearning.map((s) => (
                  <BulletListItem key={s}>
                    <span className="text-body text-foreground">{s}</span>
                  </BulletListItem>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-headline">MLOps / Production ML</h3>
              <ul className="space-y-3">
                {profile.skills.mlOps.map((s) => (
                  <BulletListItem key={s}>
                    <span className="text-body text-foreground">{s}</span>
                  </BulletListItem>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-headline">Software Engineering</h3>
              <ul className="space-y-3">
                {profile.skills.software.map((s) => (
                  <BulletListItem key={s}>
                    <span className="text-body text-foreground">{s}</span>
                  </BulletListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Seriousness */}
      <section className="border-b border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <h2 className="text-display font-bold mb-8 text-headline">Proof of Seriousness</h2>
          <ul className="space-y-4 max-w-3xl">
            {profile.seriousness.map((item) => (
              <BulletListItem key={item}>
                <span className="text-body text-foreground">{item}</span>
              </BulletListItem>
            ))}
          </ul>
        </div>
      </section>

      {/* Recruiter Quick Scan */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <h2 className="text-display font-bold mb-12 text-headline">Recruiter Quick Scan</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-headline">Roles Targeted</h3>
              <ul className="space-y-3">
                {profile.recruiterQuickScan.roles.map((r) => (
                  <BulletListItem key={r}>
                    <span className="text-body text-foreground">{r}</span>
                  </BulletListItem>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-headline">Strengths</h3>
              <ul className="space-y-3">
                {profile.recruiterQuickScan.strengths.map((s) => (
                  <BulletListItem key={s}>
                    <span className="text-body text-foreground">{s}</span>
                  </BulletListItem>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-headline">Looking For</h3>
              <ul className="space-y-3">
                {profile.recruiterQuickScan.lookingFor.map((l) => (
                  <BulletListItem key={l}>
                    <span className="text-body text-foreground">{l}</span>
                  </BulletListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display font-bold mb-6 text-headline">Let's Connect</h2>
            <p className="text-body-lg text-muted mb-10">
              Interested in discussing ML opportunities or collaboration? I'd love to hear from you.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Button href="/contact" variant="primary" size="lg">Contact Me</Button>
              <Button href={profile.contact.linkedin} external variant="outline" size="lg">LinkedIn</Button>
              <Button href={profile.contact.github} external variant="outline" size="lg">GitHub</Button>
              <Button href="/resume" variant="secondary" size="lg">View Resume</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
