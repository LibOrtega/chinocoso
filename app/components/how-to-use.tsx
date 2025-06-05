import Image from "next/image"

export default function HowToUse() {
  const services = [
    {
      category: "Servicios Principales",
      items: [
        "Pediatría",
        "Nutrición Clínica",
        "Terapia de Lenguaje",
        "Psicología Pediátrica",
      ]
    },
    {
      category: "Especialidades",
      items: [
        "Nefrología Pediátrica",
        "Neurología Pediátrica",
        "Fisioterapia Pediátrica",
        "Neumología Pediátrica",
        "Dermatología Pediátrica",
        "Gastroenterología Pediátrica",
      ]
    },
    {
      category: "Desarrollo y Cuidado",
      items: [
        "Estimulación Temprana",
        "Pediatría del Desarrollo",
        "Asesoría de Lactancia",
        "Atención Integral del Síndrome de Down",
        "Asesoría de Alimentación Complementaria",
        "Terapia de Alimentación Oromotora y Selectividad",
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          En Clinikids ofrecemos una atención integral y especializada para el cuidado y desarrollo de tus pequeños
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex}
                    className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors duration-200"
                  >
                    <svg 
                      className="w-5 h-5 text-green-500 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">{service}</span>
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

