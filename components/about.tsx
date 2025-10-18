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
            I'm a Computer Science undergrad with a passion for creating meaningful and seamless digital experiences. I love solving problems through code and exploring how technology can make life not just easier, but more inspiring. Whether it's building interactive web apps or experimenting with AI, I'm always excited to learn something new.
          </p>

          <p>
            I believe great design and functionality should work together, that's my main drive when crafting projects that are both visually clean and intuitive to use. I enjoy the process of turning ideas into reality, paying attention to the details that make an interface feel natural and engaging.
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
