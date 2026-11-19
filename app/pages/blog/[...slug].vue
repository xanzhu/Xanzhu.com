<script setup lang="ts">
import type { Collections } from "@nuxt/content";
import type { Post } from "~/types/post";

type BlogCollection = Extract<keyof Collections, `blog_${string}`>;

const route = useRoute();
const { locale, t } = useI18n();
const { url: siteUrl } = useSiteConfig();

const collectionName = `blog_${locale.value}` as BlogCollection;
const currentPath = route.path;

const [{ data: post }, { data: surround }] = await Promise.all([
  useAsyncData(
    `post-${locale.value}-${currentPath}`,
    () => queryCollection(collectionName).path(currentPath).first() as Promise<Post>,
  ),
  useAsyncData(`surround-${locale.value}-${currentPath}`, () =>
    queryCollectionItemSurroundings(collectionName, currentPath, {
      before: 1,
      after: 1,
      fields: ["title", "path", "date", "img"],
    }).order("date", "DESC"),
  ),
]);

if (!post.value) {
  throw createError({ status: 404, fatal: true });
}

setBreadcrumbTitle(post.value.title);

const titleSuffix = " - Xanzhu";
const absolute = (p?: string) => (p ? new URL(p, siteUrl).href : undefined);
const image = computed(
  () =>
    absolute(post.value?.img) ?? "https://cdn.xanzhu.com/2026/defaults/xanzhu-default-page.webp",
);
const modified = computed(() => post.value?.updated || post.value?.date);

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,
  ogTitle: () => `${post.value?.title}${titleSuffix}`,
  ogDescription: () => post.value?.description,
  ogType: "article",
  ogImage: image,
  articlePublishedTime: () => post.value?.date,
  articleModifiedTime: modified,
  ogImageAlt: () => post.value?.alt,
});

const jsonLd = computed(() =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.value?.title,
    description: post.value?.description,
    inLanguage: locale.value,
    image: { "@type": "ImageObject", url: image.value, width: 1200, height: 630 },
    datePublished: post.value?.date,
    dateModified: modified.value,
    mainEntityOfPage: { "@type": "WebPage", "@id": new URL(currentPath, siteUrl).href },
    publisher: { "@id": `${siteUrl}/#organization` },
    author: { "@id": `${siteUrl}/#organization` },
  }).replace(/</g, "\\u003c"),
);

useHead({ script: [{ type: "application/ld+json", innerHTML: jsonLd }] });
</script>

<template>
  <div v-if="post" class="mx-auto mt-5 md:(mb-0 px-6)">
    <article class="text-inherit pb-2 md:(mb-12) sm:rounded-xs">
      <BlogArticleHeader :post="post" />
      <div class="flex flex-col-reverse justify-center lg:(flex-row gap10)">
        <div>
          <ContentRenderer
            :value="post"
            class="leading-normal mx-auto px-4 max-w-3xl prose md:px-0 dark:prose-invert"
          />
        </div>
        <aside v-if="post.body?.toc?.links?.length" class="mt2">
          <BlogToc :links="post.body?.toc?.links ?? []" class="lg:top-20 lg:sticky" />
        </aside>
      </div>
      <div class="mt10 flex flex-col items-center justify-center">
        <hr class="core-ui core-border rounded-md op40 w-80%" />
        <div v-if="post.path && post.title">
          <h4 class="text-lg font-normal mb4 mt5 text-center op90">
            {{ t("common.sharing.title") }}
          </h4>
          <LazyBlogSocialShare :post="{ path: post.path, title: post.title }" />
        </div>
      </div>
      <LazyBlogPrevNext v-if="surround" :surround="surround" />
    </article>
  </div>
</template>
