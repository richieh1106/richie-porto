"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ]

  return (
    <section className="h-screen w-full snap-start flex items-center justify-center px-6">
      <div className="max-w-4xl w-full space-y-8 fade-in">
        <div className="space-y-4">
          <p className="text-accent uppercase tracking-wide text-xl font-semibold">Welcome</p>
          <h1 className="text-6xl font-bold text-balance leading-tight md:text-7xl tracking-tighter">
            Hi, my name is <span className="text-primary">Richie</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          I'm a passionate developer who loves building beautiful and functional web experiences. I believe in creating
          things that feel smooth, intentional, and just right.
        </p>

        <div className="flex gap-4 pt-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-6 h-6 text-primary" />
              </a>
            )
          })}
        </div>

        <div className="pt-4">
          <div className="w-12 h-1 rounded-full bg-secondary-foreground"></div>
        </div>
      </div>
    </section>
  )
}
