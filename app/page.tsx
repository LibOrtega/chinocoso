import BrandStory from "./components/brand-story"
import HowToUse from "./components/how-to-use"
import Testimonials from "./components/testimonials"
import SocialMedia from "./components/social-media"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero section with background image and centered content */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/hero-background.jpg"
          alt="Clinikids Cuu - Clínica Pediátrica Integral"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold text-center mb-6 drop-shadow-2xl">
              Clinikids Cuu
            </h1>
            <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-8 drop-shadow-xl">
              Pediatría Integral
            </h2>
            <p className="text-white text-lg md:text-xl text-center max-w-2xl drop-shadow-lg">
              Cuidando con amor y profesionalismo a los pequeños de Chihuahua
            </p>
          </div>
        </div>
      </section>
      <BrandStory />
      <HowToUse />
      <Testimonials />
      <SocialMedia />
    </main>
  )
}

