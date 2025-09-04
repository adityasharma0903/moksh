"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8)
  })

  useEffect(() => {
    const handleHash = () => {}
    handleHash()
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "border-b border-white/10",
        scrolled ? "backdrop-blur-md bg-black/60" : "bg-transparent",
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight hover:opacity-90 transition-opacity">
          <span className="text-cyan-400">MOKSH</span>
          {/* <span className="text-white"> Studio</span> */}
          <span className="sr-only">MOKSH Home</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#team" className="hover:text-cyan-400 transition-colors">
            Team
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-white text-black hover:bg-lime-300 transition-colors"
          >
            Let’s Talk
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
