<template>
  <main v-if="post" class="container mx-auto mt-10 sm:mt-10 md:(px-6 mb-0 mt-15)" role="main">
    <article class="text-inherit pb-2 sm:rounded-sm md:(mb-12)" itemtype="https://schema.org/Article" itemscope>
      <BlogArticleHeader :post="post" />
      <div class="flex flex-col-reverse justify-center lg:(flex-row gap10)">
        <div>
          <ContentRenderer :value="post" itemprop="articleBody"
            class="prose mx-auto px-4 md:px-0 dark:prose-invert leading-normal max-w-3xl" />
        </div>
        <aside v-if="post.toc" class="mt2">
          <BlogToc :links="post.body?.toc?.links" class="lg:sticky lg:top-30" />
        </aside>
      </div>
      <div class="mt10 flex flex-col items-center justify-center">
        <hr class="core-ui core-border op40 rounded-md w-80%">
        <div v-if="post._path && post.title">
          <h4 class="mt5 text-center font-normal text-lg op90">{{ t('share.title') }}</h4>
          <LazyBlogSocialShare :post="{ _path: post._path, title: post.title }" hydrate-never />
        </div>
      </div>
      <LazyBlogPrevNext :prev="prev" :next="next" />

    </article>
  </main>
</template>
<script setup lang="ts">
const { path } = useRoute();
const { locale, t } = useI18n();
const config = useRuntimeConfig();

const { data: post } = await useAsyncData(path.replace(/\/$/, "/"), async () => {
  return await queryContent().where({ _path: path }).only(['_path', 'title', 'body', 'toc', 'description', 'img', 'date', 'tag', 'alt'])
    .findOne();
});

if (!post.value) throw createError({ statusCode: 404 });

const seoTitle = post.value?.title;
const seoDesc = post.value?.description;
const seoImage = config.public.i18n.baseUrl + post.value?.img;
const titleSuffix = " - Xanzhu"

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: `${seoTitle}${titleSuffix}`,
  ogDescription: seoDesc,
  twitterTitle: `${seoTitle}${titleSuffix}`,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  ogType: "article",
  ogImage: seoImage,
});

const { data: prevNext } = await useAsyncData("prev-next", async () => {
  let queryPath = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
  return await queryContent(queryPath)
    .sort({ date: -1 })
    .only(['_path', 'title', 'img', 'alt'])
    .findSurround(path);
});

import type { PrevNext } from '../../components/Blog/PrevNext.vue';

const [prevData, nextData] = prevNext.value || [];

// Assert the types before passing them as props
const prev = prevData as PrevNext | undefined;
const next = nextData as PrevNext | undefined;

</script>