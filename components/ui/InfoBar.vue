<template>
    <div
        class="flex items-center flex-col pb5 sm:(flex-row justify-between pb0) font-semibold lg:(justify-around) dark:(bg-black text-white) bg-white text-black px4 border-b-1 b-solid b-0 border-gray-200 dark:border-dark-700">
        <UiWeather />
        <client-only>
            <span class="text-sm font-medium">{{ formatDate(locale) }}</span>
        </client-only>
    </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const formatDate = (locale: string) => {
    const now = new Date();
    return now.toLocaleString(locale, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};
</script>