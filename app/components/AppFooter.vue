<script lang="ts" setup>
const { t } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocaleRoute();
</script>

<template>
  <footer class="border-t border-dark-400/10 bg-white dark:(border-dark-200/30 bg-black)">
    <div
      class="mx-auto px-4 py-4 text-xs text-dark-200 gap-3 flex flex-col-reverse items-center max-w-5xl dark:text-gray-300 md:(flex-row justify-between)"
    >
      <p class="m-0 flex items-center gap-2">
        <span>{{ t("common.copyright") }}</span>
        <span class="op70">v{{ config.public.version }}</span>
      </p>

      <nav class="flex flex-wrap justify-center gap-x-4 gap-y-1">
        <NuxtLink :to="localePath('/privacy-policy')">
          {{ t("common.nav.privacy") }}
        </NuxtLink>
        <NuxtLink :to="localePath('/terms-of-service')">
          {{ t("common.nav.terms") }}
        </NuxtLink>
        <a href="/sitemap_index.xml">{{ t("common.nav.sitemap") }}</a>
      </nav>
    </div>
  </footer>
</template>
