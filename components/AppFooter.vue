<template>
  <footer class="mx-auto bottom-0 mt-10 items-center justify-center flex flex-col space-x-2 p-4 text-xs">
    <p class="font-thin">{{ t("Footer") }}</p>
    <div class="flex-row flex">
      <div v-for="(link, index) in links" :key="index">
        <NuxtLink class="text-white decoration-none" :to="link.url">{{ t(link.name) }}<span
            v-if="index !== links.length - 1" class="text-brand-dark px-1">/</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const { t } = useI18n();

const links = [
  {
    url: "/about",
    name: 'About.title',
  }
];
</script>
