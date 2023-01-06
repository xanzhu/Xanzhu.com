<template>
  <div class="mx-auto space-y-20 dark:text-white text-black sm:mb-10" role="main">
    <div class="mt-15 mx-2 sm:mx-8 lg:mx-10">
      <h1 class="font-semibold text-4xl">
        {{ title }}
      </h1>
      <p class="text-lg break-words font-thin sm:(text-xl) dark:text-gray-300">
        {{ desc }}
      </p>
    </div>
    <section
      class="grid grid-cols-1 gap-10 md:(grid-cols-2 mx-6) lg:(grid-cols-3) p-4 sm:(py-15 px-10) dark:(bg-dark-900) border-outline bg-gray-100">
      <div v-if="articles" v-for="(article, $index) in articles" :key="`fe-${$index}`">
        <NuxtLink class="flex flex-col group zoomef border-outline" :to="(article._path)">
          <NuxtImg crossorigin="anonymous" v-if="article.img" :alt="article.alt" loading="lazy" height="369" width="577"
            class="rounded-t-md" :src="article.img" />
          <NuxtImg crossorigin="anonymous" v-else-if="article.media" :src="article.media" :alt="article.alt"
            loading="lazy" sizes="sm:100vw md:50vw lg:25vw" provider="cloudinary" height="369" width="577"
            class="object-fit w-full rounded-t-md" />
          <NuxtImg crossorigin="anonymous" v-else :alt="article.alt" class="object-fit w-full rounded-t-md" height="369"
            width="577" loading="lazy" src="https://source.unsplash.com/kUmcSBJcFPg/577x369" />
          <GlobalUtilsDate v-if="article.date" :date="article.date"
            class="dark:(bg-black text-white) bg-white px-4 py-2 border-r-1 border-b-1 rounded-tr-none rounded-bl-none rounded-tl-md rounded-b border-t-none border-l-none text-xs absolute border-gray-300 dark:border-dark-300" />
          <div class="dark:(bg-black text-white) bg-white rounded-b-md h-auto">
            <h2 class="font-medium text-xl p-4 mx-3">
              {{ article.title }}
            </h2>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n()
const path = useRoute()

const { data: articles } = await useAsyncData('articles', () => {
  return queryContent(`${locale.value}/blog`)
    .sort({ date: -1 })
    .find()
})

const title = t('Blog.meta.title')
const desc = t('Blog.meta.description')

useHead({
  title: title,
  meta: [
    { property: 'og:title', content: title },
    { name: 'description', content: desc },
    { property: 'og:description', content: desc },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: desc },
    { property: 'og:url', content: `https://xanzhu.com/${locale.value}/blog` },
    { property: 'og:image', content: 'https://source.unsplash.com/kUmcSBJcFPg' }
  ]
})
</script>