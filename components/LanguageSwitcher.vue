<template>
  <!-- <div class="relative ">
    <div>
    <button class="block h-8 w-8 overflow-hidden rounded-full border-2 border-gray-600 focus:outline-none focus:border-white">
      <img class="h-full w-full object-cover" src="https://i.postimg.cc/RFTBHJR2/pexels-stephan-seeber-1054218.jpg" alt="test">
    </button>
    <div class="absolute right-0 mt-2 w-48 py-2 bg-gray-500 rounded-lg ">
      <a href="ko" class="block px-4 py-2 hover:bg-indigo-500  hover:text-white">Korean</a>
      <a href="zh" class="block px-4 py-2 hover:bg-indigo-500">Chinese</a>
      <a href="ja" class="block px-4 py-2 hover:bg-indigo-500">Japanse</a>
    </div> -->
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="text-white font-medium"
    >
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
