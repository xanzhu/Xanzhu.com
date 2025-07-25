<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const disablePath = computed(() => {
  const paths = ['/', '/ko', '/zh']
  return paths.includes(route.path)
})
</script>

<template>
  <div
    v-if="!disablePath"
    class="z-10 flex flex-col items-center justify-between bg-transparent py-4 text-sm text-inherit font-normal md:(flex-row px-9 py-2 space-y-0) sm:(flex-row px-6 py-2) space-y-2 2xl:px-43 xl:px-30"
  >
    <!-- Breadcrumb -->
    <UiBreadcrumbs />
    
    <!-- Weather (fallback when no breadcrumbs) -->
    <UiWeather v-if="route.path === '/' || route.path === '/ko' || route.path === '/zh'" />

    <NuxtTime
      :key="locale"
      :datetime="new Date()"
      :locale="locale"
      weekday="long"
      month="long"
      day="numeric"
      year="numeric"
      class="inline-block h-5 opacity-100 transition-opacity duration-300 ease-in-out"
    />
  </div>
</template>
