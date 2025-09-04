"use client"

import { useEffect, useRef } from "react"

export function Marquee({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reduce motion for users with prefers-reduced-motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches && containerRef.current) {
      containerRef.current.style.animation = "none"
    }
  }, [])

  const row = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/10">
      <div
        ref={containerRef}
        className="flex animate-marquee whitespace-nowrap"
        aria-label="Industries we serve"
        role="list"
      >
        {row.map((item, i) => (
          <span
            key={i}
            role="listitem"
            className="px-6 py-3 md:py-4 text-sm md:text-base text-slate-400 hover:text-white transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
      {/* Reverse layer for depth */}
      <div className="hidden md:block absolute inset-x-0 bottom-0 translate-y-full pointer-events-none">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {row.map((item, i) => (
            <span key={i} className="px-6 py-3 text-sm text-slate-500">
              {item}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-rev 36s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
