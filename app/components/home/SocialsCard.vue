<script setup lang="ts">
const links = [
  {
    url: 'https://www.linkedin.com/company/xanzhu',
    icon: 'line-md:linkedin',
    name: 'LinkedIn',
  },
  {
    url: 'https://github.com/xanzhu',
    icon: 'line-md:github',
    name: 'GitHub',
  },
  {
    url: 'https://twitter.com/xanzhu1',
    icon: 'line-md:twitter-x',
    name: 'Twitter',
  },
  {
    url: 'https://instagram.com/xanzhuu',
    icon: 'line-md:instagram',
    name: 'Instagram',
  },
]
</script>

<template>
  <div class="font-none pt1 flex flex-row items-center md:items-end md:space-x-6">
    <NuxtLink
      v-for="(link, index) in links" :key="index" :to="link.url" :aria-label="link.name" target="_blank"
      class="text-white pr4 dark:text-black hover:text-brand-dark md:p2"
    >
      <Icon :name="link.icon" class="h5 w5" />
    </NuxtLink>
  </div>
</template>
