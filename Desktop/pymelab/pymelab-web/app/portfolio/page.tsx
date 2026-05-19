'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, TrendingUp, ShoppingCart, Globe, Zap } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

const projects = [
  {
    num: '01',
    title: 'Siéntete Bella',
    category: 'E-Commerce · Moda & Belleza',
    url: 'https://sientetebella.es',
    displayUrl: 'sientetebella.es',
    year: '2025',
    color: '#C8A96E',
    tags: ['Shopify', 'E-Commerce', 'Automatizaciones', 'Diseño Web'],
    challenge: 'El negocio llevaba tiempo funcionando de forma completamente manual: sin presencia online, sin tienda, y dependiendo exclusivamente de la red de clientes conocidos para vender. El techo de crecimiento era evidente.',
    solution: 'Desarrollamos una tienda online completa en Shopify desde cero: diseño personalizado, catálogo de productos, pasarela de pago, y automatizaciones de pedidos y notificaciones para que el negocio funcionase solo, sin gestión manual.',
    result: 'El negocio pasó de vender solo a personas conocidas a tener una tienda accesible para cualquier persona. Las ventas crecieron de forma notable al abrir un canal de venta activo 24 horas al día, los 7 días de la semana.',
    metrics: [
      { icon: Globe, label: 'Presencia online', value: 'De 0 a web propia' },
      { icon: ShoppingCart, label: 'Canal de ventas', value: '24h · 7 días' },
      { icon: Zap, label: 'Automatizaciones', value: 'Pedidos y notificaciones' },
      { icon: TrendingUp, label: 'Resultado', value: 'Incremento de ventas' },
    ],
  },
  {
    num: '02',
    title: 'Solo Tuyo',
    category: 'E-Commerce · Regalos Personalizados',
    url: 'https://solotuyo.es',
    displayUrl: 'solotuyo.es',
    year: '2025',
    color: '#C8A96E',
    tags: ['Shopify', 'E-Commerce', 'Diseño Web', 'España'],
    challenge: 'El negocio había nacido en TikTok y había conseguido tracción real en redes sociales, pero dependía completamente de esa plataforma para vender. Querían dar el salto y establecer una presencia sólida en España con una tienda propia.',
    solution: 'Diseñamos y desarrollamos una tienda e-commerce a medida que reflejase la identidad de la marca, con una experiencia de compra fluida y optimizada para convertir el tráfico que ya traían desde redes sociales en ventas reales.',
    result: 'Solo Tuyo dejó de depender exclusivamente de TikTok para tener su propio espacio en internet. Una tienda propia, con su dominio y su marca, que convierte visitas en pedidos y posiciona al negocio de forma profesional en el mercado español.',
    metrics: [
      { icon: Globe, label: 'Expansión', value: 'Lanzamiento en España' },
      { icon: ShoppingCart, label: 'Tienda propia', value: 'Independiente de RRSS' },
      { icon: Zap, label: 'Origen', value: 'TikTok → Web propia' },
      { icon: TrendingUp, label: 'Resultado', value: 'Canal de venta directo' },
    ],
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C8A96E]/3 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Tag>Portfolio</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-[#F0EDE8] leading-[0.92] mb-6"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Proyectos que<br />
              <span className="gold-gradient not-italic font-bold">hablan por sí solos.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#666] text-lg font-light max-w-xl"
          >
            Cada proyecto tiene una historia detrás. Aquí te contamos el reto, la solución y el resultado.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 bg-[#0A0A0A] pb-24">
        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 0.1}>
              <div className="bg-[#111111] border border-[#1E1E1E] hover:border-[#C8A96E]/20 transition-colors duration-500">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 pb-0">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-6xl font-light italic text-[#1A1A1A] leading-none select-none hidden md:block">
                      {project.num}
                    </span>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]/70 mb-1">{project.category} · {project.year}</div>
                      <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8]">{project.title}</h2>
                    </div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200 group shrink-0"
                  >
                    {project.displayUrl}
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 px-8 pt-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] tracking-[0.12em] uppercase text-[#444] border border-[#2A2A2A] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Story: reto, solución, resultado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-6 border-t border-[#1E1E1E]">
                  {[
                    { label: 'El reto', text: project.challenge },
                    { label: 'La solución', text: project.solution },
                    { label: 'El resultado', text: project.result },
                  ].map((block, bi) => (
                    <div
                      key={block.label}
                      className={`p-7 ${bi < 2 ? 'md:border-r border-[#1E1E1E]' : ''} ${bi > 0 ? 'border-t md:border-t-0 border-[#1E1E1E]' : ''}`}
                    >
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#C8A96E] mb-3 font-medium">{block.label}</div>
                      <p className="text-sm text-[#666] leading-relaxed font-light">{block.text}</p>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-[#1E1E1E]">
                  {project.metrics.map((metric, mi) => (
                    <div
                      key={metric.label}
                      className={`p-5 flex items-center gap-3 ${mi < 3 ? 'md:border-r border-[#1E1E1E]' : ''} ${mi >= 2 ? 'border-t md:border-t-0 border-[#1E1E1E]' : ''}`}
                    >
                      <metric.icon size={14} className="text-[#C8A96E] shrink-0" />
                      <div>
                        <div className="text-[9px] tracking-[0.1em] uppercase text-[#444] mb-0.5">{metric.label}</div>
                        <div className="text-xs text-[#B0ADA8] font-medium">{metric.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* "Tu proyecto aquí" teaser */}
      <section className="px-6 pb-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="border border-dashed border-[#2A2A2A] hover:border-[#C8A96E]/40 transition-colors duration-500 p-10 text-center group">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#333] mb-4">Próximo proyecto</div>
              <h3 className="font-display text-3xl md:text-4xl font-light italic text-[#333] group-hover:text-[#555] transition-colors duration-500 mb-4">
                ¿Tu empresa aquí?
              </h3>
              <p className="text-sm text-[#333] mb-6 max-w-md mx-auto leading-relaxed font-light">
                Tu web puede ser el siguiente caso de éxito. Cuéntanos tu proyecto y lo hacemos realidad.
              </p>
              <Link
                href="/presupuesto"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200 group/link"
              >
                Solicitar presupuesto
                <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mb-4">
              ¿Quieres una web así?
            </h2>
            <p className="text-[#666] mb-8">La tuya puede estar lista en menos de una semana.</p>
            <Link
              href="/presupuesto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group"
            >
              Solicitar presupuesto
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
