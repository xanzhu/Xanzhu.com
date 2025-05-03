import { useRuntimeConfig } from '#app'

interface WeatherData {
  location: { name: string }
  current: { temp_c: number, condition: { text: string } }
}

const VALID_LOCALES = new Set(['en', 'ko', 'zh'])
const MAX_RETRIES = 2
const RETRY_DELAY = 1000

const LocationMap: Record<string, string> = {
  en: 'Auckland',
  ko: 'Seoul',
  zh: 'Beijing',
}

export function getLocationName(locale: string): string {
  return LocationMap[locale] || 'Auckland'
}

export function useWeather() {
  async function getWeather(locale: string): Promise<WeatherData> {
    if (!VALID_LOCALES.has(locale)) {
      console.warn(`Invalid locale: ${locale}, defaulting to 'en'`)
      locale = 'en'
    }

    const config = useRuntimeConfig()
    const locationName = getLocationName(locale)
    const apiUrl = 'https://api.weatherapi.com/v1/current.json'

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        return await $fetch<WeatherData>(apiUrl, {
          query: {
            key: config.public.WeatherAPI,
            q: locationName,
            lang: locale,
            aqi: 'no',
          },
        })
      }
      catch (error) {
        if (attempt === MAX_RETRIES) {
          console.error(`Error fetching weather data after ${MAX_RETRIES} attempts:`, error)
          throw error
        }
        console.warn(`Attempt ${attempt} failed, retrying in ${RETRY_DELAY}ms...`)
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY))
      }
    }
    throw new Error('Failed to fetch weather data after retries')
  }

  return { getWeather }
}
