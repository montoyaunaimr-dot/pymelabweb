import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Quiénes somos y cómo automatizamos',
  description: 'Somos PymeLab, una agencia de automatización especializada en PYMEs. Implementamos flujos de IA, bots y automatizaciones en 48-72 horas. Sin permanencia.',
  openGraph: {
    title: 'Sobre Nosotros | PymeLab Agency',
    description: 'Agencia de automatización para PYMEs. Implementamos en 48 horas. Sin permanencia.',
  },
}

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
