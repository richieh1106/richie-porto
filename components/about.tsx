"use client"

export function About() {
  return (
    <section className="h-screen w-full snap-start flex items-center justify-center px-6">
      <div className="max-w-4xl w-full space-y-8 fade-in">
        <div className="space-y-4">
          <p className="text-accent uppercase tracking-wide text-xl font-semibold">About Me</p>
          <h2 className="text-6xl md:text-7xl text-balance leading-tight font-extrabold">
            Get to know <span className="text-primary">me</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a developer with a passion for creating seamless digital experiences. I believe that great design and
            functionality go hand in hand, and I'm committed to building products that not only look beautiful but feel
            intuitive to use.
          </p>

          <p>
            When I'm not coding, you'll find me enjoying slower R&B tracks, exploring new design trends, or thinking
            about how to solve problems in creative ways. I approach every project with intention and care, making sure
            every detail contributes to the overall experience.
          </p>

          <p>
            I'm always excited to collaborate on interesting projects and connect with like-minded people. Whether it's
            a full-scale application or a small component, I bring the same level of dedication and attention to detail
            to everything I work on.
          </p>
        </div>

        <div className="pt-4">
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
