import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Proyectos de diseño web para PYMEs',
  description: 'Descubre los proyectos de diseño web que hemos creado para nuestros clientes. Webs únicas, profesionales y diseñadas a medida.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
