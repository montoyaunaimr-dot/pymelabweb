import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de pymelabagency.com',
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

const cookies = [
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Distingue a los usuarios para generar datos estadísticos de uso del sitio.',
    type: 'Analítica',
    duration: '2 años',
  },
  {
    name: '_ga_*',
    provider: 'Google Analytics',
    purpose: 'Mantiene el estado de la sesión para Google Analytics 4.',
    type: 'Analítica',
    duration: '2 años',
  },
]

export default function CookiesPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light mb-6">
            <span className="w-6 h-px bg-[#C8A96E]" />
            Cookies
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-[#F0EDE8] leading-tight mb-4">
            Política de Cookies
          </h1>
          <p className="text-sm text-[#555]">Última actualización: mayo de 2025</p>
        </div>

        <div className="border-t border-[#1E1E1E] pt-10">

          <Section title="1. ¿Qué son las cookies?">
            <p>
              Las cookies son pequeños archivos de texto que los sitios web instalan en tu navegador o dispositivo cuando los visitas. Sirven para que el sitio web recuerde información sobre tu visita (idioma preferido, sesión iniciada, configuración, etc.), lo que facilita tu próxima visita y hace que el sitio te resulte más útil.
            </p>
          </Section>

          <Section title="2. Cookies que utilizamos">
            <p>
              Nuestro sitio web utiliza únicamente cookies de analítica de terceros para entender cómo los usuarios interactúan con el sitio. No utilizamos cookies publicitarias ni de seguimiento entre sitios.
            </p>

            {/* Cookie table */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="text-left py-3 pr-4 text-[#C8A96E] tracking-[0.1em] uppercase font-light">Cookie</th>
                    <th className="text-left py-3 pr-4 text-[#C8A96E] tracking-[0.1em] uppercase font-light">Proveedor</th>
                    <th className="text-left py-3 pr-4 text-[#C8A96E] tracking-[0.1em] uppercase font-light hidden md:table-cell">Finalidad</th>
                    <th className="text-left py-3 pr-4 text-[#C8A96E] tracking-[0.1em] uppercase font-light">Tipo</th>
                    <th className="text-left py-3 text-[#C8A96E] tracking-[0.1em] uppercase font-light">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c) => (
                    <tr key={c.name} className="border-b border-[#1A1A1A]">
                      <td className="py-3 pr-4 text-[#B0ADA8] font-mono">{c.name}</td>
                      <td className="py-3 pr-4 text-[#888]">{c.provider}</td>
                      <td className="py-3 pr-4 text-[#666] hidden md:table-cell">{c.purpose}</td>
                      <td className="py-3 pr-4 text-[#888]">{c.type}</td>
                      <td className="py-3 text-[#888]">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="3. Cookies de terceros: Google Analytics">
            <p>
              Utilizamos Google Analytics 4, un servicio de analítica web proporcionado por Google LLC. Google Analytics instala cookies en tu dispositivo para ayudarnos a analizar el uso que hacen los usuarios del sitio web. La información generada por la cookie (incluyendo tu dirección IP truncada) se transmite y almacena en los servidores de Google.
            </p>
            <p>
              Google utiliza esta información para evaluar el uso del sitio web, recopilar informes sobre la actividad del sitio y proporcionar otros servicios relacionados con el sitio web. Google no asocia tu dirección IP con ningún otro dato del que disponga.
            </p>
            <p>
              Puedes consultar la política de privacidad de Google en: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C8A96E] hover:text-[#E2C99A] underline-offset-2 underline">policies.google.com/privacy</a>
            </p>
          </Section>

          <Section title="4. Cómo gestionar o rechazar las cookies">
            <p>Puedes configurar tu navegador para rechazar, bloquear o eliminar las cookies. A continuación encontrarás las instrucciones para los navegadores más comunes:</p>
            <ul className="mt-3 space-y-2">
              {[
                { browser: 'Google Chrome',         url: 'https://support.google.com/chrome/answer/95647' },
                { browser: 'Mozilla Firefox',        url: 'https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences' },
                { browser: 'Safari',                 url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                { browser: 'Microsoft Edge',         url: 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
              ].map(({ browser, url }) => (
                <li key={browser} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] shrink-0" />
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200">
                    {browser}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Ten en cuenta que bloquear las cookies puede afectar a la funcionalidad del sitio web.
            </p>
            <p>
              También puedes desactivar específicamente el seguimiento de Google Analytics instalando el complemento oficial: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#C8A96E] hover:text-[#E2C99A] underline-offset-2 underline">Google Analytics Opt-out Add-on</a>.
            </p>
          </Section>

          <Section title="5. Actualizaciones de esta política">
            <p>
              Podemos actualizar la presente Política de Cookies para reflejar cambios en las cookies que utilizamos o por otros motivos operativos, legales o reglamentarios. Te recomendamos que revises esta página periódicamente para mantenerte informado sobre el uso de cookies.
            </p>
          </Section>

        </div>

        {/* Links */}
        <div className="mt-12 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <Link href="/" className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200">
            ← Volver al inicio
          </Link>
          <div className="flex gap-5">
            <Link href="/legal" className="text-xs text-[#555] hover:text-[#888] transition-colors duration-200">Aviso Legal</Link>
            <Link href="/privacidad" className="text-xs text-[#555] hover:text-[#888] transition-colors duration-200">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </main>
  )
}
