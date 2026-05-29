import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casos de Uso — Automatizaciones reales para PYMEs',
  description: 'Descubre las automatizaciones que hemos implementado para nuestros clientes. Bots de WhatsApp, email automation, captura de leads y más. Resultados reales.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
