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

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Plan de Nutrición Personalizado
            </h1>
            <p className="text-xl text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo para crear
              el plan perfecto para tu pequeño
            </p>
          </div>

          {/* Mensaje de éxito */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="text-green-600 text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold text-green-800 text-lg">¡Formulario enviado exitosamente!</h3>
                  <p className="text-green-700">Te hemos enviado un email con tu plan de nutrición personalizado. Revisa tu bandeja de entrada y la carpeta de spam.</p>
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

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información de la madre */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Información de la Madre</h3>
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
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Información del Niño</h3>
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
              <div className="border-b pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Información Nutricional</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Información Adicional</h3>
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
                        <p className="text-sm text-gray-600">Te enviaremos un email completo con tu plan de nutrición personalizado y toda la información necesaria. Si no lo recibes, revisa tu carpeta de spam.</p>
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
