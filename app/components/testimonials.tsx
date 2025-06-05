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

interface Testimonial {
  content: string
  author: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    content: "Excelente atención, muy profesionales y amables con los niños. El Dr. es muy atento y explica todo detalladamente.",
    author: "Google Maps",
    rating: 5
  },
  {
    content: "La mejor pediatra que he conocido, muy profesional y atenta. Las instalaciones son muy bonitas y limpias.",
    author: "Google Maps",
    rating: 5
  },
  {
    content: "Excelente servicio, muy buena atención y el doctor es muy amable y profesional. Lo recomiendo ampliamente.",
    author: "Google Maps",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Lo que dicen nuestros pacientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#5dc0b3] text-[#5dc0b3]" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <p className="text-[#5dc0b3] font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

