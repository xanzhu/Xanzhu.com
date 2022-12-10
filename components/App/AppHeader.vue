<script setup>
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

// Bug - Doesn't work well with content
// const availableLocales = computed(() => {
//   return (locales.value).filter(i => i.code !== locale.value)
// })

const MobileMenu = ref(false);
const LangMenu = ref(false);

function MobileToggle() {
  MobileMenu.value = !MobileMenu.value
}

function LangToggle() {
  LangMenu.value = !LangMenu.value;
}

const links = [
  {
    url: '#',
    name: 'links.docs'
  },
  {
    url: '/blog',
    name: 'links.blog'
  },
  {
    url: '/',
    name: 'links.home'
  }

]
</script>
<template>
  <header
    class="flex flex-row justify-between items-center px-4 py-2 bg-transparent text-black dark:(bg-black text-light-200) md:(bg-transparent space-x-4 mx-2 py-4) lg:mx-12"
    role="banner">
    <NuxtLink :to="localePath('/')" aria-label="Xanzhu">
      <IconXanzhu class="flex w-40 sm:w-46 md:w-56" />
    </NuxtLink>
    <!-- Mobile Navigation Toggle -->
    <div class="flex text-black dark:text-light-200 md:hidden">
      <button @click="MobileToggle">
        <IconMenu v-show="!MobileMenu" class="w-7 h-7" :aria-label="t('aria.button.Omenu')" />
        <IconCross v-show="MobileMenu" class="w-7 h-7" :aria-label="t('aria.button.Cmenu')" />
      </button>
    </div>
    <!-- Navigation UI  -->
    <nav
      class="items-center font-semibold bg-gray-300 dark:(bg-dark-800 md:bg-transparent) md:(relative top-0 flex flex-row space-x-6 p-4 bg-transparent)"
      :class="{ 'flex p-4 rounded-md absolute top-9.5 right-4.5 z-1 flex-col-reverse': MobileMenu, 'hidden': !MobileMenu }"
      role="navigation">
      <div class="md:(space-x-6 flex-row) font-semibold text-center text-sm flex-col flex w-full"
        @click="MobileMenu = false ">
        <template v-for="link in links">
          <NuxtLink :to="localePath(link.url)" :aria-label="t(link.name)" class="nav-internal" v-t="link.name" />
        </template>
      </div>
      <div class="flex flex-row space-x-2 items-center align-middle justify-center">
        <!-- Translate Menu Toggle -->
        <button @click="LangToggle" class="text-[#FF0000] hover:text-current px-1">
          <IconTranslate class="w-6 h-6 pt-0.5" :aria-label="t('aria.button.translate')" />
        </button>
        <ul v-show="LangMenu"
          class="z-4 p-1 absolute top-13 rounded-md shadow-md space-y-1 dark:(bg-dark-500 text-light-200) bg-light-700 text-black">
          <!-- Bug - Content not switching correctly -->
          <!-- <li class="text-center hover:bg-light-400 rounded-md p-1 dark:hover:bg-dark-300"
            v-for="locale in availableLocales" :key="locale.code">
            <NuxtLink @click="LangToggle" class="mx-[-0.5em] px-[1em] inline-block" :to="switchLocalePath(locale.code)">
              {{ locale.name }}
            </NuxtLink>
          </li> -->
          <li v-for="locale in $i18n.locales" :key="locale.code"
            class="text-center hover:bg-light-400 rounded-md p-1 dark:hover:bg-dark-300">
            <NuxtLink @click="LangToggle" :to="switchLocalePath(locale.code)" class="mx-[-0.5em] px-[1em] inline-block">
              {{ locale.name }}
            </NuxtLink>
          </li>
        </ul>
        <ColorSwitch />
      </div>
    </nav>
  </header>
</template>
<!-- TO:DO
- Add active class for links
- Redesign !
-->