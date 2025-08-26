import { CheckCircle2 } from "lucide-react"

interface Service {
  title: string
  items: string[]
}

const services: Service[] = [
  {
    title: "Servicios Principales",
    items: [
      "Pediatría",
      "Nutrición Clínica",
      "Terapia de Lenguaje",
      "Psicología Pediátrica"
    ]
  },
  {
    title: "Especialidades",
    items: [
      "Nefrología Pediátrica",
      "Neurología Pediátrica",
      "Fisioterapia Pediátrica",
      "Neumología Pediátrica",
      "Dermatología Pediátrica",
      "Gastroenterología Pediátrica"
    ]
  },
  {
    title: "Desarrollo y Cuidado",
    items: [
      "Estimulación Temprana",
      "Pediatría del Desarrollo",
      "Asesoría de Lactancia",
      "Atención Integral del Síndrome de Down",
      "Asesoría de Alimentación Oromotora y Selectividad Alimentaria"
    ]
  }
]

export default function HowToUse() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Ofrecemos atención integral y especializada para el desarrollo y bienestar de tus hijos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#5dc0b3] mb-4 text-center">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#5dc0b3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

