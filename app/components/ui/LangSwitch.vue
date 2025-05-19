<script setup>
const { locale, locales, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const LangToggle = ref(false)

function LangSwitch() {
  LangToggle.value = !LangToggle.value
}

function closeMenu() {
  LangToggle.value = false
}
</script>

<template>
  <div>
    <button class="cursor-pointer b-hidden bg-transparent" :aria-label="t('a11y.langSwitch')" @click="LangSwitch">
      <Icon class="h8 w8 text-black dark:text-white" name="fontisto:language" :aria-label="t('a11y.langSwitch')" />
    </button>
    <div
      v-if="localeSet" :class="LangToggle
        ? 'flex p1 rounded-sm absolute top-12 left-5 z1 flex-col dark:(bg-black text-white b-dark-500) text-black bg-light-700 dark:bg-dark-900 b-1 b-solid b-gray-300'
        : 'hidden'
      "
    >
      <NuxtLink
        v-for="lang in availableLocales" :key="lang.code" :to="switchLocalePath('/')"
        :aria-label="lang.name" class="cursor-pointer b-1 rounded-sm px3 py2 text-center text-sm text-black font-700 no-underline duration-300 ease-out hover:(bg-light-200) dark:text-white dark:hover:(bg-dark-600 text-white duration-75 ease-in)"
        @click.prevent.stop="setLocale(lang.code); closeMenu()"
      >
        {{ lang.name }}
      </NuxtLink>
    </div>
  </div>
</template>
