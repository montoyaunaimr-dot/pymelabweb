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
    'nav.portfolio':     'Portfolio',
    'nav.pricing':       'Precios',
    'nav.about':         'Nosotros',
    'nav.contact':       'Contacto',
    'nav.cta':           'Solicitar presupuesto',

    /* ── Hero ── */
    'hero.tag':          'Agencia de diseño web para PYMEs',
    'hero.h1a':          'Tu web profesional,',
    'hero.h1b':          'lista en días.',
    'hero.sub':          'Diseñamos y desarrollamos páginas web de alto impacto para pequeñas y medianas empresas. Rápido, asequible y sin complicaciones.',
    'hero.cta1':         'Ver planes',
    'hero.cta2':         'Ver portfolio',

    /* ── Stats ── */
    'stats.webs':        'Webs entregadas',
    'stats.clients':     'Clientes satisfechos',
    'stats.days':        'Días de media',
    'stats.support':     'Soporte incluido',

    /* ── Services home ── */
    'services.tag':      'Qué hacemos',
    'services.h2':       'Todo lo que tu negocio necesita',
    'services.sub':      'Desde el diseño hasta el lanzamiento, nos encargamos de todo.',
    's1.title':          'Diseño Web',
    's1.desc':           'Webs modernas, limpias y optimizadas para convertir visitantes en clientes.',
    's2.title':          'SEO & Posicionamiento',
    's2.desc':           'Aparece en Google cuando tus clientes te buscan. Optimización técnica y de contenido.',
    's3.title':          'Tienda Online',
    's3.desc':           'Vende 24/7. Soluciones e-commerce completas y fáciles de gestionar.',
    's4.title':          'Mantenimiento',
    's4.desc':           'Tu web siempre actualizada, segura y funcionando al 100%.',
    's5.title':          'Branding Digital',
    's5.desc':           'Identidad visual coherente que transmite profesionalidad y confianza.',
    's6.title':          'Consultoría',
    's6.desc':           'Te asesoramos en tu estrategia digital para maximizar resultados.',

    /* ── Portfolio home ── */
    'portfolio.tag':     'Nuestro trabajo',
    'portfolio.h2':      'Proyectos que hablan por sí solos',
    'portfolio.sub':     'Cada web es única, diseñada a medida para el negocio de nuestros clientes.',
    'portfolio.cta':     'Ver todo el portfolio',
    'portfolio.visit':   'Visitar web',

    /* ── Pricing home ── */
    'pricing.tag':       'Planes',
    'pricing.h2':        'Precios claros, sin sorpresas',
    'pricing.sub':       'Elige el plan que mejor se adapte a tu negocio.',
    'pricing.popular':   'Más popular',
    'pricing.cta':       'Ver todos los planes',
    'pricing.monthly':   '/mes',
    'pricing.once':      'pago único',
    'pricing.get':       'Empezar ahora',

    /* ── Plan Basic ── */
    'plan.basic.name':   'Starter',
    'plan.basic.price':  '299',
    'plan.basic.desc':   'Perfecto para lanzar tu presencia online.',
    'plan.basic.f1':     'Diseño web profesional',
    'plan.basic.f2':     'Hasta 5 páginas',
    'plan.basic.f3':     'Responsive (móvil + tablet)',
    'plan.basic.f4':     'SEO básico incluido',
    'plan.basic.f5':     'Formulario de contacto',
    'plan.basic.f6':     'Revisión mensual',
    'plan.basic.f7':     'Soporte por email',
    'plan.basic.f8':     'Entrega en 7 días',

    /* ── Plan Pro ── */
    'plan.pro.name':     'Pro',
    'plan.pro.price':    '499',
    'plan.pro.desc':     'Para negocios que quieren destacar y crecer.',
    'plan.pro.f1':       'Todo lo del plan Starter',
    'plan.pro.f2':       'Páginas ilimitadas',
    'plan.pro.f3':       'SEO avanzado + Google Analytics',
    'plan.pro.f4':       'Soporte prioritario 24/7',
    'plan.pro.f5':       'Revisiones semanales',
    'plan.pro.f6':       'Actualizaciones de contenido semanales',
    'plan.pro.f7':       'Blog integrado',
    'plan.pro.f8':       'Entrega en 5 días',

    /* ── Plan Hosting ── */
    'plan.host.name':    'Hosting & Mantenimiento',
    'plan.host.price':   '29',
    'plan.host.desc':    'Mantén tu web siempre activa y segura.',
    'plan.host.f1':      'Hosting premium incluido',
    'plan.host.f2':      'Dominio .es o .com gratis 1er año',
    'plan.host.f3':      'Certificado SSL (HTTPS)',
    'plan.host.f4':      'Backups automáticos diarios',
    'plan.host.f5':      'Actualizaciones de seguridad',
    'plan.host.f6':      'Monitorización 24/7',

    /* ── CTA section ── */
    'cta.h2':            '¿Listo para tener la web que tu negocio merece?',
    'cta.sub':           'Hablemos hoy. Sin compromiso, sin tecnicismos.',
    'cta.btn1':          'Solicitar presupuesto',
    'cta.btn2':          'Llamar ahora',

    /* ── About ── */
    'about.tag':         'Quiénes somos',
    'about.h1':          'Nacimos para ayudar a las PYMEs a competir en digital',
    'about.p1':          'PymeLab nació en 2025 con una misión clara: que ninguna pequeña empresa se quede sin una presencia digital profesional por falta de tiempo, presupuesto o conocimiento técnico.',
    'about.p2':          'Somos un equipo apasionado por el diseño y la tecnología, con experiencia en decenas de proyectos para negocios de todos los sectores. Sabemos lo que funciona y lo aplicamos en cada proyecto.',
    'about.p3':          'Nuestro diferencial es simple: entregamos webs espectaculares en tiempo récord, a precios que tienen sentido para una PYME.',
    'about.v1':          'Velocidad',
    'about.v1d':         'Entregamos en días, no en meses.',
    'about.v2':          'Calidad',
    'about.v2d':         'Diseño premium sin compromisos.',
    'about.v3':          'Precio justo',
    'about.v3d':         'Asequible para cualquier PYME.',
    'about.v4':          'Soporte real',
    'about.v4d':         'Siempre disponibles para ti.',

    /* ── Contact ── */
    'contact.tag':       'Hablemos',
    'contact.h1':        'Cuéntanos tu proyecto',
    'contact.sub':       'Responderemos en menos de 24 horas.',
    'contact.name':      'Nombre completo',
    'contact.email':     'Email',
    'contact.phone':     'Teléfono (opcional)',
    'contact.company':   'Empresa',
    'contact.message':   'Cuéntanos tu proyecto',
    'contact.send':      'Enviar mensaje',
    'contact.sending':   'Enviando...',
    'contact.sent':      '¡Mensaje enviado! Te respondemos pronto.',

    /* ── Budget ── */
    'budget.tag':        'Presupuesto',
    'budget.h1':         'Calcula el coste de tu web',
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
    'thanks.sub':        'Gracias por contactar con PymeLab. Te respondemos en menos de 24 horas.',
    'thanks.back':       'Volver al inicio',

    /* ── Footer ── */
    'footer.tagline':    'Webs profesionales para PYMEs.',
    'footer.rights':     'Todos los derechos reservados.',
    'footer.legal':      'Aviso legal',
    'footer.privacy':    'Privacidad',
    'footer.cookies':    'Cookies',
  },
  en: {
    /* ── Nav ── */
    'nav.home':          'Home',
    'nav.services':      'Services',
    'nav.portfolio':     'Portfolio',
    'nav.pricing':       'Pricing',
    'nav.about':         'About',
    'nav.contact':       'Contact',
    'nav.cta':           'Get a quote',

    /* ── Hero ── */
    'hero.tag':          'Web design agency for SMEs',
    'hero.h1a':          'Your professional website,',
    'hero.h1b':          'ready in days.',
    'hero.sub':          'We design and develop high-impact websites for small and medium businesses. Fast, affordable, and hassle-free.',
    'hero.cta1':         'See plans',
    'hero.cta2':         'View portfolio',

    /* ── Stats ── */
    'stats.webs':        'Websites delivered',
    'stats.clients':     'Happy clients',
    'stats.days':        'Average days',
    'stats.support':     'Support included',

    /* ── Services home ── */
    'services.tag':      'What we do',
    'services.h2':       'Everything your business needs',
    'services.sub':      'From design to launch, we handle everything.',
    's1.title':          'Web Design',
    's1.desc':           'Modern, clean websites optimized to convert visitors into customers.',
    's2.title':          'SEO & Positioning',
    's2.desc':           'Show up on Google when your customers search for you.',
    's3.title':          'Online Store',
    's3.desc':           'Sell 24/7. Complete and easy-to-manage e-commerce solutions.',
    's4.title':          'Maintenance',
    's4.desc':           'Your website always updated, secure and running at 100%.',
    's5.title':          'Digital Branding',
    's5.desc':           'Coherent visual identity that conveys professionalism and trust.',
    's6.title':          'Consulting',
    's6.desc':           'We advise you on your digital strategy to maximize results.',

    /* ── Portfolio home ── */
    'portfolio.tag':     'Our work',
    'portfolio.h2':      'Projects that speak for themselves',
    'portfolio.sub':     'Every website is unique, tailored to our clients\' business.',
    'portfolio.cta':     'View full portfolio',
    'portfolio.visit':   'Visit website',

    /* ── Pricing home ── */
    'pricing.tag':       'Plans',
    'pricing.h2':        'Clear pricing, no surprises',
    'pricing.sub':       'Choose the plan that best suits your business.',
    'pricing.popular':   'Most popular',
    'pricing.cta':       'See all plans',
    'pricing.monthly':   '/month',
    'pricing.once':      'one-time payment',
    'pricing.get':       'Get started',

    /* ── Plan Basic ── */
    'plan.basic.name':   'Starter',
    'plan.basic.price':  '299',
    'plan.basic.desc':   'Perfect to launch your online presence.',
    'plan.basic.f1':     'Professional web design',
    'plan.basic.f2':     'Up to 5 pages',
    'plan.basic.f3':     'Responsive (mobile + tablet)',
    'plan.basic.f4':     'Basic SEO included',
    'plan.basic.f5':     'Contact form',
    'plan.basic.f6':     'Monthly revision',
    'plan.basic.f7':     'Email support',
    'plan.basic.f8':     'Delivery in 7 days',

    /* ── Plan Pro ── */
    'plan.pro.name':     'Pro',
    'plan.pro.price':    '499',
    'plan.pro.desc':     'For businesses that want to stand out and grow.',
    'plan.pro.f1':       'Everything in Starter',
    'plan.pro.f2':       'Unlimited pages',
    'plan.pro.f3':       'Advanced SEO + Google Analytics',
    'plan.pro.f4':       '24/7 priority support',
    'plan.pro.f5':       'Weekly revisions',
    'plan.pro.f6':       'Weekly content updates',
    'plan.pro.f7':       'Integrated blog',
    'plan.pro.f8':       'Delivery in 5 days',

    /* ── Plan Hosting ── */
    'plan.host.name':    'Hosting & Maintenance',
    'plan.host.price':   '29',
    'plan.host.desc':    'Keep your website always active and secure.',
    'plan.host.f1':      'Premium hosting included',
    'plan.host.f2':      'Free domain 1st year',
    'plan.host.f3':      'SSL certificate (HTTPS)',
    'plan.host.f4':      'Automatic daily backups',
    'plan.host.f5':      'Security updates',
    'plan.host.f6':      '24/7 monitoring',

    /* ── CTA section ── */
    'cta.h2':            'Ready to have the website your business deserves?',
    'cta.sub':           'Let\'s talk today. No commitment, no technicalities.',
    'cta.btn1':          'Request a quote',
    'cta.btn2':          'Call now',

    /* ── About ── */
    'about.tag':         'Who we are',
    'about.h1':          'Born to help SMEs compete digitally',
    'about.p1':          'PymeLab was born in 2025 with a clear mission: no small business should be left without a professional digital presence due to lack of time, budget or technical knowledge.',
    'about.p2':          'We are a team passionate about design and technology, with experience in dozens of projects for businesses in all sectors.',
    'about.p3':          'Our differentiator is simple: we deliver spectacular websites in record time, at prices that make sense for an SME.',
    'about.v1':          'Speed',
    'about.v1d':         'We deliver in days, not months.',
    'about.v2':          'Quality',
    'about.v2d':         'Premium design without compromise.',
    'about.v3':          'Fair price',
    'about.v3d':         'Affordable for any SME.',
    'about.v4':          'Real support',
    'about.v4d':         'Always available for you.',

    /* ── Contact ── */
    'contact.tag':       'Let\'s talk',
    'contact.h1':        'Tell us about your project',
    'contact.sub':       'We\'ll respond in less than 24 hours.',
    'contact.name':      'Full name',
    'contact.email':     'Email',
    'contact.phone':     'Phone (optional)',
    'contact.company':   'Company',
    'contact.message':   'Tell us about your project',
    'contact.send':      'Send message',
    'contact.sending':   'Sending...',
    'contact.sent':      'Message sent! We\'ll reply soon.',

    /* ── Budget ── */
    'budget.tag':        'Quote',
    'budget.h1':         'Calculate your website cost',
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
    'thanks.sub':        'Thank you for contacting PymeLab. We\'ll respond in less than 24 hours.',
    'thanks.back':       'Back to home',

    /* ── Footer ── */
    'footer.tagline':    'Professional websites for SMEs.',
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
