<script setup lang="ts">
const { locale, t } = useI18n()
const route = useRoute()

const TRAILING_SLASH = /\/$/

const disablePath = computed(() => {
  const path = route.path.replace(TRAILING_SLASH, '') || '/'
  return path === '/' || path === `/${locale.value}`
})

const now = ref(new Date())

const accessibleDateLabel = computed(() => {
  const formatter = new Intl.DateTimeFormat(locale.value, { dateStyle: 'full' })
  return t('ui.globalDate', { date: formatter.format(now.value) })
})
</script>

<template>
  <nav
    v-if="!disablePath"
    class="z-10 flex flex-col items-center justify-between bg-transparent py-4 text-sm text-inherit font-normal md:(flex-row px-9 py-2 space-y-0) sm:(flex-row px-6 py-2) space-y-2 2xl:px-43 xl:px-30"
  >
    <LazyUiBreadcrumbs />

    <LazyNuxtTime
      :key="locale"
      :datetime="now"
      :locale="locale"
      :aria-label="accessibleDateLabel"
      weekday="long"
      month="long"
      day="numeric"
      year="numeric"
      class="m0 h5.5 flex opacity-100 transition-opacity duration-300 ease-in-out"
    />
  </nav>
</template>
