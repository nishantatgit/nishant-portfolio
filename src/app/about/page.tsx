import { profile } from "@/content/profile";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-hero font-extrabold mb-6 text-headline">About Me</h1>
          <p className="text-body-lg text-muted leading-relaxed">
            Transitioning from Full-Stack Engineering to Machine Learning, bringing a production-first mindset to applied ML.
          </p>
        </div>
      </section>

      {/* Professional Narrative */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
          <h2 className="text-display font-bold mb-8 text-headline">Professional Narrative</h2>
          <div className="space-y-6">
            <p className="text-body text-foreground leading-relaxed">
              I started my career as a Full-Stack Engineer, building robust web applications and scalable systems. My passion for impact and curiosity about data-driven solutions led me to transition into Machine Learning, where I now focus on applied ML and productionizing models end-to-end.
            </p>
            <ul className="space-y-4 mt-8">
              <BulletListItem>
                <span className="text-body text-foreground">
                  <strong className="font-semibold">Full-Stack background:</strong> System design, APIs, cloud infrastructure, frontend & backend development
                </span>
              </BulletListItem>
              <BulletListItem>
                <span className="text-body text-foreground">
                  <strong className="font-semibold">Why ML:</strong> Impact, automation, and solving real-world problems with data
                </span>
              </BulletListItem>
              <BulletListItem>
                <span className="text-body text-foreground">
                  <strong className="font-semibold">How I'm proving it:</strong> 4 end-to-end ML projects, metrics-driven approach, production mindset
                </span>
              </BulletListItem>
            </ul>
          </div>
        </div>
      </section>

      {/* Transition Timeline */}
      <section className="border-b border-border bg-surface/30">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
          <h2 className="text-display font-bold mb-12 text-headline">Transition Timeline</h2>
          <div className="relative border-l-4 border-accent pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full bg-accent border-4 border-background"></div>
              <h3 className="text-h3 font-semibold text-headline mb-2">Full-Stack Engineer</h3>
              <p className="text-muted mb-3">2017–2023</p>
              <p className="text-body text-foreground">
                Built web applications, REST APIs, and cloud-based systems. Gained expertise in system design, deployment, and end-to-end product delivery.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full bg-accent border-4 border-background"></div>
              <h3 className="text-h3 font-semibold text-headline mb-2">ML Exploration</h3>
              <p className="text-muted mb-3">2022–2023</p>
              <p className="text-body text-foreground">
                Self-study in machine learning fundamentals, completed ML courses, experimented with models, and discovered passion for applied ML.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full bg-accent border-4 border-background"></div>
              <h3 className="text-h3 font-semibold text-headline mb-2">Applied ML Engineer</h3>
              <p className="text-muted mb-3">2023–Present</p>
              <p className="text-body text-foreground">
                Building end-to-end ML projects, focusing on production ML, model evaluation, and deployment. Combining software engineering strengths with ML expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold mb-4 text-headline">Let's Connect</h2>
            <p className="text-body-lg text-muted">
              Want to learn more or discuss opportunities?
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button href="/contact" variant="primary" size="lg">Contact Me</Button>
            <Button href={profile.contact.linkedin} external variant="outline" size="lg">LinkedIn</Button>
            <Button href={profile.contact.github} external variant="outline" size="lg">GitHub</Button>
            <Button href="/resume" variant="secondary" size="lg">View Resume</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
