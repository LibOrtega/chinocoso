import Header from "../components/header"
import Lactancia from "../components/lactancia"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lactancia en Clinikids | Clinikids Cuu",
  description:
    "Espacio de Clinikids CUU para acompañar a mamás y familias en lactancia materna, antes, durante y después del nacimiento.",
}

export default function LactanciaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <Header />
      <main>
        <Lactancia />
      </main>
    </div>
  )
}
