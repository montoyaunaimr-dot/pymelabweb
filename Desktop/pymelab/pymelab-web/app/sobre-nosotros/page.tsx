'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Award, DollarSign, HeadphonesIcon, ArrowRight, Check } from 'lucide-react'
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
    initials: 'DI',
  },
  {
    name: 'Equipo de Desarrollo',
    role: 'Frontend & Backend',
    desc: 'Especialistas en código limpio, rápido y escalable con las últimas tecnologías.',
    initials: 'DE',
  },
  {
    name: 'Equipo de SEO',
    role: 'SEO & Estrategia',
    desc: 'Optimizamos cada proyecto para que Google lo encuentre y lo ame.',
    initials: 'SE',
  },
]

const timeline = [
  { year: '2025', event: 'Fundación de PymeLab Agency', desc: 'Nacimos con la misión de democratizar el diseño web profesional para PYMEs.' },
  { year: '2025', event: 'Primeros proyectos', desc: 'Lanzamos nuestras primeras webs y comprobamos que el modelo funciona.' },
  { year: '2025', event: 'Crecimiento continuo', desc: 'Seguimos sumando clientes satisfechos y expandiendo nuestros servicios.' },
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
                { val: '50+',  label: 'Webs entregadas' },
                { val: '7',    label: 'Días de media' },
                { val: '98%',  label: 'Clientes satisfechos' },
                { val: '2025', label: 'Año de fundación' },
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
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="mb-12">
            <Tag>Nuestros valores</Tag>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mt-4">
              Lo que nos define
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, titleKey, descKey }, i) => (
              <AnimateIn key={titleKey} delay={i * 0.1}>
                <div className="p-6 bg-[#141414] border border-[#2A2A2A] hover:border-[#C8A96E]/30 transition-colors duration-300 group h-full">
                  <div className="w-10 h-10 border border-[#2A2A2A] group-hover:border-[#C8A96E] flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={18} className="text-[#C8A96E]" />
                  </div>
                  <h3 className="text-[#F0EDE8] font-medium mb-2">{t(titleKey)}</h3>
                  <p className="text-sm text-[#555]">{t(descKey)}</p>
                </div>
              </AnimateIn>
            ))}
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
                    <span className="font-display text-xl font-light italic text-[#C8A96E]">
                      {member.initials}
                    </span>
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
