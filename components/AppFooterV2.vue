<template>
    <div
        class="flex flex-row space-x-2 bg-black text-white dark:(bg-white text-black) justify-between p6 md:(p12 pb4) items-center">
        <div class="flex flex-col">
            <div class="flex-col md:(flex-row items-center space-x-10 space-y-0) flex space-y-4">
                <UiLogo class="dark:text-black text-white" />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(link, index) in links" :key="index">
                        <NuxtLink
                            class="text-white dark:text-black decoration-none hover:(underline underline-offset-6 decoration-2 decoration-brand-dark)"
                            :to=localePath(link.url)>{{ t(link.name) }}</NuxtLink>
                    </div>
                </div>
                <HomeSocialsCard class="mt-10 md:hidden" />
            </div>
            <p class="mt-5 font-normal text-sm">{{ t("Footer") }} <NuxtLink :to="localePath('/privacy-policy')"
                    class="font-semibold text-white dark:text-black decoration-none hover:(text-brand-dark)">{{
                        t('PP.title') }}</NuxtLink>
            </p>
        </div>
        <div class="hidden md:(flex-col flex items-end)">
            <HomeSocialsCard class="mb-5" />
            <NuxtLink
                href="https://www.digitalocean.com/?refcode=2cc6381920cd&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                <NuxtImg src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
                    alt="DigitalOcean Referral Badge" loading="lazy" />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

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