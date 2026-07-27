"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-[#5dc0b3]">
            Clinikids Cuu
          </Link>
          
          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Conócenos
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Servicios
            </Link>
            <Link href="/#facilities" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Instalaciones
            </Link>
            <Link href="/#privacy" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Privacidad
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Contacto
            </Link>
            <Link href="/tienda" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Tienda
            </Link>
          </nav>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={toggleMenu}
              className="border-[#5dc0b3] text-[#5dc0b3] hover:bg-[#5dc0b3] hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-0">
              <Link 
                href="/#about" 
                className="px-4 py-3 text-gray-700 hover:text-[#5dc0b3] hover:bg-gray-50 transition-colors border-b border-gray-100"
                onClick={closeMenu}
              >
                Conócenos
              </Link>
              <Link 
                href="/#services" 
                className="px-4 py-3 text-gray-700 hover:text-[#5dc0b3] hover:bg-gray-50 transition-colors border-b border-gray-100"
                onClick={closeMenu}
              >
                Servicios
              </Link>
              <Link 
                href="/#facilities" 
                className="px-4 py-3 text-gray-700 hover:text-[#5dc0b3] hover:bg-gray-50 transition-colors border-b border-gray-100"
                onClick={closeMenu}
              >
                Instalaciones
              </Link>
              <Link 
                href="/#privacy" 
                className="px-4 py-3 text-gray-700 hover:text-[#5dc0b3] hover:bg-gray-50 transition-colors border-b border-gray-100"
                onClick={closeMenu}
              >
                Privacidad
              </Link>
              <Link 
                href="/#contact" 
                className="px-4 py-3 text-gray-700 hover:text-[#5dc0b3] hover:bg-gray-50 transition-colors border-b border-gray-100"
                onClick={closeMenu}
              >
                Contacto
              </Link>
              <Link 
                href="/tienda" 
                className="px-4 py-3 text-gray-700 hover:text-[#5dc0b3] hover:bg-gray-50 transition-colors border-b border-gray-100"
                onClick={closeMenu}
              >
                Tienda
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

