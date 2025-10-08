import { defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  img: z.string().optional(),
  feature: z.boolean().optional(),
  tag: z.string().optional(),
  alt: z.string().optional(),
  toc: z.string().optional(),
})

export const collections = {
  blog_en: defineCollection(
    asSitemapCollection({
      type: 'page',
      source: {
        include: 'en/blog/**/*.md',
        prefix: '/blog',
      },
      schema: commonContentSchema,
    }),
  ),
  blog_ko: defineCollection(
    asSitemapCollection({
      type: 'page',
      source: {
        include: 'ko/blog/**/*.md',
        prefix: '/ko/blog',
      },
      schema: commonContentSchema,
    }),
  ),
  blog_zh: defineCollection(
    asSitemapCollection({
      type: 'page',
      source: {
        include: 'zh/blog/**/*.md',
        prefix: '/zh/blog',
      },
      schema: commonContentSchema,
    }),
  ),
}
