<template>
  <main v-if="post" class="container mb-4 mx-auto mt10 sm:mt10 md:(px-6 mb-0 mt-15)" role="main">
    <article class="dark:(bg-black text-light) bg-white text-black pb-2 sm:(rounded-sm) md:(space-y-10 mb-12)"
      itemtype="https://schema.org/Article" itemscope>
      <BlogPostHeader v-bind:post="post" />
      <div class="flex flex-col-reverse md:(flex-row space-x-6 space-x-2) mx-auto justify-center">
        <div>
          <ContentRenderer :value="post" itemprop="articleBody"
            class="prose text-sm md:text-lg 2xl:(text-xl) mx-auto px-4 my-4 dark:text-light text-black leading-normal">
          </ContentRenderer>
        </div>
        <aside v-if="post.toc == true" class="mt-2">
          <BlogToc :links="post.body?.toc?.links" class="lg:(sticky top-20)" />
        </aside>
      </div>
      <LazyBlogPrevNext :prev="prev" :next="next" />
    </article>
  </main>
</template>
<script setup lang="ts">
const { path } = useRoute();
const { locale } = useI18n();

const { data: post } = await useAsyncData(path.replace(/\/$/, "/"), async () => {
  return await queryContent().where({ _path: path })
    .findOne();
});

if (!post.value) throw createError({ statusCode: 404 });

const seoTitle = post.value?.title;
const seoDesc = post.value?.description;
const seoImage = "https://xanzhu.com" + post.value?.img;

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
  let query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(query)
    .sort({ date: -1 })
    .only(['_path'])
    .findSurround(path);
});

const [prev, next] = data.value || [];
</script>
<style>
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
  scroll-margin-top: 74px;
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

@media (prefers-color-scheme: dark) {
  .dark .prose pre {
    background-color: #141414;
    color: #fff;
    border: 1px solid #333333;
  }
}
</style>
