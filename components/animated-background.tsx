"use client"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-10 w-72 h-72 bg-amber-900/3 rounded-full blur-3xl animate-float-slow"></div>
      <div
        className="absolute top-1/3 right-20 w-96 h-96 bg-amber-800/2 rounded-full blur-3xl animate-float-medium"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-700/3 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-900/2 rounded-full blur-3xl animate-float-medium"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-800/3 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  )
}
