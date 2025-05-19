import { useRuntimeConfig } from '#imports'

export async function getWeather(locale) {
  const config = useRuntimeConfig()
  const locationName = getLocationNameByLocale(locale)

  const apiUrl = 'https://api.weatherapi.com/v1/'
  try {
    const response = await fetch(
      `${apiUrl}current.json?key=${config.public.WeatherAPI}&q=${locationName}&lang=${locale}`,
    )
    if (!response.ok) {
      throw new Error('Failed to fetch weather data')
    }
    return await response.json()
  }
  catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}

const locationMap = {
  en: 'Auckland',
  ko: 'Seoul',
  zh: 'Beijing',
}

export function getLocationNameByLocale(locale) {
  return locationMap[locale] || locationMap.en
}
