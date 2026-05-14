'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react'
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

export default function ContactoPage() {
  const { t } = useLang()
  const router = useRouter()

  const [form, setForm]     = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1000))
    router.push('/gracias')
  }

  const info = [
    { icon: Mail,    label: 'Email',       value: 'contacto@pymelabagency.com', href: 'mailto:contacto@pymelabagency.com' },
    { icon: Phone,   label: 'Teléfono',    value: '+34 618 805 348',             href: 'tel:+34618805348' },
    { icon: MapPin,  label: 'Ubicación',   value: 'España',                      href: null },
    { icon: Clock,   label: 'Respuesta',   value: 'Menos de 24 horas',           href: null },
  ]

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
            <Tag>{t('contact.tag')}</Tag>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-[#F0EDE8] leading-[0.92] mb-4"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {t('contact.h1')}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#666] font-light"
          >
            {t('contact.sub')}
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimateIn>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                      {t('contact.company')}
                    </label>
                    <input
                      value={form.company}
                      onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                      className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200 resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 disabled:opacity-70 w-full"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </AnimateIn>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <AnimateIn delay={0.2} className="space-y-6">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#C8A96E]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#444] mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-[#888] hover:text-[#F0EDE8] transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#888]">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-[#1E1E1E]">
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  También puedes solicitar un presupuesto detallado usando nuestro calculador interactivo.
                </p>
                <a
                  href="/presupuesto"
                  className="inline-flex items-center gap-2 text-sm text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200 group"
                >
                  Calcular presupuesto
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
