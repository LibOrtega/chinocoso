import { Instagram, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMedia() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-[#5dc0b3]/10">
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
            <Button className="bg-[#f3994d] hover:bg-[#f3994d]/90 flex items-center gap-2">
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
            <Button className="bg-[#f3994d] hover:bg-[#f3994d]/90 flex items-center gap-2">
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
            <Button className="bg-[#f3994d] hover:bg-[#f3994d]/90 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              TikTok
            </Button>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">¿Tienes alguna duda?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="h-6 w-6 text-[#5dc0b3]" />
              <div className="text-left">
                <p className="font-medium">Dirección</p>
                <p className="text-sm">Rodriguez Gallardo #807, San Felipe Etapa 1</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="h-6 w-6 text-[#5dc0b3]" />
              <div className="text-left">
                <p className="font-medium">Teléfono</p>
                <a 
                  href="https://wa.me/6145502199" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#5dc0b3] transition-colors"
                >
                  (614) 550 2199
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="h-6 w-6 text-[#5dc0b3]" />
              <div className="text-left">
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:clinikidscuu@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#5dc0b3] transition-colors"
                >
                  clinikidscuu@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

