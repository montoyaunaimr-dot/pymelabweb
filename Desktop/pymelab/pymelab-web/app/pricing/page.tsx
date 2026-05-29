'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Zap, Shield, Clock, HelpCircle } from 'lucide-react'
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

const faqs = [
  {
    q: '¿Qué pasa si quiero cancelar?',
    a: 'Sin permanencia. Cancela cuando quieras con 30 días de preaviso. Te quedas con todo lo que hemos automatizado.',
  },
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'Plan Esencial: 48-72 horas. Plan Premium: 3-5 días laborables según complejidad.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'Cero. Nosotros lo configuramos todo y te formamos para que sepas exactamente qué está pasando.',
  },
  {
    q: '¿Qué pasa si algo falla?',
    a: 'El mantenimiento mensual incluye monitorización 24/7 y resolución de incidencias. Si algo falla, lo arreglamos antes de que te enteres.',
  },
]

export default function PricingPage() {
  const { t } = useLang()

  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <Tag>{t('pricing.tag')}</Tag>
          </motion.div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-display text-5xl md:text-7xl font-light italic text-[#F0EDE8] leading-[0.92]"
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {t('pricing.h2')}
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[#555] font-light max-w-xl mx-auto mb-10">
            {t('pricing.sub')}
          </motion.p>

          {/* Trust pills */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Zap,    text: 'Live en 48-72h' },
              { icon: Shield, text: 'Sin permanencia' },
              { icon: Clock,  text: '24/7 activo' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs text-[#444] border border-[#1A1A1A] px-4 py-2">
                <Icon size={12} className="text-[#C8A96E]" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Esencial */}
          <AnimateIn delay={0.1}>
            <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-10 h-full flex flex-col hover:border-[#2A2A2A] transition-colors duration-300">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#444] mb-4">{t('plan.basic.name')}</div>

                {/* Setup price */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-6xl font-light italic text-[#F0EDE8] leading-none">
                      {t('plan.basic.price')}€
                    </span>
                  </div>
                  <div className="text-[11px] text-[#333] uppercase tracking-wider mt-1">{t('pricing.once')} · instalación</div>
                </div>

                {/* Monthly */}
                <div className="flex items-center gap-2 mb-8 pb-8 border-b border-[#141414]">
                  <span className="text-[#C8A96E] text-xl">+</span>
                  <span className="font-display text-3xl font-light text-[#888]">{t('plan.basic.monthly')}€</span>
                  <span className="text-[11px] text-[#333] uppercase tracking-wider">{t('pricing.monthly')}</span>
                </div>

                <p className="text-sm text-[#484848] mb-8 leading-relaxed">{t('plan.basic.desc')}</p>

                <ul className="space-y-3 mb-10">
                  {['plan.basic.f1','plan.basic.f2','plan.basic.f3','plan.basic.f4','plan.basic.f5','plan.basic.f6','plan.basic.f7','plan.basic.f8'].map(k => (
                    <li key={k} className="flex items-start gap-3 text-sm text-[#555]">
                      <Check size={13} className="text-[#C8A96E] shrink-0 mt-0.5" />
                      {t(k)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/contacto" className="block w-full text-center py-4 border border-[#2A2A2A] text-sm text-[#555] hover:border-[#C8A96E]/50 hover:text-[#C8A96E] transition-all duration-300">
                  {t('pricing.get')}
                </Link>
              </div>
            </div>
          </AnimateIn>

          {/* Premium */}
          <AnimateIn delay={0.18}>
            <div className="relative bg-[#0D0D0D] border border-[#C8A96E]/35 p-10 h-full flex flex-col" style={{ boxShadow: '0 0 60px rgba(200,169,110,0.08)' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8A96E] text-[#0A0A0A] text-[9px] tracking-[0.2em] uppercase font-bold px-4 py-1.5">
                {t('pricing.popular')}
              </div>

              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#C8A96E] mb-4">{t('plan.pro.name')}</div>

                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-6xl font-light italic text-[#F0EDE8] leading-none">
                      {t('plan.pro.price')}€
                    </span>
                  </div>
                  <div className="text-[11px] text-[#444] uppercase tracking-wider mt-1">{t('pricing.once')} · instalación</div>
                </div>

                <div className="flex items-center gap-2 mb-8 pb-8 border-b border-[#1E1E1E]">
                  <span className="text-[#C8A96E] text-xl">+</span>
                  <span className="font-display text-3xl font-light text-[#C8A96E]">{t('plan.pro.monthly')}€</span>
                  <span className="text-[11px] text-[#444] uppercase tracking-wider">{t('pricing.monthly')}</span>
                </div>

                <p className="text-sm text-[#484848] mb-8 leading-relaxed">{t('plan.pro.desc')}</p>

                <ul className="space-y-3 mb-10">
                  {['plan.pro.f1','plan.pro.f2','plan.pro.f3','plan.pro.f4','plan.pro.f5','plan.pro.f6','plan.pro.f7','plan.pro.f8'].map(k => (
                    <li key={k} className="flex items-start gap-3 text-sm text-[#666]">
                      <Check size={13} className="text-[#C8A96E] shrink-0 mt-0.5" />
                      {t(k)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/contacto" className="block w-full text-center py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300">
                  {t('pricing.get')}
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Extras ── */}
      <section className="py-16 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-10">
            <Tag>{t('extras.tag')}</Tag>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'extras.web', price: 'extras.web.price', desc: 'extras.web.desc' },
                { name: 'extras.int', price: 'extras.int.price', desc: 'extras.int.desc' },
                { name: 'extras.dash', price: 'extras.dash.price', desc: 'extras.dash.desc' },
              ].map(({ name, price, desc }) => (
                <div key={name} className="bg-[#0A0A0A] border border-[#141414] p-6 hover:border-[#C8A96E]/20 transition-colors duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-[#999] font-medium">{t(name)}</span>
                    <span className="text-xs text-[#C8A96E] font-light">{t(price)}</span>
                  </div>
                  <p className="text-xs text-[#444] leading-relaxed">{t(desc)}</p>
                  <div className="mt-4 h-px bg-[#C8A96E]/0 group-hover:bg-[#C8A96E]/20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <Tag>Preguntas frecuentes</Tag>
            <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mt-4 leading-tight">
              Todo lo que necesitas saber
            </h2>
          </AnimateIn>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AnimateIn key={i} delay={i * 0.07}>
                <div className="border border-[#141414] p-6 hover:border-[#C8A96E]/20 transition-colors duration-300 group">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={15} className="text-[#C8A96E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#D0CCC6] mb-2">{q}</div>
                      <div className="text-sm text-[#555] leading-relaxed">{a}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] rounded-full bg-[#C8A96E]/[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl md:text-6xl font-light italic text-[#F0EDE8] mb-5 leading-tight">
              ¿Hablamos?
            </h2>
            <p className="text-[#444] mb-10 font-light">Sin compromiso. Te hacemos una propuesta personalizada en 24 horas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group">
                Solicitar propuesta
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <a href="tel:+34618805348" className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#2A2A2A] text-[#666] text-sm hover:border-[#C8A96E]/50 hover:text-[#F0EDE8] transition-all duration-300">
                {t('cta.btn2')}
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  )
}
