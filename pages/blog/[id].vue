<template>
  <main v-if="post" class="container mb-4 mx-auto md:(px-6 mb-0)" role="main">
    <article class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-sm md:(space-y-10 mb-12)" itemscope
      itemtype="https://schema.org/BlogPosting">
      <BlogPostHeader v-bind:post="post" />
      <div class="flex flex-col-reverse md:(flex-row space-x-6 space-x-2) mx-auto justify-center">
        <div>
          <ContentRenderer :value="post" itemprop="articleBody"
            class="prose prose-sm md:prose-md lg:(prose-xl) mx-auto px-4 my-4 dark:text-light-200 text-black leading-normal" />
        </div>
        <aside v-if="post.toc == true" class="mt-2">
          <BlogToc :links="post.body.toc.links" class="lg:(sticky top-20)" />
        </aside>
      </div>
      <LazyBlogPrevNext :prev="prev" :next="next" />
    </article>
  </main>
  <template v-else>
  </template>
</template>
<script setup lang="ts">
const { path } = useRoute();
const { locale } = useI18n();

const { data: post } = await useAsyncData(path.replace(/\/$/, ""), async () => {
  const query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query).where({ _path: path }).findOne();
});

// Returns error on 404
if (!post.value) throw createError({ statusCode: 404 });

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

const { data } = await useAsyncData("prev-next", async () => {
  const query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .only(["_path"])
    .findSurround(path);
});

const [prev, next] = data.value || [];
</script>
<style>
/* TODO: Conver to unocss @apply / --at-apply */
.prose h1 {
  visibility: hidden;
}

.prose p {
  line-height: 1.4;
  font-weight: 200;
}

.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  text-decoration: none;
  pointer-events: none;
}

.prose h2 {
  color: #000000;
  border-left: 4px solid #ff0000;
  padding-left: 10px;
  font-weight: 600;
}

.prose pre {
  background-color: #f1f1f1;
  color: #000;
  border: 1px solid #d1d1d1;
  overflow: hidden;
  white-space: pre-wrap;
}

.prose a[href^="https"] {
  font-weight: normal;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose a:hover {
  text-decoration-color: #001EFA;
  color: #001EFA;
}

.prose ol>li::before {
  color: #ff0000;
}

.prose ul>li::before {
  background-color: #ff0000;
}

@media (prefers-color-scheme: dark) {
  .dark .prose ul>li::before {
    background-color: #ff0000;
  }

  .dark .prose h2 {
    color: #fff;
    border-left: 4px solid #ff0000;
    padding-left: 10px;
    font-weight: 700;
  }

  .dark .prose pre {
    background-color: #141414;
    color: #fff;
    border: 1px solid #333333;
    font-family: "Inter", sans-serif;
  }

  .dark .prose ol>li::before {
    color: #ff0000;
  }

  .dark .prose a:hover {
  text-decoration-color: #ff0000;
  color: #ff0000;
}
}
</style>
