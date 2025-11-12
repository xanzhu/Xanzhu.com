<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()

const collection = computed(() => `resources_${locale.value}` as keyof Collections)

const { data: allContent } = await useAsyncData(`resources-index-${locale.value}`, () =>
  queryCollection(collection.value).all())

const pageIndex = computed(() => {
  return allContent.value?.find(item =>
    item.id === `${collection.value}/resources/index.md`
    || item.id === `${collection.value}/${locale.value}/resources/index.md`,
  )
})

const seoImage = 'https://images.pexels.com/photos/27206011/pexels-photo-27206011.jpeg'
useLangMeta('resources.meta', seoImage)
</script>

<template>
  <div class="flex flex-col bg-white text-neutral-9 md:(flex-row gap-4 py4) 2xl:px35 xl:px28">
    <LazyResourcesSidebar />

    <main
      v-if="pageIndex"
      class="flex flex-1 flex-col b-1 b-neutral-3 b-solid p5 text-neutral-9"
      tabindex="-1"
      aria-labelledby="page-title"
    >
      <h1
        id="page-title"
        class="m0 w-fit flex bg-black px4 py2 text-2xl text-white"
      >
        {{ pageIndex.title }}
      </h1>

      <p class="m0 w-fit b-1 b-neutral-3 b-solid bg-neutral-1 px4 py3 text-neutral-9">
        {{ pageIndex.description }}
      </p>

      <p
        v-if="pageIndex.date"
        class="mt-5 rounded-sm text-neutral-8"
        role="status"
        aria-live="polite"
      >
        <span class="sr-only">{{ t('v2.resources.lastReviewed') }}:</span>
        <time :datetime="pageIndex.date">
          {{ t('v2.resources.lastReviewed') }} {{ pageIndex.date }}
        </time>
      </p>

      <ContentRenderer
        :value="pageIndex"
        class="max-w-none prose"
        aria-label="Main content"
      />
    </main>
  </div>
</template>

<style scoped>
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
