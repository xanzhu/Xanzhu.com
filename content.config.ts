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
        images.push({
          loc: String(entry.img).startsWith('http')
            ? String(entry.img)
            : `https://xanzhu.com${entry.img}`,
          title: String(entry.title || ''),
        })
      }

      if (entry.body && typeof entry.body === 'object') {
        const bodyString = JSON.stringify(entry.body)

        const matches = bodyString.match(/https:\/\/cdn\.xanzhu\.com\/[^"'\s?]+(\.webp|\.jpg|\.png|\.jpeg)/g)

        if (matches) {
          matches.forEach((src) => {
            const cleanSrc = src.replace(/\\/g, '')

            if (!images.find(i => i.loc === cleanSrc)) {
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

export const collections = {
  blog_en: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'en/blog/**/*.md', prefix: '/blog' },
      schema: commonContentSchema,
    }, createImageExtractor('blog_en')),
  ),
  blog_ko: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'ko/blog/**/*.md', prefix: '/ko/blog' },
      schema: commonContentSchema,
    }, createImageExtractor('blog_ko')),
  ),
  blog_zh: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'zh/blog/**/*.md', prefix: '/zh/blog' },
      schema: commonContentSchema,
    }, createImageExtractor('blog_zh')),
  ),
  resources_en: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'en/resources/**/*.md', prefix: '/resources' },
      schema: commonContentSchema,
    }),
  ),
  resources_ko: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'ko/resources/**/*.md', prefix: '/ko/resources' },
      schema: commonContentSchema,
    }),
  ),
  resources_zh: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'zh/resources/**/*.md', prefix: '/zh/resources' },
      schema: commonContentSchema,
    }),
  ),
} as const
