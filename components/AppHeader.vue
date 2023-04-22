<template>
  <header class="flex justify-center sm:justify-between items-center text-white p4">
    <div class="lg:flex-1 font-semibold items-center flex">
      <UiLangSwitch />
      <UiColorSwitch class="hidden lg:flex" />
    </div>
    <NuxtLink :to="localePath('/')"
      class="mx-auto text-center dark:text-white text-black dark:hover:text-[#ff0000] hover:text-[#001EFA]">
      <UiIconXanzhu class="h-6 inline-block" :aria-label="t('a11y.logo')" />
    </NuxtLink>
    <div class="hidden lg:(block flex-1 text-right space-x-5 font-semibold text-sm mr5)">
      <NuxtLink v-for="(link, index) in links" :key="index" :to="localePath(link.url)" active-class="font-bold"
        :aria-label="t(link.name)"
        class="dark:text-white text-black underline-offset-5 dark:hover:(decoration-[#ff0000]) inline-block underline decoration-transparent decoration-2 hover:decoration-[#001EFA]"
        v-t="link.name" />
    </div>

    <div class="flex flex-col lg:hidden">
      <button @click="MenuToggle" :aria-label="t('a11y.Menu')" class="dark:text-white text-black bg-transparent b-none">
        <Icon v-if="!MobileMenu" class="h6 w6" name="ic:baseline-menu" :aria-label="t('a11y.oMenu')" />
        <Icon v-if="MobileMenu" class="h6 w6" name="ic:baseline-close" :aria-label="t('a11y.cMenu')" />
      </button>
      <nav @click.outside="closeMenu"
        :class="
          MobileMenu
            ? 'flex p-1 rounded-sm absolute top-12 right-6 z-1 flex-col-reverse children:pt-2 dark:bg-dark-900 bg-light-700 b-1 b-solid b-gray-300 dark:b-dark-500'
            : 'hidden'
        ">
        <NuxtLink v-for="(link, index) in links" :key="index" :to="localePath(link.url)" active-class="text-[#001EFA] dark:text-[#ff0000]"
          :aria-label="t(link.name)"
          class="dark:hover:(bg-dark-600 ease-in duration-75) dark:text-white hover:(bg-light-400) text-black rounded-sm font-medium text-center py-2 px-3 no-underline"
          v-t="link.name" />
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const MobileMenu = ref(false);

function MenuToggle() {
  MobileMenu.value = !MobileMenu.value;
}

function closeMenu() {
  MobileMenu.value = false;
}

const links = [
  {
    url: "/resources",
    name: "Links.resources",
  },
  {
    url: "/blog",
    name: "Links.blog",
  },
  {
    url: "/analysis",
    name: "Links.analysis",
  },
  {
    url: "/",
    name: "Links.home",
  },
];
</script>
