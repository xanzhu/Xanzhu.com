<script setup lang="ts">
defineProps<{
  title: string
  links: { text: string, href: string, external?: boolean }[]
}>()
</script>

<template>
  <div>
    <h4 class="text-md mb-4 font-bold">
      {{ (title) }}
    </h4>
    <ul class="list-none p0 text-sm">
      <li v-for="(item, index) in links" :key="index" class="mb-2">
        <NuxtLinkLocale
          v-if="item.href" :to="item.href"
          class="text-dark-100 no-underline dark:text-light-900 hover:(underline underline-2 underline-dark-400 underline-offset-3 dark:underline-white)"
        >
          {{ (item.text) }} <span v-if="item.external" class="text-xs">↗</span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>
