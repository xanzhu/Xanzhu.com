<template>
    <div
        class="mx-2 p1 justify-center space-y-4 mt2 flex flex-col items-center justify-center text-xs font-medium text-center xl:(px5 py2) sm:(flex-row justify-between max-w-[38.5rem] space-y-0 mx-auto) md:(max-w-[46.5rem] px3 py1.5) lg:(max-w-[62.5rem]) children:(dark:(bg-dark-900 text-white b-dark-700) bg-light-400 text-black px4 py1.5 rounded-sm b-1 b-solid b-gray-300)">
        <div class="children:(decoration-none dark:text-white text-black) space-x-4">
            <NuxtLink
                class="group sm:inline-flex hover:(decoration-2 decoration-brand-light dark:decoration-brand-dark underline underline-offset-3) p0 items-center"
                v-for="link in urls" :to="link.url" target="_blank">{{ link.name }}
                <Icon name="ri:external-link-line"
                    class="group-hover:(dark:text-brand-dark text-brand-light rounded-md) ml0.5 -mt-0.5 sm:mt0 h3.5 w3.5 ">
                </Icon>
            </NuxtLink>
        </div>
        <client-only>
            <span class="">{{ formatDate(locale) }}</span>
        </client-only>
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