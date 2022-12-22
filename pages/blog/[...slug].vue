<script setup lang="ts">
const { path } = useRoute()
const { locale } = useI18n()

const { data: post } = await useAsyncData(path.replace(/\/$/, ''), () => {
  return queryContent(`${locale.value}/blog`)
    .where({ _path: path })
    .findOne()
})

// Testing limiting title/desc lengths
const sliceString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  const lastSpaceIndex = str.substring(0, maxLength).lastIndexOf(' ');
  return lastSpaceIndex !== -1 ? str.slice(0, lastSpaceIndex) : str.slice(0, maxLength);
};

const titleLength = 60;
let title = post.value?.title.trim();
title = sliceString(title, titleLength);

const descLength = 120;
let desc = post.value?.description.trim();
desc = sliceString(desc, descLength)

useHead({
  title: title,
  meta: [
    { name: 'description', content: desc },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: desc },
    { property: 'og:url', content: `https://xanzhu.com${path}` },
    { property: 'og:type', content: 'article' },
    // Double check this
    { property: 'og:image', content: post.value?.ogLink || post.value?.media }
  ]
})

const { data } = await useAsyncData('prev-next',
  () => queryContent(locale.value + '/blog')
    .sort({ date: -1 })
    .only(['_path'])
    .findSurround(path),
)
const [prev, next] = data.value || []

</script>
<template>
  <div v-if="post" class="container mb-4 mx-auto md:(px-6 mb-0 justify-center) lg:px-12" role="main">
    <article class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-md md:mb-12">
      <header class="flex flex-col lg:(flex-row items-center top-0) md:(border-outline bg-gray-100 dark:bg-black)">
        <div class="flex flex-col mx-4 mt-4 space-y-2 sm:space-y-1 md:mx-6">
          <div class="text-xs space-x-2 inline-flex items-center">
            <p class="dark:(text-[#FF0000] bg-transparent) font-semibold text-[#0066CC] tracking-wide">
              {{ post.tag }}
            </p>
            <Date v-if="post.date" :date="post.date" />
          </div>
          <h1
            class="text-xl sm:leading-tight md:(text-2xl mr-6) lg:text-3xl xl:text-5xl font-semibold break-words lg:(flex-1 pb-2)">
            {{ post.title }}
          </h1>
          <!-- Convert into Component | Add Translation (Author) -->
          <div class="flex flex-row items-center space-x-2 text-xs">
            <p>By: <span class="text-[#0066CC] dark:text-[#FF0000] font-semibold">Example User</span>,</p>
            <BlogReadTime class="flex" :content="post.body" />
          </div>

        </div>
        <div class="flex justify-center items-center h-56 sm:(min-h-sm mx-4) md:(mx-4) my-4 overflow-hidden lg:(w-4/6)">
          <NuxtImg crossorigin="anonymous" v-if="post.media && !post.img"
            class="object-cover w-full h-full sm:rounded-md" sizes="sm:100vw md:50vw lg:25vw" :src="post.media"
            :alt="post.alt" :title="post.alt" format="webp" fit="cover" loading="eager" provider="cloudinary" />
          <NuxtImg crossorigin="anonymous" v-if="post.img || (post.img && post.media)" :alt="post.alt" loading="lazy"
            class="border-outline max-h-xl" :src="post.img" />
        </div>
      </header>
      <div v-if="post.source"
        class="dark:(text-light-200 opacity-65) text-dark-700 text-sm opacity-80 italic pr-2 sm:(pr-6 mt-2) -mt-3 text-right">
        <p v-t="'article.creditsource'" class="inline-block" />: {{ post.source }}
      </div>
    </article>
    <ContentRenderer :value="post"
      class="prose prose-sm md:prose-md lg:prose-lg px-4 mx-auto my-4 dark:text-light-200 text-black leading-normal no-underline" />
    <LazyBlogPrevNext :prev="prev" :next="next" />
  </div>
  <!-- Bug: Redirect to 404 page on error -->
  <NotFound class="mt-20" v-else />
</template>
<style>
.nuxt-content h1 {
  font-weight: bold;
  font-size: 46px;
}

.nuxt-content h2 {
  font-weight: 600;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: 500;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}
</style>
