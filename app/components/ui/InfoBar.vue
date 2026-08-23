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
    class="text-sm text-inherit font-normal py-4 bg-transparent flex flex-col items-center justify-between z-10 space-y-2 2xl:px-43 md:(px-9 py-2 flex-row space-y-0) sm:(px-6 py-2 flex-row) xl:px-30"
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
      class="m0 opacity-100 flex h5.5 transition-opacity duration-300 ease-in-out"
    />
  </nav>
</template>
