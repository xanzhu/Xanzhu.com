<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const TRAILING_SLASH = /\/$/;
const normalize = (p: string) => p.replace(TRAILING_SLASH, "") || "/";

const disablePath = computed(() => normalize(route.path) === normalize(localePath("/")));

const now = ref(new Date());
</script>

<template>
  <div
    v-if="!disablePath"
    class="text-sm font-normal py-4 flex flex-col items-center justify-between z-10 space-y-2 2xl:px-43 md:(px-9 py-2 flex-row space-y-0) sm:(px-6 py-2 flex-row) xl:px-30"
  >
    <UiBreadcrumbs />

    <NuxtTime
      :datetime="now"
      :locale="locale"
      weekday="long"
      month="long"
      day="numeric"
      year="numeric"
      class="m0 flex min-h-5.5"
    />
  </div>
</template>
