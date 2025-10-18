"use client"

import { useState } from "react"
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
} from "react-icons/si"

export function Skills() {
  const skills = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Docker", icon: SiDocker },
  ]

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="h-screen w-full snap-start flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <div className="mb-20 fade-in">
          <h2 className="text-6xl md:text-7xl mb-4 font-extrabold">Skills</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-4 fade-in relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-sidebar-accent" />
                </div>
                {hoveredSkill === skill.name && (
                  <p className="absolute top-full mt-2 text-sm font-medium text-muted-foreground text-center animate-fade-in whitespace-nowrap">
                    {skill.name}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
