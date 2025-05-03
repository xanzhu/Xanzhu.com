<script setup lang="ts">
const { locale } = useI18n()
const formattedDate = ref<string>('')

function updateDate(localeValue: string) {
  const now = new Date()
  formattedDate.value = now.toLocaleString(localeValue, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

onMounted(() => {
  updateDate(locale.value)
})

watch(() => locale.value, (newLocale: string) => {
  updateDate(newLocale)
})

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
    <span :style="{ height: '20px', opacity: formattedDate ? 1 : 0, transition: 'opacity 0.3s ease' }">
      {{ formattedDate || ' ' }}
    </span>
  </div>
</template>
