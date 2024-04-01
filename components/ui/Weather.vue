<template>
    <div v-if="weatherData" class="flex items-center space-x-2 text-md">
        <NuxtImg :src="'https:' + weatherData.current.condition.icon" alt="weather icon" height="32" width="32"
            class="h-8 w-auto" />
        <p>{{ weatherData.location.name }}</p>
        <p>{{ weatherData.current.temp_c }}°C</p>
        <p>{{ weatherData.current.condition.text }}</p>
    </div>
    <div v-else>
        <p class="animate-flash text-md">{{ $t('Home.weatherLoad') }}</p>
    </div>
</template>
<script setup>
import { getWeather } from '~/lib/w.js';

const weatherData = ref(null);
const { locale } = useI18n();

const fetchWeatherData = async (newLocale) => {
    try {
        weatherData.value = await getWeather(null, newLocale);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

watch(() => locale.value, (newLocale, oldLocale) => {
    if (newLocale !== oldLocale) {
        fetchWeatherData(newLocale);
    }
});

onMounted(() => {
    fetchWeatherData(locale.value);
});
</script>