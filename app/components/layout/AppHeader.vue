<script setup>
const links = useNavLinks(
  { name: 'Links.blog', url: '/blog' },
  { name: 'Links.analysis', url: '/analysis' },
  { name: 'Links.resources', url: '/resources' },
)

const switchLocalePath = useSwitchLocalePath()
const { locale: activeLocale, locales, t } = useI18n()

const sortedLocales = computed(() => {
  return [...locales.value].sort((a, b) => {
    if (a.code === activeLocale.value)
      return -1
    if (b.code === activeLocale.value)
      return 1
    return 0
  })
})
</script>

<template>
  <header
    class="mx-auto flex items-center justify-between b-1 border-b-dark-4/10 b-solid b-l-none b-r-none b-t-none bg-white p2 text-black dark:(b-b-dark-2/30 bg-black text-white) 2xl:px40 md:px-6 xl:px25"
  >
    <NuxtLinkLocale to="/" class="text-inherit">
      <UiAppLogo class="h10 md:h12" />
    </NuxtLinkLocale>

    <nav class="hidden md:(flex underline-none space-x-10)" :aria-label="t('v2.sr.mainNav')">
      <NuxtLinkLocale
        v-for="link in links"
        :key="link.url"
        class="text-inherit underline-1 underline-transparent underline-offset-4 transition-colors duration-350 ease-out hover:(underline-black duration-150 ease-in) dark:hover:underline-white"
        active-class="underline-black dark:underline-white"
        :to="link.url"
      >
        {{ t(link.name) }}
      </NuxtLinkLocale>
    </nav>

    <div class="hidden md:(flex items-center space-x-2)" role="group">
      <UiColorSwitch />
      <div class="md:(inline-flex gap1 core-border rounded-full core-ui p1)" role="navigation" :aria-label="t('v2.sr.langSelect')">
        <TransitionGroup name="list" tag="div" class="flex gap1">
          <NuxtLink
            v-for="locale in sortedLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            :prefetch="false"
            :aria-current="activeLocale.value === locale.code ? 'true' : undefined"
            :class="[
              activeLocale === locale.code
                ? '!dark:(bg-white text-black) text-white bg-black pointer-events-none'
                : 'text-black dark:text-inherit hover:bg-gray200 dark:hover:bg-dark-600',
            ]"
            class="rounded-full px3 py1 text-center text-sm font-medium decoration-none transition-colors duration-200"
          >
            {{ locale.name }}
          </NuxtLink>
        </TransitionGroup>
      </div>
    </div>

    <LayoutMobileNav class="flex md:hidden" :links="links" />
  </header>
</template>
