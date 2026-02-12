"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block font-mono text-sm tracking-widest text-primary uppercase mb-4">
            {"// aspiring data scientist"}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Murali
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
          3rd Year CSE Student at{" "}
          <span className="text-primary font-medium">
            Govt College of Engineering
          </span>
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          I turn raw data into meaningful insights using Python, SQL, Machine Learning, and Deep Learning. I love building dashboards that tell stories.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/murali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/murali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:murali@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}
