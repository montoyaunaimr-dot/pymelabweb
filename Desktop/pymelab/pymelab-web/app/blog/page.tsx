'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

const posts = [
  {
    slug: 'por-que-tu-pyme-necesita-una-web-profesional',
    title: '¿Por qué tu PYME necesita una web profesional en 2025?',
    excerpt: 'El 70% de los consumidores investiga online antes de comprar. Si tu negocio no tiene presencia digital, estás perdiendo clientes cada día.',
    category: 'Estrategia Digital',
    readTime: '4 min',
    date: 'Mayo 2025',
    gradient: 'from-blue-900/20 to-indigo-900/10',
  },
  {
    slug: 'seo-para-pymes-guia-basica',
    title: 'SEO para PYMEs: la guía básica para aparecer en Google',
    excerpt: 'No necesitas ser una gran empresa para posicionarte en Google. Estos son los fundamentos que toda PYME debe conocer.',
    category: 'SEO',
    readTime: '6 min',
    date: 'Mayo 2025',
    gradient: 'from-green-900/20 to-emerald-900/10',
  },
  {
    slug: 'velocidad-web-importancia',
    title: 'Por qué la velocidad de tu web es crucial para las ventas',
    excerpt: 'Un segundo más de carga puede costar el 7% de tus conversiones. Descubre cómo optimizar la velocidad de tu web.',
    category: 'Rendimiento',
    readTime: '5 min',
    date: 'Abril 2025',
    gradient: 'from-orange-900/20 to-amber-900/10',
  },
  {
    slug: 'diseno-web-tendencias-2025',
    title: 'Tendencias de diseño web que dominarán 2025',
    excerpt: 'Del minimalismo radical a las micro-animaciones: estas son las tendencias que están transformando el diseño web este año.',
    category: 'Diseño',
    readTime: '7 min',
    date: 'Abril 2025',
    gradient: 'from-purple-900/20 to-violet-900/10',
  },
  {
    slug: 'ecommerce-para-pequenas-empresas',
    title: 'E-commerce para pequeñas empresas: cómo vender online sin arruinarte',
    excerpt: 'Montar una tienda online ya no requiere grandes presupuestos. Te explicamos las opciones más rentables para cada tipo de negocio.',
    category: 'E-Commerce',
    readTime: '8 min',
    date: 'Marzo 2025',
    gradient: 'from-rose-900/20 to-pink-900/10',
  },
  {
    slug: 'errores-comunes-webs-pymes',
    title: '5 errores comunes en las webs de PYMEs (y cómo evitarlos)',
    excerpt: 'Desde diseños desactualizados hasta la falta de llamadas a la acción: estos errores están costándote clientes cada día.',
    category: 'Diseño Web',
    readTime: '5 min',
    date: 'Marzo 2025',
    gradient: 'from-zinc-800/20 to-zinc-700/10',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8A96E]/4 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Tag>Blog</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-[#F0EDE8] leading-[0.92] mb-4"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Ideas y consejos<br />
              <span className="gold-gradient not-italic font-bold">para tu negocio.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#666] text-lg font-light max-w-xl"
          >
            Estrategia digital, diseño web y marketing para PYMEs.
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-[#141414] border border-[#2A2A2A] hover:border-[#C8A96E]/40 transition-all duration-500 h-full"
              >
                <div className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#0A0A0A]/20" />
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase bg-[#C8A96E]/20 text-[#C8A96E] px-2.5 py-1 border border-[#C8A96E]/30">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-[#F0EDE8] font-medium leading-snug mb-3 group-hover:text-[#C8A96E] transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#555] leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#444]">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />{post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mb-4">
              ¿Listo para crecer online?
            </h2>
            <p className="text-[#666] mb-8">Transforma tu presencia digital con PymeLab.</p>
            <Link href="/presupuesto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group">
              Solicitar presupuesto gratis
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
