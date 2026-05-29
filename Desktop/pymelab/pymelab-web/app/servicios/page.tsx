'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MessageCircle, Mail, Target, Link2, BarChart3, Globe,
  ArrowRight, Check, Zap, Clock, Shield,
} from 'lucide-react'
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

const services = [
  {
    id: 'whatsapp',
    icon: MessageCircle,
    num: '01',
    title: 'Bot de WhatsApp',
    short: 'Atiende, reserva y vende mientras duermes.',
    desc: 'Implementamos un bot con IA que entiende lenguaje natural. Gestiona reservas, responde preguntas frecuentes, cualifica leads y cierra ventas de forma completamente automática. Tu negocio activo 24/7 sin dedicar ni un minuto.',
    features: [
      'Respuestas en lenguaje natural con IA (OpenAI)',
      'Gestión automática de reservas y citas',
      'Detección de intención: reservar, cancelar, cambiar',
      'Integración con Google Sheets o CRM',
      'Confirmación automática por email y WhatsApp',
      'Escalado a humano cuando es necesario',
    ],
    useCases: ['Clínicas y dentistas', 'Restaurantes', 'Peluquerías', 'Servicios profesionales'],
    color: '#25D366',
  },
  {
    id: 'email',
    icon: Mail,
    num: '02',
    title: 'Email Automation',
    short: 'El email perfecto, en el momento perfecto.',
    desc: 'Diseñamos y automatizamos secuencias de email que se disparan en el momento exacto. Bienvenidas, seguimientos, recordatorios, reactivaciones. Cada email llega cuando más impacto tiene.',
    features: [
      'Secuencias de bienvenida automatizadas',
      'Follow-ups después de formulario o consulta',
      'Recordatorios de cita (24h antes)',
      'Emails de reactivación para clientes inactivos',
      'Confirmaciones y notificaciones en tiempo real',
      'Templates profesionales con tu marca',
    ],
    useCases: ['Lead nurturing', 'Post-venta', 'Recordatorios', 'Reactivación'],
    color: '#C8A96E',
  },
  {
    id: 'leads',
    icon: Target,
    num: '03',
    title: 'Captura de Leads',
    short: 'Cada contacto, directo a tu pipeline.',
    desc: 'Conectamos tu formulario web, landing page o chatbot directamente con tus herramientas de gestión. Sin copiar datos a mano, sin perder leads por el camino. Cada oportunidad capturada y procesada al instante.',
    features: [
      'Formularios conectados a n8n/CRM',
      'Email de notificación inmediata al equipo',
      'Email de confirmación automático al lead',
      'Registro en Google Sheets o base de datos',
      'Calificación automática por IA',
      'Asignación automática a comercial',
    ],
    useCases: ['Agencias', 'Inmobiliarias', 'Consultoras', 'E-commerce'],
    color: '#FF6B6B',
  },
  {
    id: 'integraciones',
    icon: Link2,
    num: '04',
    title: 'Integraciones',
    short: 'Todas tus herramientas, hablando entre sí.',
    desc: 'Conectamos cualquier combinación de plataformas: tu CRM con tu calendario, tu tienda con tu facturación, tu formulario con tu WhatsApp. Si existe una API, lo conectamos.',
    features: [
      'Google Sheets / Google Calendar',
      'HubSpot / Salesforce / Pipedrive',
      'Shopify / WooCommerce',
      'Notion / Airtable',
      'Slack / Teams (notificaciones)',
      'Cualquier plataforma con API',
    ],
    useCases: ['Sincronización de datos', 'Notificaciones', 'Flujos multi-sistema'],
    color: '#4FC3F7',
  },
  {
    id: 'informes',
    icon: BarChart3,
    num: '05',
    title: 'Informes Automáticos',
    short: 'Tus KPIs, siempre actualizados.',
    desc: 'Configuramos dashboards y reportes que se generan solos. Ventas de la semana, leads captados, conversiones, citas — todo en un panel que siempre está al día sin que toques nada.',
    features: [
      'Dashboard en Google Sheets o Looker Studio',
      'Reportes semanales/mensuales automáticos',
      'Alertas cuando algo supera umbrales',
      'Consolidación de datos de múltiples fuentes',
      'KPIs personalizados para tu negocio',
      'Envío automático por email al equipo',
    ],
    useCases: ['Dirección', 'Equipos de ventas', 'Marketing', 'Operaciones'],
    color: '#A78BFA',
  },
  {
    id: 'web',
    icon: Globe,
    num: '06',
    title: 'Web Profesional',
    short: 'Tu escaparate digital, conectado a todo.',
    desc: 'Diseñamos landing pages y webs que no solo convierten, sino que están conectadas a tus automatizaciones desde el primer día. Cada formulario captura leads. Cada visita es una oportunidad.',
    features: [
      'Diseño 100% personalizado',
      'Formulario conectado a n8n (leads automáticos)',
      'Optimizado para SEO y conversión',
      'Responsive (móvil + tablet + desktop)',
      'Velocidad de carga < 2 segundos',
      'Entrega en 7-10 días laborables',
    ],
    useCases: ['PYMEs', 'Profesionales', 'E-commerce', 'Servicios locales'],
    color: '#C8A96E',
  },
]

export default function ServiciosPage() {
  const { t } = useLang()

  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(200,169,110,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,1) 1px,transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8A96E]/[0.04] blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <Tag>{t('services.tag')}</Tag>
          </motion.div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-[#F0EDE8] leading-[0.92]"
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {t('services.h2')}
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[#555] text-lg font-light max-w-2xl">
            {t('services.sub')}
          </motion.p>

          {/* Quick stats */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-12 flex flex-wrap gap-6">
            {[
              { icon: Zap,    text: 'Implementación en 48-72h' },
              { icon: Clock,  text: 'Activo 24/7' },
              { icon: Shield, text: 'Sin permanencia' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-[#444]">
                <Icon size={14} className="text-[#C8A96E]" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-2">
          {services.map(({ id, icon: Icon, num, title, short, desc, features, useCases, color }, i) => (
            <AnimateIn key={id} delay={i * 0.05}>
              <div
                id={id}
                className="group border border-[#141414] bg-[#0D0D0D] p-8 md:p-12 hover:border-[#C8A96E]/20 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 border border-[#1E1E1E] flex items-center justify-center shrink-0 group-hover:border-[#C8A96E]/40 transition-colors duration-300">
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-[10px] tracking-[0.2em] uppercase text-[#333] mb-1">{num}</div>
                        <h2 className="text-2xl font-medium text-[#F0EDE8]">{title}</h2>
                      </div>
                    </div>
                    <p className="text-[#C8A96E] text-sm font-light mb-4 italic">{short}</p>
                    <p className="text-[#555] text-sm leading-relaxed mb-6">{desc}</p>

                    {/* Use cases */}
                    <div className="flex flex-wrap gap-2">
                      {useCases.map(uc => (
                        <span key={uc} className="text-[10px] tracking-[0.1em] uppercase text-[#444] border border-[#1E1E1E] px-2.5 py-1">
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — features */}
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#333] mb-4">Qué incluye</div>
                    <ul className="space-y-3">
                      {features.map(f => (
                        <li key={f} className="flex items-start gap-3 text-sm text-[#555]">
                          <Check size={13} className="text-[#C8A96E] shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contacto"
                      className="mt-8 inline-flex items-center gap-2 text-sm text-[#C8A96E] hover:text-[#E2C99A] transition-colors duration-200 group/btn"
                    >
                      Quiero este servicio
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-8 h-px bg-gradient-to-r from-[#C8A96E]/0 via-[#C8A96E]/20 to-[#C8A96E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#C8A96E]/[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl md:text-6xl font-light italic text-[#F0EDE8] mb-5 leading-tight">
              {t('cta.h2')}
            </h2>
            <p className="text-[#444] mb-10 font-light">{t('cta.sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group">
                {t('cta.btn1')}
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
