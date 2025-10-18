"use client"

import { Mail, ArrowRight } from "lucide-react"

export function Contact() {
  const handleResumeDownload = () => {
    // Create a link to download resume - replace with your actual resume file
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Make sure to add your resume.pdf to the public folder
    link.download = "resume.pdf"
    link.click()
  }

  return (
    <section className="h-screen w-full snap-start flex items-center justify-center px-6">
      <div className="max-w-4xl w-full space-y-8 fade-in">
        <div className="space-y-4">
          <p className="text-accent uppercase tracking-wide font-bold text-lg">Get In Touch</p>
          <h2 className="text-6xl md:text-7xl text-balance leading-tight font-extrabold">
            Let's <span className="text-primary">work together</span>
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          collaborate or just chat!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
          >
            <Mail className="w-5 h-5" />
            Send me an email
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          
        </div>

        <div className="pt-4">
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
