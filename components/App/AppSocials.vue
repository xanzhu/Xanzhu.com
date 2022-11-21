<script setup lang="ts">
const links = [
  {
    url: 'https://twitter.com/Xanzhu1',
    ico: 'IconTwitter',
    title: 'Twitter'
  },
  {
    url: 'https://github.com/xanzhu',
    ico: 'IconGithub',
    title: 'Github'
  },
  {
    url: 'https://www.linkedin.com/company/xanzhu',
    ico: 'IconLinkedIn',
    title: 'LinkedIn'
  }
]
</script>
<template>
  <div class="flex flex-row text-red-600 dark:text-[#FF0000] space-x-4 items-center">
    <template v-for="link in links">
      <NuxtLink :to="link.url" :aria-label="link.title" :title="link.title"
        class="hover:text-black dark:(hover:text-light-300)" target="_blank">
        <Component :is="link.ico" class="h-5 w-5" />
      </NuxtLink>
    </template>
  </div>
</template>
