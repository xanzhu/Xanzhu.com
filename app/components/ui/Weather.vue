<script setup lang="ts">
interface WeatherData {
  location: { name: string }
  current: { temp_c: number, condition: { text: string } }
}

const { locale } = useI18n()
const { getWeather } = useWeather()

const weatherData: Ref<WeatherData | null> = ref(null)
const isLoading: Ref<boolean> = ref(false)
const error: Ref<Error | null> = ref(null)

const CACHE_EXPIRATION = 30 * 60 * 1000 // 30 minutes

async function fetchWeatherData(newLocale: string) {
  const cacheKey = `weatherData_${newLocale}`
  let cachedData = null
  try {
    const cached = localStorage.getItem(cacheKey)
    if (cached) {
      cachedData = JSON.parse(cached)
    }
  }
  catch (e) {
    console.warn('Failed to parse localStorage cache:', e)
  }
  const now = Date.now()

  if (cachedData && cachedData.timestamp && now - cachedData.timestamp < CACHE_EXPIRATION) {
    weatherData.value = cachedData.data
    return
  }

  isLoading.value = true
  error.value = null
  try {
    const data = await getWeather(newLocale)
    weatherData.value = data
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          data,
          timestamp: now,
        }),
      )
    }
    catch (e) {
      console.warn('Failed to write to localStorage:', e)
    }
  }
  catch (err) {
    error.value = err as Error
    console.error('Error fetching weather data:', err)
  }
  finally {
    isLoading.value = false
  }
}

watch(
  () => locale.value,
  (newLocale, oldLocale) => {
    if (newLocale !== oldLocale) {
      fetchWeatherData(newLocale)
    }
  },
)

onMounted(() => {
  fetchWeatherData(locale.value)
})
</script>

<template>
  <ClientOnly>
    <div
      class="flex items-center children:m0 space-x-2" :style="{
        height: '30px',
        opacity: weatherData && !isLoading ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }"
    >
      <template v-if="error">
        <p class="text-red-500">
          Weather unavailable
        </p>
      </template>
      <template v-else-if="weatherData">
        <p>{{ weatherData.location.name }}</p>
        <p class="font-bold">
          {{ weatherData.current.temp_c }}°C
        </p>
        <p>{{ weatherData.current.condition.text }}</p>
      </template>
    </div>
    <template #fallback>
      <div class="flex items-center children:m0 space-x-2" style="height: 30px">
        <p>Loading weather...</p>
      </div>
    </template>
  </ClientOnly>
</template>
