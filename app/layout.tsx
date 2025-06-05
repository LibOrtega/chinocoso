import type { Metadata } from "next"
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Clinikids Cuu Pediatría Integral - Cuidado y salud para tus hijos en Chihuahua",
  description:
    "Clinikids Cuu ofrece atención pediátrica integral, servicios médicos especializados y un ambiente amigable para niños y familias en Chihuahua. Agenda tu cita y conoce nuestras instalaciones.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

