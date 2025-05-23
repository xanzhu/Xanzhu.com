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
    class="z-10 flex flex-col items-center justify-between bg-transparent py4 text-sm text-inherit font-normal md:(flex-row px9 py2 space-y-0) sm:(flex-row px6 py2) space-y-2 2xl:px43 xl:px30"
  >
    <UiWeather />

    <NuxtTime
      :key="locale" :datetime="new Date()" :locale="locale" weekday="long" month="long" day="numeric" year="numeric"
      class="inline-block" :style="{ height: '20px', opacity: 1, transition: 'opacity 0.3s ease' }"
    />
  </div>
</template>
