import BrandStory from "./components/brand-story"
import HowToUse from "./components/how-to-use"
import Testimonials from "./components/testimonials"
import SocialMedia from "./components/social-media"
import Facilities from "./components/facilities"
import Header from "./components/header"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <Header />
      <main>
        {/* Hero Section con imagen de fondo y overlay */}
        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src="/images/backgroundtemporal.jpg"
            alt="Clinikids Cuu Pediatría Integral - Clínica para niños en Chihuahua"
            fill
            priority
            className="object-cover object-center z-0 blur-sm"
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
              Clinikids Cuu Pediatría Integral
            </h1>
            <p className="text-white text-xl md:text-2xl font-medium mb-8">
              Cuidamos a tus pequeños con amor, experiencia y un ambiente divertido
            </p>
          </div>
        </section>
        <BrandStory />
        <Facilities />
        <HowToUse />
        <Testimonials />
        <SocialMedia />
      </main>
    </div>
  )
}

