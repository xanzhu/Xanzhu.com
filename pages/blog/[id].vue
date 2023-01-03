<template>
  <div v-if="post" class="container mb-4 mx-auto md:(px-6 mb-0 justify-center) lg:px-12" role="main">
    <article class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-md md:mb-12" itemscope
      itemtype="https://schema.org/BlogPosting">
      <BlogPostHeader v-bind:post="post" />
      <ContentRenderer :value="post" itemprop="articleBody"
        class="prose prose-sm md:prose-md lg:prose-lg px-4 mx-auto my-4 dark:text-light-200 text-black leading-normal" />
      <LazyBlogPrevNext :prev="prev" :next="next" />
    </article>
  </div>
  <LazyGlobalAppError class="mt-20" v-else />
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
<style>
.prose h1 {
  visibility: hidden;
}

.prose h2 a {
  text-decoration: none;
  pointer-events: none;
  font-weight: 500;
}

.prose h2 {
  color: #000;
}

.prose pre {
  background-color: #eaeaea;
  color: rgb(0, 0, 0);
  border: 1px solid #d1d1d1
}

.prose a[href^="https"] {
  color: #000;
  text-underline-offset: 4px;
  text-decoration-color: #0066CC;
  font-weight: normal;
}

.prose a:hover {
  color: #0066CC;
  text-decoration-thickness: 2px;
}

@media (prefers-color-scheme: dark) {
  .dark .prose a[href^="https"] {
    color: #fff;
    text-decoration-color: #FF0000;
  }

  .dark .prose a {
    color: #fff;
  }

  .dark .prose h2 {
    color: #fff;
  }

  .dark .prose a:hover {
    color: #FF0000;
    text-decoration-thickness: 2px;
  }

  .dark .prose pre {
    background-color: #141414;
    color: #fff;
    border: 1px solid #333333
  }
}
</style>