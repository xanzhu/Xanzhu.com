import { defineCollection, z } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'

interface SitemapImage {
  loc: string
  title?: string
}

const CDN_BASE = 'https://cdn.xanzhu.com/'
const CDN_EXTENSIONS = ['.webp', '.jpg', '.png', '.jpeg']

function extractImages(url: any, entry: any) {
  const images: SitemapImage[] = []

  if (entry.img) {
    const imgLoc = String(entry.img)
    images.push({
      loc: imgLoc.startsWith('https://') ? imgLoc : `https://xanzhu.com${imgLoc}`,
      title: String(entry.title || ''),
    })
  }

  if (entry.body && typeof entry.body === 'object') {
    const bodyString = JSON.stringify(entry.body)
    let searchStart = 0

    while (true) {
      const idx = bodyString.indexOf(CDN_BASE, searchStart)
      if (idx === -1) break

      const end = bodyString.indexOf('"', idx)
      if (end === -1) break

      const src = bodyString.slice(idx, end).split('\\').join('')

      if (CDN_EXTENSIONS.some(ext => src.endsWith(ext)) && !images.some(i => i.loc === src)) {
        images.push({ loc: src })
      }

      searchStart = end
    }
  }

  url.images = images
  return url
}

const baseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().min(1),
  img: z.string().optional(),
  feature: z.boolean().optional(),
  tag: z.string().optional(),
  alt: z.string().optional(),
  toc: z.string().optional(),
  updated: z.string().optional(),
})

const blogSchema = baseSchema.extend({
  sitemap: defineSitemapSchema({ 
    name: 'blog',
    onUrl: extractImages 
  }),
})

const resourceSchema = baseSchema.extend({
  sitemap: defineSitemapSchema({
    name: 'resources'
  }),
})

const locales = ['en', 'ko', 'zh'] as const
const collections: Record<string, any> = {}

for (const locale of locales) {
  const prefix = locale === 'en' ? '' : `/${locale}`

  collections[`blog_${locale}`] = defineCollection({
    type: 'page',
    source: { include: `${locale}/blog/**/*.md`, prefix: `${prefix}/blog` },
    schema: blogSchema,
  })

  collections[`resources_${locale}`] = defineCollection({
    type: 'page',
    source: { include: `${locale}/resources/**/*.md`, prefix: `${prefix}/resources` },
    schema: resourceSchema,
  })
}

export { collections }