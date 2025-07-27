<script setup lang="ts">
const { t } = useI18n()
const pages = [
  {
    path: '/resources',
    title: t('Links.resources'),
    description: t('pageCard.tools'),
  },
  {
    path: '/blog',
    title: t('Links.blog'),
    description: t('pageCard.article'),
  },
  {
    path: '/analysis',
    title: t('Links.analysis'),
    description: t('pageCard.caseStudy'),
  },
]
</script>

<template>
  <nav class="grid grid-cols-1 mx-auto justify-items-center gap-6 p-6 md:grid-cols-2 xl:grid-cols-3 xl:w-5xl">
    <NuxtLinkLocale
      v-for="page in pages" :key="page.path" :to="page.path"
      class="group relative block max-w-sm w-full decoration-none"
    >
      <div
        class="relative h-[180px] overflow-hidden border core-border rounded-md core-theme p4 transition-all duration-300 group-hover:(scale-102)"
      >
        <div class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div class="relative h-full flex flex-col text-black dark:text-white">
          <div class="flex items-start justify-between">
            <h2 id="page-card-title" class="text-4xl text-inherit font-bold">
              {{ page.title }}
            </h2>
            <Icon
              name="lucide:arrow-up-right"
              class="h6 w6 flex rounded-full core-ui p2 text-inherit transition-colors group-hover:(bg-black text-white) dark:group-hover:(bg-white text-black)" aria-hidden="true"
            />
          </div>
          <p class="flex-grow text-sm dark:text-white">
            {{ page.description }}
          </p>
        </div>
      </div>
    </NuxtLinkLocale>
  </nav>
</template>
