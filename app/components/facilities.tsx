import Image from "next/image"

export default function Facilities() {
  const facilities = [
    {
      title: "Sala de Espera",
      description: "Un espacio acogedor y divertido para que los pequeños se sientan cómodos mientras esperan su consulta.",
      image: "/images/facilities/waiting-room.jpg"
    },
    {
      title: "Consultorios",
      description: "Consultorios equipados con la última tecnología para brindar la mejor atención a nuestros pacientes.",
      image: "/images/facilities/consultation-room.jpg"
    },
    {
      title: "Área de Juego",
      description: "Zona especial para que los niños se diviertan y se sientan como en casa.",
      image: "/images/facilities/play-area.jpg"
    },
    {
      title: "Recepción",
      description: "Personal amable y atento listo para recibirte y ayudarte en lo que necesites.",
      image: "/images/facilities/reception.jpg"
    }
  ]

  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-600 font-medium tracking-wider">Nuestras Instalaciones</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Un espacio diseñado para los más pequeños
          </h2>
          <p className="text-gray-600 leading-relaxed">
            En Clinikids hemos creado un ambiente cálido y acogedor donde los niños se sienten seguros
            y las familias encuentran la tranquilidad que buscan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Ven a conocer nuestras instalaciones y descubre por qué somos la mejor opción
            para el cuidado de tus pequeños.
          </p>
          <a 
            href="https://maps.app.goo.gl/8AoURfzWK8CpBHKX6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Ver en Google Maps
          </a>
        </div>
      </div>
    </section>
  )
} 