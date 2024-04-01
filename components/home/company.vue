<template>
    <div class="flex justify-center">
        <div
            class="flex items-center justify-center space-y-10 flex-col lg:(flex-row justify-between space-x-30 space-y-0 mx-10) my-10">
            <NuxtLink v-for="link in urls" :key="link.name" :href="link.url" target="_blank" class="group">
                <img :src="getSvgIconUrl(link.name)"
                    class="h-auto w-auto fill-current grayscale group-hover:(grayscale-0)" alt="SVG Icon" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { locale } = useI18n();

const urls = [
    {
        url: "https://www.cert.govt.nz/individuals/",
        name: "Certnz",
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

const getSvgIconUrl = (name) => {
    return `/images/home/${name.toLowerCase()}.svg`;
};
</script>