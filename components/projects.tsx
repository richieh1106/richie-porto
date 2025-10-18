"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Cateringz",
      description: "A simple mostly HTML-only restaurant/catering website made with responsibility in mind",
      tags: ["Figma", "HTML", "CSS", "JavaScript"],
      image: "/Cateringz.png",
      preview: "https://github.com/richieh1106/cateringz", // ✅ Example link
    },
    {
      title: "Eazy Catch",
      description: "Another interactive HTML project, made together as a group",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/EazyCatch.png",
      preview: "https://github.com/richieh1106/eazycatch",
    },
    {
      title: "AI Calorie Tracker",
      description: "Calorie Tracker AI using a pretrained DenseNet model and a Kaggle calories dataset",
      tags: ["Kaggle", "Python", "Machine Learning", "HTML"],
      image: "/AI.png",
      preview: null,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious = () => setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1))
  const goToNext = () => setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1))
  const currentProject = projects[currentIndex]

  return (
    <section className="h-screen w-full snap-start flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <div className="mb-20 fade-in">
          <h2 className="text-6xl md:text-7xl mb-4 font-black">Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="flex items-center justify-between gap-8">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-accent hover:bg-accent/40 transition-all duration-300 flex-shrink-0 hover:scale-110 hover:shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-primary hover:text-accent transition-colors" />
          </button>

          <div className="flex-1 p-8 md:p-12 rounded-lg border border-border bg-secondary/20 hover:border-primary/50 transition-all duration-300 fade-in">
              <div className="w-full h-80 rounded-lg mb-6 overflow-hidden border border-border/30">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-primary">{currentProject.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{currentProject.description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {currentProject.tags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {currentProject.preview ? (
              <a
                href={currentProject.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-accent transition-all duration-300"
              >
                View Repository
              </a>
            ) : (
              <button
                disabled
                className="inline-block px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-lg cursor-not-allowed opacity-50"
              >
                No Preview Available
              </button>
            )}
          </div>

          <button
            onClick={goToNext}
            className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-accent hover:bg-accent/40 transition-all duration-300 flex-shrink-0 hover:scale-110 hover:shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-primary hover:text-accent transition-colors" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
