<template>
  <div class="flex flex-row md:space-x-6 items-center pt1 md:items-end font-none">
    <NuxtLink v-for="(link, index) in links" :key="index" :to="link.url" :aria-label="link.name" target="_blank"
      class="pr4 md:p2 dark:text-white text-black hover:text-brand-dark">
      <Icon :name="link.icon" class="h5 w5" />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const links = [
  {
    url: "https://www.linkedin.com/company/xanzhu",
    icon: "mdi:linkedin",
    name: "LinkedIn",
  },
  {
    url: "https://github.com/xanzhu",
    icon: "mdi:github",
    name: "Github",
  },
  {
    url: "https://twitter.com/xanzhu1",
    icon: "mdi:twitter",
    name: "Twitter",
  },
  {
    url: "https://instagram.com/xanzhuu",
    icon: "mdi:instagram",
    name: "Instagram",
  }
];
</script>
