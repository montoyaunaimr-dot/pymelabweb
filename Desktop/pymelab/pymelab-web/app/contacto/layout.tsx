import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — Hablemos de tu proyecto',
  description: 'Contacta con PymeLab Agency. Email: contacto@pymelabagency.com. Tel: 618805348. Respondemos en menos de 24 horas.',
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
