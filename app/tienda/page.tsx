import Header from "../components/header"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, CheckCircle, Gift } from "lucide-react"
import Link from "next/link"

export default function Tienda() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Clini Tienda
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Productos y servicios especializados para el cuidado y desarrollo de tus pequeños
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Plan de Nutrición */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <div className="h-48 md:h-full bg-gradient-to-br from-[#5dc0b3] to-[#f3994d] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🥗</div>
                    <h3 className="text-lg font-bold">Plan de Nutrición</h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-600 ml-2">(15 reseñas)</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Plan de Nutrición Personalizado
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm">
                  Un programa completo de nutrición diseñado específicamente para tu pequeño, 
                  con seguimiento profesional y resultados garantizados.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                    <span className="text-gray-700 text-sm">Evaluación nutricional completa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                    <span className="text-gray-700 text-sm">Plan alimenticio personalizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                    <span className="text-gray-700 text-sm">Seguimiento mensual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                    <span className="text-gray-700 text-sm">Recetas y menús semanales</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#5dc0b3]" />
                    <span className="text-xs text-gray-600">3 meses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#5dc0b3]" />
                    <span className="text-xs text-gray-600">Niños 0-12 años</span>
                  </div>
                </div>
                
                {/* Prueba Gratis */}
                <div className="bg-gradient-to-r from-[#5dc0b3]/10 to-[#f3994d]/10 p-3 rounded-lg mb-4 border border-[#5dc0b3]/20">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-[#5dc0b3]" />
                    <div>
                      <p className="font-semibold text-[#5dc0b3] text-sm">¡Prueba Gratis por 1 Semana!</p>
                      <p className="text-xs text-gray-600">Experimenta los beneficios antes de comprometerte</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/tienda/plan-nutricion">
                  <Button className="w-full bg-[#f3994d] hover:bg-[#f3994d]/90 text-white py-2 text-base">
                    ¡Quiero el Plan!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
