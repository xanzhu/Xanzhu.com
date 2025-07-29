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
  <div class="flex items-center text-center space-x-1">
    <UiColorSwitch />
    <button
      class="cursor-pointer border border-1 border-transparent rounded-md bg-transparent px1.5 py0.5 pt1 text-black hover:(core-border core-ui) dark:text-white"
      :aria-expanded="isLangOpen ? 'true' : 'false'" aria-controls="language-options" @click="toggle('language')"
    >
      <Icon name="fluent:local-language-16-filled" class="h6 w6" aria-hidden="true" />
      <span class="sr-only">{{ t('v2.langSwitch.select') }}</span>
    </button>
    <div
      v-show="isLangOpen" id="language-options"
      class="absolute right-12 top-13 w-25 flex flex-col core-border rounded-md core-ui p2 shadow-md children:(mb1)"
      tabindex="-1" role="menu" @keydown.esc="toggle('language')"
    >
      <NuxtLink
        v-for="locale in availableLocales" :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="h-5 b-1 b-transparent rounded-md b-solid p2 text-inherit no-underline hover:(core-border core-theme)"
        exact-active-class="dark:bg-black bg-white pointer-events-none order-first !core-border"
        role="menuitem" :aria-current="locale.code === $i18n.locale ? 'true' : undefined" :aria-label="locale.code === $i18n.locale ? `${locale.name} ${t('v2.langSwitch.current')}` : `${t('v2.langSwitch.switch')} ${locale.name}`"
        @click="toggle('language')"
      >
        {{ locale.name }}
      </NuxtLink>
    </div>
    <button
      class="cursor-pointer border border-1 border-transparent rounded-md bg-transparent px1.5 py0.5 pt1 text-black hover:(core-border core-ui) dark:text-white"
      :aria-expanded="isMenuOpen ? 'true' : 'false'" aria-controls="menu-options" @click="toggle('menu')"
    >
      <Icon name="fluent:list-rtl-16-filled" class="h6 w6" aria-hidden="true" />
      <span class="sr-only">{{ t('app.sr.menu') }}</span>
    </button>
    <nav
      v-show="isMenuOpen" id="menu-options"
      class="absolute right-2 top-13 min-w-25 flex flex-col core-border rounded-md core-ui p2 shadow-md children:(mb1)"
      tabindex="-1" role="menu" @keydown.esc="toggle('menu')"
    >
      <NuxtLinkLocale
        v-for="(link, index) in links" :key="index" :to="link.url"
        class="h-5 b-1 b-transparent rounded-md b-solid p2 text-black no-underline hover:(core-border core-theme) dark:(text-white)"
        active-class="dark:bg-black bg-white pointer-events-none order-first !core-border" @click="toggle('menu')"
      >
        {{ t(link.name) }}
      </NuxtLinkLocale>
    </nav>
  </div>
</template>
