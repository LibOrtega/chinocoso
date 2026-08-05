function CherryIcon() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="#5dc0b3" fillOpacity="0.12" />
      <path
        d="M58 34c2 10 4 18 8 26"
        stroke="#6b8f4e"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M66 42c6-8 14-10 18-8"
        stroke="#6b8f4e"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="78" cy="36" rx="8" ry="4" fill="#7fb35f" transform="rotate(-25 78 36)" />
      <circle cx="52" cy="72" r="16" fill="#e15b5b" />
      <circle cx="58" cy="66" r="4" fill="#fff" opacity="0.25" />
      <circle cx="70" cy="78" r="14" fill="#d94a4a" />
      <circle cx="75" cy="72" r="3.5" fill="#fff" opacity="0.2" />
    </svg>
  )
}

function WalnutIcon() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="#f3994d" fillOpacity="0.14" />
      <ellipse cx="60" cy="64" rx="24" ry="20" fill="#c4a06a" />
      <ellipse cx="60" cy="64" rx="20" ry="16" fill="#d4b07a" />
      <path
        d="M60 48c0 10-6 16-6 32m0-32c0 10 6 16 6 32"
        stroke="#a8844f"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M48 58c4 2 8 2 12 0m0 12c4 2 8 2 12 0"
        stroke="#a8844f"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="52" cy="56" rx="3" ry="2" fill="#fff" opacity="0.2" />
    </svg>
  )
}

function ApricotIcon() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="#5dc0b3" fillOpacity="0.12" />
      <path
        d="M62 34c1 8 2 14 2 20"
        stroke="#6b8f4e"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="72" cy="38" rx="9" ry="4.5" fill="#7fb35f" transform="rotate(20 72 38)" />
      <ellipse cx="54" cy="68" rx="22" ry="24" fill="#f3a45c" />
      <ellipse cx="68" cy="68" rx="20" ry="22" fill="#f3994d" />
      <path
        d="M60 48c2 12 2 28 0 40"
        stroke="#e8873a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="50" cy="58" rx="5" ry="3" fill="#fff" opacity="0.22" />
    </svg>
  )
}

function EggIcon() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="#f3994d" fillOpacity="0.14" />
      <ellipse cx="60" cy="64" rx="22" ry="30" fill="#fff8e8" />
      <ellipse cx="60" cy="64" rx="18" ry="26" fill="#fffdf5" />
      <ellipse cx="52" cy="52" rx="5" ry="3" fill="#fff" opacity="0.45" />
      <path
        d="M48 78c4 4 20 4 24 0"
        stroke="#f0d9a8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="66" rx="8" ry="6" fill="#ffe08a" opacity="0.55" />
    </svg>
  )
}

const stages = [
  {
    day: "Primer día de vida",
    amount: "5 a 7 ml",
    sizeLabel: "Similar al de una cereza",
    accent: "#5dc0b3",
    accentSoft: "bg-[#5dc0b3]/10",
    border: "border-[#5dc0b3]/15",
    Icon: CherryIcon,
    note: "Durante este periodo, el bebé recibe calostro, un alimento rico en nutrientes y defensas. La pequeña cantidad que produce la madre en cada toma es suficiente para cubrir sus necesidades.",
  },
  {
    day: "A los 3 días de vida",
    amount: "22 a 27 ml",
    sizeLabel: "Similar al de una nuez",
    accent: "#f3994d",
    accentSoft: "bg-[#f3994d]/10",
    border: "border-[#f3994d]/20",
    Icon: WalnutIcon,
    note: "En esta etapa comienza la producción de leche de transición, aumentando gradualmente el volumen de leche para adaptarse al crecimiento y las necesidades del bebé.",
  },
  {
    day: "A los 7 días de vida",
    amount: "45 a 60 ml",
    sizeLabel: "Similar al de un chabacano",
    accent: "#5dc0b3",
    accentSoft: "bg-[#5dc0b3]/10",
    border: "border-[#5dc0b3]/15",
    Icon: ApricotIcon,
    note: "La producción de leche continúa incrementándose conforme el bebé demanda mayor cantidad de alimento.",
  },
  {
    day: "A los 28 días de vida",
    amount: "80 a 150 ml",
    sizeLabel: "Similar al de un huevo grande",
    accent: "#f3994d",
    accentSoft: "bg-[#f3994d]/10",
    border: "border-[#f3994d]/20",
    Icon: EggIcon,
    note: "A partir de esta etapa, la producción de leche madura se ajusta de forma natural a las necesidades individuales de cada bebé.",
  },
]

export default function LactanciaTamanoEstomago() {
  return (
    <section
      className="mt-20 md:mt-24 pt-16 md:pt-20 border-t border-[#5dc0b3]/15"
      aria-labelledby="tamano-estomago-title"
    >
      <div className="text-center mb-10 md:mb-12">
        <p
          className="font-semibold tracking-wider text-sm md:text-base uppercase mb-3"
          style={{ color: "#5dc0b3" }}
        >
          Crecimiento paso a paso
        </p>
        <h2
          id="tamano-estomago-title"
          className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Tamaño del estómago del recién nacido
        </h2>
        <div className="w-16 h-1 mx-auto rounded-full bg-[#5dc0b3] mb-6" />
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          El estómago de un recién nacido es muy pequeño y su capacidad aumenta
          rápidamente durante las primeras semanas de vida. Por ello, es normal
          que necesite alimentarse con frecuencia y en pequeñas cantidades.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-7">
        {stages.map((stage, index) => {
          const Icon = stage.Icon
          return (
            <article
              key={stage.day}
              className={`bg-white/80 rounded-2xl p-6 shadow-md border ${stage.border} hover:shadow-lg transition-shadow duration-300 flex flex-col`}
            >
              <div
                className="mb-3 animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Icon />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
                {stage.day}
              </h3>

              <div className="space-y-3 mb-5">
                <div className={`${stage.accentSoft} rounded-xl px-4 py-3`}>
                  <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: stage.accent }}>
                    Cantidad por toma
                  </p>
                  <p className="text-gray-800 font-semibold text-base">
                    {stage.amount}
                  </p>
                </div>
                <div className="rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
                  <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">
                    Tamaño del estómago
                  </p>
                  <p className="text-gray-800 font-medium text-sm md:text-base">
                    {stage.sizeLabel}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mt-auto">
                {stage.note}
              </p>
            </article>
          )
        })}
      </div>

      <div className="mt-10 md:mt-12 bg-gradient-to-br from-[#5dc0b3]/15 via-white to-[#f3994d]/10 rounded-2xl p-6 md:p-8 shadow-md border border-[#5dc0b3]/20">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Recomendaciones
        </h3>
        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          <p>
            Durante los primeros seis meses de vida se recomienda ofrecer{" "}
            <span className="font-medium text-gray-800">
              lactancia materna exclusiva y a libre demanda
            </span>
            , respondiendo a las señales de hambre del bebé. Posteriormente
            puede iniciarse la alimentación complementaria, manteniendo la
            lactancia materna hasta los dos años de edad o más, siempre que la
            madre y el bebé lo deseen.
          </p>
          <p>
            Recuerda que cada bebé tiene un ritmo diferente. Evita establecer
            horarios estrictos para alimentarlo y permite que sea él quien
            indique cuándo necesita comer mediante sus señales de hambre.
            Observarlo y responder oportunamente favorecerá un crecimiento
            saludable y una lactancia exitosa.
          </p>
        </div>
      </div>
    </section>
  )
}
