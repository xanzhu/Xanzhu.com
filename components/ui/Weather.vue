<template>
    <div v-if="weatherData" class="flex items-center space-x-2 text-md font-medium">
        <NuxtImg :src="'https:' + weatherData.current.condition.icon" alt="weather icon" height="32" width="32"
            class="h-8 w-auto filter saturate-700" />
        <p>{{ weatherData.location.name }}</p>
        <p>{{ weatherData.current.temp_c }}°C</p>
        <p>{{ weatherData.current.condition.text }}</p>
    </div>
    <div v-else>
        <p class="animate-flash text-md">{{ $t('Home.weatherLoad') }}</p>
    </div>
</template>

<script setup>
import { getWeather } from '~/lib/weather.js';

const weatherData = ref(null);

onMounted(async () => {
    try {
        weatherData.value = await getWeather();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});
</script>