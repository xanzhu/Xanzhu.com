<template>
  <div v-if="post" class="container mb-4 mx-auto md:(px-6 mb-0 justify-center) lg:px-12" role="main">
    <article class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-md md:mb-12">
      <BlogPostHeader v-bind:post="post" />
    </article>
    <ContentRenderer :value="post"
      class="prose dark:prose-red prose-blue prose-sm md:prose-md lg:prose-lg px-4 mx-auto my-4 dark:text-light-200 text-black leading-normal no-underline" />
    <LazyBlogPrevNext :prev="prev" :next="next" />
  </div>
  <LazyAppError class="mt-20" v-else />
</template>
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