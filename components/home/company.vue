<template>
    <div class="hidden lg:(flex justify-center items-center h20vh overflow-hidden)">
        <div class="h100% overflow-hidden">
            <div class="slide flex min-w200%">
                <div class="flex justify-center items-center mr170px shrink-0"
                    v-for="link in repeatedUrls" :key="link.name + Math.random()">
                    <NuxtLink :href="link.url" target="_blank" class="inline-block group">
                        <NuxtImg :src="getSvgIconUrl(link.name)"
                            class="w-32 h-auto filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
                            :alt="link.name" loading="lazy" />
                    </NuxtLink>
                </div>
            </div>
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

const repeatedUrls = ref([]);

onMounted(() => {
    repeatedUrls.value = [...urls, ...urls, ...urls];
});
</script>

<style scoped>
.slide {
    animation: marquee 175s linear infinite;
}


@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.slide:hover {
    animation-play-state: paused;
}
</style>