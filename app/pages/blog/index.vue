<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const config = useRuntimeConfig()
const { locale, t } = useI18n()
const route = useRoute()
const collectionName = `blog_${locale.value}` as keyof Collections
const currentPath = route.path

const { data: posts } = await useAsyncData(
  `blogArticles-${locale.value}`,
  () => queryCollection(collectionName)
    .select('title', 'date', 'img', 'description', 'path', 'tag', 'alt')
    .order('date', 'DESC')
    .all(),
  { dedupe: 'defer' },
)

const seoImage = 'https://images.pexels.com/photos/27277185/pexels-photo-27277185.jpeg'
useLangMeta('seo.blog', seoImage)

const baseUrl = config.public.i18n.baseUrl

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${baseUrl}${currentPath}`,
        'name': t('seo.blog.title'),
        'url': `${baseUrl}${currentPath}`,
        'description': t('seo.blog.desc'),
        'inLanguage': locale.value,
        'publisher': {
          '@id': 'https://xanzhu.com/#organization',
        },
      })),
    },
  ],
})
</script>

<template>
  <main class="mx-auto text-black sm:mb-10 space-y-10 2xl:px35 xl:px28 dark:text-white">
    <div class="mx-4 mt-5 flex flex-col lg:mx-10 sm:(mx-10 mt-15) space-y-2">
      <h1 class="mb0 text-3xl font-semibold sm:text-5xl">
        {{ t("blog.h1") }}
      </h1>
      <p class="text-md break-words font-400 op70 sm:(w2/3 text-xl) dark:text-gray-300">
        {{ t("blog.desc") }}
      </p>
    </div>
    <ul
      v-if="posts?.length"
      class="grid grid-cols-1 gap-5 rounded-sm p-4 lg:(grid-cols-3 gap-5) md:(grid-cols-2 gap-10) sm:(px-10 py-15)"
    >
      <li v-for="(article, index) in posts" :key="article.path" class="list-none">
        <article>
          <NuxtLinkLocale class="group flex flex-col no-underline" :to="article.path">
            <NuxtImg
              v-if="article.img" crossorigin="anonymous" :alt="article.alt" :title="article.alt" :loading="index < 3 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : 'auto'" decoding="async"
              height="369" width="577" fit="cover" format="webp"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 557px"
              class="h-full w-full transform core-border rounded-md md:(transition duration-400 ease-in-out group-hover:scale-102)"
              :src="article.img"
            />
            <div class="h-auto py2 text-black space-y-2 dark:text-white">
              <div
                class="children:(inline-flex core-border rounded-md core-ui px4 py2 text-xs op80 dark:op100) space-x-2"
              >
                <UiDate v-if="article.date" :date="article.date" />
                <p v-if="article.tag" class="m0">
                  {{ article.tag }}
                </p>
              </div>
              <h2 class="m0 text-xl font-semibold underline-1 group-hover:(underline underline-offset-4)">
                {{ article.title }}
              </h2>
              <p class="text-neutral-600 dark:text-neutral-300">
                {{ article.description }}
              </p>
            </div>
          </NuxtLinkLocale>
        </article>
      </li>
    </ul>
    <p v-else class="text-center op70">
      {{ t('error.blog.notFound') }}
    </p>
  </main>
</template>
