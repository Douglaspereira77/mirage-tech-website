import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gomiragetech.com'
  const locales = ['en', 'ar']
  const routes = [
    '',
    '/services',
    '/services/ai-seo',
    '/services/ai-automation',
    '/services/custom-tools',
    '/portfolio',
    '/about',
    '/contact',
    '/audit',
    '/blog',
    '/partnership/bestofkuwait',
    '/how-it-works'
  ]
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      })
    })
  })

  return sitemapEntries
}
