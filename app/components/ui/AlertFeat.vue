<script setup lang="ts">
const { link, desc, access, title, date } = defineProps<{
  link?: string
  desc?: string
  access?: boolean
  title?: string
  date?: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div
    class="mx2 mb-5 max-w-md b-gray-300 rounded-md b-dashed p5 text-sm backdrop-blur-xl backdrop-filter dark:(b-dark-300 text-white)"
  >
    <h1 class="m-0 text-xl font-semibold">
      {{ title ?? t('alert.feature') }}
    </h1>

    <p class="font-normal">
      {{ desc ?? t('alert.maintenance') }}
    </p>

    <NuxtLink
      v-if="access && link"
      :to="localePath(link)"
      class="animate-bounce text-[#FF0] no-underline"
    >
      {{ t('alert.view') }}
    </NuxtLink>

    <p v-if="date" class="mt-2 text-sm font-normal">
      Updated: {{ date }}
    </p>
  </div>
</template>
