import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Gratuita — Tu automatización personalizada en 48 horas',
  description: 'Construimos un prototipo real de tu automatización en menos de 48 horas, gratis y sin compromiso. Solicita tu demo personalizada y vélo funcionar en directo.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
