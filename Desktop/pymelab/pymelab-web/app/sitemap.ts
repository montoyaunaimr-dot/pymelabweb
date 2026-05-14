import { MetadataRoute } from 'next'

const BASE_URL = 'https://pymelabagency.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/',              priority: 1.0,  changeFrequency: 'weekly' as const },
    { url: '/servicios',     priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/pricing',       priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/portfolio',     priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/sobre-nosotros',priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/contacto',      priority: 0.8,  changeFrequency: 'yearly' as const },
    { url: '/presupuesto',   priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/blog',          priority: 0.7,  changeFrequency: 'weekly' as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
