<script setup lang="ts">
const { t, locale } = useI18n()
const path = useRoute()

const { data: articles } = await useAsyncData('articles', () => {
  return queryContent(`${locale.value}/blog`)
    .sort({ date: -1 })
    .find()
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
      class="grid grid-cols-1 gap-10 md:(grid-cols-2 mx-6) lg:(grid-cols-3) p-4 sm:(py-15 px-10) dark:(bg-dark-900) border-outline bg-gray-100">
      <div v-if="articles" v-for="(article, $index) in articles" :key="`fe-${$index}`">
        <NuxtLink class="flex flex-col space-y-3 group grid-col-auto" :to="(article._path)">
          <NuxtImg crossorigin="anonymous" v-if="article.img" :alt="article.alt" loading="lazy" height="369" width="577"
            class="border-outline zoomef object-fit w-full" :src="article.img" />
          <NuxtImg crossorigin="anonymous" v-else-if="article.media" :src="article.media" :alt="article.alt"
            loading="lazy" sizes="sm:100vw md:50vw lg:25vw" provider="cloudinary" height="369" width="577"
            class="border-outline zoomef object-fit w-full" />
          <NuxtImg crossorigin="anonymous" v-else :alt="article.alt" class="zoomef border-outline object-fit w-full"
            height="369" width="577" loading="lazy" src="https://source.unsplash.com/kUmcSBJcFPg/577x369" />
          <div class="flex flex-row space-x-2">
            <p v-if="article.tag" class="dark:(bg-black text-white) bg-white px-4 py-1.5 border-outline text-xs">
              {{ article.tag }}
            </p>
            <Date v-if="article.date" :date="article.date"
              class="dark:(bg-black text-white) bg-white mr-auto px-4 border-outline py-1.5 text-xs" />
          </div>
          <h2
            class="rounded-md font-medium text-xl dark:(text-white) sm:group-hover:(underline decoration-1 underline-offset-4)">
            {{ article.title }}
          </h2>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>