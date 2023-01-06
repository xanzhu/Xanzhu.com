<template>
  <div v-if="post" class="container mb-4 mx-auto md:(px-6 mb-0 justify-center)" role="main">
    <article class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-md md:mb-12" itemscope
      itemtype="https://schema.org/BlogPosting">
      <BlogPostHeader v-bind:post="post" />
      <div class="flex flex-col-reverse md:(flex-row)">
        <ContentRenderer :value="post" itemprop="articleBody"
          class="prose prose-sm md:prose-md lg:prose-lg px-4 mx-auto my-4 dark:text-light-200 text-black leading-normal" />
        <aside class="mt-5 md:(mt-15 mr-4)">
          <BlogToc :links="post.body.toc.links" class="md:sticky top-20" />
        </aside>
      </div>
      <!-- Fix Sizing/Colors with new TOC -->
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

const title = post.value?.title;
const desc = post.value?.description;

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

.prose h3,
h4,
h5,
h6 a {
  text-decoration: none;
  pointer-events: none;
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
  color: #000;
  border: 1px solid #d1d1d1;
  overflow: hidden;
  white-space: pre-wrap;
}

.prose a[href^="https"] {
  color: #000;
  text-underline-offset: 4px;
  text-decoration-color: #0066cc;
  font-weight: normal;
}

.prose a:hover {
  color: #0066cc;
  text-decoration-thickness: 2px;
}

.prose ol>li::before {
  color: #0066cc;
}

.prose ul>li::before {
  background-color: #0066cc;
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

  .dark .prose ol>li::before {
    color: #ff0000;
  }

  .dark .prose ul>li::before {
    background-color: #ff0000;
  }
}
</style>