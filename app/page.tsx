import BrandStory from "./components/brand-story"
import HowToUse from "./components/how-to-use"
import Testimonials from "./components/testimonials"
import SocialMedia from "./components/social-media"
import Facilities from "./components/facilities"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Sección de imagen expandida y texto centrado */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="flex items-center justify-center h-full bg-black/50">
          <h1 className="text-white text-5xl md:text-7xl font-bold text-center shadow-lg">
            Clinikids Cuu Pediatría Integral
          </h1>
        </div>
      </section>
      <BrandStory />
      <Facilities />
      <HowToUse />
      <Testimonials />
      <SocialMedia />
    </main>
  )
}

