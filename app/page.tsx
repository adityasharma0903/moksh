import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { ProjectsSection } from "@/components/projects-section"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { OfferingsSection } from "@/components/offerings-section"
import PricingCards from "@/components/PricingCards"

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

      {/* Certificate Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
            Government Authorized Certificate
          </h2>
          <p className="mb-6 text-slate-300 max-w-md">
            We are officially recognized as a registered enterprise under the Government of India’s UDYAM scheme.
            This certificate authenticates our commitment to legal compliance, transparency, and quality service delivery.
            <br /><br />
            <span className="text-cyan-300 font-semibold">UDYAM Registration Number:</span> UDYAM-PB-20-018502
            <br />
            <span className="text-cyan-300 font-semibold">Enterprise Name:</span> MOKSH
          </p>
          <div className="flex gap-4">
            <a
              href="/UDYYAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
            >
              View
            </a>
            <a
              href="/UDYYAM.pdf"
              download
              className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-lime-300 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="border-4 border-cyan-400 rounded-xl shadow-lg bg-white/5 p-4 w-full max-w-md">
            <img
              src="/certificate.png"
              alt="Government Authorized Certificate"
              className="rounded-lg w-full object-contain"
            />
          </div>
        </div>
      </section>

      <PricingCards />
      <SiteFooter />
    </main>
  )
}
