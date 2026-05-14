import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios — Webs profesionales desde 299€',
  description: 'Planes y precios claros para PYMEs. Plan Starter desde 299€ y Plan Pro desde 499€. Sin letra pequeña, sin costes ocultos.',
  openGraph: {
    title: 'Precios | PymeLab Agency',
    description: 'Webs profesionales desde 299€. Sin sorpresas.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
