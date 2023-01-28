<template>
  <div v-if="post" class="container mb-4 mx-auto md:(px-6 mb-0)" role="main">
    <article
      class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-md md:(space-y-10 mb-12)"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <BlogPostHeader v-bind:post="post" />
      <div
        class="flex flex-col-reverse md:(flex-row space-x-6 space-x-2) mx-auto justify-center"
      >
        <aside class="mt-2">
          <BlogSocialShare v-bind:post="post" />
        </aside>
        <div>
          <ContentRenderer
            :value="post"
            itemprop="articleBody"
            class="prose prose-sm md:prose-md lg:(prose-lg) mx-auto px-4 my-4 dark:text-light-200 text-black leading-normal"
          />
        </div>
        <aside v-if="post.toc == true" class="mt-2">
          <BlogToc :links="post.body.toc.links" class="lg:(sticky top-20)" />
        </aside>
      </div>
      <LazyBlogPrevNext :prev="prev" :next="next" />
    </article>
  </div>
  <LazyGlobalAppError class="mt-20" v-else />
</template>
<script setup lang="ts">
const { path } = useRoute();
const { locale } = useI18n();

// const { data: post } = await useAsyncData(path.replace(/\/$/, ""), () => {
//   return queryContent(`${locale.value}/blog`).where({ _path: path }).findOne();
// });

// TEST: New logic
const { data: post } = await useAsyncData(path.replace(/\/$/, ""), async () => {
  if (locale.value !== "en") {
    return await queryContent(`${locale.value}/blog`)
      .where({ _path: path })
      .findOne();
  } else {
    return await queryContent("blog").where({ _path: path }).findOne();
  }
});

const title = post.value?.title;
const desc = post.value?.description;

useSeoMeta({
  title: title,
  description: desc,
  ogTitle: title,
  ogDescription: desc,
  twitterTitle: title,
  twitterDescription: desc,
  ogUrl: `https://xanzhu.com${path}`,
  ogType: "article",
  ogImage: post.value?.ogLink || post.value?.media,
});

// const { data } = await useAsyncData("prev-next", () =>
//   queryContent(locale.value + "/blog")
//     .sort({ date: -1 })
//     .only(["_path"])
//     .findSurround(path)
// );

// TEST: New logic
const { data } = await useAsyncData("prev-next", async () => {
  if (locale.value !== "en") {
    return await queryContent(`${locale.value}/blog`)
      .sort({ date: -1 })
      .only(["_path"])
      .findSurround(path);
  } else {
    return await queryContent("blog")
      .sort({ date: -1 })
      .only(["_path"])
      .findSurround(path);
  }
});

const [prev, next] = data.value || [];
</script>
<style>
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
    "sans-serif";
}

.prose h1 {
  visibility: hidden;
}

.prose p {
  line-height: 1.4;
}

.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  text-decoration: none;
  pointer-events: none;
}

.prose ol {
  padding-left: 8px;
}

.prose h2 {
  color: #000000;
  border-left: 4px solid #0066cc;
  padding-left: 10px;
  font-weight: 700;
}

.prose h3 {
  font-weight: 300;
}

.prose pre {
  background-color: #f1f1f1;
  color: #000;
  border: 1px solid #d1d1d1;
  overflow: hidden;
  white-space: pre-wrap;
}

.prose a[href^="https"] {
  color: #0066cc;
  text-underline-offset: 2px;
  text-decoration-color: #0066cc;
  font-weight: normal;
}

.prose a:hover {
  text-decoration-thickness: 2px;
}

.prose ol > li::before {
  color: #0066cc;
}

.prose ul > li::before {
  background-color: #0066cc;
}

@media (prefers-color-scheme: dark) {
  .dark .prose a[href^="https"] {
    color: #ff0000;
    text-decoration-color: #ff0000;
    text-underline-offset: 2px;
    font-weight: normal;
  }

  .dark .prose a {
    color: #fff;
  }

  .dark .prose h2 {
    color: #fff;
    border-left: 6px solid #ff0000;
    padding-left: 10px;
    font-weight: 700;
  }

  .dark .prose h3 {
    font-weight: 300;
  }

  .dark .prose a:hover {
    text-decoration-thickness: 2px;
  }

  .dark .prose pre {
    background-color: #141414;
    color: #fff;
    border: 1px solid #333333;
    font-family: "Inter", sans-serif;
  }

  .dark .prose ol > li::before {
    color: #ff0000;
  }

  .dark .prose ul > li::before {
    background-color: #ff0000;
  }
}
</style>
