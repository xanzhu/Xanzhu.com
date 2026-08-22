<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import type { Post } from '~/types/post'

const route = useRoute()
const { locale, t } = useI18n()
const config = useRuntimeConfig()
const collectionName = `blog_${locale.value}` as keyof Collections
const currentPath = route.path

const [{ data: post }, { data: surround }] = await Promise.all([
  useAsyncData(`post-${locale.value}-${currentPath}`, () =>
    queryCollection(collectionName).path(currentPath).first() as Promise<Post>, { dedupe: 'defer' }),

  useAsyncData(`surround-${locale.value}-${currentPath}`, () =>
    queryCollectionItemSurroundings(collectionName, currentPath, {
      before: 1,
      after: 1,
      fields: ['title', 'path', 'date', 'img'],
    }), { dedupe: 'defer' }),
])

if (!post.value) {
  throw createError({ status: 404, fatal: true })
}

watch(
  () => post.value?.title,
  (title) => {
    if (title)
      route.meta.title = title
  },
  { immediate: true },
)
const titleSuffix = ' - Xanzhu'
const baseUrl = config.public.i18n.baseUrl

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
  ogTitle: () => `${post.value?.title}${titleSuffix}`,
  ogDescription: () => post.value?.description,
  ogType: 'article',
  ogImage: () => post.value?.img ? `${baseUrl}${post.value.img}` : `${baseUrl}/guard.webp`,
  twitterCard: 'summary_large_image',
  articlePublishedTime: () => post.value?.date,
  articleModifiedTime: () => post.value?.updated,
  ogImageHeight: 630,
  ogImageWidth: 1200,
  ogImageAlt: () => post.value?.alt,
})
</script>

<template>
  <main v-if="post" class="mx-auto mt-5 md:(mb-0 px-6)">
    <article class="pb-2 text-inherit md:(mb-12) sm:rounded-sm" itemscope itemtype="https://schema.org/Article">
      <BlogArticleHeader :post="post" />
      <div class="flex flex-col-reverse justify-center lg:(flex-row gap10)">
        <div>
          <ContentRenderer
            :value="post" itemprop="articleBody"
            class="mx-auto max-w-3xl px-4 leading-normal prose md:px-0 dark:prose-invert"
          />
        </div>
        <aside
          v-if="post.body?.toc?.links?.length"
          class="mt2"
        >
          <BlogToc :links="post.body?.toc?.links ?? []" class="lg:sticky lg:top-20" />
        </aside>
      </div>
      <div class="mt10 flex flex-col items-center justify-center">
        <hr class="w-80% core-border rounded-md core-ui op40">
        <div v-if="post.path && post.title">
          <h4 class="mb4 mt5 text-center text-lg font-normal op90">
            {{ t('ui.sharing.title') }}
          </h4>
          <LazyBlogSocialShare :post="{ path: post.path, title: post.title }" />
        </div>
      </div>
      <LazyBlogPrevNext v-if="surround" :surround="surround" />
    </article>
  </main>
</template>
