import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios — Diseño Web, SEO, E-Commerce y más',
  description: 'Descubre todos los servicios de PymeLab: diseño web profesional, SEO, tiendas online, mantenimiento, branding y consultoría digital para PYMEs.',
  openGraph: {
    title: 'Servicios | PymeLab Agency',
    description: 'Diseño web, SEO, tiendas online y más para PYMEs.',
  },
}

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
