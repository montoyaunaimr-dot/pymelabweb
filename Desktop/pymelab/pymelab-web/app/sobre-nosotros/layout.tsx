import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Quiénes somos y cómo trabajamos',
  description: 'Somos PymeLab, una agencia web joven y especializada en PYMEs. Diseñamos webs profesionales desde 299€ y las entregamos en 7 días. Conoce nuestro equipo y nuestra historia.',
  openGraph: {
    title: 'Sobre Nosotros | PymeLab Agency',
    description: 'Agencia web especializada en PYMEs. Webs profesionales desde 299€ en 7 días.',
  },
}

export default function SobreNosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
