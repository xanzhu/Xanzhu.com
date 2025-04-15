<template>
    <header
        class="flex justify-between items-center dark:(text-white bg-black) text-black bg-white p2 mx-auto md:px-6 xl:px25 2xl:px40 b-solid b-l-none b-r-none b-t-none border-b-dark-4/10 dark:b-b-dark-2/30 b-1">
        <NuxtLinkLocale to="/" class="text-inherit">
            <AppLogo class="h10 md:h12" />
        </NuxtLinkLocale>
        <!-- Navigation -->
        <nav class="hidden md:(flex space-x-10 decoration-none)">
            <NuxtLinkLocale
                class="text-inherit underline-2 underline-offset-6 decoration-transparent hover:(underline-black ease-in duration-150) dark:hover:underline-white transition duration-350 ease-out"
                active-class="underline-2 underline-black dark:underline-white" v-for="(link, index) in links"
                :key="index" :to="link.url">
                {{ $t(link.name) }}
            </NuxtLinkLocale>
        </nav>
        <!-- Language Selector -->
        <div class="hidden md:(flex items-center space-x-2)">
            <UiColorSwitch />
            <div class="md:(inline-flex gap1 p1 rounded-full core-ui core-border)">
                <NuxtLink v-for="locale in availableLocales" @click.prevent.capture="setLocale(locale.code)"
                    :key="locale.code" :aria-label="t('app.sr.lang_select') + locale.name"
                    :to="switchLocalePath(locale.code)"
                    active-class="!dark:(bg-white text-black) text-white bg-black pointer-events-none order-first"
                    class="text-black dark:text-inherit decoration-none font-medium text-sm px3 py1 rounded-full dark:hover:bg-dark-600 hover:bg-gray200 hover:core-ui text-center">
                    {{ locale.name }}
                </NuxtLink>
            </div>
        </div>
        <!-- Mobile Menu -->
        <MobileNav class="flex md:hidden" :links="links" />
    </header>
</template>
<script setup>
const links = useNavLinks(
    { name: "Links.blog", url: "/blog" },
    { name: "Links.analysis", url: "/analysis" },
    { name: "Links.resources", url: "/resources" }
);

const { locales, setLocale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code);
});
</script>