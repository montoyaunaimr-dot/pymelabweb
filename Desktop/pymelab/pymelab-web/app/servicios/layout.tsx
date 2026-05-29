import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios — Automatizaciones para PYMEs',
  description: 'Bot de WhatsApp con IA, email automation, captura de leads, integraciones, informes automáticos y web profesional. Todo lo que tu negocio necesita para funcionar solo.',
  openGraph: {
    title: 'Servicios | PymeLab Agency',
    description: 'Automatizaciones de negocio para PYMEs. Bot WhatsApp, email automation, leads y más.',
  },
}

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
