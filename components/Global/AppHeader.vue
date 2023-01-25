<template>
  <header
    class="flex flex-row justify-between items-center px-4 py-2 bg-transparent text-black dark:(bg-black text-light-200) md:(bg-transparent space-x-4 mx-2 py-4) lg:mx-6"
    role="banner"
  >
    <div class="md:(flex flex-row space-x-4 items-center)">
      <NuxtLink :to="localePath('/')" aria-label="Xanzhu">
        <IconXanzhu class="flex w-40 sm:w-46 md:w-56" />
      </NuxtLink>
      <p
        class="hidden md:block dark:bg-dark-900 bg-light-400 border-outline px-1.5 py-0.2 text-xs"
      >
        BETA
      </p>
    </div>
    <!-- Mobile Navigation Toggle -->
    <div class="flex text-black dark:text-light-200 md:hidden">
      <button @click="MobileToggle">
        <IconMenu
          v-if="!MobileMenu"
          class="w-7 h-7"
          :aria-label="t('a11y.open-menu')"
        />
        <IconCross
          v-if="MobileMenu"
          class="w-7 h-7"
          :aria-label="t('a11y.close-menu')"
        />
      </button>
    </div>
    <!-- Navigation UI  -->
    <nav
      class="items-center font-semibold bg-light-700 border-outline dark:(bg-dark-800 md:bg-transparent) md:(relative top-0 flex flex-row space-x-6 p-4 bg-transparent border-none)"
      :class="
        MobileMenu
          ? 'flex p-4 rounded-md absolute top-9.5 right-4.5 z-1 flex-col-reverse children:(pt-2)'
          : 'hidden'
      "
      role="navigation"
      itemscope
      itemtype="https://schema.org/SiteNavigationElement"
    >
      <div
        class="md:(space-x-6 flex-row bg-transparent mt-0) mt-2 font-semibold text-center text-sm flex-col flex w-full"
        @click="MobileMenu = false"
      >
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="localePath(link.url)"
          active-class="border-[#0066CC] dark:border-[#FF0000]"
          :aria-label="t(link.name)"
          class="nav-internal dark:hover:bg-dark-300 hover:bg-light-400 md:(dark:hover:bg-transparent hover:bg-transparent)"
          v-t="link.name"
        />
      </div>
      <div
        class="flex flex-row space-x-2 items-center align-middle justify-center"
      >
        <!-- Translate Menu Toggle -->
        <button
          @click="LangToggle"
          @change="onChange"
          class="accent-color hover:text-current px-1"
        >
          <IconTranslate
            class="w-6 h-6 pt-0.5"
            :aria-label="t('a11y.translate')"
          />
        </button>
        <ul
          class="z-4 -right-1 p-1 absolute top-13 rounded-md shadow-md space-y-1 dark:(bg-dark-800 text-light-200) border-outline bg-light-700 text-black"
          :class="LangMenu ? '' : 'hidden'"
        >
          <li
            v-for="locale in availableLocales"
            :key="locale.code"
            class="text-center hover:bg-light-300 rounded-md p-1 dark:hover:bg-dark-300"
          >
            <NuxtLink
              @click="LangToggle"
              @click.prevent.stop="setLocale(locale.code)"
              :to="switchLocalePath(locale.code)"
              class="mx-[-0.5em] px-[1em] inline-block"
            >
              {{ locale.name }}
            </NuxtLink>
          </li>
          <!-- TODO: Add Translation warning -->
        </ul>
        <GlobalUtilsColorSwitch />
      </div>
    </nav>
  </header>
</template>
<script setup>
const { t, locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const MobileMenu = ref(false);
const LangMenu = ref(false);

function MobileToggle() {
  MobileMenu.value = !MobileMenu.value;
}

function LangToggle() {
  LangMenu.value = !LangMenu.value;
}

const links = [
  {
    url: "/resources",
    name: "Nav.resources",
  },
  {
    url: "/blog",
    name: "Nav.blog",
  },
  {
    url: "/",
    name: "Nav.home",
  },
];

const onChange = async (e) => {
  await setLocale(e.target.value);
};
</script>
