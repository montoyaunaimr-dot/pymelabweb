'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'framer-motion'
import { Zap, Award, DollarSign, HeadphonesIcon, ArrowRight, Check, Palette, Code2, SearchCheck } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import { useLang } from '@/context/LanguageContext'

const ThreeOrb = dynamic(() => import('@/components/ThreeOrb'), { ssr: false })

const ORDINALS = ['01', '02', '03', '04']

function ValueCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  desc: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setTilt({ x: dy * -10, y: dx * 10, active: true })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70, clipPath: 'inset(20% 0% 0% 0%)' }}
      animate={isInView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.13 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0, active: false })}
      style={{
        transformStyle: 'preserve-3d' as const,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.active ? 'transform 0.05s linear' : 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      className="relative group cursor-default"
    >
      {/* Bottom glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-sm"
        style={{ background: 'radial-gradient(ellipse at 50% 110%, rgba(200,169,110,0.15) 0%, transparent 65%)' }}
      />

      <div className="relative overflow-hidden border border-[#1E1E1E] group-hover:border-[#C8A96E]/50 transition-colors duration-500 p-8 bg-[#0D0D0D] flex flex-col min-h-[260px]">
        {/* Watermark ordinal */}
        <div className="absolute -right-2 -top-1 font-display leading-none text-[#F0EDE8] opacity-[0.04] select-none pointer-events-none"
          style={{ fontSize: '110px', fontStyle: 'italic', fontWeight: 300 }}>
          {ORDINALS[index]}
        </div>

        {/* Icon box */}
        <div className="relative w-11 h-11 border border-[#252525] group-hover:border-[#C8A96E]/50 flex items-center justify-center mb-7 transition-colors duration-400 shrink-0">
          <Icon size={18} className="text-[#C8A96E]" />
          {/* Corner accents */}
          <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-light italic text-[#F0EDE8] mb-3 leading-tight">
          {title}
        </h3>

        {/* Desc */}
        <p className="text-sm text-[#555] leading-relaxed flex-1">{desc}</p>

        {/* Animated bottom bar */}
        <div className="mt-7 h-px bg-[#C8A96E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </div>
    </motion.div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

const values = [
  {
    icon: Zap,
    titleKey: 'about.v1',
    descKey: 'about.v1d',
  },
  {
    icon: Award,
    titleKey: 'about.v2',
    descKey: 'about.v2d',
  },
  {
    icon: DollarSign,
    titleKey: 'about.v3',
    descKey: 'about.v3d',
  },
  {
    icon: HeadphonesIcon,
    titleKey: 'about.v4',
    descKey: 'about.v4d',
  },
]

const team = [
  {
    name: 'Equipo de Diseño',
    role: 'Diseño & UX',
    desc: 'Expertos en crear experiencias visuales que convierten visitantes en clientes.',
    icon: Palette,
  },
  {
    name: 'Equipo de Desarrollo',
    role: 'Frontend & Backend',
    desc: 'Especialistas en código limpio, rápido y escalable con las últimas tecnologías.',
    icon: Code2,
  },
  {
    name: 'Equipo de SEO',
    role: 'SEO & Estrategia',
    desc: 'Optimizamos cada proyecto para que Google lo encuentre y lo ame.',
    icon: SearchCheck,
  },
]

const timeline = [
  { year: 'Ene 2025', event: 'Nace PymeLab', desc: 'Fundamos la agencia con una misión clara: webs profesionales para PYMEs sin complicaciones ni precios desorbitados.' },
  { year: 'Mar 2025', event: 'Primer proyecto real', desc: 'Lanzamos Siéntete Bella, nuestra primera tienda Shopify. El negocio pasó de vender solo a conocidos a tener canal propio 24/7.' },
  { year: 'Abr 2025', event: 'Expansión al e-commerce', desc: 'Desarrollamos Solo Tuyo, ayudando a un negocio de TikTok a dar el salto a su propia tienda online en España.' },
  { year: 'Hoy', event: 'Seguimos creciendo', desc: 'Cada mes sumamos nuevos clientes. Nuestro objetivo es ser la agencia web de referencia para PYMEs en España.' },
]

export default function SobreNosotrosPage() {
  const { t } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#C8A96E]/4 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Tag>{t('about.tag')}</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-[#F0EDE8] leading-[0.92] mb-6"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {t('about.h1')}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <div className="space-y-5">
              <p className="text-[#888] leading-relaxed">{t('about.p1')}</p>
              <p className="text-[#888] leading-relaxed">{t('about.p2')}</p>
              <p className="text-[#888] leading-relaxed">{t('about.p3')}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            {/* Stats visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: 'Desde 299€', label: 'Web profesional' },
                { val: '7 días',    label: 'Tiempo de entrega' },
                { val: '100%',      label: 'Clientes satisfechos' },
                { val: '2025',      label: 'Año de fundación' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-[#141414] border border-[#2A2A2A] p-6">
                  <div className="font-display text-4xl font-light italic text-[#F0EDE8] mb-1">{val}</div>
                  <div className="text-xs tracking-[0.1em] uppercase text-[#555]">{label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="mb-16">
            <AnimateIn className="mb-4">
              <Tag>Nuestros valores</Tag>
            </AnimateIn>

            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-5xl md:text-6xl font-light italic text-[#F0EDE8] mt-4 leading-[0.95]"
                initial={{ y: '105%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                Lo que nos define
              </motion.h2>
            </div>

            {/* Animated gold rule */}
            <motion.div
              className="mt-7 h-px bg-[#C8A96E] origin-left"
              style={{ width: '100px' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            />
          </div>

          {/* 3D tilt cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon, titleKey, descKey }, i) => (
              <ValueCard
                key={titleKey}
                icon={icon}
                title={t(titleKey)}
                desc={t(descKey)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D Digital Identity ── */}
      <section className="relative bg-[#060606] overflow-hidden">
        {/* Subtle top/bottom borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[560px]">

          {/* Text */}
          <div className="py-24 lg:py-0 lg:pr-12">
            <AnimateIn>
              <Tag>Tecnología & diseño</Tag>
              <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-5 mb-6 leading-[0.95]">
                Construimos el futuro digital de tu negocio
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                Cada proyecto es el resultado de tecnología de vanguardia, diseño cuidado al milímetro y una obsesión por los detalles que marcan la diferencia.
              </p>
              <div className="space-y-3">
                {[
                  'Next.js + React para velocidad máxima',
                  'Diseño 100% personalizado, cero plantillas',
                  'SEO técnico integrado desde el día 1',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#C8A96E] shrink-0" />
                    <span className="text-sm text-[#666]">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Three.js canvas */}
          <div className="relative h-[420px] lg:h-[560px]">
            {/* Radial glow behind the orb */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] rounded-full bg-[#C8A96E]/[0.04] blur-[80px]" />
            </div>
            <ThreeOrb />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="mb-12">
            <Tag>El equipo</Tag>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mt-4">
              Las personas detrás de PymeLab
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 0.1}>
                <div className="bg-[#141414] border border-[#2A2A2A] p-6 text-center group hover:border-[#C8A96E]/30 transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#1E1E1E] border border-[#2A2A2A] group-hover:border-[#C8A96E]/40 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <member.icon size={24} className="text-[#C8A96E]" />
                  </div>
                  <h3 className="text-[#F0EDE8] font-medium mb-1">{member.name}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#C8A96E] mb-3">{member.role}</p>
                  <p className="text-sm text-[#555] leading-relaxed">{member.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto">
          <AnimateIn className="mb-12">
            <Tag>Historia</Tag>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mt-4">
              Nuestra trayectoria
            </h2>
          </AnimateIn>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-[#2A2A2A]" />
            <div className="space-y-8">
              {timeline.map(({ year, event, desc }, i) => (
                <AnimateIn key={year + event} delay={i * 0.1}>
                  <div className="flex gap-8 items-start">
                    <div className="w-16 text-right shrink-0">
                      <span className="font-display text-sm italic text-[#C8A96E]">{year}</span>
                    </div>
                    <div className="relative pl-8 pb-2">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#C8A96E]" />
                      <h3 className="text-[#F0EDE8] font-medium mb-1">{event}</h3>
                      <p className="text-sm text-[#555]">{desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="mb-12">
            <Tag>¿Por qué elegirnos?</Tag>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mt-4">
              La diferencia PymeLab
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Entregamos en días, no en meses',
              'Precios pensados para PYMEs reales',
              'Sin letra pequeña ni costes ocultos',
              'Diseño 100% personalizado (no plantillas)',
              'SEO incluido desde el primer día',
              'Soporte humano y cercano',
              'Webs rápidas y optimizadas',
              'Resultados medibles desde el primer mes',
            ].map((item, i) => (
              <AnimateIn key={item} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-[#141414] border border-[#1E1E1E]">
                  <Check size={14} className="text-[#C8A96E] shrink-0" />
                  <span className="text-sm text-[#888]">{item}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mb-4">
              Trabajemos juntos
            </h2>
            <p className="text-[#666] mb-8">Tu web profesional está a unos días de distancia.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/presupuesto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group">
                Solicitar presupuesto
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2A2A2A] text-[#F0EDE8] text-sm font-light hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-300">
                Contactar
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
