import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo gratuita — PyMeLab',
  description: 'Solicita una demo personalizada. Te mostramos exactamente cómo automatizaríamos los procesos de tu negocio en menos de 24 horas.',
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
