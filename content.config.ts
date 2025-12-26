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

const pageTypeConfig = { type: 'page' as const }

export const collections = {
  blog_en: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'en/blog/**/*.md', prefix: '/blog' },
      schema: commonContentSchema,
    }),
  ),
  blog_ko: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'ko/blog/**/*.md', prefix: '/ko/blog' },
      schema: commonContentSchema,
    }),
  ),
  blog_zh: defineCollection(
    asSitemapCollection({
      ...pageTypeConfig,
      source: { include: 'zh/blog/**/*.md', prefix: '/zh/blog' },
      schema: commonContentSchema,
    }),
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
