import Image from "next/image"
import { Star } from "lucide-react"

interface Review {
  comment: string;
  role: string;
}

interface MainTestimonial {
  image: string;
  rating: number;
  comment: string;
  role: string;
}

interface TestimonialsData {
  main: MainTestimonial;
  reviews: Review[];
}

export default function Testimonials() {
  const testimonials: TestimonialsData[] = [
    {
      main: {
        image: "/images/testimonios.jpg",
        rating: 5,
        comment: "El pediatra de mi bebé es el Dr. Rubén. Es un pediatra muy atento para con nosotros los papás y para mí bebé, escucha nuestras dudas dentro y fuera de consulta y esta pendiente de tu bebé si se llegase a poner mal o simplemente para dar seguimiento.",
        role: "Reseña de Google Maps"
      },
      reviews: [
        {
          comment: "Me encantó el trato, desde que agendas la cita, cuando vas a ella y posteriormente la atención que tienen para darle seguimiento a la salud del paciente... El Dr. David Rosales, súper recomendado, un excelente pediatra!!",
          role: "Reseña de Google Maps"
        },
        {
          comment: "Tuve una experiencia excepcional en este lugar. La atención es sobresaliente; el personal está altamente capacitado y se mantiene actualizado en las mejores prácticas. Se toman el tiempo necesario para explicarte cada detalle y guiarte en la búsqueda de lo que tu hijo necesita.",
          role: "Reseña de Google Maps"
        },
        {
          comment: "Excelente servicio y seguimiento, muy bonitas instalaciones. También ofrecen té o café para esperar tu turno o durante tu consulta. Excelente trato por parte de la doctora Martha Herrera.",
          role: "Reseña de Google Maps"
        }
      ]
    }
  ]

  const mainTestimonial = testimonials[0].main;
  const additionalReviews = testimonials[0].reviews;

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-600 font-medium tracking-wider">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Reseñas verificadas de Google Maps de familias que confían en Clinikids para el cuidado de sus pequeños
          </p>
        </div>

        {/* Testimonio Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={mainTestimonial.image}
              alt="Ambiente de Clinikids"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(mainTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
              "{mainTestimonial.comment}"
            </blockquote>
            <div>
              <p className="text-gray-600">{mainTestimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Testimonios Adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalReviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{review.comment}"</p>
              <div>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Características Adicionales */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-semibold mb-2">Recuerdos Especiales</h3>
            <p className="text-gray-600">Instantáneas de tus pequeños para conservar momentos especiales</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
            <p className="text-gray-600">Té o café durante tu espera y consulta</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-xl font-semibold mb-2">Ambiente Familiar</h3>
            <p className="text-gray-600">Instalaciones diseñadas para la comodidad de toda la familia</p>
          </div>
        </div>
      </div>
    </section>
  )
}

