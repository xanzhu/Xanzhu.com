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
      <UIBlogPostHeader v-bind:post="post" />
    </article>
    <ContentRenderer :value="post"
      class="prose prose-sm md:prose-md lg:prose-lg px-4 mx-auto my-4 dark:text-light-200 text-black leading-normal no-underline" />
    <LazyUIBlogPrevNext :prev="prev" :next="next" />
  </div>
  <NotFound class="mt-20" v-else />
</template>
<style scoped>
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
