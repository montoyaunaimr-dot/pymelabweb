import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios — Webs profesionales desde 299€ en 7 días',
  description: 'Planes y precios claros para PYMEs. Plan Básico desde 299€ y Plan Premium desde 499€. Hosting y mantenimiento desde 29€/mes. Sin letra pequeña, sin costes ocultos.',
  openGraph: {
    title: 'Precios | PymeLab Agency',
    description: 'Webs profesionales para PYMEs desde 299€. Entrega en 7 días. Sin sorpresas.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
