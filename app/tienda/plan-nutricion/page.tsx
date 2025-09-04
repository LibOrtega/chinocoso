"use client"

import Header from "../../components/header"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PlanNutricion() {
  const [formData, setFormData] = useState({
    // Información de la madre
    nombreMadre: '',
    telefonoMadre: '',
    emailMadre: '',
    edadMadre: '',
    
    // Información del niño
    nombreNino: '',
    edadNino: '',
    pesoNino: '',
    alturaNino: '',
    
    // Información nutricional
    alergias: '',
    alimentosGustan: '',
    alimentosRechazan: '',
    objetivo: '',
    
    // Información adicional
    condicionesMedicas: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/planes-nutricion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Limpiar el formulario
        setFormData({
          nombreMadre: '',
          telefonoMadre: '',
          emailMadre: '',
          edadMadre: '',
          nombreNino: '',
          edadNino: '',
          pesoNino: '',
          alturaNino: '',
          alergias: '',
          alimentosGustan: '',
          alimentosRechazan: '',
          objetivo: '',
          condicionesMedicas: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Prueba gratuita: Plan de alimentación
            </h1>
            <p className="text-lg md:text-xl text-gray-600 px-2">
              Completa el formulario para recibir una semana de prueba de un plan de alimentación
              para tu pequeño.
            </p>
          </div>

          {/* Mensaje de éxito */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="text-green-600 text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold text-green-800 text-lg">¡Formulario enviado exitosamente!</h3>
                  <p className="text-green-700">Te enviamos por email tu semana de prueba de un plan de alimentación. Revisa tu bandeja de entrada y la carpeta de spam.</p>
                </div>
              </div>
            </div>
          )}

          {/* Mensaje de error */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="text-red-600 text-2xl">❌</div>
                <div>
                  <h3 className="font-semibold text-red-800 text-lg">Error al enviar el formulario</h3>
                  <p className="text-red-700">Hubo un problema al enviar tu información. Por favor, intenta nuevamente.</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-4 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Información de la madre */}
              <div className="border-b pb-4 md:pb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Información de la Madre</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombreMadre"
                      value={formData.nombreMadre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefonoMadre"
                      value={formData.telefonoMadre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="(614) 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="emailMadre"
                      value={formData.emailMadre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Edad de la madre
                    </label>
                    <input
                      type="number"
                      name="edadMadre"
                      value={formData.edadMadre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="25"
                    />
                  </div>
                </div>
              </div>

              {/* Información del niño */}
              <div className="border-b pb-4 md:pb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Información del Niño</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre del niño *
                    </label>
                    <input
                      type="text"
                      name="nombreNino"
                      value={formData.nombreNino}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="Nombre del pequeño"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Edad del niño *
                    </label>
                    <input
                      type="number"
                      name="edadNino"
                      value={formData.edadNino}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Peso actual (kg)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="pesoNino"
                      value={formData.pesoNino}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="20.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Altura (cm)
                    </label>
                    <input
                      type="number"
                      name="alturaNino"
                      value={formData.alturaNino}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                      placeholder="110"
                    />
                  </div>
                </div>
              </div>

              {/* Información nutricional */}
              <div className="border-b pb-4 md:pb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Información Nutricional</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Tu hijo tiene alguna alergia alimentaria?
                    </label>
                                         <textarea
                       name="alergias"
                       value={formData.alergias}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                       rows={2}
                       placeholder="Describe las alergias o escribe 'Ninguna' si no las hay"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Qué alimentos le gustan más a tu hijo?
                    </label>
                                         <textarea
                       name="alimentosGustan"
                       value={formData.alimentosGustan}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                       rows={2}
                       placeholder="Ej: frutas, verduras, pollo, etc."
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Qué alimentos rechaza tu hijo?
                    </label>
                                         <textarea
                       name="alimentosRechazan"
                       value={formData.alimentosRechazan}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                       rows={2}
                       placeholder="Ej: brócoli, pescado, etc."
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Cuál es tu principal objetivo con este plan?
                    </label>
                    <select 
                      name="objetivo"
                      value={formData.objetivo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="ganar-peso">Ganar peso</option>
                      <option value="perder-peso">Perder peso</option>
                      <option value="mejorar-habitos">Mejorar hábitos alimenticios</option>
                      <option value="tratar-alergias">Tratar alergias alimentarias</option>
                      <option value="desarrollo">Mejorar desarrollo y crecimiento</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="pb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Información Adicional</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Tu hijo tiene alguna condición médica que debamos conocer?
                    </label>
                                         <textarea
                       name="condicionesMedicas"
                       value={formData.condicionesMedicas}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5dc0b3] focus:border-transparent"
                       rows={2}
                       placeholder="Describe cualquier condición médica o escribe 'Ninguna'"
                     />
                  </div>
                  <div className="bg-[#5dc0b3]/10 p-4 rounded-lg border border-[#5dc0b3]/20">
                    <div className="flex items-center gap-3">
                      <svg className="h-6 w-6 text-[#5dc0b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-[#5dc0b3]">¡Recibirás tu plan por correo!</p>
                        <p className="text-sm text-gray-600">Te enviaremos por email una semana de prueba de un plan de alimentación. Si no lo recibes, revisa tu carpeta de spam.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de envío */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#f3994d] hover:bg-[#f3994d]/90 text-white py-4 px-8 text-lg rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Formulario'}
                </Button>
                
                {/* Botón de WhatsApp */}
                <div className="mt-6 md:mt-8 text-center">
                  <a
                    href="https://wa.me/6145502199?text=¡Hola! Me interesa unirme al grupo de WhatsApp de Clinikids Cuu para recibir más consejos de nutrición y salud para mi pequeño. 🥗👶"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-3 md:px-4 text-xs md:text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Únete a nuestro Grupo de WhatsApp
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Recibe consejos diarios, recetas y apoyo de nuestra comunidad
                  </p>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  * Campos obligatorios.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
