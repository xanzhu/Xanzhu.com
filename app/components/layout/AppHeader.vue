<script setup>
import { defineAsyncComponent, hydrateOnInteraction } from 'vue'

const links = useNavLinks(
  { name: 'nav.blog', url: '/blog' },
  { name: 'nav.analysis', url: '/analysis' },
  { name: 'nav.resources', url: '/resources' },
)

// Experimental
const LayoutMobileNav = defineAsyncComponent({
  loader: () => import('./MobileNav.vue'),
  hydrate: hydrateOnInteraction(['pointerenter', 'touchstart']),
})

const switchLocalePath = useSwitchLocalePath()
const { locale: activeLocale, locales, t } = useI18n()

const sortedLocales = computed(() => {
  const sorted = [...locales.value].sort((a, b) => {
    if (a.code === activeLocale.value)
      return -1
    if (b.code === activeLocale.value)
      return 1
    return 0
  })

  return sorted.map(locale => ({
    ...locale,
    isActive: locale.code === activeLocale.value,
    classes: locale.code === activeLocale.value
      ? 'bg-black text-white dark:bg-white dark:text-black pointer-events-none'
      : 'text-black dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600',
  }))
})
</script>

<template>
  <header
    class="mx-auto flex items-center justify-between b-1 border-b-dark-4/10 b-solid b-l-none b-r-none b-t-none bg-white p2 text-black dark:(b-b-dark-2/30 bg-black text-white) 2xl:px40 md:px-6 xl:px25"
  >
    <NuxtLinkLocale to="/" class="text-inherit">
      <UiAppLogo v-once class="h10 md:h12" />
    </NuxtLinkLocale>

    <nav class="hidden md:(flex underline-none space-x-10)" :aria-label="t('aria.main_nav')">
      <NuxtLinkLocale
        v-for="link in links"
        :key="link.url"
        class="text-inherit underline-1 underline-transparent underline-offset-4 transition-colors duration-350 ease-out hover:(underline-black duration-150 ease-in) dark:hover:underline-white"
        active-class="!underline-black !dark:underline-white"
        :to="link.url"
      >
        {{ t(link.name) }}
      </NuxtLinkLocale>
    </nav>

    <div class="hidden md:(flex items-center space-x-2)" role="group">
      <UiColorSwitch />
      <div class="md:(inline-flex gap1 core-border rounded-full core-ui p1)" role="navigation" :aria-label="t('aria.lang_selector')">
        <NuxtLink
          v-for="locale in sortedLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :prefetch="false"
          :aria-current="locale.isActive ? 'true' : undefined"
          :class="locale.classes"
          class="rounded-full px3 py1 text-center text-sm font-medium decoration-none transition-colors duration-200"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>

    <LayoutMobileNav class="flex md:hidden" :links="links" />
  </header>
</template>
