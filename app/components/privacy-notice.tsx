"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const sections = [
  {
    id: "responsable",
    title: "I. Responsable del tratamiento de los datos personales",
    paragraphs: [
      "Grupo Onori Innovación en Salud, S.C., persona moral legalmente constituida conforme a las leyes mexicanas, con domicilio en Rodriguez Gallardo #807, San Felipe Etapa 1, Chihuahua, Chihuahua, México, es el Responsable del tratamiento de los datos personales y datos personales sensibles recabados durante la prestación de los servicios ofrecidos por Clinikids, respondiendo por su obtención, uso, almacenamiento, conservación, acceso, transferencia, protección y, en su caso, eliminación, en estricto apego a la legislación vigente.",
      "Para efectos del presente Aviso de Privacidad, toda referencia a Clinikids deberá entenderse como la unidad médica operada por Grupo Onori Innovación en Salud, S.C., quien asume las obligaciones legales derivadas del tratamiento de la información personal de sus pacientes, representantes legales, familiares, proveedores y demás titulares de datos personales.",
    ],
  },
  {
    id: "datos",
    title: "II. Datos personales que recabamos",
    paragraphs: [
      "Con motivo de la prestación de servicios médicos, preventivos, diagnósticos, terapéuticos, administrativos y de seguimiento clínico, podremos recabar datos personales de identificación, contacto, patrimoniales cuando resulten necesarios para procesos de facturación o aseguramiento, así como datos personales sensibles relacionados con el estado de salud del paciente.",
      "Entre otros, podremos recabar nombre completo, fecha de nacimiento, sexo, domicilio, teléfonos, correo electrónico, CURP, RFC cuando resulte procedente, datos de contacto de emergencia, antecedentes personales y familiares, antecedentes perinatales, alergias, medicamentos, esquemas de vacunación, exploraciones físicas, diagnósticos, tratamientos, estudios de laboratorio y gabinete, imágenes diagnósticas, certificados médicos, información contenida en el expediente clínico y cualquier otro dato indispensable para brindar una atención médica segura, ética y de calidad.",
      "Los datos personales sensibles serán tratados bajo los más altos estándares de confidencialidad y únicamente para las finalidades previstas en el presente Aviso.",
    ],
  },
  {
    id: "finalidades",
    title: "III. Finalidades del tratamiento",
    paragraphs: [
      "Los datos personales serán tratados para las finalidades necesarias que permiten la adecuada prestación de los servicios de salud, entre las cuales se encuentran la identificación del paciente, integración y conservación del expediente clínico, diagnóstico, tratamiento, seguimiento médico, programación y confirmación de citas, referencia e interconsulta con otros profesionales de la salud, prestación de servicios de telemedicina, emisión de certificados médicos, cumplimiento de obligaciones sanitarias, administrativas, fiscales y regulatorias, así como la atención de requerimientos formulados por autoridades competentes.",
      "De manera adicional, y siempre que el titular no manifieste su oposición, los datos podrán ser utilizados para enviar recordatorios de citas, campañas preventivas, programas de vacunación, información relacionada con los servicios de salud que ofrece Clinikids, encuestas de satisfacción y actividades académicas o estadísticas utilizando información previamente anonimizada cuando ello resulte posible.",
    ],
  },
  {
    id: "transferencia",
    title: "IV. Transferencia de datos personales",
    paragraphs: [
      "Los datos personales únicamente serán transferidos cuando resulte indispensable para cumplir con las finalidades descritas en el presente Aviso de Privacidad, incluyendo la referencia a médicos especialistas, hospitales, laboratorios clínicos, gabinetes de diagnóstico, compañías aseguradoras, instituciones de salud y autoridades administrativas o judiciales que legalmente lo requieran.",
      "Toda transferencia de información se realizará observando los principios de licitud, finalidad, proporcionalidad, confidencialidad y seguridad previstos por la legislación mexicana.",
      "En ningún caso Grupo Onori Innovación en Salud, S.C. comercializa, vende o cede datos personales con fines distintos a los autorizados por el titular o previstos por la ley.",
    ],
  },
  {
    id: "seguridad",
    title: "V. Seguridad de la información",
    paragraphs: [
      "Grupo Onori Innovación en Salud, S.C. implementa medidas administrativas, físicas y técnicas orientadas a preservar la confidencialidad, integridad, disponibilidad y seguridad de los datos personales bajo su responsabilidad.",
      "Para la administración del expediente clínico electrónico, Clinikids utiliza la plataforma tecnológica Nimbo, la cual opera sobre infraestructura especializada en la nube con mecanismos de protección que incluyen comunicación cifrada mediante protocolos SSL/TLS, autenticación segura, control de acceso basado en roles, respaldos automáticos, redundancia geográfica, monitoreo continuo, sistemas de detección y prevención de intrusiones, firewalls y demás mecanismos de seguridad informática.",
      "La infraestructura tecnológica utilizada por dicho proveedor opera mediante servicios que cumplen con estándares internacionales de seguridad, incluyendo certificaciones como ISO 27001, SOC 1, SOC 2, PCI DSS Nivel 1 y otros controles ampliamente reconocidos en la industria, fortaleciendo la protección de la información clínica administrada por Clinikids.",
      "Adicionalmente, Grupo Onori Innovación en Salud, S.C. implementa controles internos de acceso, convenios de confidencialidad con el personal autorizado, capacitación continua en materia de protección de datos personales, políticas institucionales de seguridad de la información y procedimientos de respuesta ante incidentes.",
    ],
  },
  {
    id: "conservacion",
    title: "VI. Conservación de la información",
    paragraphs: [
      "Los datos personales y expedientes clínicos serán conservados durante los plazos establecidos por la legislación sanitaria y demás disposiciones legales aplicables. Una vez concluido dicho periodo, la información será bloqueada y posteriormente eliminada mediante procedimientos seguros que garanticen la protección de la información.",
    ],
  },
  {
    id: "arco",
    title: "VII. Derechos ARCO",
    paragraphs: [
      "El titular de los datos personales o su representante legal podrá ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición, así como solicitar la revocación del consentimiento otorgado o limitar el uso y divulgación de sus datos personales, en los términos previstos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
      "Las solicitudes correspondientes deberán presentarse por escrito o mediante correo electrónico dirigido a hola@clinikidscuu.com, acompañando la documentación que permita acreditar la identidad del solicitante o la representación legal correspondiente.",
      "Grupo Onori Innovación en Salud, S.C. atenderá dichas solicitudes dentro de los plazos y conforme al procedimiento establecido por la legislación aplicable.",
    ],
  },
  {
    id: "cambios",
    title: "VIII. Cambios al presente Aviso de Privacidad",
    paragraphs: [
      "Grupo Onori Innovación en Salud, S.C. se reserva el derecho de modificar, actualizar o complementar el presente Aviso de Privacidad cuando resulte necesario por cambios legislativos, regulatorios, tecnológicos o derivados de la mejora continua de sus procesos.",
      "Las modificaciones serán publicadas oportunamente en los medios oficiales de comunicación de Clinikids y estarán disponibles para consulta de los titulares.",
    ],
  },
  {
    id: "contacto",
    title: "IX. Contacto",
    paragraphs: [
      "Para cualquier duda relacionada con el tratamiento de sus datos personales, el ejercicio de sus derechos o la interpretación del presente Aviso de Privacidad, podrá comunicarse con el Responsable de Protección de Datos Personales de Grupo Onori Innovación en Salud, S.C., a través de los siguientes medios:",
    ],
    contact: {
      company: "Grupo Onori Innovación en Salud, S.C.",
      unit: "Unidad Médica: Clinikids",
      address:
        "Rodriguez Gallardo #807, San Felipe Etapa 1, Chihuahua, Chihuahua, México.",
      email: "hola@clinikidscuu.com",
      phone: "614 550 2199",
    },
  },
]

export default function PrivacyNotice() {
  return (
    <section
      id="privacy"
      className="py-20 md:py-24 bg-gradient-to-b from-white via-[#5dc0b3]/5 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <p
            className="font-semibold tracking-wider text-sm md:text-base uppercase mb-3"
            style={{ color: "#5dc0b3" }}
          >
            Información legal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Aviso de Privacidad Integral
          </h2>
          <div className="w-16 h-1 mx-auto mb-6 rounded-full bg-[#5dc0b3]" />
          <p className="text-gray-600 leading-relaxed text-base md:text-lg text-left md:text-center">
            En cumplimiento con lo dispuesto por los artículos 15, 16 y demás
            relativos de la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares, su Reglamento, los Lineamientos del
            Aviso de Privacidad emitidos por la Secretaría de Economía, la Norma
            Oficial Mexicana NOM-004-SSA3-2012, Del Expediente Clínico, así como
            demás disposiciones legales aplicables,{" "}
            <span className="font-medium text-gray-800">
              Grupo Onori Innovación en Salud, S.C.
            </span>
            , en su carácter de responsable del tratamiento de los datos
            personales recabados a través de su unidad médica Clinikids, pone a
            disposición del público el presente Aviso de Privacidad Integral.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {sections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-[#5dc0b3]/20 rounded-xl px-5 md:px-6 bg-white/80 data-[state=open]:border-[#5dc0b3]/40 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline hover:text-[#5dc0b3] py-5 text-base md:text-[1.05rem] font-semibold [&[data-state=open]]:text-[#5dc0b3]">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-[0.95rem] md:text-base space-y-4 pb-6">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {section.contact && (
                    <div className="mt-2 pt-4 border-t border-[#5dc0b3]/15 space-y-1.5">
                      <p className="font-semibold text-gray-900">
                        {section.contact.company}
                      </p>
                      <p>{section.contact.unit}</p>
                      <p>{section.contact.address}</p>
                      <p>
                        Correo electrónico:{" "}
                        <a
                          href={`mailto:${section.contact.email}`}
                          className="text-[#5dc0b3] hover:text-[#4aa99c] font-medium transition-colors"
                        >
                          {section.contact.email}
                        </a>
                      </p>
                      <p>
                        Teléfono:{" "}
                        <a
                          href="https://wa.me/526145502199"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5dc0b3] hover:text-[#4aa99c] font-medium transition-colors"
                        >
                          {section.contact.phone}
                        </a>
                      </p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
