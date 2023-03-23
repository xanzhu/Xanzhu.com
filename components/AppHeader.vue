<template>
  <header
    class="flex justify-center sm:justify-between items-center text-white p-4 font-main sm:mx-6"
  >
    <div class="lg:flex-1 space-x-3 font-semibold items-center flex">
      <UiLangSwitch />
      <UiVersion class="hidden lg:flex" />
      <UiColorSwitch class="hidden lg:flex" />
    </div>
    <NuxtLink
      :to="localePath('/')"
      class="mx-auto text-center dark:text-white text-black dark:hover:text-[#ff0000] hover:text-[#001EFA]"
    >
      <UiIconXanzhu class="h-6 inline-block" :aria-label="t('a11y.logo')" />
    </NuxtLink>
    <div
      class="hidden lg:block flex-1 text-right space-x-5 font-semibold text-sm"
    >
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="localePath(link.url)"
        active-class="font-bold"
        :aria-label="t(link.name)"
        class="dark:text-white text-black underline-offset-5 hover:(decoration-[#ff0000]) inline-block underline decoration-transparent decoration-2"
        v-t="link.name"
      />
    </div>

    <div class="dark:text-white text-black flex flex-col lg:hidden">
      <button @click="MenuToggle" :aria-label="t('a11y.Menu')">
        <Icon
          v-if="!MobileMenu"
          class="h-6 w-6"
          name="ic:baseline-menu"
          :aria-label="t('a11y.oMenu')"
        />
        <Icon
          v-if="MobileMenu"
          class="h-6 w-6"
          name="ic:baseline-close"
          :aria-label="t('a11y.cMenu')"
        />
      </button>
      <nav
        @click.outside="closeMenu"
        class="dark:(bg-black border-dark-300) bg-light-700 border-1 border-gray-300"
        :class="
          MobileMenu
            ? 'flex p-1 rounded-sm absolute top-12 right-4 sm:right-10 z-1 flex-col-reverse children:pt-2'
            : 'hidden'
        "
      >
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="localePath(link.url)"
          active-class="text-[#ff0000]"
          :aria-label="t(link.name)"
          class="dark:hover:(bg-dark-600 text-white ease-in duration-75) hover:(bg-light-400) text-black rounded-sm font-medium text-center py-2 px-3"
          v-t="link.name"
        />
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
