<script setup lang="ts">
defineProps<{
  title: string
  links: { text: string, href: string, external?: boolean }[]
}>()
</script>

<template>
  <div role="group" aria-labelledby="footer-item-title">
    <h4 id="footer-item-title" class="text-md mb-4 font-bold">
      {{ title }}
    </h4>
    <ul class="list-none p0 text-sm" role="list">
      <li v-for="(item, index) in links" :key="index" class="mb-2" role="listitem">
        <NuxtLinkLocale
          v-if="item.href" :to="item.href"
          class="text-dark-100 no-underline dark:text-light-900 hover:(underline underline-2 underline-dark-400 underline-offset-3 dark:underline-white)"
        >
          {{ item.text }} <span v-if="item.external" class="text-xs" aria-hidden="true">↗</span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>
