import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal e información del titular de pymelabagency.com',
  robots: { index: false, follow: false },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xs tracking-[0.2em] uppercase text-[#C8A96E] mb-4 font-light">{title}</h2>
      <div className="space-y-3 text-sm text-[#888] leading-relaxed font-light">
        {children}
      </div>
    </div>
  )
}

export default function AvisoLegalPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light mb-6">
            <span className="w-6 h-px bg-[#C8A96E]" />
            Información legal
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-[#F0EDE8] leading-tight mb-4">
            Aviso Legal
          </h1>
          <p className="text-sm text-[#555]">Última actualización: mayo de 2025</p>
        </div>

        <div className="border-t border-[#1E1E1E] pt-10">

          <Section title="1. Datos identificativos del titular">
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición del usuario los siguientes datos identificativos del titular:
            </p>
            <ul className="space-y-1.5 mt-3 pl-4 border-l border-[#2A2A2A]">
              <li><span className="text-[#B0ADA8]">Titular:</span> Unai (PymeLab Agency)</li>
              <li><span className="text-[#B0ADA8]">Domicilio:</span> Barcelona, España</li>
              <li><span className="text-[#B0ADA8]">Correo electrónico:</span> contacto@pymelabagency.com</li>
              <li><span className="text-[#B0ADA8]">Teléfono:</span> +34 618 805 348</li>
              <li><span className="text-[#B0ADA8]">Sitio web:</span> pymelabagency.com</li>
            </ul>
          </Section>

          <Section title="2. Objeto y ámbito de aplicación">
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web <strong className="text-[#B0ADA8]">pymelabagency.com</strong> (en adelante, «el Sitio Web»), titularidad de PymeLab Agency, cuya actividad consiste en el diseño, desarrollo y mantenimiento de páginas web para pequeñas y medianas empresas.
            </p>
            <p>
              El acceso y uso del Sitio Web implica la aceptación plena y sin reservas de todas las condiciones incluidas en el presente Aviso Legal. Si el usuario no está de acuerdo con las condiciones indicadas, deberá abstenerse de acceder y/o utilizar el Sitio Web.
            </p>
          </Section>

          <Section title="3. Condiciones de uso">
            <p>
              El usuario se compromete a hacer un uso adecuado y lícito del Sitio Web, de conformidad con la legislación aplicable, el presente Aviso Legal y las buenas costumbres. Quedan expresamente prohibidas las siguientes conductas:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Utilizar el Sitio Web con fines ilícitos o contrarios al orden público.</li>
              <li>Reproducir, distribuir o modificar cualquier contenido del Sitio Web sin autorización previa y por escrito.</li>
              <li>Realizar acciones que puedan dañar, inutilizar o sobrecargar el Sitio Web o su infraestructura técnica.</li>
              <li>Introducir virus, troyanos u otros elementos perjudiciales.</li>
            </ul>
          </Section>

          <Section title="4. Propiedad intelectual e industrial">
            <p>
              Todos los contenidos del Sitio Web (textos, imágenes, diseños, logotipos, código fuente, estructura y cualquier otro elemento) son propiedad de PymeLab Agency o de sus legítimos titulares, y están protegidos por la legislación española e internacional en materia de propiedad intelectual e industrial.
            </p>
            <p>
              Queda expresamente prohibida la reproducción total o parcial de los contenidos del Sitio Web sin autorización previa, expresa y por escrito del titular. El uso no autorizado de dichos contenidos puede constituir una infracción de los derechos de propiedad intelectual o industrial.
            </p>
          </Section>

          <Section title="5. Limitación de responsabilidad">
            <p>
              PymeLab Agency no se responsabiliza de los daños o perjuicios que puedan derivarse del acceso o uso del Sitio Web, ni de la imposibilidad de acceso o de fallos en las comunicaciones, incluyendo posibles interrupciones del servicio por razones técnicas ajenas a nuestra voluntad.
            </p>
            <p>
              El Sitio Web puede contener enlaces a páginas web de terceros. PymeLab Agency no controla ni asume responsabilidad alguna sobre los contenidos de dichas páginas externas.
            </p>
          </Section>

          <Section title="6. Política de enlaces">
            <p>
              La inclusión de un enlace al Sitio Web en una página de terceros no implica relación comercial o de colaboración entre PymeLab Agency y el titular de dicha página. PymeLab Agency no asume responsabilidad sobre los contenidos, políticas de privacidad o prácticas de sitios de terceros enlazados.
            </p>
          </Section>

          <Section title="7. Modificaciones">
            <p>
              PymeLab Agency se reserva el derecho de modificar en cualquier momento el presente Aviso Legal, las condiciones de uso y la información contenida en el Sitio Web. Los cambios entrarán en vigor desde su publicación en el Sitio Web.
            </p>
          </Section>

          <Section title="8. Legislación aplicable y jurisdicción">
            <p>
              El presente Aviso Legal se rige por la legislación española vigente. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, las partes se someten a los juzgados y tribunales de la ciudad de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </Section>

        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[#1E1E1E]">
          <Link href="/" className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200">
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </main>
  )
}
