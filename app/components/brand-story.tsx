import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BrandStory() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-[#5dc0b3] font-medium tracking-wider">¿Quienes somos?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            <br />
            Bienvenidos a la familia Clinikids
          </h2>
          <p className="text-gray-600 leading-relaxed">
            En Clinikids cuu, nos especializamos en el cuidado integral de la infancia, ofreciendo 
            atención pediátrica de alta calidad en un ambiente cálido y confiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/estetoscopio.jpg"
              alt="Ambiente de Clinikids"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Tu equipo de confianza está aquí. 
              <br />
              Acompañamos a cada familia con un enfoque humano.  
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Brindamos soluciones médicas basadas en la evidencia científica y adaptadas
              a las necesidades individuales de cada peque. Sabemos que la salud infantil va más allá.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestro equipo de especialistas trabaja en conjunto para ofrecer un enfoque integral en la
              atenció pediátrica, siempre con el compromiso de proporcionar el mejor cuidado posible.
            </p>
            <Link href="#facilities">
              <Button variant="outline" className="mt-4 bg-[#f3994d] hover:bg-[#f3994d]/90 text-white transition-colors">
                Nuestras Instalaciones
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-[#5dc0b3]/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">👨‍👩‍👧</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">CUIDAR</h4>
            <p className="text-gray-600">Brindar atención con ternura, respeto y compromiso.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-[#5dc0b3]/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">👶</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">CRECER</h4>
            <p className="text-gray-600">Apoyamos el crecimiento físico, emocional y cognitivo de cada pequeño..</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-[#5dc0b3]/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🩺</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">SANAR</h4>
            <p className="text-gray-600">En Clinikids, sanar va más allá del tratamiento médico.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

