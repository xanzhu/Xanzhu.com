<template>
    <div
        class="flex flex-col sm:(flex-row py2 px4) py4 space-y-2 md:(flex-row px20 py2 space-y-0) justify-between items-center text-sm font-normal bg-black text-white">
        <UiWeather />
        <span v-if="formattedDate">{{ formattedDate }}</span>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const formattedDate = ref<string>('');

const updateDate = (localeValue: string) => {
    const now = new Date();
    formattedDate.value = now.toLocaleString(localeValue, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
};

onMounted(() => {
    updateDate(locale.value);
});

watch(() => locale.value, (newLocale: string) => {
    updateDate(newLocale);
});
</script>