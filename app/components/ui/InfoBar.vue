<template>
    <div v-if="!disablePath"
        class="flex flex-col sm:(flex-row py2 px6) py4 space-y-2 md:(flex-row px9 py2 space-y-0) xl:px30 2xl:px43 justify-between items-center text-sm font-normal bg-transparent text-inherit z-10">
        <UiWeather />
        <span :style="{ height: '20px', opacity: formattedDate ? 1 : 0, transition: 'opacity 0.3s ease' }">
            {{ formattedDate || ' ' }}
        </span>
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

const route = useRoute();

const disablePath = computed(() => {
    const paths = ['/', '/ko', '/zh'];
    return paths.includes(route.path);
});
</script>
