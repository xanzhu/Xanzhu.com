<script setup lang="ts">
const { toggle, isActive } = useStateToggle();

const isLangOpen = computed(() => isActive('language'));
const isMenuOpen = computed(() => isActive('menu'));

defineProps<{
    links: NavLink[],
}>();

const { locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code);
});
</script>

<template>
    <div class="flex space-x-3 items-center text-center">
        <UiColorSwitch />
        <Icon name="fluent:local-language-16-filled" class="cursor-pointer h6 w6" :aria-label="t('app.sr.lang')"
            :aria-expanded="isLangOpen ? 'true' : 'false'" @click="toggle('language')" aria-controls="language-options">
            <span class="sr-only">{{ t('app.sr.lang') }}</span>
        </Icon>
        <div id="language-options"
            :class="isActive('language') ? 'flex flex-col absolute top-13 core-ui core-border rounded-md p2 shadow-md right-13 children:(mb1) w-20' : 'hidden'">
            <NuxtLink v-for="locale in availableLocales" :key="locale.code"
                :aria-label="t('app.sr.lang_select') + locale.name" @click="toggle('language')"
                :to="switchLocalePath(locale.code)"
                class="text-inherit no-underline p2 hover:(core-theme core-border) b-1 b-transparent b-solid rounded-md h-5"
                exact-active-class="dark:bg-black bg-white pointer-events-none order-first !core-border">
                {{ locale.name }}
            </NuxtLink>
        </div>
        <Icon name="fluent:list-rtl-16-filled" class="h6 w6 cursor-pointer"
            :aria-expanded="isMenuOpen ? 'true' : 'false'" @click="toggle('menu')" aria-controls="menu-options">
            <span class="sr-only">{{ t('app.sr.menu') }}</span>
        </Icon>
        <nav id="menu-options"
            :class="isActive('menu') ? 'flex flex-col absolute top-13 core-ui core-border rounded-md p2 shadow-md right-4 children:(mb1) min-w-25' : 'hidden'"
            role="menu">
            <NuxtLinkLocale v-for="(link, index) in links" :key="index" :to="link.url" @click="toggle('menu')"
                class="text-black dark:(text-white) no-underline p2 hover:(core-theme core-border) b-1 b-transparent b-solid rounded-md h-5"
                active-class="dark:bg-black bg-white pointer-events-none order-first !core-border">
                {{ t(link.name) }}
            </NuxtLinkLocale>
        </nav>
    </div>
</template>