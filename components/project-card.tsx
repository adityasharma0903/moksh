"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProjectCard(props: {
  title: string
  category: string
  year: string
  image: string
  summary: string
  tags: string[]
}) {
  const { title, category, year, image, summary, tags } = props

  return (
    <article className="group relative rounded-xl overflow-hidden border border-white/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 600px, 100vw"
            priority={false}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-white text-black">{year}</span>
          </div>
          <p className="mt-1 text-slate-300">{category}</p>
          <p className="mt-2 text-sm text-slate-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {summary}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-white/15 text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
