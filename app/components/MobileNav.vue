<script setup lang="ts">
defineProps<{
  links: NavLink[]
}>()

const { toggle, isActive } = useStateToggle()

const isLangOpen = computed(() => isActive('language'))
const isMenuOpen = computed(() => isActive('menu'))

const { locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code)
})
</script>

<template>
  <div class="flex items-center text-center space-x-3">
    <UiColorSwitch />
    <Icon
      name="fluent:local-language-16-filled" class="h6 w6 cursor-pointer" :aria-label="t('app.sr.lang')"
      :aria-expanded="isLangOpen ? 'true' : 'false'" aria-controls="language-options" @click="toggle('language')"
    >
      <span class="sr-only">{{ t('app.sr.lang') }}</span>
    </Icon>
    <div
      id="language-options"
      :class="isActive('language') ? 'flex flex-col absolute top-13 core-ui core-border rounded-md p2 shadow-md right-13 children:(mb1) w-20' : 'hidden'"
    >
      <NuxtLink
        v-for="locale in availableLocales" :key="locale.code"
        :aria-label="t('app.sr.lang_select') + locale.name" :to="switchLocalePath(locale.code)"
        class="h-5 b-1 b-transparent rounded-md b-solid p2 text-inherit no-underline hover:(core-border core-theme)"
        exact-active-class="dark:bg-black bg-white pointer-events-none order-first !core-border"
        @click="toggle('language')"
      >
        {{ locale.name }}
      </NuxtLink>
    </div>
    <Icon
      name="fluent:list-rtl-16-filled" class="h6 w6 cursor-pointer"
      :aria-expanded="isMenuOpen ? 'true' : 'false'" aria-controls="menu-options" @click="toggle('menu')"
    >
      <span class="sr-only">{{ t('app.sr.menu') }}</span>
    </Icon>
    <nav
      id="menu-options"
      :class="isActive('menu') ? 'flex flex-col absolute top-13 core-ui core-border rounded-md p2 shadow-md right-4 children:(mb1) min-w-25' : 'hidden'"
      role="menu"
    >
      <NuxtLinkLocale
        v-for="(link, index) in links" :key="index" :to="link.url" class="h-5 b-1 b-transparent rounded-md b-solid p2 text-black no-underline hover:(core-border core-theme) dark:(text-white)"
        active-class="dark:bg-black bg-white pointer-events-none order-first !core-border"
        @click="toggle('menu')"
      >
        {{ t(link.name) }}
      </NuxtLinkLocale>
    </nav>
  </div>
</template>
