"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#5dc0b3]">
            Clinikids Cuu
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Conócenos
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Servicios
            </Link>
            <Link href="/#facilities" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Instalaciones
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Contacto
            </Link>
            <Link href="/tienda" className="text-gray-700 hover:text-[#5dc0b3] transition-colors">
              Tienda
            </Link>
          </nav>

          <div className="md:hidden">
            <Button variant="outline" size="sm">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

