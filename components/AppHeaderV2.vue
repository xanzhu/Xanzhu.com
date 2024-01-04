<template>
    <header
        class="flex justify-between items-center dark:(text-white bg-black) text-black bg-white md:p3 px4 py2 mx-auto md:px-6 xl:px10 2xl:px20 border-b-1 b-0 border-light-700 dark:border-dark-800 b-solid">
        <div class="flex md:space-x-10">
            <NuxtLinkLocale to="/" class="mx-auto text-center text-black dark:text-white">
                <UiIconXanzhu class="h6" :aria-label="t('a11y.logo')" />
                <span class="sr-only">{{ t('a11y.Home') }}</span>
            </NuxtLinkLocale>
            <nav class="hidden md:(block space-x-5 decoration-none)">
                <NuxtLinkLocale v-for="(link, index) in links" :key="index" :to="link.url"
                    active-class="!underline underline-offset-6 !decoration-3 !dark:decoration-brand-dark !decoration-brand-light"
                    :aria-label="t(link.name)"
                    class="text-black dark:text-white decoration-none hover:(underline underline-offset-6 decoration-3  dark:decoration-brand-light decoration-brand-dark)"
                    v-t="link.name">
                </NuxtLinkLocale>
            </nav>
        </div>
        <!-- Language Selector Default -->
        <div class="hidden md:(flex items-center space-x-2)">
            <UiColorSwitch />
            <div
                class="md:(flex dark:bg-dark-900 bg-light-700 px1 py1 rounded-full border-1 dark:border-dark-400 b-solid border-light-800)">
                <NuxtLink v-for="locale in availableLocales" @click.prevent.capture="setLocale(locale.code)"
                    :key="locale.code" :aria-label="t('app.sr.lang_select') + locale.name"
                    :to="switchLocalePath(locale.code)"
                    active-class="dark:(bg-white !text-black) text-white bg-black pointer-events-none order-first"
                    class="dark:text-white text-black decoration-none font-medium text-sm px3 py1 rounded-full dark:hover:bg-dark-600 hover-bg-gray-300 order-1 mr-1 last:mr-0">
                    {{ locale.name }}
                </NuxtLink>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden flex space-x-3 items-center">
            <UiColorSwitch />
            <Icon name="tabler:language" class="cursor-pointer h5 w5" :aria-label="t('app.sr.lang')" @click="langToggle">
                <span class="sr-only">{{ t('app.sr.lang') }}</span>
            </Icon>
            <div
                :class="Toggle.lang ? 'flex flex-col list-none absolute children:(decoration-none dark:text-white text-black font-medium) dark:bg-dark-900 bg-white top-12 right-17 p2 rounded-md children:mt1 text-center b-solid b-1 dark:b-dark-500 b-gray-300' : 'hidden'">
                <NuxtLink v-for="(locale, index) in availableLocales" @click.prevent.capture="setLocale(locale.code)"
                    :key="`x-${index}`" :aria-label="t('app.sr.lang_select') + locale.name" @click="langToggle"
                    :to="switchLocalePath(locale.code)"
                    class="text-white decoration-none font-medium px3 py1 order-1 dark:hover:bg-dark-500 hover:bg-gray-200 rounded-md dark:text-white text-dark-900"
                    active-class="bg-black !text-white dark:(!text-black bg-white) pointer-events-none order-first mt0">
                    {{ locale.name }}
                </NuxtLink>
            </div>
            <Icon name="tabler:menu" class="h6 w6 cursor-pointer inline-flex items-center p-2 text-sm rounded-lg md:hidden"
                @click="openMenu">
                <span class="sr-only">{{ t('app.sr.menu') }}</span>
            </Icon>
            <nav
                :class="Toggle.menu ? 'flex flex-col list-none absolute children:(decoration-none text-black font-medium) bg-white text-black top-12 right-6 p2 rounded-md children:mt1 text-center b-solid b-1 b-gray-300' : 'hidden'">
                <NuxtLinkLocale v-for="(link, index) in links" :key="index" :to="link.url"
                    active-class="pointer-events-none order-first !bg-black text-white mt0" :aria-label="t(link.name)"
                    @click="closeMenu" class="order-1 px4 py2 rounded-md hover:bg-gray-200">
                    {{ t(link.name) }}
                </NuxtLinkLocale>
            </nav>
        </div>
    </header>
</template>
<script setup>
const { locales, setLocale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code);
});


const Toggle = ref({
    menu: false,
    lang: false
});

function openMenu() {
    Toggle.value.menu = !Toggle.value.menu;
    Toggle.value.lang = false;
}

function closeMenu() {
    Toggle.value.menu = false;
}

function langToggle() {
    Toggle.value.lang = !Toggle.value.lang;
    Toggle.value.menu = false;
}

const links = [
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