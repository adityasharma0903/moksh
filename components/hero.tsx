"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative pt-28 md:pt-36 pb-12 md:pb-16 border-b border-white/10 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.p
          className="text-sm tracking-widest text-slate-400 mb-4"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Vaibhav Katyal • Lakshya Chauhan • Aditya Sharma
        </motion.p>

        <h1 className="text-balance leading-tight font-semibold text-4xl md:text-6xl lg:text-7xl">
          <KineticWord text="We" /> build <KineticWord text="unforgettable" accent /> websites for{" "}
          <KineticWord text="local" /> <KineticWord text="businesses" accent />.
        </h1>

        <motion.p
          className="mt-5 max-w-2xl text-pretty text-slate-400 leading-relaxed"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          Full‑stack experiences that turn visitors into customers: fast, animated, and laser‑focused on results. We’ve
          shipped across food, retail, fitness, services, and more.
        </motion.p>

        <div className="mt-8 flex items-center gap-3">
          <MagneticCTA />
          <motion.a
            href="#projects"
            className="px-4 py-2 rounded-full border border-white/15 hover:border-cyan-400 text-sm"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            See Projects
          </motion.a>
        </div>
      </div>

      <HeroBackdrop />
    </section>
  )
}

function KineticWord({ text, accent = false }: { text: string; accent?: boolean }) {
  return (
    <motion.span
      className={accent ? "text-cyan-400" : "text-white"}
      initial={{ y: 20, opacity: 0, rotate: 3 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      {text}
    </motion.span>
  )
}

function MagneticCTA() {
  return (
    <motion.a
      href="#contact"
      className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-black font-medium shadow-[0_0_0_0_rgba(0,0,0,0.0)] hover:shadow-[0_0_40px_0_rgba(34,211,238,0.35)] transition-shadow"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Start a project with KLA Studio"
    >
      Start a Project
      <span
        aria-hidden
        className="inline-block size-2 rounded-full bg-black group-hover:bg-lime-300 transition-colors"
      />
    </motion.a>
  )
}

function HeroBackdrop() {
  // Decorative, no gradient fills—only borders/outlines for visual energy
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] border border-cyan-400/15 rounded-full" />
      <div className="absolute -top-16 -right-40 w-[52rem] h-[52rem] border border-cyan-400/10 rounded-full" />
      <div className="absolute -top-8 -right-16 w-[28rem] h-[28rem] border border-lime-300/10 rounded-full" />
    </motion.div>
  )
}
