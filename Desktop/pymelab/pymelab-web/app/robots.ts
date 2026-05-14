import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/gracias', '/api/'],
      },
    ],
    sitemap: 'https://pymelabagency.com/sitemap.xml',
  }
}
