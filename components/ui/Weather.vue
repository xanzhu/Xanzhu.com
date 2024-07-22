<template>
    <div class="flex items-center space-x-2 children:m0">
        <template v-if="weatherData">
            <p>{{ weatherData.location.name }}</p>
            <p class="font-bold">{{ weatherData.current.temp_c }}°C</p>
            <p>{{ weatherData.current.condition.text }}</p>
        </template>
        <template v-else>
            <p class="m0">{{ $t('Home.weatherLoad') }}</p>
        </template>
    </div>
</template>

<script setup>
import { getWeather } from '~/lib/WeatherApi.js';
const weatherData = ref(null);
const { locale } = useI18n();

const CACHE_EXPIRATION = 10 * 60 * 1000;

const fetchWeatherData = async (newLocale) => {
    const cacheKey = `weatherData_${newLocale}`;
    const cachedData = JSON.parse(localStorage.getItem(cacheKey));
    const now = new Date().getTime();

    if (cachedData && cachedData.timestamp && now - cachedData.timestamp < CACHE_EXPIRATION) {
        weatherData.value = cachedData.data;
        return;
    }

    try {
        const data = await getWeather(null, newLocale);
        weatherData.value = data;
        localStorage.setItem(cacheKey, JSON.stringify({
            data: data,
            timestamp: now
        }));
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

watch(
    () => locale.value,
    (newLocale, oldLocale) => {
        if (newLocale !== oldLocale) {
            fetchWeatherData(newLocale);
        }
    }
);

onMounted(() => {
    fetchWeatherData(locale.value);
});
</script>