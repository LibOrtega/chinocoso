import type { Metadata } from "next"
// import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

// const notoSerif = Noto_Serif_JP({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   display: "swap",
// })

// const notoSans = Noto_Sans_JP({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   display: "swap",
// })

export const metadata: Metadata = {
  title: "Clinikids Cuu Pediatría Integral - Cuidado y salud para tus hijos en Chihuahua",
  description:
    "Clinikids Cuu ofrece atención pediátrica integral, servicios médicos especializados y un ambiente amigable para niños y familias en Chihuahua. Agenda tu cita y conoce nuestras instalaciones.",
  openGraph: {
    title: "Clinikids Cuu Pediatría Integral - Cuidado y salud para tus hijos en Chihuahua",
    description: "Clinikids Cuu ofrece atención pediátrica integral, servicios médicos especializados y un ambiente amigable para niños y familias en Chihuahua. Agenda tu cita y conoce nuestras instalaciones.",
    url: "https://clinikidscuu.com",
    siteName: "Clinikids Cuu",
    images: [
      {
        url: "/images/opengraph.png", // Asegúrate de agregar esta imagen en tu carpeta public
        width: 1200,
        height: 630,
        alt: "Clinikids Cuu - Pediatría Integral",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinikids Cuu Pediatría Integral",
    description: "Clinikids Cuu ofrece atención pediátrica integral, servicios médicos especializados y un ambiente amigable para niños y familias en Chihuahua.",
    images: ["/images/opengraph.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="">
      <body className="font-sans">{children}</body>
    </html>
  )
}

