'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight, HelpCircle, Sparkles } from 'lucide-react'
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

interface Feature {
  text: string
  included: boolean
  addon?: boolean
}

interface Plan {
  name: string
  price: string
  fromPrice: boolean
  period: string
  desc: string
  popular: boolean
  features: Feature[]
  cta: string
  href: string
}

const plans: Plan[] = [
  {
    name: 'Básico',
    price: '299',
    fromPrice: true,
    period: 'pago único',
    desc: 'La solución perfecta para lanzar tu presencia online con una web profesional.',
    popular: false,
    features: [
      { text: 'Creación y entrega de página web profesional', included: true },
      { text: 'Responsive (móvil + tablet + desktop)', included: true },
      { text: 'Soporte básico (email y WhatsApp)', included: true },
      { text: 'Revisiones y actualizaciones mensuales', included: false, addon: true },
      { text: 'Google Analytics + informe mensual', included: false, addon: true },
      { text: 'SEO avanzado', included: false },
      { text: 'Páginas ilimitadas', included: false },
    ],
    cta: 'Empezar con Básico',
    href: '/presupuesto?plan=basico',
  },
  {
    name: 'Premium',
    price: '499',
    fromPrice: true,
    period: 'pago único',
    desc: 'Para negocios que quieren destacar, crecer y no perder tiempo gestionando su web.',
    popular: true,
    features: [
      { text: 'Diseño web profesional personalizado', included: true },
      { text: 'Páginas ilimitadas', included: true },
      { text: 'Responsive (móvil + tablet + desktop)', included: true },
      { text: 'SEO integrado y personalizado', included: true },
      { text: 'Google Analytics + informe mensual', included: true },
      { text: '1 revisión y actualización semanal', included: true },
      { text: 'Soporte prioritario 24/7', included: true },
      { text: 'Entrega en 5 días laborables', included: true },
      { text: 'Blog integrado', included: true },
      { text: 'Optimización Core Web Vitals', included: true },
    ],
    cta: 'Empezar con Premium',
    href: '/presupuesto?plan=premium',
  },
  {
    name: 'Hosting & Mantenimiento',
    price: '29',
    fromPrice: false,
    period: '/mes',
    desc: 'Complemento mensual para mantener tu web activa, segura y siempre actualizada.',
    popular: false,
    features: [
      { text: 'Hosting premium en servidores rápidos', included: true },
      { text: 'Dominio .es o .com gratis el 1er año', included: true },
      { text: 'Certificado SSL (HTTPS)', included: true },
      { text: 'Backups automáticos diarios', included: true },
      { text: 'Actualizaciones de seguridad', included: true },
      { text: 'Monitorización 24/7 (uptime)', included: true },
      { text: 'Resolución de incidencias en 24h', included: true },
      { text: '1 hora de cambios de contenido/mes', included: true },
      { text: 'Informe mensual de estado', included: true },
    ],
    cta: 'Contratar mantenimiento',
    href: '/presupuesto?plan=hosting',
  },
]

const addons = [
  {
    name: 'Revisiones y Actualizaciones Mensuales',
    price: '+50€',
    period: 'por revisión/mes',
    plan: 'Plan Básico',
    desc: 'Contrata las revisiones y actualizaciones de contenido que necesites cada mes. Cada revisión incluye una ronda completa de cambios en tu web: textos, imágenes, precios, horarios, nuevas secciones...',
    bullets: [
      '1 revisión y actualización al mes → +50€/mes',
      '2 revisiones y actualizaciones al mes → +100€/mes',
      '3 revisiones y actualizaciones al mes → +150€/mes',
      'Si no usas una revisión en un mes, se acumula para el siguiente',
      'El servicio se renueva mensualmente, sin permanencia',
    ],
  },
  {
    name: 'Google Analytics + Informe Mensual',
    price: '+50€',
    period: '/mes',
    plan: 'Plan Básico',
    desc: 'Instalamos Google Analytics en tu web y te entregamos cada mes un informe completo y personalizado con el rendimiento real de tu sitio. Sabe exactamente cómo está funcionando tu negocio online.',
    bullets: [
      'Configuración de Google Analytics 4',
      'Informe mensual: visitas, fuentes de tráfico y páginas más vistas',
      'Métricas de comportamiento del usuario',
      'Recomendaciones de mejora incluidas',
      'Entrega del informe en los primeros días de cada mes',
    ],
  },
]

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en estar lista mi web?',
    a: 'El plan Básico tiene una entrega estimada de 7-10 días laborables y el plan Premium en 5 días. Antes de empezar te pediremos los textos, imágenes y la información de tu negocio para no perder tiempo.',
  },
  {
    q: '¿Qué pasa después de la entrega?',
    a: 'Tu web te pertenece al 100%. Puedes gestionarla tú mismo o añadir nuestros servicios mensuales de revisiones y actualizaciones y/o Google Analytics para que nos encarguemos nosotros de mantenerla al día.',
  },
  {
    q: '¿Cómo funcionan las revisiones y actualizaciones mensuales?',
    a: 'Con el plan Básico puedes añadir revisiones como extra mensual: +50€ por revisión/mes. Si contratas 1 al mes y no la utilizas, se acumula para el mes siguiente. El servicio se renueva mensualmente y puedes cancelarlo cuando quieras.',
  },
  {
    q: '¿Qué incluye exactamente una "revisión y actualización"?',
    a: 'Cada revisión incluye una ronda completa de cambios en tu web: actualizar textos, imágenes, precios, horarios, añadir nuevas secciones, etc. Es una sesión de trabajo dedicada a mantener tu web perfecta y al día.',
  },
  {
    q: '¿Puedo añadir los extras después de contratar el plan Básico?',
    a: 'Sí, puedes añadir los servicios de revisiones y/o Google Analytics en cualquier momento, aunque hayas contratado el plan Básico inicialmente. Contacta con nosotros y lo activamos sin problema.',
  },
  {
    q: '¿El dominio y el hosting están incluidos?',
    a: 'El diseño y desarrollo están incluidos en el precio. El dominio y hosting son costes aparte (aprox. 10-15€/mes), o puedes contratarlos con nuestro plan mensual de 29€.',
  },
  {
    q: '¿Trabajáis con todo tipo de negocios?',
    a: 'Sí. Trabajamos con cualquier tipo de negocio: tiendas físicas, comercios online, profesionales independientes, servicios locales, restaurantes, clínicas y mucho más. Si tienes un negocio y necesitas presencia online, podemos ayudarte.',
  },
  {
    q: '¿Puedo empezar con el plan Básico y subir al Premium después?',
    a: 'Por supuesto. Puedes empezar con Básico y actualizar cuando quieras. Solo cobraremos la diferencia de precio.',
  },
]

export default function PricingPage() {
  const { t } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#C8A96E]/4 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Tag>Precios</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-5xl md:text-7xl font-light italic text-[#F0EDE8] leading-[0.92] mb-6"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Precios claros.<br />
              <span className="gold-gradient not-italic font-bold">Sin sorpresas.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#666] text-lg font-light max-w-xl mx-auto"
          >
            Elige el plan que mejor se adapte a tu negocio. Sin letra pequeña, sin costes ocultos.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 0.1}>
              <div className={`relative flex flex-col h-full p-8 ${
                plan.popular
                  ? 'bg-[#161616] border border-[#C8A96E]/50 glow-gold'
                  : 'bg-[#161616] border border-[#2A2A2A]'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 text-[10px] tracking-[0.15em] uppercase bg-[#C8A96E] text-[#0A0A0A] px-4 py-1 font-medium whitespace-nowrap">
                    {t('pricing.popular')}
                  </div>
                )}

                <div className="mb-6">
                  <div className={`text-xs tracking-[0.2em] uppercase mb-3 font-light ${plan.popular ? 'text-[#C8A96E]' : 'text-[#666]'}`}>
                    {plan.name}
                  </div>
                  {plan.fromPrice && (
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#444] mb-0.5">desde</div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-6xl font-light italic text-[#F0EDE8]">{plan.price}€</span>
                    <span className="text-xs text-[#444] ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-[#666] mt-3 leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className={`flex items-start gap-2.5 text-sm ${
                        f.included ? 'text-[#B0ADA8]' : f.addon ? 'text-[#666]' : 'text-[#333]'
                      }`}
                    >
                      {f.included ? (
                        <Check size={13} className="text-[#C8A96E] shrink-0 mt-0.5" />
                      ) : f.addon ? (
                        <Sparkles size={13} className="text-[#C8A96E]/50 shrink-0 mt-0.5" />
                      ) : (
                        <X size={13} className="text-[#333] shrink-0 mt-0.5" />
                      )}
                      <span>
                        {f.text}
                        {f.addon && (
                          <span className="ml-1.5 text-[9px] tracking-[0.15em] uppercase text-[#C8A96E]/70 border border-[#C8A96E]/30 px-1.5 py-0.5">
                            extra
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full text-center py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#C8A96E] text-[#0A0A0A] hover:bg-[#E2C99A]'
                      : 'border border-[#2A2A2A] text-[#666] hover:border-[#C8A96E] hover:text-[#C8A96E]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Note */}
        <AnimateIn delay={0.4} className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-xs text-[#444]">
            * Los precios no incluyen IVA. Dominio y hosting se facturan aparte o están incluidos en el plan mensual de 29€/mes.
            El icono <span className="text-[#C8A96E]/70">✦</span> indica servicios disponibles como extra mensual.
          </p>
        </AnimateIn>
      </section>

      {/* Addons section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <Tag>Servicios opcionales</Tag>
            <h2 className="font-display text-3xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-4">
              Extras disponibles<br />
              <span className="gold-gradient not-italic font-bold">para el plan Básico</span>
            </h2>
            <p className="text-[#666] text-sm max-w-xl mx-auto leading-relaxed">
              Personaliza tu plan Básico con los servicios que necesites. Son mensuales y sin permanencia: actívalos, páusalos o cancélalos cuando quieras.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((addon, i) => (
              <AnimateIn key={addon.name} delay={i * 0.1}>
                <div className="bg-[#161616] border border-[#2A2A2A] p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]/70 mb-2">{addon.plan}</div>
                      <h3 className="text-[#F0EDE8] font-medium text-base leading-snug">{addon.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display text-3xl font-light italic text-[#C8A96E]">{addon.price}</div>
                      <div className="text-xs text-[#444]">{addon.period}</div>
                    </div>
                  </div>

                  <p className="text-sm text-[#666] leading-relaxed mb-6">{addon.desc}</p>

                  <ul className="space-y-2 flex-1">
                    {addon.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-[#888]">
                        <Check size={12} className="text-[#C8A96E]/60 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-[#2A2A2A]">
                    <Link
                      href="/presupuesto?plan=basico"
                      className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200 group"
                    >
                      Añadir al presupuesto
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Premium note */}
          <AnimateIn delay={0.3} className="mt-8">
            <div className="p-5 border border-[#C8A96E]/20 bg-[#C8A96E]/5 flex items-start gap-4">
              <Sparkles size={16} className="text-[#C8A96E] shrink-0 mt-0.5" />
              <p className="text-sm text-[#888] leading-relaxed">
                <span className="text-[#C8A96E] font-medium">Plan Premium:</span>{' '}
                incluye Google Analytics con informe mensual y 1 revisión y actualización semanal (4 al mes) sin coste adicional. Todo está incluido desde el primer día.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mb-3">
              Compara los planes
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="text-left py-4 pr-4 text-[#666] font-light">Característica</th>
                    <th className="text-center py-4 px-4 text-[#B0ADA8] font-light">Básico</th>
                    <th className="text-center py-4 px-4 text-[#C8A96E] font-light">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Creación y entrega de web profesional', '✓', '✓'],
                    ['Responsive (móvil, tablet, desktop)', '✓', '✓'],
                    ['Soporte', 'Email y WhatsApp', 'Prioritario 24/7'],
                    ['Páginas incluidas', 'Personalizadas', 'Ilimitadas'],
                    ['SEO', '—', 'Integrado y personalizado'],
                    ['Revisiones y actualizaciones', 'Extra (+50€/rev)', '1 semanal incluida'],
                    ['Google Analytics + informe mensual', 'Extra (+50€/mes)', '✓ incluido'],
                    ['Blog integrado', '—', '✓'],
                    ['Optimización Core Web Vitals', '—', '✓'],
                    ['Entrega estimada', '7-10 días', '5 días'],
                  ].map(([feat, basic, premium]) => (
                    <tr key={feat as string} className="border-b border-[#1A1A1A]">
                      <td className="py-3.5 pr-4 text-[#888]">{feat}</td>
                      <td className="py-3.5 px-4 text-center text-[#666]">{basic}</td>
                      <td className="py-3.5 px-4 text-center text-[#B0ADA8]">{premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <AnimateIn className="mb-12">
            <Tag>FAQ</Tag>
            <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mt-4">
              Preguntas frecuentes
            </h2>
          </AnimateIn>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="border-t border-[#2A2A2A] py-6">
                  <div className="flex gap-4">
                    <HelpCircle size={16} className="text-[#C8A96E] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#F0EDE8] font-medium mb-2">{faq.q}</p>
                      <p className="text-sm text-[#666] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
            <div className="border-t border-[#2A2A2A]" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl font-light italic text-[#F0EDE8] mb-4">
              ¿Aún tienes dudas?
            </h2>
            <p className="text-[#666] mb-8">Cuéntanos tu caso y te orientamos sin compromiso.</p>
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
