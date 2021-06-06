<template>
  <div class="dark:bg-black dark:text-white text-black bg-gray-200 flex justify-between px-6 py-4 ">
    <div class="hidden sm:block" :aria-label="`Switch Language`">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        :aria-label="`${locale.name}`"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
    <nuxt-link :to="localePath('/')">
      <XanzhuV1 />
    </nuxt-link>
  </div>
</template>
<script>
import XanzhuV1 from '~/assets/Xanzhu.svg?inline'

export default {
  components: {
    XanzhuV1
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
