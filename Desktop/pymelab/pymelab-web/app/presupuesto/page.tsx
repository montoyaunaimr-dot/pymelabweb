'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Info, Zap, MessageCircle, Mail, Target, Link2, BarChart3 } from 'lucide-react'
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

interface Option {
  label: string
  value: string
  price: number
  monthly?: number
  desc?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
}

interface Step {
  id: string
  question: string
  note?: string
  options: Option[]
  multi?: boolean
  showIf?: (sel: Record<string, string | string[]>) => boolean
}

const steps: Step[] = [
  {
    id: 'automation',
    question: '¿Qué quieres automatizar?',
    note: 'Puedes seleccionar varias opciones.',
    multi: true,
    options: [
      { label: 'Bot de WhatsApp',      value: 'whatsapp', price: 0,   monthly: 0,  desc: 'Reservas, preguntas y ventas con IA' },
      { label: 'Email Automation',     value: 'email',    price: 0,   monthly: 0,  desc: 'Secuencias, confirmaciones y seguimientos' },
      { label: 'Captura de Leads',     value: 'leads',    price: 0,   monthly: 0,  desc: 'Formularios directo a tu pipeline' },
      { label: 'Integraciones',        value: 'integrations', price: 100, monthly: 0, desc: 'Conectar CRM, Sheets, Calendar...' },
      { label: 'Informes Automáticos', value: 'reports',  price: 100, monthly: 0,  desc: 'Dashboard de métricas en tiempo real' },
    ],
  },
  {
    id: 'sector',
    question: '¿En qué sector está tu negocio?',
    options: [
      { label: 'Clínica / Salud / Dentista',   value: 'health',   price: 0 },
      { label: 'Restaurante / Hostelería',       value: 'food',     price: 0 },
      { label: 'Servicios profesionales',        value: 'services', price: 0 },
      { label: 'E-commerce / Tienda online',     value: 'ecommerce',price: 0 },
      { label: 'Otro sector',                    value: 'other',    price: 0 },
    ],
  },
  {
    id: 'tools',
    question: '¿Qué herramientas usas actualmente?',
    note: 'Selecciona todas las que apliquen. Si no usas ninguna, lo configuramos todo desde cero.',
    multi: true,
    options: [
      { label: 'Google Sheets / Drive',   value: 'sheets',   price: 0 },
      { label: 'HubSpot / Pipedrive / CRM', value: 'crm',   price: 0 },
      { label: 'Shopify / WooCommerce',   value: 'shop',     price: 0 },
      { label: 'Calendly / Acuity',       value: 'calendar', price: 0 },
      { label: 'Empezamos desde cero',    value: 'none',     price: 0 },
    ],
  },
  {
    id: 'web',
    question: '¿Necesitas también una web profesional conectada a las automatizaciones?',
    options: [
      { label: 'No, ya tengo web',                    value: 'no',   price: 0 },
      { label: 'Sí, quiero landing page (+299€)',      value: 'landing', price: 299 },
      { label: 'Sí, quiero web completa (+499€)',      value: 'full',    price: 499 },
    ],
  },
  {
    id: 'plan',
    question: '¿Qué plan te encaja mejor?',
    options: [
      { label: 'Plan Esencial — 497€ + 97€/mes',   value: 'esencial', price: 497,  monthly: 97,  desc: '1 automatización central, soporte incluido, live en 48-72h' },
      { label: 'Plan Premium — 997€ + 197€/mes',   value: 'premium',  price: 997,  monthly: 197, desc: 'Automatizaciones ilimitadas, IA, dashboard, soporte 24/7' },
      { label: 'Aún no lo tengo claro',             value: 'unknown',  price: 497,  monthly: 97,  desc: 'Te ayudamos a decidir en la primera llamada' },
    ],
  },
]

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  notes: string
}

export default function PresupuestoPage() {
  const router = useRouter()
  const { t } = useLang()

  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections]   = useState<Record<string, string | string[]>>({})
  const [showForm, setShowForm]       = useState(false)
  const [formData, setFormData]       = useState<FormData>({ name: '', email: '', phone: '', company: '', notes: '' })
  const [sending, setSending]         = useState(false)
  const [sendError, setSendError]     = useState(false)

  const activeSteps = steps.filter(step => step.showIf ? step.showIf(selections) : true)
  const totalSteps  = activeSteps.length
  const step        = activeSteps[currentStep]

  // Price calculation — always starts from plan base, then adds extras
  const { displaySetup, displayMonthly } = (() => {
    const planVal  = selections['plan']  as string | undefined
    const webVal   = selections['web']   as string | undefined
    const autoSel  = (selections['automation'] as string[] | undefined) ?? []

    // 1. Base from plan (default Esencial until plan step is reached)
    let setup   = planVal === 'premium' ? 997 : 497
    let monthly = planVal === 'premium' ? 197 : 97

    // 2. Automation extras — only count for Esencial (Premium includes everything)
    if (planVal !== 'premium') {
      if (autoSel.includes('integrations')) setup += 100   // complex integration work
      if (autoSel.includes('reports'))      setup += 100   // dashboard build
      if (autoSel.length >= 3)              setup +=  50   // multi-flow complexity
    }

    // 3. Web add-on — always sums on top of the automation base
    if (webVal === 'landing') setup += 299
    if (webVal === 'full')    setup += 499

    return { displaySetup: setup, displayMonthly: monthly }
  })()

  const isSelected = (value: string) => {
    const sel = selections[step.id]
    if (Array.isArray(sel)) return sel.includes(value)
    return sel === value
  }

  const toggleOption = (value: string) => {
    if (step.multi) {
      const cur  = (selections[step.id] as string[] | undefined) ?? []
      const next = cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value]
      setSelections(prev => ({ ...prev, [step.id]: next }))
    } else {
      setSelections(prev => ({ ...prev, [step.id]: value }))
    }
  }

  const canNext = step.multi
    ? ((selections[step.id] as string[] | undefined)?.length ?? 0) > 0
    : !!selections[step.id]

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(c => c + 1)
    } else {
      setShowForm(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSendError(false)
    try {
      const res = await fetch('/api/presupuesto', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selections,
          estimatedPrice: displaySetup,
          monthlyExtra:   displayMonthly,
          formData,
        }),
      })
      if (res.ok) {
        router.push('/gracias')
      } else {
        setSendError(true)
        setSending(false)
      }
    } catch {
      setSendError(true)
      setSending(false)
    }
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4">
            <Tag>{t('budget.tag')}</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-4xl md:text-6xl font-light italic text-[#F0EDE8] leading-[0.92] mb-4"
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {t('budget.h1')}
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[#555] font-light">
            {t('budget.sub')}
          </motion.p>
        </div>
      </section>

      {/* ── Estimator ── */}
      <section className="pb-28 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div key="steps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                {/* Progress */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#444]">
                      {t('budget.step')} {currentStep + 1} {t('budget.of')} {totalSteps}
                    </span>
                    <span className="text-xs text-[#C8A96E]">
                      {Math.round(((currentStep + 1) / totalSteps) * 100)}%
                    </span>
                  </div>
                  <div className="h-px bg-[#1A1A1A] relative">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-[#C8A96E]"
                      animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="font-display text-2xl md:text-3xl font-light italic text-[#F0EDE8] mb-3">
                      {step.question}
                    </h2>

                    {step.note && (
                      <div className="flex items-start gap-2.5 mb-6 p-3 bg-[#141414] border border-[#2A2A2A]">
                        <Info size={13} className="text-[#C8A96E]/70 shrink-0 mt-0.5" />
                        <p className="text-xs text-[#555] leading-relaxed">{step.note}</p>
                      </div>
                    )}
                    {!step.note && <div className="mb-8" />}

                    <div className="space-y-3">
                      {step.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => toggleOption(opt.value)}
                          className={`w-full text-left p-4 border flex items-start justify-between gap-4 transition-all duration-200 ${
                            isSelected(opt.value)
                              ? 'border-[#C8A96E] bg-[#C8A96E]/5 text-[#F0EDE8]'
                              : 'border-[#1E1E1E] bg-[#0D0D0D] text-[#888] hover:border-[#2A2A2A] hover:text-[#F0EDE8]'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-medium">{opt.label}</div>
                            {opt.desc && (
                              <div className={`text-xs mt-0.5 ${isSelected(opt.value) ? 'text-[#C8A96E]/70' : 'text-[#444]'}`}>
                                {opt.desc}
                              </div>
                            )}
                          </div>
                          <div className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                            isSelected(opt.value) ? 'border-[#C8A96E] bg-[#C8A96E]' : 'border-[#333]'
                          }`}>
                            {isSelected(opt.value) && <Check size={11} className="text-[#0A0A0A]" />}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Live estimate */}
                    <div className="mt-8 p-5 bg-[#0D0D0D] border border-[#1E1E1E]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#444] uppercase tracking-wider">Estimación actual</span>
                        <div className="text-right">
                          <div className="font-display text-2xl font-light italic text-[#C8A96E]">
                            desde {displaySetup}€
                          </div>
                          <div className="text-xs text-[#555] mt-0.5">
                            + {displayMonthly}€/mes
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex gap-4 mt-8">
                  {currentStep > 0 && (
                    <button
                      onClick={() => setCurrentStep(c => c - 1)}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-sm text-[#888] hover:border-[#3A3A3A] hover:text-[#F0EDE8] transition-all duration-200"
                    >
                      <ArrowLeft size={14} />
                      {t('budget.prev')}
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!canNext}
                    className={`ml-auto inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-all duration-200 group ${
                      canNext
                        ? 'bg-[#C8A96E] text-[#0A0A0A] hover:bg-[#E2C99A]'
                        : 'bg-[#141414] text-[#333] cursor-not-allowed'
                    }`}
                  >
                    {currentStep === totalSteps - 1 ? t('budget.submit') : t('budget.next')}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

                {/* Estimate result */}
                <div className="mb-10 p-8 bg-[#0D0D0D] border border-[#C8A96E]/40 text-center" style={{ boxShadow: '0 0 40px rgba(200,169,110,0.06)' }}>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#555] mb-3">{t('budget.estimate')}</p>
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="font-display text-5xl font-light italic text-[#C8A96E]">
                      {displaySetup}€
                    </span>
                    <span className="text-[#444] text-sm">setup único</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#C8A96E]/70 text-sm">
                    <span className="text-[#C8A96E]">+</span>
                    <span className="font-display text-2xl font-light">{displayMonthly}€</span>
                    <span className="text-[#555] text-xs">/mes mantenimiento</span>
                  </div>
                  <p className="text-xs text-[#333] mt-4">Presupuesto orientativo · El precio final puede variar según los detalles del proyecto</p>
                </div>

                <h2 className="font-display text-2xl font-light italic text-[#F0EDE8] mb-6">
                  Cuéntanos un poco más y te enviamos la propuesta
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">{t('contact.name')} *</label>
                      <input
                        required
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full bg-[#0D0D0D] border border-[#1E1E1E] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#333] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">{t('contact.email')} *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full bg-[#0D0D0D] border border-[#1E1E1E] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#333] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">{t('contact.phone')}</label>
                      <input
                        value={formData.phone}
                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full bg-[#0D0D0D] border border-[#1E1E1E] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#333] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">{t('contact.company')}</label>
                      <input
                        value={formData.company}
                        onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                        className="w-full bg-[#0D0D0D] border border-[#1E1E1E] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#333] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">¿Algo más que debamos saber?</label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))}
                      className="w-full bg-[#0D0D0D] border border-[#1E1E1E] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#333] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200 resize-none"
                      placeholder="Cuéntanos más sobre tu negocio y los procesos que quieres automatizar..."
                    />
                  </div>

                  {sendError && (
                    <div className="flex items-center gap-2 p-3 border border-red-500/30 bg-red-500/5">
                      <Info size={14} className="text-red-400 shrink-0" />
                      <p className="text-xs text-red-400">
                        Hubo un problema al enviar. Escríbenos directamente a{' '}
                        <a href="mailto:contacto@pymelabagency.com" className="underline">contacto@pymelabagency.com</a>
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {sending ? 'Enviando...' : t('budget.contact')}
                    {!sending && (
                      <>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </div>
  )
}
