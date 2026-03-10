import { defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

const commonContentSchema = z.object({
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

interface SitemapImage {
  loc: string
  title?: string
}

function createImageExtractor(name: string) {
  return {
    name,
    onUrl: (url: any, entry: any) => {
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
        const CDN_BASE = 'https://cdn.xanzhu.com/'
        const EXTENSIONS = ['.webp', '.jpg', '.png', '.jpeg']

        let searchStart = 0
        while (true) {
          const idx = bodyString.indexOf(CDN_BASE, searchStart)
          if (idx === -1)
            break

          const end = bodyString.indexOf('"', idx)
          if (end === -1)
            break

          const src = bodyString.slice(idx, end).split('\\').join('')

          if (EXTENSIONS.some(ext => src.endsWith(ext)) && !images.some(i => i.loc === src)) {
            images.push({ loc: src })
          }

          searchStart = end
        }
      }

      url.images = images
    },
  }
}

const pageTypeConfig = { type: 'page' as const }
const locales = ['en', 'ko', 'zh'] as const
const collections: Record<string, any> = {}

for (const locale of locales) {
  const prefix = locale === 'en' ? '' : `/${locale}`

  collections[`blog_${locale}`] = defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: `${locale}/blog/**/*.md`, prefix: `${prefix}/blog` },
      schema: commonContentSchema,
    }, createImageExtractor(`blog_${locale}`)),
  )

  collections[`resources_${locale}`] = defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: `${locale}/resources/**/*.md`, prefix: `${prefix}/resources` },
      schema: commonContentSchema,
    }),
  )
}

export { collections }
