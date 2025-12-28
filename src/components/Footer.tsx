import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
  ],
  social: [
    {
      name: "GitHub",
      href: profile.contact.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: profile.contact.linkedin,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `mailto:${profile.contact.email}`,
      icon: Mail,
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-headline">
              {profile.name}
            </h3>
            <p className="text-sm text-muted max-w-xs">
              {profile.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-headline uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-headline uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
