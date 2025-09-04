"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

export function ProjectsSection({
  projects,
}: {
  projects: {
    title: string
    category: string
    year: string
    image: string
    summary: string
    tags: string[]
  }[]
}) {
  return (
    <section id="projects" aria-label="Featured Projects" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">
              Flagship <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="mt-2 text-slate-400 max-w-prose">
              Results-first sites across niches. Built fast, scalable, and SEO-friendly — with motion that converts.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-block px-4 py-2 rounded-full border border-white/15 hover:border-cyan-400 text-sm"
          >
            Start a Project
          </a>
        </div>

        <motion.div
          className="mt-8 grid md:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {projects.map((p, idx) => (
            <motion.div key={idx} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
