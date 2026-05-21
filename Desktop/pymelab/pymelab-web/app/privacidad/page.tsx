import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de pymelabagency.com',
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

function Right({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] mt-1.5 shrink-0" />
      <div>
        <span className="text-[#B0ADA8] font-medium">{title}: </span>
        <span>{desc}</span>
      </div>
    </div>
  )
}

export default function PrivacidadPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light mb-6">
            <span className="w-6 h-px bg-[#C8A96E]" />
            Protección de datos
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-[#F0EDE8] leading-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-sm text-[#555]">Última actualización: mayo de 2025</p>
        </div>

        <div className="border-t border-[#1E1E1E] pt-10">

          <Section title="1. Responsable del tratamiento">
            <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD), te informamos de que el responsable del tratamiento de tus datos es:</p>
            <ul className="space-y-1.5 mt-3 pl-4 border-l border-[#2A2A2A]">
              <li><span className="text-[#B0ADA8]">Responsable:</span> Unai (PymeLab Agency)</li>
              <li><span className="text-[#B0ADA8]">Domicilio:</span> Barcelona, España</li>
              <li><span className="text-[#B0ADA8]">Email:</span> contacto@pymelabagency.com</li>
              <li><span className="text-[#B0ADA8]">Teléfono:</span> +34 618 805 348</li>
            </ul>
          </Section>

          <Section title="2. Datos que recabamos y finalidad">
            <p>En función de la forma en que interactúes con nuestro Sitio Web, podemos tratar los siguientes datos personales:</p>

            <div className="mt-4 space-y-4">
              <div className="bg-[#111] border border-[#1E1E1E] p-5 rounded-sm">
                <p className="text-[#B0ADA8] font-medium mb-2">Formulario de contacto y presupuesto</p>
                <p>Recabamos nombre, correo electrónico, teléfono (opcional), empresa y el contenido del mensaje. La finalidad es responder a tu consulta o solicitud de presupuesto y mantener comunicaciones relacionadas con nuestros servicios.</p>
              </div>

              <div className="bg-[#111] border border-[#1E1E1E] p-5 rounded-sm">
                <p className="text-[#B0ADA8] font-medium mb-2">Datos de navegación y analítica</p>
                <p>Utilizamos Google Analytics 4 para recopilar datos estadísticos sobre el uso del Sitio Web (páginas visitadas, tiempo de sesión, dispositivo utilizado, etc.). Estos datos son anónimos y agregados; no permiten identificarte personalmente. Puedes consultar la política de privacidad de Google en <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C8A96E] hover:text-[#E2C99A] underline-offset-2 underline">policies.google.com/privacy</a>.</p>
              </div>
            </div>
          </Section>

          <Section title="3. Legitimación del tratamiento">
            <p>La base legal para el tratamiento de tus datos es:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li><span className="text-[#B0ADA8]">Formularios de contacto:</span> ejecución de medidas precontractuales (art. 6.1.b RGPD) y consentimiento del usuario al enviar el formulario (art. 6.1.a RGPD).</li>
              <li><span className="text-[#B0ADA8]">Analítica web:</span> interés legítimo en mejorar la experiencia del usuario y el rendimiento del Sitio Web (art. 6.1.f RGPD).</li>
            </ul>
          </Section>

          <Section title="4. Conservación de los datos">
            <p>Los datos proporcionados a través de los formularios de contacto se conservarán durante el tiempo necesario para gestionar tu solicitud y, una vez resuelta, durante el plazo legalmente exigido o hasta que solicites su supresión.</p>
            <p>Los datos de analítica se conservan de forma anonimizada conforme a los plazos establecidos por Google Analytics (26 meses por defecto).</p>
          </Section>

          <Section title="5. Destinatarios y transferencias internacionales">
            <p>Tus datos no serán cedidos a terceros, salvo obligación legal. No obstante, para la prestación de nuestros servicios utilizamos los siguientes proveedores que pueden acceder a tus datos:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li><span className="text-[#B0ADA8]">Resend (resend.com):</span> plataforma de envío de correo electrónico para gestionar los mensajes recibidos a través de los formularios. Ubicada en EE. UU. con garantías adecuadas bajo el marco de privacidad UE-EE. UU.</li>
              <li><span className="text-[#B0ADA8]">Google Analytics (Google LLC):</span> servicio de analítica web. Google puede transferir datos a servidores en EE. UU. bajo el marco de privacidad UE-EE. UU.</li>
              <li><span className="text-[#B0ADA8]">Vercel Inc.:</span> proveedor de alojamiento del Sitio Web. Puede acceder a datos de tráfico conforme a sus propias políticas de privacidad.</li>
            </ul>
          </Section>

          <Section title="6. Tus derechos">
            <p>Como interesado, puedes ejercer en cualquier momento los siguientes derechos dirigiéndote a <a href="mailto:contacto@pymelabagency.com" className="text-[#C8A96E] hover:text-[#E2C99A]">contacto@pymelabagency.com</a>:</p>
            <div className="mt-3 space-y-2.5">
              <Right title="Acceso" desc="Conocer qué datos personales tuyos tratamos." />
              <Right title="Rectificación" desc="Corregir datos inexactos o incompletos." />
              <Right title="Supresión" desc="Solicitar la eliminación de tus datos cuando ya no sean necesarios." />
              <Right title="Oposición" desc="Oponerte al tratamiento de tus datos en determinadas circunstancias." />
              <Right title="Limitación" desc="Solicitar que restrinjamos el tratamiento de tus datos." />
              <Right title="Portabilidad" desc="Recibir tus datos en formato estructurado y de uso común." />
            </div>
            <p className="mt-4">
              También tienes derecho a presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#C8A96E] hover:text-[#E2C99A]">Agencia Española de Protección de Datos (aepd.es)</a> si consideras que el tratamiento de tus datos no es conforme al RGPD.
            </p>
          </Section>

          <Section title="7. Medidas de seguridad">
            <p>PymeLab Agency aplica las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado. Todas las comunicaciones entre tu navegador y nuestro Sitio Web están protegidas mediante cifrado HTTPS.</p>
          </Section>

          <Section title="8. Cambios en esta política">
            <p>Nos reservamos el derecho a modificar la presente Política de Privacidad para adaptarla a cambios legislativos o técnicos. Te recomendamos revisarla periódicamente. La fecha de última actualización siempre figurará al inicio de este documento.</p>
          </Section>

        </div>

        {/* Links to other legal pages */}
        <div className="mt-12 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <Link href="/" className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200">
            ← Volver al inicio
          </Link>
          <div className="flex gap-5">
            <Link href="/legal" className="text-xs text-[#555] hover:text-[#888] transition-colors duration-200">Aviso Legal</Link>
            <Link href="/cookies" className="text-xs text-[#555] hover:text-[#888] transition-colors duration-200">Política de Cookies</Link>
          </div>
        </div>

      </div>
    </main>
  )
}
