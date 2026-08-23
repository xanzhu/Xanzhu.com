<script setup lang="ts">
const { title, links } = defineProps<{
  title: string
  links: {
    text: string
    href: string
    external?: boolean
  }[]
}>()

const titleId = useId()
</script>

<template>
  <div role="group" :aria-labelledby="titleId">
    <h3 :id="titleId" class="text-md font-bold mb-4">
      {{ title }}
    </h3>
    <ul class="text-sm p0 list-none" role="list">
      <li v-for="(item, index) in links" :key="index" class="mb-2" role="listitem">
        <NuxtLinkLocale
          v-if="item.href" :to="item.href"
          class="text-dark-100 no-underline dark:text-light-900 hover:(underline underline-1 underline-dark-400 underline-offset-4 dark:underline-white)"
        >
          {{ item.text }} <span v-if="item.external" class="text-xs" aria-hidden="true">↗</span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>
