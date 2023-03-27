<template>
  <div
    class="flex flex-col text-center justify-evenly items-center my-10 sm:(flex-row space-x-5) space-y-4"
  >
    <h4 class="text-4xl font-bold">
      {{ t("SocialsCard.h1") }}
    </h4>
    <div
      class="flex flex-col sm:flex-row sm:space-x-4 space-y-0) space-y-0 opacity-75 space-y-4"
    >
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        :aria-label="link.name"
        target="_blank"
        class="px-3 py-2 border-1 border-transparent rounded-sm hover:(underline underline-offset-4 decoration-2)"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
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
