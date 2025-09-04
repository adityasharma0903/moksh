"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Globe, ShoppingBag, CalendarClock, BarChart3, Palette, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

type Offering = {
  title: string
  description: string
  icon: React.ReactNode
  highlights: string[]
}

const offerings: Offering[] = [
  {
    title: "Modern Websites",
    description: "Fast, mobile-first sites that convert visitors into customers.",
    icon: <Globe className="h-5 w-5" aria-hidden="true" />,
    highlights: ["Lightning-fast", "SEO-ready", "Accessible"],
  },
  {
    title: "E‑commerce",
    description: "Online stores with smooth checkout and inventory control.",
    icon: <ShoppingBag className="h-5 w-5" aria-hidden="true" />,
    highlights: ["Payments", "Product pages", "Analytics"],
  },
  {
    title: "Bookings & Appointments",
    description: "Frictionless scheduling for clinics, salons, and studios.",
    icon: <CalendarClock className="h-5 w-5" aria-hidden="true" />,
    highlights: ["Reminders", "Calendars", "No-shows ↓"],
  },
  {
    title: "SEO & Analytics",
    description: "Be found locally. Measure, learn, and grow every month.",
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
    highlights: ["Local SEO", "Reports", "Insights"],
  },
  {
    title: "Brand & Content",
    description: "Clear messaging, sharp visuals, and compelling copy.",
    icon: <Palette className="h-5 w-5" aria-hidden="true" />,
    highlights: ["Logos", "Photography", "Copywriting"],
  },
  {
    title: "Care & Support",
    description: "We keep things updated, secure, and running flawlessly.",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
    highlights: ["Updates", "Security", "Backups"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 22 } },
}

export function OfferingsSection({ className }: { className?: string }) {
  return (
    <section aria-labelledby="offerings-heading" className={cn("w-full py-12 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12">
          <h2
            id="offerings-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            What we offer
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Full‑stack solutions for local businesses — designed to look incredible and drive real results.
          </p>
        </header>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {offerings.map((o, i) => (
            <motion.li key={i} variants={item}>
              <article
                className={cn(
                  "group relative rounded-xl border bg-card p-5 transition-colors",
                  "border-border hover:border-primary/60",
                )}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-medium",
                      "bg-primary/10 text-primary ring-1 ring-inset ring-primary/20",
                    )}
                    aria-hidden="true"
                  >
                    {o.icon}
                    <span className="tracking-wide">Service</span>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground md:text-xl">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.description}</p>

                <ul className="mt-4 flex flex-wrap items-center gap-2">
                  {o.highlights.map((h, j) => (
                    <li
                      key={j}
                      className={cn(
                        "rounded-md border px-2.5 py-1 text-xs text-foreground/80",
                        "border-border/70 bg-background/60",
                      )}
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-xl opacity-0 transition",
                    "ring-1 ring-primary/30 group-hover:opacity-100",
                  )}
                  aria-hidden="true"
                />
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default OfferingsSection
