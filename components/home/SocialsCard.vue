<template>
  <div class="flex flex-row md:space-x-6 items-center pt1 md:items-end font-none">
    <NuxtLink v-for="(link, index) in links" :key="index" :to="link.url" :aria-label="link.name" target="_blank"
      class="pr4 md:p2 dark:text-black text-white hover:text-brand-dark">
      <Icon :name="link.icon" class="h5 w5" />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const links = [
  {
    url: "https://www.linkedin.com/company/xanzhu",
    icon: "line-md:linkedin",
    name: "LinkedIn",
  },
  {
    url: "https://github.com/xanzhu",
    icon: "line-md:github",
    name: "Github",
  },
  {
    url: "https://twitter.com/xanzhu1",
    icon: "line-md:twitter-x",
    name: "Twitter",
  },
  {
    url: "https://instagram.com/xanzhuu",
    icon: "line-md:instagram",
    name: "Instagram",
  }
];
</script>
