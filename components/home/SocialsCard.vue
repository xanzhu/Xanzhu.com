<template>
  <div class="flex flex-col text-center justify-center items-center my-10 sm:(flex-row space-x-5 space-y-0) space-y-4">
    <h3 class="text-2xl sm:text-4xl font-bold m0">
      {{ $t("SocialsCard.h1") }}
    </h3>
    <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-0) space-y-0 op75 items-center">
      <NuxtLink v-for="(link, index) in links" :key="index" :to="link.url" :aria-label="link.name" target="_blank"
        class="p4 sm:p2 b-transparent rounded-sm hover:(underline underline-offset-4 decoration-2) no-underline dark:text-white text-black">
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const links = [
  {
    url: "https://www.linkedin.com/company/xanzhu",
    name: "LinkedIn",
  },
  {
    url: "https://github.com/xanzhu",
    name: "Github",
  },
  {
    url: "https://twitter.com/xanzhu1",
    name: "Twitter",
  },
  {
    url: "https://mastodon.social/@xanzhu",
    name: "Mastodon",
  },
];
</script>
