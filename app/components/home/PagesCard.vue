<script setup lang="ts">
const { t } = useI18n()
const pages = [
  {
    path: '/resources',
    title: t('nav.resources'),
    description: t('home.pages.tools'),
  },
  {
    path: '/blog',
    title: t('nav.blog'),
    description: t('home.pages.article'),
  },
  {
    path: '/analysis',
    title: t('nav.analysis'),
    description: t('home.pages.caseStudy'),
  },
]
</script>

<template>
  <section :aria-label="t('aria.explore_pages_home')">
    <div class="mx-auto p-6 gap-6 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 xl:w-5xl">
      <NuxtLinkLocale
        v-for="page in pages"
        :key="page.path"
        :to="page.path"
        class="group rounded-md no-underline max-w-sm w-full block relative"
      >
        <article
          class="p-6 border core-border rounded-md bg-white h-[180px] transition-transform duration-300 relative overflow-hidden dark:bg-dark-900 group-hover:shadow-lg group-hover:scale-[1.05]"
        >
          <div class="text-black flex flex-col gap-4 h-full relative dark:text-white">
            <div class="flex items-center justify-between">
              <h3 class="text-4xl text-inherit font-semibold">
                {{ page.title }}
              </h3>
              <Icon
                name="lucide:arrow-up-right"
                class="text-inherit p-2 core-border rounded-full bg-light-400 h8 w8 transition-colors group-hover:(text-white bg-black) dark:bg-black dark:group-hover:(text-black bg-white)"
                aria-hidden="true"
              />
            </div>
            <p class="text-sm grow transition-opacity duration-300 dark:text-white group-hover:opacity-80">
              {{ page.description }}
            </p>
          </div>
        </article>
      </NuxtLinkLocale>
    </div>
  </section>
</template>
