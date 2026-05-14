'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Globe, Search, ShoppingCart, Wrench, Palette, BarChart3,
  ArrowRight, Check,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import { useLang } from '@/context/LanguageContext'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

const services = [
  {
    id: 'diseno-web',
    icon: Globe,
    num: '01',
    title: 'Diseño Web',
    short: 'Tu imagen online, rediseñada.',
    desc: 'Creamos webs modernas, rápidas y diseñadas para convertir. Cada proyecto es único: adaptamos el diseño a tu marca, tu sector y tu audiencia. Nada de plantillas genéricas.',
    features: [
      'Diseño 100% personalizado',
      'Responsive (móvil, tablet, desktop)',
      'Velocidad de carga optimizada',
      'CMS integrado para gestión fácil',
      'Animaciones y micro-interacciones',
      'Entrega en 5-7 días',
    ],
    cta: 'Solicitar diseño web',
  },
  {
    id: 'seo',
    icon: Search,
    num: '02',
    title: 'SEO & Posicionamiento',
    short: 'Aparecer en Google no es suerte.',
    desc: 'Optimizamos tu web para que Google la ame. Desde la arquitectura técnica hasta el contenido, aplicamos las mejores prácticas de SEO para posicionarte por encima de tu competencia.',
    features: [
      'Auditoría SEO completa',
      'Optimización técnica on-page',
      'Investigación de palabras clave',
      'Optimización de velocidad (Core Web Vitals)',
      'Google Analytics 4 + Search Console',
      'Informes mensuales de rendimiento',
    ],
    cta: 'Mejorar mi SEO',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    num: '03',
    title: 'Tienda Online',
    short: 'Vende mientras duermes.',
    desc: 'Creamos tiendas online completas, seguras y fáciles de gestionar. Desde catálogos de producto hasta pasarelas de pago, nos encargamos de que tu e-commerce esté listo para vender desde el primer día.',
    features: [
      'Catálogo de productos ilimitado',
      'Pasarela de pago segura (Stripe / PayPal)',
      'Gestión de stock y pedidos',
      'Diseño optimizado para conversión',
      'Integración con facturación',
      'Panel de administración intuitivo',
    ],
    cta: 'Crear mi tienda',
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    num: '04',
    title: 'Mantenimiento',
    short: 'Tu web, siempre al 100%.',
    desc: 'Una web sin mantenimiento es una web que falla. Nos encargamos de que tu sitio esté siempre actualizado, seguro, sin errores y con copias de seguridad diarias.',
    features: [
      'Actualizaciones de seguridad',
      'Backups automáticos diarios',
      'Monitorización 24/7',
      'Corrección de errores y bugs',
      'Actualizaciones de contenido',
      'Soporte técnico prioritario',
    ],
    cta: 'Contratar mantenimiento',
  },
  {
    id: 'branding',
    icon: Palette,
    num: '05',
    title: 'Branding Digital',
    short: 'Tu marca, coherente en todos lados.',
    desc: 'La identidad visual de tu negocio va más allá del logo. Creamos guías de estilo, paletas de color, tipografías y sistemas de diseño que hacen que tu marca sea reconocible y profesional en cualquier canal.',
    features: [
      'Diseño o rediseño de logotipo',
      'Paleta de colores y tipografías',
      'Guía de estilo de marca',
      'Plantillas para redes sociales',
      'Adaptación web y digital',
      'Archivos en todos los formatos',
    ],
    cta: 'Crear mi identidad',
  },
  {
    id: 'consultoria',
    icon: BarChart3,
    num: '06',
    title: 'Consultoría Digital',
    short: 'Estrategia antes que acción.',
    desc: 'Antes de invertir en digital, necesitas un plan. Analizamos tu negocio, tu competencia y tu mercado para diseñar una hoja de ruta digital que maximice tu retorno.',
    features: [
      'Análisis de presencia digital actual',
      'Estudio de la competencia',
      'Definición de buyer persona',
      'Plan de acción personalizado',
      'Priorización de canales y acciones',
      'Seguimiento y ajuste continuo',
    ],
    cta: 'Reservar consultoría',
  },
]

export default function ServiciosPage() {
  const { t } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8A96E]/4 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Tag>Servicios</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-[#F0EDE8] leading-[0.92] mb-6"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Lo que hacemos,<br />
              <span className="gold-gradient not-italic font-bold">lo hacemos bien.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#666] text-lg max-w-2xl font-light"
          >
            Servicios digitales pensados para PYMEs que quieren crecer online sin gastar de más.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-8 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto space-y-0">
          {services.map((service, i) => (
            <AnimateIn key={service.id} delay={i * 0.05}>
              <div
                id={service.id}
                className="group border-t border-[#1E1E1E] py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 hover:border-[#C8A96E]/30 transition-colors duration-300"
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 border border-[#2A2A2A] group-hover:border-[#C8A96E] flex items-center justify-center transition-colors duration-300">
                      <service.icon size={18} className="text-[#C8A96E]" />
                    </div>
                    <span className="font-display text-sm italic text-[#444]">{service.num}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[#C8A96E] text-sm mb-4">{service.short}</p>
                  <p className="text-[#666] text-sm leading-relaxed">{service.desc}</p>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-between">
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#888]">
                        <Check size={13} className="text-[#C8A96E] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/presupuesto"
                    className="inline-flex items-center gap-2 text-sm text-[#C8A96E] border border-[#C8A96E]/30 px-5 py-2.5 hover:bg-[#C8A96E] hover:text-[#0A0A0A] transition-all duration-300 group/btn self-start"
                  >
                    {service.cta}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
          <div className="border-t border-[#1E1E1E]" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mb-4">
              ¿No sabes qué necesitas?
            </h2>
            <p className="text-[#666] mb-8">
              Cuéntanos tu negocio y te recomendamos la solución ideal sin compromiso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group"
            >
              Hablar con nosotros
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
