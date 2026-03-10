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

const BODY_MATCH = /https:\/\/cdn\.xanzhu\.com\/[^"'\s?]+(\.webp|\.jpg|\.png|\.jpeg)/g
const TRAILING_SLASH = /\\/g

function createImageExtractor(name: string) {
  return {
    name,
    onUrl: (url: any, entry: any) => {
      const images: SitemapImage[] = []
      if (entry.img) {
        images.push({
          loc: String(entry.img).startsWith('https://')
            ? String(entry.img)
            : `https://xanzhu.com${entry.img}`,
          title: String(entry.title || ''),
        })
      }

      if (entry.body && typeof entry.body === 'object') {
        const bodyString = JSON.stringify(entry.body)

        const matches = bodyString.match(BODY_MATCH)

        if (matches) {
          matches.forEach((src) => {
            const cleanSrc = src.replace(TRAILING_SLASH, '')

            if (!images.some(i => i.loc === cleanSrc)) {
              images.push({ loc: cleanSrc })
            }
          })
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
