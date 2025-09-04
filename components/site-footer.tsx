export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} MOKSH — All rights reserved.</p>
        <p className="text-slate-400">Built with Next.js • Crafted for speed, SEO, and conversions.</p>
      </div>
    </footer>
  )
}
