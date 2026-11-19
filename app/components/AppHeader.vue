<script setup>
const links = useNavLinks(
  { name: "common.nav.blog", url: "/blog" },
  { name: "common.nav.advisory", url: "/advisory" },
  { name: "common.nav.resources", url: "/resources" },
);

// Experimental
const LayoutMobileNav = defineAsyncComponent(() => import("./MobileNav.vue"));

const switchLocalePath = useSwitchLocalePath();
const { locale: activeLocale, locales, t } = useI18n();

const sortedLocales = computed(() => {
  const sorted = locales.value.toSorted((a, b) => {
    if (a.code === activeLocale.value) return -1;
    if (b.code === activeLocale.value) return 1;
    return 0;
  });

  return sorted.map((locale) => ({
    ...locale,
    isActive: locale.code === activeLocale.value,
    classes:
      locale.code === activeLocale.value
        ? "bg-black text-white dark:bg-white dark:text-black pointer-events-none"
        : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600",
  }));
});
</script>

<template>
  <header
    class="text-black p2 border-b-1 border-b-dark400/10 bg-white/70 flex items-center justify-between backdrop-blur-lg dark:(text-white border-b-dark-200/30 bg-black/70) 2xl:px40 md:px-6 xl:px25"
  >
    <NuxtLinkLocale to="/" class="text-inherit" :aria-label="t('common.nav.home')">
      <UiAppLogo v-once class="h10 md:h12" />
    </NuxtLinkLocale>

    <nav class="md:underline-none hidden md:(flex space-x-10)" :aria-label="t('common.menu.main')">
      <NuxtLinkLocale
        v-for="link in links"
        :key="link.url"
        class="text-inherit underline underline-1 underline-transparent underline-offset-4 transition-colors duration-350 ease-out hover:(underline underline-black duration-150 ease-in) dark:hover:underline-white"
        active-class="underline-black dark:underline-white"
        :to="link.url"
      >
        {{ t(link.name) }}
      </NuxtLinkLocale>
    </nav>

    <div class="hidden md:(flex items-center space-x-2)">
      <UiColorSwitch />
      <nav :aria-label="t('common.lang.select')">
        <ul class="md:(core-ui p1 core-border rounded-full inline-flex gap1)">
          <li v-for="locale in sortedLocales" :key="locale.code">
            <NuxtLink
              :to="switchLocalePath(locale.code)"
              :prefetch="false"
              :aria-current="locale.isActive ? 'page' : undefined"
              :hreflang="locale.language ?? locale.code"
              :lang="locale.language ?? locale.code"
              :class="locale.classes"
              class="block text-sm font-medium px3 py1 text-center rounded-full decoration-none transition-colors duration-200 motion-reduce:transition-none focus-visible:(outline-2 outline-offset-2)"
            >
              {{ locale.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <LayoutMobileNav class="flex md:hidden" :links="links" />
  </header>
</template>
