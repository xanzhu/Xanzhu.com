<script setup lang="ts">
const { t } = useI18n()
const pages = [
  {
    path: '/resources',
    title: 'Links.resources',
    description: 'pageCard.tools',
  },
  {
    path: '/blog',
    title: 'Links.blog',
    description: 'pageCard.article',
  },
  {
    path: '/analysis',
    title: 'Links.analysis',
    description: 'pageCard.caseStudy',
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
        class="relative h-[180px] overflow-hidden border rounded-md p4 transition-all duration-300 group-hover:(scale-102) core-border core-theme"
      >
        <div class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div class="relative h-full flex flex-col text-black dark:text-white">
          <div class="flex items-start justify-between">
            <h2 id="page-card-title" class="text-4xl text-inherit font-bold">
              {{ t(page.title) }}
            </h2>
            <Icon
              name="lucide:arrow-up-right"
              class="h6 w6 flex rounded-full p2 text-inherit transition-colors core-ui group-hover:(bg-black text-white) dark:group-hover:(bg-white text-black)" aria-hidden="true"
            />
          </div>
          <p class="flex-grow text-sm dark:text-white">
            {{ t(page.description) }}
          </p>
        </div>
      </div>
    </NuxtLinkLocale>
  </nav>
</template>
