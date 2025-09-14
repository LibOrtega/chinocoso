"use client"

import Header from "../components/header"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, CheckCircle, Gift, ShoppingCart, Plus, Minus, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Datos de productos
const products = [
  {
    id: 1,
    name: "Eucerin Baby Eczema Relief 5oz",
    price: 299,
    description: "Crema especializada para bebés con piel sensible o eczema. Alivia comezón y resequedad. Respaldo dermatológico.",
    category: "Cuidado de la piel",
    image: "/images/eucerin-baby.jpg.jpg"
  },
  {
    id: 2,
    name: "Lanolina Medela 37g",
    price: 259,
    description: "Crema segura para pezones agrietados durante la lactancia. No requiere enjuague antes de amamantar.",
    category: "Lactancia",
    image: "/images/lanolina-medela.jpg.jpg"
  },
  {
    id: 3,
    name: "Inf Teether (mordedera)",
    price: 95,
    description: "Mordedera BPA free. Alivia encías en la dentición. Segura, práctica y económica.",
    category: "Dentición",
    image: "/images/inf-teether.jpg.jpg"
  },
  {
    id: 4,
    name: "Aquaphor (chico)",
    price: 350,
    description: "Ungüento para resequedad o irritación. Presentación pequeña, práctica para bolso o pañalera.",
    category: "Cuidado de la piel",
    image: "/images/aquaphor-chico.jpg.jpg"
  },
  {
    id: 5,
    name: "Aquaphor (grande)",
    price: 529,
    description: "Ungüento para resequedad intensa. Presentación grande, ideal para casa.",
    category: "Cuidado de la piel",
    image: "/images/aquaphor-grande.jpg.jpg"
  },
  {
    id: 6,
    name: "Aspirador nasal",
    price: 569,
    description: "Dispositivo higiénico para remover secreciones nasales. Ayuda a respirar mejor durante resfriados.",
    category: "Salud",
    image: "/images/aspirador-nasal.jpg.jpg"
  },
  {
    id: 7,
    name: "Nuby Feeder",
    price: 125,
    description: "Alimentador de silicón para fruta y papillas. Permite introducir alimentos sólidos de manera segura.",
    category: "Alimentación",
    image: "/images/nuby-feeder.jpg.jpg"
  },
  {
    id: 8,
    name: "Vicks Termómetro",
    price: 279,
    description: "Termómetro rápido y confiable. Fácil de usar en casa para toda la familia.",
    category: "Salud",
    image: "/images/termometro-vicks.jpg.jpg"
  },
  {
    id: 9,
    name: "OFF Kids Spray",
    price: 239,
    description: "Repelente suave contra mosquitos para niños. Fórmula especial que protege sin irritar.",
    category: "Protección",
    image: "/images/off-kids.jpg.jpg"
  },
  {
    id: 10,
    name: "Avent (Set biberones)",
    price: 999,
    description: "Kit completo de biberones anticólicos. Incluye varias tallas de tetina. Marca reconocida.",
    category: "Alimentación",
    image: "/images/avent-set.jpg.jpg"
  },
  {
    id: 11,
    name: "Dr. Brown (kit anticólicos)",
    price: 599,
    description: "Biberones diseñados para reducir cólicos y gases. Recomendados para bebés con reflujo.",
    category: "Alimentación",
    image: "/images/dr-brown-kit.jpg.jpg"
  },
  {
    id: 12,
    name: "Dr. Brown Natural Flow Anticólicos",
    price: 579,
    description: "Biberón individual anticólico. Flujo natural que reduce burbujas de aire y malestar.",
    category: "Alimentación",
    image: "/images/dr-brown-natural.jpg.jpg"
  },
  {
    id: 13,
    name: "Jabón Dove Baby 399ml",
    price: 249,
    description: "Jabón líquido hipoalergénico. Limpieza suave para la piel del bebé. Uso diario, pH neutro.",
    category: "Higiene",
    image: "/images/dove-baby.jpg.jpg"
  }
]

// Agrupar productos por categoría
const productsByCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = []
  }
  acc[product.category].push(product)
  return acc
}, {} as Record<string, typeof products>)

export default function Tienda() {
  const [cart, setCart] = useState<Array<{product: typeof products[0], quantity: number}>>([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev => prev.map(item => 
      item.product.id === productId 
        ? { ...item, quantity }
        : item
    ))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return ""
    
    let message = "¡Hola! Me interesa comprar los siguientes productos de CliniKids:\n\n"
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`
      message += `   Cantidad: ${item.quantity}\n`
      message += `   Precio unitario: $${item.product.price}\n`
      message += `   Subtotal: $${item.product.price * item.quantity}\n\n`
    })
    
    message += `💰 TOTAL: $${getTotalPrice()}\n\n`
    message += "¿Podrían ayudarme con la compra? ¡Gracias! 😊"
    
    return message
  }

  const handleCheckout = () => {
    console.log('Botón de checkout clickeado')
    const message = generateWhatsAppMessage()
    console.log('Mensaje generado:', message)
    const whatsappUrl = `https://wa.me/526145502199?text=${encodeURIComponent(message)}`
    console.log('URL de WhatsApp:', whatsappUrl)
    window.open(whatsappUrl, '_blank')
  }

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

        {/* Botón del carrito */}
        <div className="fixed top-20 right-4 z-50">
          <Button 
            onClick={() => setShowCart(!showCart)}
            className="bg-[#5dc0b3] hover:bg-[#5dc0b3]/90 text-white rounded-full p-3 shadow-lg"
          >
            <ShoppingCart className="h-6 w-6" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>

        {/* Carrito lateral */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowCart(false)}>
            <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Carrito</h2>
                  <Button 
                    onClick={() => setShowCart(false)}
                    variant="ghost"
                    size="sm"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Tu carrito está vacío</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <div key={item.product.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name}
                            className="h-12 w-12 object-contain rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-sm">{item.product.name}</h3>
                            <p className="text-gray-600 text-sm">${item.product.price}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">Total:</span>
                        <span className="text-lg font-bold text-[#5dc0b3]">${getTotalPrice()}</span>
                      </div>
                      
                      {/* Disclaimer */}
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-xs text-gray-600 text-center">
                          📍 <strong>Entrega:</strong> Los productos se entregarán en sucursal<br/>
                          <span className="font-medium">Blas Cano de los Ríos 807, San Felipe I, Chihuahua, Chih.</span>
                        </p>
                      </div>
                      
                      <Button 
                        onClick={handleCheckout}
                        className="w-full bg-[#5dc0b3] hover:bg-[#5dc0b3]/90 text-white"
                      >
                        Proceder al pago
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Todos los productos en cuadrícula uniforme */}
        <div className="max-w-6xl mx-auto">
          {/* Plan de Nutrición - Servicios */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#5dc0b3] to-[#f3994d] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🥗</div>
                    <h3 className="text-lg font-bold">Plan de alimentación</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-600 ml-2">(15 reseñas)</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Plan de alimentación
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Programa de nutrición para tu pequeño, con acompañamiento profesional y recursos prácticos.
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                      <span className="text-gray-700 text-sm">Lista de supermercado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                      <span className="text-gray-700 text-sm">Menú semanal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                      <span className="text-gray-700 text-sm">Seguimiento por expertos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#5dc0b3]" />
                      <span className="text-gray-700 text-sm">Recetas prácticas</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#5dc0b3]" />
                      <span className="text-xs text-gray-600">Una semana</span>
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
                        <p className="font-semibold text-[#5dc0b3] text-sm">¡Prueba Gratis!</p>
                        <p className="text-xs text-gray-600">Versión piloto</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/tienda/plan-nutricion">
                    <Button className="w-full bg-[#f3994d] hover:bg-[#f3994d]/90 text-white">
                      Prueba gratuita
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Productos por categoría */}
          {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-[#5dc0b3]/20 to-[#f3994d]/20 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[#5dc0b3]">${product.price}</span>
                      </div>
                      <Button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-[#5dc0b3] hover:bg-[#5dc0b3]/90 text-white"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar al carrito
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
