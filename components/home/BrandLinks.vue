<template>
    <div
        class="mt2 mx4 flex sm:(flex-row justify-between mx6) flex-col items-center space-y-2 justify-center text-xs font-medium xl:px10 2xl:px20 text-center">
        <div class="children:(decoration-none dark:text-white text-black) space-x-4">
            <NuxtLink
                class="group hover:(underline underline-offset-2 decoration-black dark:decoration-white decoration-2) sm:inline-flex items-center"
                v-for="link in urls" :to="link.url" target="_blank">{{ link.name }}
                <Icon name="ri:external-link-line" class="group-hover:(h3.5 w3.5) ml0.5 -mt-0.5 sm:mt0 h3.5 w3.5 ">
                </Icon>
            </NuxtLink>
        </div>
        <div class="h4">
            {{ formattedDate }}
        </div>
    </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const urls = [
    {
        url: "https://www.cert.govt.nz/individuals/",
        name: "Cert.nz",
    },
    {
        url: "https://netsafe.org.nz/",
        name: "NetSafe",
    },
    {
        url: "https://bitwarden.com/",
        name: "Bitwarden",
    },
    {
        url: (locale.value === 'ko') ? 'https://www.samsung.com/sec/' : 'https://www.samsung.com/nz/',
        name: "Samsung"
    }
];
const formattedDate = ref<string | null>(null);

const getFormattedDate = (locale: string): string => {
    const now = new Date();
    return now.toLocaleString(locale, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};

onMounted(() => {
    getCurrentDate();
});

const getCurrentDate = () => {
    formattedDate.value = getFormattedDate(locale.value);
};

watch(locale, () => {
    getCurrentDate();
});
</script>