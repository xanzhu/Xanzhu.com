export async function getWeather(city) {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const apiUrl = "https://api.weatherapi.com/v1/";
  const locationName = getLocationNameByLocale(locale.value);

  try {
    const response = await fetch(
      `${apiUrl}current.json?key=${config.public.WEATHER_API}&q=${locationName}&lang=${locale.value}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

function getLocationNameByLocale(locale) {
  switch (locale) {
    case "en":
      return "Auckland";
    case "ko":
      return "Seoul";
    case "zh":
      return "Beijing";
    default:
      return "Auckland";
  }
}
