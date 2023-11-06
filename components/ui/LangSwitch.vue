<script setup>
const { locale, locales, setLocale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});

const LangToggle = ref(false);

function LangSwitch() {
  if (locale.value === loadLocale.value) {
    locale.value = availableLocales.value[0].code;
  } else {
    locale.value = loadLocale.value;
  }
  LangToggle.value = !LangToggle.value;
}

function closeMenu() {
  LangToggle.value = false;
}

const loadLocale = ref(locale.value);
const localeSet = ref(false);

// Test onMounted
onMounted(() => {
  setLocale(loadLocale.value);
  localeSet.value = true;
});
</script>
<template>
  <div>
    <button @click="LangSwitch" class="bg-transparent b-hidden cursor-pointer" :aria-label="t('a11y.langSwitch')">
      <Icon class="h8 w8 dark:text-white text-black" name="fontisto:language" :aria-label="t('a11y.langSwitch')" />
    </button>
    <div v-if="localeSet" :class="LangToggle
      ? 'flex p1 rounded-sm absolute top-12 left-5 z1 flex-col dark:(bg-black text-white b-dark-500) text-black bg-light-700 dark:bg-dark-900 b-1 b-solid b-gray-300'
      : 'hidden'
      ">
      <NuxtLink :to="switchLocalePath('/')" v-for="locale in availableLocales" :key="locale.code"
        @click.prevent.stop="setLocale(locale.code); closeMenu()" :aria-label="locale.name"
        class="dark:hover:(bg-dark-600 text-white ease-in duration-75) hover:(bg-light-200) text-center text-sm ease-out duration-300 px3 py2 rounded-sm text-black dark:text-white no-underline font-700 b-1 cursor-pointer">
        {{ locale.name }}
      </NuxtLink>
    </div>
  </div>
</template>
