<template>
  <footer class="flex items-center sm:(h-6 flex-row space-y-0 py-8) dark:(bg-black text-light-200) bg-gray-200 w-full text-dark-900 px-6 flex-col space-y-2 py-4 text-xs">
    <div class="flex flex-1 justify-start space-x-6 py-1">
      <nuxt-link :to="localePath('/privacy-policy')" class="border-b-2 hover:border-red-600 border-transparent">
        {{ $t('links.privacy_policy') }}
      </nuxt-link>
      <a href="https://status.xanzhu.com" rel="nofollow noopener" target="_blank" class="hover:(bg-red-600 border-transparent) border-b-2 border-red-600">
        {{ $t('links.status') }}
      </a>
    </div>
    <div class="hidden sm:flex w-5 h-5">
      <Xanzhuico />
    </div>
    <div class="flex flex-1 justify-end">
      © XANZHU 2021 (Developer v0.3.2)
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
