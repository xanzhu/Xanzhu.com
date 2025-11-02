<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, t } = useI18n()

const slug = computed(() => {
  if (!route.params.slug)
    return []
  return Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
})

const collection = computed(() => `resources_${locale.value}` as keyof Collections)

const basePath = computed(() => {
  const prefix = locale.value === 'en' ? '' : `${locale.value}/`
  return `${prefix}resources/${slug.value.join('/')}`
})

const { data: allContent } = await useAsyncData(`resources-${basePath.value}`, () =>
  queryCollection(collection.value).all())

const folderIndex = computed(() =>
  allContent.value?.find(item => item.id === `${collection.value}/${basePath.value}/index.md`),
)

const directPage = computed(() =>
  allContent.value?.find(item => item.id === `${collection.value}/${basePath.value}.md`),
)

const children = computed(() => {
  if (!allContent.value)
    return []

  const searchPath = `${collection.value}/${basePath.value}/`
  return allContent.value.filter((item) => {
    if (!item.id.startsWith(searchPath) || item.id.endsWith('/index.md'))
      return false

    const pathAfterBase = item.id.substring(searchPath.length)
    return pathAfterBase && !pathAfterBase.includes('/')
  })
})

if (!folderIndex.value && !directPage.value) {
  throw createError({ statusCode: 404 })
}

// a11y: Testing focus features
const pageTitle = computed(() =>
  folderIndex.value?.title || directPage.value?.title || '',
)
</script>

<template>
  <div class="flex flex-col md:(flex-row gap-2 py4) 2xl:px35 xl:px28">
    <ResourceSidebar />
    <main
      v-if="folderIndex"
      class="flex flex-1 flex-col core-border p5 text-neutral-9 dark:(border-neutral-9 bg-black text-white)"
      tabindex="-1"
      aria-labelledby="page-title"
    >
      <div class="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {{ t('v2.resources.pageLoaded') }}: {{ pageTitle }}
      </div>

      <h1
        id="page-title"
        class="m0 w-fit flex bg-black px4 py2 text-2xl text-white dark:(bg-white text-black)"
      >
        {{ folderIndex.title }}
      </h1>

      <p class="m0 w-fit core-border bg-neutral-1 px4 py3 text-neutral-8 dark:(bg-dark9 text-white)">
        {{ folderIndex.description }}
      </p>

      <ContentRenderer
        :value="folderIndex"
        class="max-w-none prose dark:prose-light"
        aria-label="Main content"
      />

      <nav
        v-if="children.length > 0"
        aria-labelledby="guides-heading"
        class="mt-8"
      >
        <h2 id="guides-heading" class="mb-4 text-xl font-semibold">
          {{ t('v2.resources.helpfulGuides') }}
        </h2>
        <ul class="list-disc pl-6 space-y-2">
          <li v-for="post in children" :key="post.id">
            <NuxtLink
              :to="`/${basePath}/${post.id.split('/').pop()?.replace('.md', '')}`"
              class="text-neutral-9 underline decoration-1 underline-offset-2 hover:(decoration-2) focus:(outline-2 outline-black outline-offset-2)"
            >
              {{ post.title }}
              <span v-if="post.description" class="sr-only">
                - {{ post.description }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <main
        v-else-if="directPage"
        class="flex flex-1 flex-col core-border p5"
        tabindex="-1"
        aria-labelledby="page-title"
      >
        <div class="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {{ t('v2.resources.pageLoaded') }}: {{ pageTitle }}
        </div>

        <ContentRenderer
          :value="directPage"
          class="max-w-none prose"
          aria-label="Main content"
        />
      </main>
    </main>
  </div>
</template>

<style scoped>
/* a11y: Testing features */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>
