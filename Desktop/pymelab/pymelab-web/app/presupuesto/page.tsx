'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
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

/* ─── Steps config ─────────────────────────────────────────────── */
const steps = [
  {
    id: 'type',
    question: '¿Qué tipo de web necesitas?',
    options: [
      { label: 'Web corporativa / informativa',   value: 'corporativa',  price: 0 },
      { label: 'Tienda online (e-commerce)',       value: 'ecommerce',    price: 200 },
      { label: 'Portfolio / personal',             value: 'portfolio',    price: 0 },
      { label: 'Blog o revista digital',           value: 'blog',         price: 50 },
      { label: 'Landing page (una sola página)',  value: 'landing',      price: -100 },
    ],
  },
  {
    id: 'pages',
    question: '¿Cuántas páginas necesitas aproximadamente?',
    options: [
      { label: '1-3 páginas',      value: 'small',   price: 0 },
      { label: '4-6 páginas',      value: 'medium',  price: 50 },
      { label: '7-10 páginas',     value: 'large',   price: 100 },
      { label: 'Más de 10 páginas', value: 'xlarge', price: 200 },
    ],
  },
  {
    id: 'design',
    question: '¿Tienes diseño o marca definida?',
    options: [
      { label: 'Sí, tengo logo y colores de marca', value: 'yes',    price: 0 },
      { label: 'Tengo algunas ideas pero nada definido', value: 'partial', price: 50 },
      { label: 'No, necesito que lo diseñéis todo', value: 'no',     price: 100 },
    ],
  },
  {
    id: 'features',
    question: '¿Qué funcionalidades necesitas?',
    options: [
      { label: 'Formulario de contacto',    value: 'contact',   price: 0 },
      { label: 'Chat en vivo',              value: 'chat',      price: 30 },
      { label: 'Reservas online',           value: 'bookings',  price: 80 },
      { label: 'Blog/noticias',             value: 'blog',      price: 50 },
      { label: 'Multi-idioma',              value: 'multilang', price: 100 },
    ],
    multi: true,
  },
  {
    id: 'plan',
    question: '¿Qué plan te interesa?',
    options: [
      { label: 'Starter — 299€ pago único',    value: 'starter', price: 0  },
      { label: 'Pro — 499€ pago único',         value: 'pro',     price: 200 },
      { label: 'Aún no lo sé',                  value: 'unknown', price: 0  },
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

  const [currentStep, setCurrentStep]   = useState(0)
  const [selections, setSelections]     = useState<Record<string, string | string[]>>({})
  const [showForm, setShowForm]         = useState(false)
  const [formData, setFormData]         = useState<FormData>({ name: '', email: '', phone: '', company: '', notes: '' })
  const [sending, setSending]           = useState(false)

  const totalSteps = steps.length
  const step = steps[currentStep]

  const estimatedPrice = (() => {
    let base = 299
    for (const [stepId, val] of Object.entries(selections)) {
      const s = steps.find(st => st.id === stepId)
      if (!s) continue
      if (Array.isArray(val)) {
        for (const v of val) {
          const opt = s.options.find(o => o.value === v)
          if (opt) base += opt.price
        }
      } else {
        const opt = s.options.find(o => o.value === val)
        if (opt) base += opt.price
      }
    }
    return Math.max(199, base)
  })()

  const isSelected = (value: string) => {
    const sel = selections[step.id]
    if (Array.isArray(sel)) return sel.includes(value)
    return sel === value
  }

  const toggleOption = (value: string) => {
    if (step.multi) {
      const cur = (selections[step.id] as string[] | undefined) ?? []
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
    await new Promise(r => setTimeout(r, 1200))
    router.push('/gracias')
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Tag>{t('budget.tag')}</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-4xl md:text-6xl font-light italic text-[#F0EDE8] leading-[0.92] mb-4"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {t('budget.h1')}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#666] font-light"
          >
            {t('budget.sub')}
          </motion.p>
        </div>
      </section>

      {/* Estimator */}
      <section className="pb-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div
                key="steps"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
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
                  <div className="h-px bg-[#1E1E1E] relative">
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
                    <h2 className="font-display text-2xl md:text-3xl font-light italic text-[#F0EDE8] mb-8">
                      {step.question}
                    </h2>

                    <div className="space-y-3">
                      {step.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => toggleOption(opt.value)}
                          className={`w-full text-left p-4 border flex items-center justify-between gap-4 transition-all duration-200 group ${
                            isSelected(opt.value)
                              ? 'border-[#C8A96E] bg-[#C8A96E]/5 text-[#F0EDE8]'
                              : 'border-[#2A2A2A] bg-[#141414] text-[#888] hover:border-[#3A3A3A] hover:text-[#F0EDE8]'
                          }`}
                        >
                          <span className="text-sm">{opt.label}</span>
                          <div className={`w-5 h-5 border flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isSelected(opt.value) ? 'border-[#C8A96E] bg-[#C8A96E]' : 'border-[#3A3A3A]'
                          }`}>
                            {isSelected(opt.value) && <Check size={11} className="text-[#0A0A0A]" />}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Price estimate */}
                    <div className="mt-8 flex items-center justify-between p-4 bg-[#141414] border border-[#2A2A2A]">
                      <span className="text-xs text-[#555]">Estimación actual</span>
                      <span className="font-display text-2xl font-light italic text-[#C8A96E]">
                        desde {estimatedPrice}€
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
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
                        : 'bg-[#1E1E1E] text-[#444] cursor-not-allowed'
                    }`}
                  >
                    {currentStep === totalSteps - 1 ? t('budget.submit') : t('budget.next')}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Contact form after steps */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Estimate result */}
                <div className="mb-10 p-8 bg-[#141414] border border-[#C8A96E]/40 text-center">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#666] mb-2">{t('budget.estimate')}</p>
                  <div className="font-display text-6xl font-light italic text-[#C8A96E] mb-1">
                    desde {estimatedPrice}€
                  </div>
                  <p className="text-xs text-[#444]">Presupuesto orientativo · El precio final puede variar según los detalles</p>
                </div>

                <h2 className="font-display text-2xl font-light italic text-[#F0EDE8] mb-6">
                  Cuéntanos un poco más para enviarte el presupuesto formal
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">{t('contact.name')} *</label>
                      <input
                        required
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
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
                        className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">{t('contact.phone')}</label>
                      <input
                        value={formData.phone}
                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">{t('contact.company')}</label>
                      <input
                        value={formData.company}
                        onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                        className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">Notas adicionales</label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))}
                      className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F0EDE8] placeholder-[#444] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200 resize-none"
                      placeholder="Cuéntanos algo más sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {sending ? 'Enviando...' : t('budget.contact')}
                    {!sending && <ArrowRight size={16} />}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
