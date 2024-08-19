<template>
    <div
        class="flex flex-row space-x-2 bg-black text-white dark:(bg-white text-black) justify-between p6 md:(p12 pb4) items-center border-t-1 b-0 border-dark-800 dark:border-light-700 b-solid">
        <div class="flex flex-col">
            <div class="flex-col md:(flex-row items-center space-x-10 space-y-0) flex space-y-4">
                <UiLogo class="dark:text-black text-white" />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(link, index) in links" :key="index">
                        <NuxtLinkLocale
                            class="font-medium text-white dark:text-black decoration-none px2 py1.5 rounded-md dark:hover:(text-black bg-light7) hover:(bg-dark-700 text-white) duration-400 transition ease-in-out"
                            :to=link.url>{{
                        t(link.name) }}
                        </NuxtLinkLocale>
                    </div>
                </div>
                <HomeSocialsCard class="mt-10 md:hidden" />
            </div>
            <p class="mt-5 font-normal text-sm text-gray-300 dark:text-dark-300">{{ t("Footer") }} <NuxtLinkLocale
                    to="/privacy-policy"
                    class="font-semibold decoration-none text-gray-300 dark:text-black hover:(text-brand-dark)">{{
                        t('PP.title') }}</NuxtLinkLocale>
            </p>
        </div>
        <div class="hidden md:(flex-col flex items-end)">
            <HomeSocialsCard class="mb-5" />
            <NuxtLink
                to="https://www.digitalocean.com/?refcode=2cc6381920cd&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
                target="_blank">
                <NuxtImg src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
                    alt="DigitalOcean Referral Badge" loading="lazy" height="65" width="215" />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const links = [
    {
        url: "/",
        name: "Links.home",
    },
    {
        url: "/about",
        name: 'About.title',
    },
    {
        url: "/blog",
        name: "Links.blog",
    },
    {
        url: "/resources",
        name: "Links.resources",
    },
    {
        url: "/analysis",
        name: "Links.analysis",
    }
];
</script>