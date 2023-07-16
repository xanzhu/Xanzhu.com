<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
    <div class="b-solid b-1 rounded-md p4 dark:b-dark-300 b-gray-300 hover:(bg-black) dark:hover:(bg-white) group"
      v-for="page in pages">
      <NuxtLink :to="localePath(page.path)" class="no-underline mx-auto">
        <div class="h-auto w-auto">
          <NuxtImg :src="page.img" class="h-full w-full max-w-xl rounded-sm object-cover" height="367" width="327"
            :alt="t(page.alt)" loading="lazy" />
        </div>
        <div class="flex flex-col dark:text-white text-black group-hover:text-white dark:group-hover:(text-black)">
          <div class="flex-row flex items-center justify-between relative">
            <h2 class="text-3xl font-bold m0">
              {{ t(page.title) }}
            </h2>
            <div class="absolute right-0 top-3 mt2">
              <Icon
                class="bg-brand-light text-white dark:(bg-brand-dark) b-rounded-md w8 h8 dark:group-hover:(bg-transparent text-brand-light) group-hover:(bg-transparent text-brand-dark)"
                name="uil:arrow-right" :aria-label="t(page.aria)" />
            </div>
          </div>
          <p class="m0">{{ t(page.p) }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const pages = [
  {
    path: "/resources",
    title: "Links.resources",
    p: "PagesCard.resources",
    img: "/images/Option3.png",
    alt: "PagesCard.image.iceland",
    aria: "a11y.ResourcePage"
  },
  {
    path: "/blog",
    title: "Links.blog",
    p: "PagesCard.blog",
    img: "/images/Option2.png",
    alt: "PagesCard.image.sky",
    aria: "a11y.BlogPage"
  },
  {
    path: "/analysis",
    title: "Links.analysis",
    p: "PagesCard.analysis",
    img: "/images/Option1.png",
    alt: "PagesCard.image.street",
    aria: "a11y.AnalysisPage"
  },
];
</script>
