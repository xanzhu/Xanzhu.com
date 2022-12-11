<script setup lang="ts">
const { t, locale } = useI18n()
const path = useRoute()

const { data: articles } = await useAsyncData('articles', () => {
  return queryContent(`${locale.value}/blog`).find()
})

const title = t('blog.landing.title')
const desc = t('blog.landing.desc')

useHead({
  title: title,
  meta: [
    { property: 'og:title', content: title },
    // Add custom meta.description/title for /blog
    { name: 'description', content: desc },
    { property: 'og:description', content: desc },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: desc },
    // Double check this
    { property: 'og:url', content: `https://xanzhu.com/${path}` },
    // Replace this image with custom
    { property: 'og:image', content: 'https://source.unsplash.com/kUmcSBJcFPg' }
  ]
})


</script>
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
      class="grid grid-cols-1 gap-10 md:(grid-cols-2 mx-6) lg:(grid-cols-3) p-4 sm:(py-15 px-10) dark:(bg-dark-900 border-dark-300) border-1 border-gray-200 bg-gray-100 rounded">
      <div v-if="articles" v-for="(article, $index) in articles" :key="`fe-${$index}`">
        <NuxtLink class="flex flex-col space-y-3" :to="(article._path)">
          <NuxtImg v-if="article.img" class="dark:(border-dark-300 border-1) rounded-md max-h-xl" :src="article.img" />
          <NuxtImg v-else-if="article.media" :src="article.media" sizes="sm:100vw md:50vw lg:25vw" provider="cloudinary"
            class="dark:(border-dark-300 border-1) rounded-md max-h-xl" />
          <NuxtImg v-else class="dark:(border-dark-300 border-1) rounded-md"
            src="https://source.unsplash.com/kUmcSBJcFPg/577x369" />
          <div class="flex flex-row space-x-2">
            <p v-if="article.tag"
              class="dark:(bg-black text-white border-dark-300) px-4 border-1 py-1.5 rounded-md text-xs">
              {{ article.tag }}
            </p>
            <Date v-if="article.date" :date="article.date"
              class="dark:(bg-black text-white border-dark-300) mr-auto px-4 border-1 py-1.5 rounded-md text-xs" />
          </div>
          <h2 class="rounded-md font-medium text-xl dark:(text-white)">
            {{ article.title }}
          </h2>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>