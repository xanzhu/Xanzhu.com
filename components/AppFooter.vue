<template>
  <footer
    class="mx-auto bottom-0 mt-10 items-center justify-center flex flex-col sm:flex-row space-x-2 p-4 text-xs"
  >
    <p class="font-thin">{{ t("Footer") }}</p>
    <!-- <NuxtLink class="font-semibold" :to="localePath('/privacy-policy')">{{
      t("Links.privacy-policy")
    }}</NuxtLink> TO:DO Add later -->
  </footer>
</template>
<script setup lang="ts">
const { t } = useI18n();
</script>
