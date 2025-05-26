<script setup>
const links = useNavLinks(
  { name: 'Links.blog', url: '/blog' },
  { name: 'Links.analysis', url: '/analysis' },
  { name: 'Links.resources', url: '/resources' },
)

const { locales, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code)
})
</script>

<template>
  <header
    class="mx-auto flex items-center justify-between b-1 border-b-dark-4/10 b-solid b-l-none b-r-none b-t-none bg-white p2 text-black dark:(b-b-dark-2/30 bg-black text-white) 2xl:px40 md:px-6 xl:px25"
  >
    <NuxtLinkLocale to="/" class="text-inherit">
      <AppLogo class="h10 md:h12" />
    </NuxtLinkLocale>
    <!-- Navigation -->
    <nav class="hidden md:(flex decoration-none space-x-10)" role="navigation">
      <NuxtLinkLocale
        v-for="(link, index) in links"
        :key="index" class="text-inherit underline-2 decoration-transparent underline-offset-6 transition duration-350 ease-out hover:(underline-black duration-150 ease-in) dark:hover:underline-white"
        active-class="underline-2 underline-black dark:underline-white" :to="link.url"
      >
        {{ t(link.name) }}
      </NuxtLinkLocale>
    </nav>
    <!-- Language Selector -->
    <div class="hidden md:(flex items-center space-x-2)" role="group">
      <UiColorSwitch />
      <div class="md:(inline-flex gap1 core-border rounded-full core-ui p1)" role="navigation">
        <NuxtLink
          v-for="locale in availableLocales" :key="locale.code"
          :aria-label="t('app.sr.lang_select') + locale.name" :to="switchLocalePath(locale.code)"
          active-class="!dark:(bg-white text-black) text-white bg-black pointer-events-none order-first"
          class="rounded-full px3 py1 text-center text-sm text-black font-medium decoration-none hover:bg-gray200 hover:core-ui dark:text-inherit dark:hover:bg-dark-600"
          @click.prevent.capture="setLocale(locale.code)"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>
    <!-- Mobile Menu -->
    <MobileNav class="flex md:hidden" :links="links" />
  </header>
</template>
