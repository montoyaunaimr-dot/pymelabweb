'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
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

const categories = ['Todos', 'Salud & Belleza', 'Negocios', 'Próximamente']

const projects = [
  {
    title: 'Siéntete Bella',
    category: 'Salud & Belleza',
    desc: 'Web para un salón de belleza con diseño elegante, galería de servicios y sistema de reservas integrado.',
    url: 'https://sientetebella.es',
    gradient: 'from-rose-950 via-pink-900/40 to-rose-900/20',
    tags: ['Diseño Web', 'Responsive', 'Reservas'],
    year: '2025',
    live: true,
  },
  {
    title: 'Proyecto en desarrollo',
    category: 'Próximamente',
    desc: 'Web corporativa para empresa del sector hostelero. Diseño moderno con carta digital interactiva.',
    url: '#',
    gradient: 'from-amber-950 via-yellow-900/30 to-amber-900/20',
    tags: ['Diseño Web', 'E-menu', 'SEO'],
    year: '2025',
    live: false,
  },
  {
    title: '¿Tu proyecto aquí?',
    category: 'Negocios',
    desc: 'Trabajamos con negocios de todos los sectores. Cuéntanos el tuyo y creamos algo único juntos.',
    url: '/presupuesto',
    gradient: 'from-zinc-900 via-zinc-800/30 to-zinc-900/20',
    tags: ['Tu sector', 'Personalizado', '100% a medida'],
    year: '2025',
    live: false,
    isCta: true,
  },
]

export default function PortfolioPage() {
  const { t } = useLang()
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory)

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
            Cada web es única, diseñada a medida. Aquí puedes ver parte de lo que hemos construido.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 border-b border-[#1E1E1E] pb-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative py-4 text-sm font-light transition-colors duration-200 ${
                  activeCategory === cat ? 'text-[#C8A96E]' : 'text-[#444] hover:text-[#888]'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#C8A96E]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="pt-12 pb-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {project.isCta ? (
                    <Link
                      href={project.url}
                      className="group block bg-[#141414] border border-dashed border-[#2A2A2A] hover:border-[#C8A96E]/50 transition-all duration-500 h-full"
                    >
                      <div className={`relative h-60 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <div className="text-center px-6">
                          <div className="w-12 h-12 border border-[#C8A96E]/30 group-hover:border-[#C8A96E] flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                            <ArrowRight size={20} className="text-[#C8A96E]" />
                          </div>
                          <p className="font-display text-2xl font-light italic text-[#F0EDE8]">
                            {project.title}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-[#555] leading-relaxed mb-4">{project.desc}</p>
                        <span className="text-xs text-[#C8A96E]">Solicitar presupuesto →</span>
                      </div>
                    </Link>
                  ) : (
                    <a
                      href={project.live ? project.url : '#'}
                      target={project.live ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`group block bg-[#141414] border border-[#2A2A2A] hover:border-[#C8A96E]/40 transition-all duration-500 h-full ${!project.live ? 'cursor-default' : ''}`}
                    >
                      <div className={`relative h-60 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="font-display text-3xl font-light italic text-[#F0EDE8]">{project.title}</p>
                            <p className="text-xs tracking-[0.2em] uppercase text-[#C8A96E] mt-2">{project.category}</p>
                          </div>
                        </div>
                        {project.live && (
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <div className="w-12 h-12 border border-white flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <ExternalLink size={18} className="text-white" />
                            </div>
                          </div>
                        )}
                        {!project.live && (
                          <div className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase bg-[#C8A96E]/20 text-[#C8A96E] px-2.5 py-1 border border-[#C8A96E]/30">
                            En breve
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] tracking-[0.1em] uppercase text-[#444] border border-[#2A2A2A] px-2 py-0.5">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-[#555] leading-relaxed">{project.desc}</p>
                      </div>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mb-4">
              ¿Quieres una web así?
            </h2>
            <p className="text-[#666] mb-8">La tuya puede estar aquí en menos de una semana.</p>
            <Link href="/presupuesto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group">
              Solicitar presupuesto
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
