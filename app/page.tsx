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
      tags: ["HTML", "CSS", "JS", "Express.js", "Node.js", "MongoDB", "JWT"],
      link: "https://revoliq.vercel.app/",
    },
    {
      title: "UNIBUX",
      category: "Chitkara University Club Management",
      year: "2025",
      image: "/unibux.png",
      summary: "A platform to organize, manage, and streamline all student clubs and activities at Chitkara University.",
      tags: ["HTML", "CSS", "JS", "Express.js", "Node.js", "MongoDB", "JWT"],
      link: "https://unibux.vercel.app",
    },
    {
      title: "Campus Navigator",
      category: "Lost & Found System for Chitkara University",
      year: "2024",
      image: "/campusnav.png",
      summary: "A campus app that helps students navigate easily while managing a smart lost-and-found system.",
      tags: ["HTML", "CSS", "JS", "Express.js", "Node.js", "MongoDB", "JWT"],
      link: "https://www.campusnavigator.xyz/",
    },
    {
      title: "PoolMate",
      category: "Car-Pooling Site",
      year: "2025",
      image: "/poolmate.png",
      summary: "A car-pooling platform that connects people to share rides for cost savings and eco-friendly travel.",
      tags: ["React.js", "MongoDB", "JWT", "Google Maps"],
      link: "https://poolmate.onrender.com/",
    },
    {
      title: "Chankaya AI",
      category: "Legal Help for Rural and uneducated people.",
      year: "2025",
      image: "/nyay.png",
      summary: "A platform that provides easy and accessible legal help for rural and uneducated communities.",
      tags: ["React.js", "MongoDB", "JWT", "Google Maps", "Pinecone", "TTS", "Whisper", "LangChain"],
      link: "https://nyaygpt.vercel.app/",
    },
    {
      title: "EduSphere",
      category: "Group Study Platform",
      year: "2025",
      image: "/edusphere.png",
      summary: "A platform for students to study and collaborate together",
      tags: ["HTML", "CSS", "JS", "Express.js", "Node.js", "MongoDB", "JWT"],
      link: "https://edu-sphere-1.vercel.app/",
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
