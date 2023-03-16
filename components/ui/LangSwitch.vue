<script setup>
const { locale, locales, setLocale, t } = useI18n();
const localePath = useLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const LangToggle = ref(false);

function LangSwitch() {
  LangToggle.value = !LangToggle.value;
}

function closeMenu() {
  LangToggle.value = false;
}
</script>
<template>
  <div>
    <button @click="LangSwitch" :aria-label="t('a11y.langSwitch')">
      <Icon
        class="h-8 w-8 dark:text-white text-black"
        name="fontisto:language"
        :aria-label="t('a11y.langSwitch')"
      />
    </button>
    <div
      class="flex dark:(bg-black text-white border-dark-300) border-1 border-gray-300 text-black bg-light-700"
      :class="
        LangToggle
          ? 'flex p-1 rounded-sm absolute top-12 left-4 sm:left-9 z-1 flex-col'
          : 'hidden'
      "
    >
      <NuxtLink
        :to="localePath('/')"
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="setLocale(locale.code)"
        @click="closeMenu"
        :aria-label="locale.name"
        class="dark:hover:(bg-dark-600 text-white ease-in duration-75) hover:(bg-light-200) text-center text-sm ease-out duration-300 px-3 py-2 rounded-sm"
      >
        {{ locale.name }}</NuxtLink
      >
    </div>
  </div>
</template>
