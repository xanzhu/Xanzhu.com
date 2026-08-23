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
    class="text-sm mx2 mb-5 p5 b-gray-300 rounded-md b-dashed max-w-md backdrop-blur-xl backdrop-filter dark:(text-white b-dark-300)"
  >
    <h1 class="text-xl font-semibold m-0">
      {{ title ?? t('alert.feature') }}
    </h1>

    <p class="font-normal">
      {{ desc ?? t('alert.maintenance') }}
    </p>

    <NuxtLink
      v-if="access && link"
      :to="localePath(link)"
      class="text-[#FF0] no-underline animate-bounce"
    >
      {{ t('alert.view') }}
    </NuxtLink>

    <p v-if="date" class="text-sm font-normal mt-2">
      Updated: {{ date }}
    </p>
  </div>
</template>
