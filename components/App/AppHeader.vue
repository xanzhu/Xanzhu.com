<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

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
    class="flex flex-row justify-between items-center px-4 py-2 bg-transparent text-black dark:(bg-black text-light-200) md:(bg-transparent space-x-4 mx-2 py-4) lg:mx-6"
    role="banner">
    <div class="md:(flex flex-row space-x-4 items-center)">
      <NuxtLink :to="localePath('/')" aria-label="Xanzhu">
        <IconXanzhu class="flex w-40 sm:w-46 md:w-56" />
      </NuxtLink>
      <p class="hidden md:block border-outline px-1.5 py-0.2 text-xs">BETA</p>
    </div>

    <!-- Mobile Navigation Toggle -->
    <div class="flex text-black dark:text-light-200 md:hidden">
      <button @click="MobileToggle">
        <IconMenu v-if="!MobileMenu" class="w-7 h-7" :aria-label="t('aria.button.Omenu')" />
        <IconCross v-if="MobileMenu" class="w-7 h-7" :aria-label="t('aria.button.Cmenu')" />
      </button>
    </div>
    <!-- Navigation UI  -->
    <nav
      class="items-center font-semibold bg-light-700 border-outline dark:(bg-dark-500 md:bg-transparent) md:(relative top-0 flex flex-row space-x-6 p-4 bg-transparent border-none)"
      :class="MobileMenu ? 'flex p-4 rounded-md absolute top-9.5 right-4.5 z-1 flex-col-reverse' : 'hidden'"
      role="navigation">
      <div
        class="md:(space-x-6 flex-row bg-transparent mt-0) mt-2 font-semibold text-center text-sm flex-col flex w-full"
        @click="MobileMenu = false">
        <NuxtLink v-for="(link, index) in links" :key="index" :to="localePath(link.url)" active-class="dark:border-[#FF0000] border-[#0066CC]" :aria-label="t(link.name)"
          class="nav-internal dark:hover:bg-dark-300 hover:bg-light-400 md:(dark:hover:bg-transparent hover:bg-transparent)"
          v-t="link.name" />
      </div>
      <div class="flex flex-row space-x-2 items-center align-middle justify-center">
        <!-- Translate Menu Toggle -->
        <button @click="LangToggle" class="text-[#0066CC] dark:text-[#FF0000] hover:text-current px-1">
          <IconTranslate class="w-6 h-6 pt-0.5" :aria-label="t('aria.button.translate')" />
        </button>
        <ul
          class="z-4 -right-1 p-1 absolute top-13 rounded-md shadow-md space-y-1 dark:(bg-dark-500 text-light-200) border-outline bg-light-700 text-black"
          :class="LangMenu ? '' : 'hidden'">
          <li v-for="(locale, index) in $i18n.locales" :key="index"
            class="text-center hover:bg-light-400 rounded-md p-1 dark:hover:bg-dark-300">
            <NuxtLink @click="LangToggle" :to="switchLocalePath(locale.code)" class="mx-[-0.5em] px-[1em] inline-block">
              {{ locale.name }}
            </NuxtLink>
          </li>
          <!-- Add Translation warning -->
        </ul>
        <ColorSwitch />
      </div>
    </nav>
  </header>
</template>