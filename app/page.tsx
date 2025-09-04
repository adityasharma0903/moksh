import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { ProjectsSection } from "@/components/projects-section"
import { Team } from "@/components/team"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { OfferingsSection } from "@/components/offerings-section"

export default function Page() {
  // Simple mock data — replace with real projects later
  const projects = [
    {
      title: "Revoliq — Smart Cart",
      category: "E-commerce",
      year: "2025",
      image: "/revoliq.png",
      summary: "Full-stack Checkout system, by barcode scanning and fast and reliable Checkout.",
      tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    },
    {
      title: "Urban Fit — Studio Booking",
      category: "Fitness",
      year: "2025",
      image: "/fitness-studio-class-booking-app-ui.jpg",
      summary: "Schedule, memberships, trainer profiles, and automated reminders for classes.",
      tags: ["Next.js", "Supabase", "Calendars", "Email"],
    },
    {
      title: "Bloom Boutique — Product Catalog",
      category: "Retail",
      year: "2025",
      image: "/boutique-retail-catalog-website-ui.jpg",
      summary: "High-converting storefront with variant options, wishlists, and analytics.",
      tags: ["Next.js", "Analytics", "SEO", "Design"],
    },
    {
      title: "Crafted Cuts — Barber Bookings",
      category: "Services",
      year: "2025",
      image: "/barber-shop-booking-website-ui.jpg",
      summary: "One-tap booking, slot management, SMS confirmations, and reviews.",
      tags: ["Next.js", "SMS", "RLS", "UI"],
    },
  ]

  const marqueeItems = [
    "Local Shops",
    "Food & Beverage",
    "Retail",
    "Fitness",
    "Salons",
    "Clinics",
    "Education",
    "Events",
    "Restaurants",
    "Bakeries",
    "Gyms",
    "Studios",
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      <SiteNav />
      <Hero />
      <section aria-label="Our focus" className="py-8 md:py-12">
        <Marquee items={marqueeItems} />
      </section>
      <OfferingsSection />
      <ProjectsSection projects={projects} />
      <Team />
      <SiteFooter />
    </main>
  )
}
