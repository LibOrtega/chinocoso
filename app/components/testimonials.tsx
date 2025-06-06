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
    content: "Tuve una experiencia excepcional en este lugar. La atención es sobresaliente; el personal está altamente capacitado y se mantiene actualizado en las mejores prácticas. Se toman el tiempo necesario para explicarte cada detalle y guiarte en la búsqueda de lo que tu hijo necesita. Además, las instalaciones son más que agradables; están diseñadas de manera óptima para facilitar su trabajo. El trato es muy profesional y se nota una genuina preocupación por las opiniones tanto de los padres como de los niños. Esto crea un ambiente de confianza y colaboración que es fundamental para el desarrollo de nuestros hijos. Recomiendo este lugar a todos los padres que buscan un apoyo sólido y comprometido para sus hijos 1000/10",
    author: "Google Maps",
    rating: 5
  },
  {
    content: "Aparte le tomaron fotos a tus hijos o si quieres tú con ellos, instantáneas para que tú las tengas de recuerdo 🥰❤️🫶 También ofrecen té o café para esperar tu turno o durante tu consulta. Tuvimos la fortuna de encontrar al mejor lugar y por supuesto al mejor médico en una emergencia cuando estás lejos de casa!! Gracias Doc Alex y a tu equipo por el tiempo y atención increíbles para mi pequeña, sin duda lo recomiendo ampliamente, domingo nos atendieron la consulta profunda y oportuna para mi nena, gracias a todo su equipo.",
    author: "Google Maps",
    rating: 5
  },
  {
    content: "Yo los encontré por Google en un día que mi bebé amaneció con vómito, me dieron cita muy pronto, la doctora Marisol nos atendió muy amable, nos escuchó y explicó todo, es muy bonita doctora, recomiendo totalmente los servicios. Aparte son muy detallistas.",
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
              <p className="text-gray-600 mb-4 italic">&#34;{testimonial.content}&#34;</p>
              <p className="text-[#5dc0b3] font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-2">📸</div>
            <h3 className="text-lg font-semibold mb-1">Recuerdos Especiales</h3>
            <p className="text-gray-600 text-sm">Te tomamos fotos con tus pequeños para que conserves momentos únicos de tu visita.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-2">☕</div>
            <h3 className="text-lg font-semibold mb-1">Comodidad y Calidez</h3>
            <p className="text-gray-600 text-sm">Disfruta de té o café mientras esperas o durante tu consulta, porque tu bienestar también es importante.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-2">💖</div>
            <h3 className="text-lg font-semibold mb-1">Atención con Amor</h3>
            <p className="text-gray-600 text-sm">Nos esforzamos por crear un ambiente de confianza y cariño para ti y tus hijos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

