<template>
  <footer class="flex items-center sm:h-6 dark:bg-black bg-gray-200 w-full dark:text-white text-black px-6 flex-col sm:flex-row space-y-2 sm:space-y-0 sm:py-8 py-4">
    <div class="flex flex-1 justify-start space-x-6">
      <nuxt-link :to="localePath('/')">
        {{ $t('links.privacy_policy') }}
      </nuxt-link>
      <nuxt-link :to="localePath('/')">
        {{ $t('links.sitemap') }}
      </nuxt-link>
    </div>
    <div class="w-5 hidden sm:flex">
      <Xanzhuico />
    </div>
    <div class="flex flex-1 justify-end text-xs">
      © XANZHU 2019 - 2021 v0.3.2
    </div>
  </footer>
</template>
<script>
import Xanzhuico from '~/assets/Xanzhuico.svg?inline'
export default {
  components: {
    Xanzhuico
  }
}
</script>
