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
      class="group relative block max-w-sm w-full rounded-md decoration-none"
    >
      <div
        class="relative h-[180px] overflow-hidden border core-border rounded-md bg-white p-6 transition-transform duration-300 group-hover:scale-[1.05] dark:bg-dark9 group-hover:shadow-lg"
        aria-labelledby="page-card-title"
      >
        <div class="relative h-full flex flex-col text-black dark:text-white">
          <div class="flex items-center justify-between">
            <h2 id="page-card-title" class="text-4xl text-inherit font-semibold">
              {{ page.title }}
            </h2>
            <Icon
              name="lucide:arrow-up-right"
              class="h6 w6 core-border rounded-full bg-light4 p-2 text-inherit transition-colors dark:bg-black group-hover:(bg-black text-white) dark:group-hover:(bg-white text-black)" aria-hidden="true"
            />
          </div>
          <p class="flex-grow text-sm transition-opacity duration-300 dark:text-white group-hover:opacity-80">
            {{ page.description }}
          </p>
        </div>
      </div>
    </NuxtLinkLocale>
  </nav>
</template>
