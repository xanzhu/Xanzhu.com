<script setup>
import { getWeather } from '../lib/WeatherApi.js'

const weatherData = ref(null)
const { locale } = useI18n()

const CACHE_EXPIRATION = 30 * 60 * 1000 // 30 minutes

function getCachedWeather(key) {
  if (import.meta.client) {
    const cachedData = JSON.parse(localStorage.getItem(key))
    const now = Date.now()

    if (cachedData?.timestamp && now - cachedData.timestamp < CACHE_EXPIRATION) {
      return cachedData.data
    }
  }
  return null
}

async function fetchWeatherData(newLocale) {
  const cacheKey = `weatherData_${newLocale}`
  let cached = null

  if (import.meta.client) {
    cached = getCachedWeather(cacheKey)
  }

  if (cached) {
    weatherData.value = cached
    return
  }

  try {
    const data = await getWeather(newLocale)
    weatherData.value = data
    if (process.client) {
      localStorage.setItem(cacheKey, JSON.stringify({
        data,
        timestamp: Date.now(),
      }))
    }
  }
  catch (error) {
    console.error('Error fetching weather data:', error)
    weatherData.value = { error: true }
  }
}

onMounted(() => {
  if (locale.value) {
    const cached = getCachedWeather(`weatherData_${locale.value}`)
    if (cached) {
      weatherData.value = cached
    }
    else {
      fetchWeatherData(locale.value)
    }
  }
})

watch(() => locale.value, (newLocale, oldLocale) => {
  if (newLocale !== oldLocale) {
    weatherData.value = null
    fetchWeatherData(newLocale)
  }
})
</script>

<template>
  <ClientOnly>
    <div
      class="flex items-center children:m0 space-x-2" :style="{
        height: '30px',
        opacity: weatherData ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }"
    >
      <template v-if="weatherData && !weatherData.error">
        <p>{{ weatherData.location.name }}</p>
        <p class="font-bold">
          {{ weatherData.current.temp_c }}°C
        </p>
        <p>{{ weatherData.current.condition.text }}</p>
      </template>

      <template v-else-if="weatherData && weatherData.error">
        <p>Weather data unavailable</p>
      </template>
    </div>
  </ClientOnly>
</template>
