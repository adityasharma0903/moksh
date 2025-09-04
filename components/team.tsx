"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Team() {
  const members = [
    {
      name: "Vaibhav Katyal",
      role: "Full‑Stack Engineer",
      img: "/vaibhav.jpg",
      skills: ["Architecture", "APIs", "Perf"],
    },
    {
      name: "Lakshya Chauhan",
      role: "Full‑Stack Engineer",
      img: "/laksay.jpg",
      skills: ["UX", "Animations", "UI"],
    },
    {
      name: "Aditya Sharma",
      role: "Full‑Stack Engineer",
      img: "/aditya2.jpg",
      skills: ["Data", "Security", "Infra"],
    },
  ]

  return (
    <section id="team" aria-label="Our Team" className="py-14 md:py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Meet the <span className="text-lime-300">Team</span>
        </h2>
        <p className="mt-2 text-slate-400 max-w-prose">
          Three builders. Many launches. One mission: ship unforgettable websites that sell.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 lg:gap-8">
          {members.map((m) => (
            <motion.div
              key={m.name}
              className="group relative rounded-xl overflow-hidden border border-white/10"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <div className="relative aspect-square bg-white/5">
                <Image
                  src={m.img || "/placeholder.svg"}
                  alt={`Portrait of ${m.name}`}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">{m.name}</h3>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-cyan-400 text-black">{m.role}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-1 rounded-full border border-white/15 text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <CTA />
      </div>
    </section>
  )
}

function CTA() {
  return (
    <div id="contact" className="mt-10 rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Let’s build your shop’s website next.</h3>
          <p className="text-slate-400 mt-1">Tell us about your goals — we’ll reply within 24 hours.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:adityasharma08093@gmail.com"
            className="px-4 py-2 rounded-full bg-white text-black hover:bg-lime-300 transition-colors"
          >
            Email Us
          </a>
          <a href="#projects" className="px-4 py-2 rounded-full border border-white/15 hover:border-cyan-400">
            View Work
          </a>
        </div>
      </div>
    </div>
  )
}
