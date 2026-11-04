<script setup lang="ts">
import InfoBar from "~/components/ui/InfoBar.vue";

const head = useLocaleHead({
  dir: true,
  seo: true,
});

const route = useRoute();
const siteUrl = "https://xanzhu.com";

useSeoMeta({
  titleTemplate: "%s - Xanzhu",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  ogSiteName: "Xanzhu",
  ogUrl: () => `${siteUrl}${route.path}`,
  ogImage: `${siteUrl}/images/favicon/logo.png`,
  ogType: "website",
});

useHead({
  // TODO: refactor css values
  htmlAttrs: {
    lang: () => head.value.htmlAttrs.lang,
    dir: () => head.value.htmlAttrs.dir,
    class: "scroll-pt-[73px] antialiased",
  },
  bodyAttrs: {
    class: "m0 core-theme font-sans",
  },
  link: () => head.value.link,
  meta: () => head.value.meta,
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://xanzhu.com/#organization",
          name: "Xanzhu",
          url: "https://xanzhu.com",
          logo: "https://xanzhu.com/images/favicon/logo.png",
        }),
      ),
    },
  ],
});
</script>

<template>
  <div>
    <AppHeader class="sticky top-0 z-50" />
    <InfoBar />
    <main>
      <slot />
    </main>
    <LazyAppFooter />
    <LazyUiScrollButton />
  </div>
</template>
