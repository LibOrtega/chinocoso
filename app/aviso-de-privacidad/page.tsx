import Header from "../components/header"
import PrivacyNotice from "../components/privacy-notice"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Clinikids Cuu",
  description:
    "Aviso de Privacidad Integral de Grupo Onori Innovación en Salud, S.C. y su unidad médica Clinikids.",
}

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#5dc0b3]/10">
      <Header />
      <main>
        <PrivacyNotice />
      </main>
    </div>
  )
}
