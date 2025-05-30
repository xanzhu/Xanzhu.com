<script setup lang="ts">
import type { PrevNext } from '../../components/Blog/PrevNext.vue'

const { path } = useRoute()
const { locale } = useI18n()
const config = useRuntimeConfig()

const { data: post } = await useAsyncData(path.replace(/\/$/, '/'), async () => {
  return await queryContent().where({ _path: path }).only(['_path', 'title', 'body', 'toc', 'description', 'img', 'date', 'tag', 'alt', 'updated']).findOne()
})

if (!post.value)
  throw createError({ statusCode: 404 })

const seoTitle = post.value?.title
const seoDesc = post.value?.description
const seoImage = config.public.i18n.baseUrl + post.value?.img
const titleSuffix = ' - Xanzhu'

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: `${seoTitle}${titleSuffix}`,
  ogDescription: seoDesc,
  twitterTitle: `${seoTitle}${titleSuffix}`,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  ogType: 'article',
  ogImage: seoImage,
})

const { data: prevNext } = await useAsyncData(`prevNext-${path}`, async () => {
  const queryPath = locale.value !== 'en' ? `/${locale.value}/blog` : '/blog'
  return await queryContent(queryPath)
    .sort({ date: -1 })
    .only(['_path', 'title', 'img', 'alt'])
    .limit(2)
    .findSurround(path)
})

const [prevData, nextData] = prevNext.value || []

const prev = prevData as PrevNext | undefined
const next = nextData as PrevNext | undefined
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
        <hr class="w-80% rounded-md op40 core-border core-ui">
        <div v-if="post._path && post.title">
          <h4 class="mt5 text-center text-lg font-normal op90">
            {{ $t('share.title') }}
          </h4>
          <LazyBlogSocialShare :post="{ _path: post._path, title: post.title }" />
        </div>
      </div>
      <LazyBlogPrevNext :prev="prev" :next="next" />
    </article>
  </main>
</template>
