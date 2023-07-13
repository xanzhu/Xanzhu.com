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

const { data: post } = await useAsyncData(path.replace(/\/$/, "/"), async () => {
  return await queryContent().where({ _path: path })
    .findOne();
});

// Returns error on 404
if (!post.value) throw createError({ statusCode: 404 });

const seoTitle = post.value?.title;
const seoDesc = post.value?.description;
const seoImage = post.value?.img;


useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  ogType: "article",
  ogImage: seoImage,
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
/* TODO: Conver to unocss @apply / --at-apply 
   - Improve H2-H4 Sizing and weights
*/
.prose h1 {
  visibility: hidden;
}

.prose p {
  line-height: 1.4;
  font-weight: 200;
}

.prose h2,
h3,
h4,
h5 {
  scroll-margin-top: 65px;
}

.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  text-decoration: none;
  pointer-events: none;
}

.prose pre {
  background-color: #f1f1f1;
  color: #000;
  border: 1px solid #d1d1d1;
  overflow: hidden;
  white-space: pre-wrap;
}

.prose a[href^="https"] {
  font-weight: 500;
  color: #001EFA;
  text-decoration: none;
}

.prose a:hover {
  text-decoration: 1px underline;
  text-underline-offset: 3px;
}


@media (prefers-color-scheme: dark) {
  .dark .prose pre {
    background-color: #141414;
    color: #fff;
    border: 1px solid #333333;
  }

  .dark .prose a[href^="https"] {
    color: #ff0000;
    text-decoration: none;
  }

  .dark .prose a:hover {
    text-decoration: 1px underline;
    text-underline-offset: 3px;
  }
}
</style>
