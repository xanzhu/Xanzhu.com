<script setup lang="ts">
import type { PrevNext } from '../../components/Blog/PrevNext.vue'

const route = useRoute()
const { locale } = useI18n()
const config = useRuntimeConfig()

const slugParam = route.params.slug
const articleSlug = Array.isArray(slugParam)
  ? slugParam.join('/')
  : slugParam || ''

const { data: post } = await useAsyncData(
  `blogPost-${locale.value}-${articleSlug}`,
  async () => {
    if (!articleSlug) {
      return null
    }
    const fetchedPost = await queryContent('blog', articleSlug)
      .locale(locale.value)
      .only(['_path', 'title', 'body', 'toc', 'description', 'img', 'date', 'tag', 'alt', 'updated'])
      .findOne()
    return fetchedPost
  },
  {
    watch: [locale, () => route.params.slug],
  },
)

watch(
  post,
  (newPost) => {
    if (!newPost) {
      if (route.name && String(route.name).includes('blog-slug')) {
        throw createError({ statusCode: 404, fatal: true })
      }
    }
  },
  { immediate: true },
)

const seoTitle = computed(() => post.value?.title || 'Default Blog Title')
const seoDesc = computed(() => post.value?.description || 'Explore our latest blog posts.')
const seoImage = computed(() => {
  const imageUrl = post.value?.img
  return imageUrl ? config.public.i18n.baseUrl + imageUrl : `${config.public.i18n.baseUrl}/guard.webp`
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

const { data: prevNext } = await useAsyncData(
  `prevNext-${locale.value}-${post.value?._path}`,
  async () => {
    if (!post.value || !post.value._path) {
      return null
    }
    return await queryContent('blog')
      .locale(locale.value)
      .sort({ date: -1 })
      .only(['_path', 'title', 'img', 'alt'])
      .findSurround(post.value._path)
  },
  {
    watch: [locale, () => post.value?._path],
  },
)

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
        <hr class="w-80% core-border rounded-md core-ui op40">
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
