import { Instagram, Youtube, MessageCircle, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMedia() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contáctanos</h2>
        <p className="text-xl text-gray-600 mb-8">
          Síguenos en nuestras redes sociales para mantenerte al día con consejos de salud, 
          noticias y el día a día de nuestra clínica
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="https://www.instagram.com/clinikidscuu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <Button variant="outline" className="flex items-center gap-2 hover:bg-pink-50 hover:text-pink-600 transition-colors">
              <Instagram className="h-5 w-5" />
              @clinikidscuu
            </Button>
          </a>
          
          <a 
            href="https://youtube.com/@clinikidscuu?si=QW7OtZv_VUzzjwbR" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <Button variant="outline" className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 transition-colors">
              <Youtube className="h-5 w-5" />
              YouTube
            </Button>
          </a>
          
          <a 
            href="https://www.tiktok.com/@clinikids.cuu?_t=ZS-8wxk8rIRheG&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <Button variant="outline" className="flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
              <MessageCircle className="h-5 w-5" />
              TikTok
            </Button>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">¿Tienes alguna duda?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="h-6 w-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium">Dirección</p>
                <p className="text-sm">Blas Cano de los Ríos 807, San Felipe I</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="h-6 w-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium">Teléfono</p>
                <a href="tel:6145502199" className="text-sm hover:text-green-600 transition-colors">
                  (614) 550 2199
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600 mb-4">
              Déjanos tu correo y nos pondremos en contacto contigo
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

