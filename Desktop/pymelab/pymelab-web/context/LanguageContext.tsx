'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'es' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const translations: Record<Lang, Record<string, string>> = {
  es: {
    /* ── Nav ── */
    'nav.home':          'Inicio',
    'nav.services':      'Servicios',
    'nav.portfolio':     'Casos',
    'nav.pricing':       'Precios',
    'nav.about':         'Nosotros',
    'nav.contact':       'Contacto',
    'nav.cta':           'Solicitar automatización',

    /* ── Hero ── */
    'hero.tag':          'Automatización para PYMEs',
    'hero.h1a':          'Tu negocio,',
    'hero.h1b':          'en piloto automático.',
    'hero.sub':          'Automatizamos los procesos de tu empresa con tecnología de última generación. Sin contratar más personal. Sin perder tiempo.',
    'hero.cta1':         'Ver automatizaciones',
    'hero.cta2':         'Calcula tu presupuesto',

    /* ── Stats ── */
    'stats.timesaved':   'Tiempo ahorrado',
    'stats.automations': 'Automatizaciones activas',
    'stats.clients':     'Clientes satisfechos',
    'stats.support':     'Soporte incluido',

    /* ── How it works ── */
    'howit.tag':         '¿Cómo funciona?',
    'howit.h2':          'De cero a automatizado en días',
    'howit.sub':         'Un proceso simple, un resultado transformador.',
    'howit.s1.num':      '01',
    'howit.s1.title':    'Analizamos',
    'howit.s1.desc':     'Estudiamos tus procesos actuales y detectamos exactamente dónde pierdes tiempo y dinero cada día.',
    'howit.s2.num':      '02',
    'howit.s2.title':    'Automatizamos',
    'howit.s2.desc':     'Diseñamos e implementamos el flujo perfecto para tu negocio. Sin código, sin complicaciones, en 48-72 horas.',
    'howit.s3.num':      '03',
    'howit.s3.title':    'Creces',
    'howit.s3.desc':     'Tu negocio funciona solo 24 horas al día, 7 días a la semana. Tú te enfocas en lo que realmente importa.',

    /* ── Services home ── */
    'services.tag':      'Qué automatizamos',
    'services.h2':       'Todo lo que tu negocio hace manualmente',
    'services.sub':      'Si se repite, se puede automatizar. Y lo hacemos nosotros.',
    's1.title':          'Bot de WhatsApp',
    's1.desc':           'Reservas, preguntas frecuentes y ventas gestionadas por IA. Respuestas instantáneas 24/7 sin que toques el móvil.',
    's2.title':          'Email Automation',
    's2.desc':           'Confirmaciones, seguimientos y campañas que se envían solas en el momento exacto. Nunca pierdas un lead.',
    's3.title':          'Captura de Leads',
    's3.desc':           'Cada contacto entra directamente a tu pipeline. Sin copiar datos, sin perder oportunidades de venta.',
    's4.title':          'Integraciones',
    's4.desc':           'Conectamos todas tus herramientas: CRM, Google Sheets, calendarios, facturación. Todo sincronizado.',
    's5.title':          'Informes Automáticos',
    's5.desc':           'Datos de tu negocio actualizados solos. Reportes generados cuando los necesitas, sin trabajo manual.',
    's6.title':          'Web Profesional',
    's6.desc':           'Landing pages y tiendas conectadas a tus automatizaciones que capturan leads y venden 24/7.',

    /* ── Case study ── */
    'case.tag':          'En acción',
    'case.h2':           'Una clínica dental que dejó de gestionar citas a mano',
    'case.sub':          'El dentista perdía 2 horas diarias gestionando citas por WhatsApp. Lo automatizamos en 48 horas. Ahora su agenda se llena sola.',
    'case.step1':        'Paciente escribe por WhatsApp',
    'case.step2':        'IA detecta intent y fecha',
    'case.step3':        'Comprueba disponibilidad',
    'case.step4':        'Reserva en Google Sheets',
    'case.step5':        'Email + WhatsApp automáticos',
    'case.result':       '0 horas dedicadas a gestión. 100% automático. Funciona mientras el dentista trabaja.',
    'case.cta':          'Quiero algo así para mi negocio',

    /* ── Pricing home ── */
    'pricing.tag':       'Planes',
    'pricing.h2':        'Invierte una vez, ahorra siempre',
    'pricing.sub':       'Instalación única + mantenimiento mensual. Sin permanencia. Sin sorpresas.',
    'pricing.setup':     'instalación',
    'pricing.monthly':   '/mes',
    'pricing.popular':   'Más popular',
    'pricing.cta':       'Ver todos los planes',
    'pricing.get':       'Empezar ahora',
    'pricing.extras':    'Añadir extras',
    'pricing.once':      'pago único',

    /* ── Plan Esencial ── */
    'plan.basic.name':   'Esencial',
    'plan.basic.price':  '497',
    'plan.basic.monthly':'97',
    'plan.basic.desc':   'La automatización perfecta para empezar. Una implementación central que transforma tu negocio desde el día uno.',
    'plan.basic.f1':     '1 automatización principal',
    'plan.basic.f2':     'Bot WhatsApp básico incluido',
    'plan.basic.f3':     'Emails automáticos de confirmación',
    'plan.basic.f4':     'Integración Google Sheets',
    'plan.basic.f5':     'Soporte por email y WhatsApp',
    'plan.basic.f6':     'Actualizaciones y mejoras incluidas',
    'plan.basic.f7':     'Implementación en 48-72 horas',
    'plan.basic.f8':     'Sin permanencia — cancela cuando quieras',

    /* ── Plan Premium ── */
    'plan.pro.name':     'Premium',
    'plan.pro.price':    '997',
    'plan.pro.monthly':  '197',
    'plan.pro.desc':     'Suite completa de automatización. Transforma todos los procesos de tu negocio con IA de última generación.',
    'plan.pro.f1':       'Automatizaciones ilimitadas',
    'plan.pro.f2':       'Bot WhatsApp con IA (lenguaje natural)',
    'plan.pro.f3':       'Integración CRM + Calendar + Sheets',
    'plan.pro.f4':       'Dashboard de métricas en tiempo real',
    'plan.pro.f5':       'Recordatorios automáticos (email + WhatsApp)',
    'plan.pro.f6':       'Soporte prioritario 24/7',
    'plan.pro.f7':       'Formación del equipo (1 sesión/mes)',
    'plan.pro.f8':       'Implementación en 48 horas',

    /* ── Extras ── */
    'extras.tag':        'Complementos opcionales',
    'extras.web':        'Web Profesional',
    'extras.web.price':  'desde 299€',
    'extras.web.desc':   'Landing page o tienda conectada a tus automatizaciones',
    'extras.int':        'Integración Extra',
    'extras.int.price':  'desde 149€',
    'extras.int.desc':   'Conectamos cualquier plataforma o herramienta específica',
    'extras.dash':       'Dashboard a Medida',
    'extras.dash.price': '297€',
    'extras.dash.desc':  'Panel de control personalizado con tus KPIs en tiempo real',

    /* ── CTA section ── */
    'cta.h2':            '¿Listo para que tu negocio trabaje solo?',
    'cta.sub':           'Cuéntanos tu caso. Te mostramos qué podemos automatizar en tu empresa hoy mismo.',
    'cta.btn1':          'Solicitar automatización',
    'cta.btn2':          'Llamar ahora',

    /* ── About ── */
    'about.tag':         'Quiénes somos',
    'about.h1':          'Automatizamos negocios reales',
    'about.p1':          'PymeLab nació en 2025 con una misión clara: que ninguna pequeña empresa siga perdiendo horas en tareas repetitivas que una máquina puede hacer mejor, más rápido y sin errores.',
    'about.p2':          'Somos un equipo apasionado por la automatización y la tecnología. Usamos las mismas herramientas que las grandes empresas del mundo — solo que adaptadas al tamaño y presupuesto de una PYME.',
    'about.p3':          'Nuestro diferencial es simple: implementamos en días, no en meses. Y te acompañamos en cada paso.',
    'about.v1':          'Rapidez',
    'about.v1d':         'Automatizaciones en producción en 48-72 horas.',
    'about.v2':          'Precisión',
    'about.v2d':         'Cero errores humanos. Todo automatizado.',
    'about.v3':          'ROI real',
    'about.v3d':         'Retorno positivo desde el primer mes.',
    'about.v4':          'Soporte real',
    'about.v4d':         'Siempre disponibles, sin burocracia.',

    /* ── Contact ── */
    'contact.tag':       'Hablemos',
    'contact.h1':        'Cuéntanos qué quieres automatizar',
    'contact.sub':       'Responderemos en menos de 24 horas con una propuesta concreta.',
    'contact.name':      'Nombre completo',
    'contact.email':     'Email',
    'contact.phone':     'Teléfono (opcional)',
    'contact.company':   'Empresa',
    'contact.message':   'Cuéntanos qué proceso quieres automatizar',
    'contact.send':      'Enviar mensaje',
    'contact.sending':   'Enviando...',
    'contact.sent':      '¡Mensaje enviado! Te respondemos pronto.',

    /* ── Budget ── */
    'budget.tag':        'Presupuesto',
    'budget.h1':         'Calcula el coste de tu automatización',
    'budget.sub':        'Responde unas preguntas y te damos un presupuesto orientativo al instante.',
    'budget.step':       'Paso',
    'budget.of':         'de',
    'budget.next':       'Siguiente',
    'budget.prev':       'Anterior',
    'budget.submit':     'Ver mi presupuesto',
    'budget.estimate':   'Tu presupuesto estimado',
    'budget.contact':    'Solicitar presupuesto formal',

    /* ── Thanks ── */
    'thanks.h1':         '¡Recibido!',
    'thanks.sub':        'Gracias por contactar con PymeLab. Te respondemos en menos de 24 horas con una propuesta.',
    'thanks.back':       'Volver al inicio',

    /* ── Footer ── */
    'footer.tagline':    'Automatizamos tu negocio. Tú solo creces.',
    'footer.rights':     'Todos los derechos reservados.',
    'footer.legal':      'Aviso legal',
    'footer.privacy':    'Privacidad',
    'footer.cookies':    'Cookies',
  },
  en: {
    /* ── Nav ── */
    'nav.home':          'Home',
    'nav.services':      'Services',
    'nav.portfolio':     'Cases',
    'nav.pricing':       'Pricing',
    'nav.about':         'About',
    'nav.contact':       'Contact',
    'nav.cta':           'Get automation',

    /* ── Hero ── */
    'hero.tag':          'Automation for SMEs',
    'hero.h1a':          'Your business,',
    'hero.h1b':          'on autopilot.',
    'hero.sub':          'We automate your company\'s processes with cutting-edge technology. No extra staff. No wasted time.',
    'hero.cta1':         'See automations',
    'hero.cta2':         'Get a quote',

    /* ── Stats ── */
    'stats.timesaved':   'Time saved',
    'stats.automations': 'Active automations',
    'stats.clients':     'Happy clients',
    'stats.support':     'Support included',

    /* ── How it works ── */
    'howit.tag':         'How it works',
    'howit.h2':          'From zero to automated in days',
    'howit.sub':         'A simple process, a transformative result.',
    'howit.s1.num':      '01',
    'howit.s1.title':    'We Analyze',
    'howit.s1.desc':     'We study your current processes and identify exactly where you lose time and money every day.',
    'howit.s2.num':      '02',
    'howit.s2.title':    'We Automate',
    'howit.s2.desc':     'We design and implement the perfect flow for your business. No code, no complications, in 48-72 hours.',
    'howit.s3.num':      '03',
    'howit.s3.title':    'You Grow',
    'howit.s3.desc':     'Your business runs itself 24 hours a day, 7 days a week. You focus on what really matters.',

    /* ── Services home ── */
    'services.tag':      'What we automate',
    'services.h2':       'Everything your business does manually',
    'services.sub':      'If it repeats, it can be automated. And we do it for you.',
    's1.title':          'WhatsApp Bot',
    's1.desc':           'Bookings, FAQs and sales managed by AI. Instant 24/7 responses without touching your phone.',
    's2.title':          'Email Automation',
    's2.desc':           'Confirmations, follow-ups and campaigns that send themselves at the exact right moment.',
    's3.title':          'Lead Capture',
    's3.desc':           'Every contact goes directly into your pipeline. No copying data, no lost sales opportunities.',
    's4.title':          'Integrations',
    's4.desc':           'We connect all your tools: CRM, Google Sheets, calendars, invoicing. All synchronized.',
    's5.title':          'Automatic Reports',
    's5.desc':           'Your business data updated automatically. Reports generated when you need them.',
    's6.title':          'Professional Website',
    's6.desc':           'Landing pages and stores connected to your automations that capture leads and sell 24/7.',

    /* ── Case study ── */
    'case.tag':          'In action',
    'case.h2':           'A dental clinic that stopped managing appointments manually',
    'case.sub':          'The dentist was spending 2 hours a day managing appointments via WhatsApp. We automated it in 48 hours. Now his calendar fills itself.',
    'case.step1':        'Patient writes on WhatsApp',
    'case.step2':        'AI detects intent and date',
    'case.step3':        'Checks availability',
    'case.step4':        'Books in Google Sheets',
    'case.step5':        'Automatic email + WhatsApp',
    'case.result':       '0 hours on management. 100% automatic. Works while the dentist works.',
    'case.cta':          'I want this for my business',

    /* ── Pricing home ── */
    'pricing.tag':       'Plans',
    'pricing.h2':        'Invest once, save always',
    'pricing.sub':       'One-time setup + monthly maintenance. No lock-in. No surprises.',
    'pricing.setup':     'setup',
    'pricing.monthly':   '/month',
    'pricing.popular':   'Most popular',
    'pricing.cta':       'See all plans',
    'pricing.get':       'Get started',
    'pricing.extras':    'Add extras',
    'pricing.once':      'one-time',

    /* ── Plan Essential ── */
    'plan.basic.name':   'Essential',
    'plan.basic.price':  '497',
    'plan.basic.monthly':'97',
    'plan.basic.desc':   'The perfect automation to get started. One core implementation that transforms your business from day one.',
    'plan.basic.f1':     '1 core automation',
    'plan.basic.f2':     'Basic WhatsApp bot included',
    'plan.basic.f3':     'Automatic confirmation emails',
    'plan.basic.f4':     'Google Sheets integration',
    'plan.basic.f5':     'Email & WhatsApp support',
    'plan.basic.f6':     'Updates & improvements included',
    'plan.basic.f7':     'Implementation in 48-72 hours',
    'plan.basic.f8':     'No lock-in — cancel anytime',

    /* ── Plan Premium ── */
    'plan.pro.name':     'Premium',
    'plan.pro.price':    '997',
    'plan.pro.monthly':  '197',
    'plan.pro.desc':     'Complete automation suite. Transform all your business processes with cutting-edge AI.',
    'plan.pro.f1':       'Unlimited automations',
    'plan.pro.f2':       'AI WhatsApp bot (natural language)',
    'plan.pro.f3':       'CRM + Calendar + Sheets integration',
    'plan.pro.f4':       'Real-time metrics dashboard',
    'plan.pro.f5':       'Automatic reminders (email + WhatsApp)',
    'plan.pro.f6':       '24/7 priority support',
    'plan.pro.f7':       'Team training (1 session/month)',
    'plan.pro.f8':       'Implementation in 48 hours',

    /* ── Extras ── */
    'extras.tag':        'Optional add-ons',
    'extras.web':        'Professional Website',
    'extras.web.price':  'from €299',
    'extras.web.desc':   'Landing page or store connected to your automations',
    'extras.int':        'Extra Integration',
    'extras.int.price':  'from €149',
    'extras.int.desc':   'We connect any specific platform or tool',
    'extras.dash':       'Custom Dashboard',
    'extras.dash.price': '€297',
    'extras.dash.desc':  'Custom control panel with your KPIs in real time',

    /* ── CTA section ── */
    'cta.h2':            'Ready for your business to run itself?',
    'cta.sub':           'Tell us your case. We\'ll show you what we can automate in your business today.',
    'cta.btn1':          'Request automation',
    'cta.btn2':          'Call now',

    /* ── About ── */
    'about.tag':         'Who we are',
    'about.h1':          'We automate real businesses',
    'about.p1':          'PymeLab was born in 2025 with a clear mission: no small business should keep losing hours on repetitive tasks that a machine can do better, faster, and without errors.',
    'about.p2':          'We are a team passionate about automation and technology. We use the same tools as the world\'s largest companies — adapted to the size and budget of an SME.',
    'about.p3':          'Our differentiator is simple: we implement in days, not months. And we\'re with you every step of the way.',
    'about.v1':          'Speed',
    'about.v1d':         'Automations live in 48-72 hours.',
    'about.v2':          'Precision',
    'about.v2d':         'Zero human errors. 100% automated.',
    'about.v3':          'Real ROI',
    'about.v3d':         'Positive return from month one.',
    'about.v4':          'Real support',
    'about.v4d':         'Always available, no bureaucracy.',

    /* ── Contact ── */
    'contact.tag':       'Let\'s talk',
    'contact.h1':        'Tell us what you want to automate',
    'contact.sub':       'We\'ll respond in less than 24 hours with a concrete proposal.',
    'contact.name':      'Full name',
    'contact.email':     'Email',
    'contact.phone':     'Phone (optional)',
    'contact.company':   'Company',
    'contact.message':   'Tell us what process you want to automate',
    'contact.send':      'Send message',
    'contact.sending':   'Sending...',
    'contact.sent':      'Message sent! We\'ll reply soon.',

    /* ── Budget ── */
    'budget.tag':        'Quote',
    'budget.h1':         'Calculate your automation cost',
    'budget.sub':        'Answer a few questions and get an instant estimate.',
    'budget.step':       'Step',
    'budget.of':         'of',
    'budget.next':       'Next',
    'budget.prev':       'Previous',
    'budget.submit':     'See my quote',
    'budget.estimate':   'Your estimated budget',
    'budget.contact':    'Request formal quote',

    /* ── Thanks ── */
    'thanks.h1':         'Received!',
    'thanks.sub':        'Thank you for contacting PymeLab. We\'ll respond in less than 24 hours with a proposal.',
    'thanks.back':       'Back to home',

    /* ── Footer ── */
    'footer.tagline':    'We automate your business. You just grow.',
    'footer.rights':     'All rights reserved.',
    'footer.legal':      'Legal notice',
    'footer.privacy':    'Privacy',
    'footer.cookies':    'Cookies',
  }
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: (k) => k,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const t = (key: string) => translations[lang][key] ?? key
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
