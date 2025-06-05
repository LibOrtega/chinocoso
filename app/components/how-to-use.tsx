import { CheckCircle2 } from "lucide-react"

interface Service {
  title: string
  description: string
  items: string[]
}

const services: Service[] = [
  {
    title: "Servicios Médicos",
    description: "Atención pediátrica integral para el bienestar de tu hijo",
    items: [
      "Consulta pediátrica general",
      "Control de niño sano",
      "Vacunación",
      "Atención de enfermedades agudas",
      "Seguimiento de desarrollo"
    ]
  },
  {
    title: "Servicios Especializados",
    description: "Cuidado especializado para necesidades específicas",
    items: [
      "Nutrición pediátrica",
      "Desarrollo y estimulación temprana",
      "Orientación a padres",
      "Manejo de problemas de conducta",
      "Seguimiento de crecimiento"
    ]
  },
  {
    title: "Servicios Adicionales",
    description: "Complementos para una experiencia completa",
    items: [
      "Área de juegos",
      "Sala de espera cómoda",
      "Estacionamiento",
      "Cafetería",
      "Wi-Fi gratuito"
    ]
  }
]

export default function HowToUse() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Ofrecemos una atención integral para el cuidado de tu hijo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
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

