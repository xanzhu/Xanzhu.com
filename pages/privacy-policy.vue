<script setup lang="ts">
const { t } = useI18n()
const path = useRoute()

const title = t('privacy.title')
const desc = t('privacy.desc')
const date = '2022-12-12'

const paragraphs: { [key: number]: string } = {
  1: t('privacy.p-1'),
  2: t('privacy.p-2'),
  3: t('privacy.p-3')
}

useHead({
  title: title,
  meta: [
    { name: 'description', content: desc },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: desc },
    { property: 'og:url', content: `https://xanzhu.com${path}` },
    // Add og:image
  ]
})
</script>
<template>
  <div class="sm:mx-auto my-10 space-y-10 max-w-4xl">
    <div class="flex flex-col space-y-4 sm:(space-y-0 flex-row justify-between items-center) mx-4">
      <div class="flex flex-col">
        <h1 class="text-2xl sm:text-3xl font-semibold">{{ t('privacy.title') }}</h1>
        <p class="font-thin dark:text-light-500">{{ t('privacy.desc') }}</p>
      </div>
      <p>{{ t('privacy.date') }}:
        <Date class="font-thin" :date="date" />
      </p>
    </div>
    <div class="dark:(bg-dark-900) border-outline bg-light-300 space-y-4 font-thin text-md p-4 sm:(p-10 mx-3)">
      <p v-for="(paragraph, index) in paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>