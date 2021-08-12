<template>
  <footer class="flex items-center sm:(h-6 flex-row space-y-0 py-8) dark:(bg-black text-light-200) bg-gray-200 w-full text-dark-900 flex-col space-y-2 py-4 px-4 md:px-6 lg:px-12 xl:px-32 text-xs" role="contentinfo">
    <div class="flex flex-1 justify-start space-x-6 py-1 items-center">
      <nuxt-link :to="localePath('/privacy-policy')" class="nav-link">
        {{ $t('links.privacy_policy') }}
      </nuxt-link>
      <a href="https://status.xanzhu.com" rel="nofollow noopener" target="_blank" class="nav-link">
        {{ $t('links.status') }}
        <External class="h-3 w-3 pt-0.4" />
      </a>
      <Socials />
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
import External from '~/assets/external.svg?inline'
export default {
  components: {
    Xanzhuico,
    External
  }
}
</script>
