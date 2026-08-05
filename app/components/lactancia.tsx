import Link from "next/link"
import { Button } from "@/components/ui/button"
import LactanciaSenalesHambre from "./lactancia-senales-hambre"
import LactanciaTecnica from "./lactancia-tecnica"

export default function Lactancia() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-[#5dc0b3]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <p
              className="font-semibold tracking-wider text-sm md:text-base uppercase mb-3"
              style={{ color: "#5dc0b3" }}
            >
              Acompañamiento familiar
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">
              Lactancia en Clinikids
            </h1>
            <div className="w-16 h-1 mx-auto rounded-full bg-[#5dc0b3]" />
          </div>

          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              En Clinikids CUU pediatría integral nos interesa que las futuras
              mamás y sus familias se preparen de forma integral para recibir a
              bebé en las mejores condiciones posibles: desde antes del
              embarazo, en el embarazo y después del nacimiento.
            </p>

            <p>
              Uno de los temas que más preocupa a mamá y papá es{" "}
              <span className="font-medium text-gray-800">
                ¿cómo se alimentará al nuevo bebé?
              </span>
            </p>

            <p>
              Debes saber que la alimentación óptima es la{" "}
              <span className="font-medium text-gray-800">leche materna</span>.
              Esta práctica permite mejorar las condiciones de vida de los
              peques a lo largo de su vida: infancia, juventud y vida adulta.
            </p>

            <p>
              Por ello, ponemos a tu disposición este espacio para que consultes
              materiales relacionados con la Lactancia Materna y nos dejes
              conocer tus dudas y comentarios. Estaremos felices de ayudarte.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <LactanciaSenalesHambre />
          <LactanciaTecnica />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mt-12 pt-10 border-t border-[#5dc0b3]/20 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/526145502199?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20lactancia%20materna%20en%20Clinikids."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-[#5dc0b3] hover:bg-[#5dc0b3]/90 text-white px-8">
                Resolver mis dudas
              </Button>
            </a>
            <Link href="/#contact">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-[#5dc0b3] text-[#5dc0b3] hover:bg-[#5dc0b3] hover:text-white px-8"
              >
                Contacto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
