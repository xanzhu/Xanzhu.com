<script setup lang="ts">
const { locale, t } = useI18n()
const route = useRoute()

const disablePath = computed(() => {
  const paths = ['/', '/ko', '/zh']
  return paths.includes(route.path)
})
</script>

<template>
  <nav
    v-if="!disablePath"
    :aria-label="t('v2.ui.breadCrumbs')"
    class="z-10 flex flex-col items-center justify-between bg-transparent py-4 text-sm text-inherit font-normal md:(flex-row px-9 py-2 space-y-0) sm:(flex-row px-6 py-2) space-y-2 2xl:px-43 xl:px-30"
  >
    <UiBreadcrumbs />
    <NuxtTime
      :key="locale"
      :datetime="new Date()"
      :locale="locale"
      :aria-label="t('v2.ui.globalDate')"
      weekday="long"
      month="long"
      day="numeric"
      year="numeric"
      class="m0 h5.5 flex opacity-100 transition-opacity duration-300 ease-in-out"
    />
  </nav>
</template>
