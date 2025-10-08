<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const { locale } = useI18n()
const config = useRuntimeConfig()

const slug = computed(() => Array.isArray(route.params.slug)
  ? route.params.slug as string[]
  : [route.params.slug as string],
)

const collection = computed(() => `blog_${locale.value}` as keyof Collections)
const path = computed(() =>
  `/${locale.value === 'en' ? '' : `${locale.value}/`}blog/${slug.value.join('/')}`,
)

const { data: post } = await useAsyncData(path.value, async () =>
  await queryCollection(collection.value).path(withoutTrailingSlash(route.path)).first())

const { data: surround } = await useAsyncData(`surround-${locale.value}${path.value}`, async () =>
  await queryCollectionItemSurroundings(collection.value, path.value, {
    before: 1,
    after: 1,
    fields: ['title', 'path', 'date', 'img'],
  })
    .order('date', 'DESC'))

if (!post.value)
  throw createError({ statusCode: 404 })

const seoTitle = computed(() => post.value?.title || 'Default Blog Title')
const seoDesc = computed(() => post.value?.description || 'Explore our latest blog posts.')
const seoImage = computed(() => {
  const img = post.value?.img
  return img ? config.public.i18n.baseUrl + img : `${config.public.i18n.baseUrl}/guard.webp`
})
const titleSuffix = ' - Xanzhu'

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: computed(() => `${seoTitle.value}${titleSuffix}`),
  ogDescription: seoDesc,
  twitterTitle: computed(() => `${seoTitle.value}${titleSuffix}`),
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  ogType: 'article',
  ogImage: seoImage,
})

// BreadCrumbs
if (post.value?.title) {
  route.meta.title = post.value.title
}
</script>

<template>
  <main v-if="post" class="mx-auto mt-10 md:(mb-0 mt-15 px-6) sm:mt-10">
    <article class="pb-2 text-inherit md:(mb-12) sm:rounded-sm" itemtype="https://schema.org/Article" itemscope>
      <BlogArticleHeader :post="post" />
      <div class="flex flex-col-reverse justify-center lg:(flex-row gap10)">
        <div>
          <ContentRenderer
            :value="post" itemprop="articleBody"
            class="mx-auto max-w-3xl px-4 leading-normal prose md:px-0 dark:prose-invert"
          />
        </div>
        <aside v-if="post.toc" class="mt2">
          <BlogToc :links="post.body?.toc?.links ?? []" class="lg:sticky lg:top-20" />
        </aside>
      </div>
      <div class="mt10 flex flex-col items-center justify-center">
        <hr class="w-80% core-border rounded-md core-ui op40">
        <div v-if="post.path && post.title">
          <h4 class="mb4 mt5 text-center text-lg font-normal op90">
            {{ $t('share.title') }}
          </h4>
          <LazyBlogSocialShare :post="{ path: post.path, title: post.title }" />
        </div>
      </div>
      <LazyBlogPrevNext v-if="surround" :surround="surround" />
    </article>
  </main>
</template>
