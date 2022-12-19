<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
<template>
  <footer
    class="flex flex-col-reverse p-1 sm:(flex-row px-2) justify-between text-black sm:bg-light-400 dark:(text-white sm:bg-dark-900) items-center">
    <div class="flex sm:(flex-col p-2)">
      <p class="text-xs font-medium">&copy; XANZHU 2022</p>
      <p class="font-thin text-xs hidden sm:flex">{{ t('footer.rights') }}</p>
    </div>
    <div class="flex-row flex children:p-1">
      <NuxtLink to="https://www.linkedin.com/company/xanzhu" target="_blank">
        <IconLinkedIn />
      </NuxtLink>
      <NuxtLink to="https://github.com/xanzhu" target="_blank">
        <IconGithub />
      </NuxtLink>
      <NuxtLink to="https://twitter.com/Xanzhu1" target="_blank">
        <IconTwitter />
      </NuxtLink>
      <NuxtLink rel="me" to="https://mastodon.social/@xanzhu" target="_blank">
        <IconMastodon />
      </NuxtLink>
    </div>
    <div class="text-xs mx-4">
      <div class="space-x-3 p-1 sm:p-0">
        <NuxtLink :to="localePath('/privacy-policy')" class="nav-link">
          {{ t("links.privacy_policy") }}
        </NuxtLink>
        <NuxtLink to="https://status.xanzhu.com" target="_blank" class="nav-link">
          {{ t("links.status") }}
          <IconExternal class="h-3 flex-col inline-flex -mt-0.5" />
        </NuxtLink>
        <p class="justify-end hidden font-thin sm:flex">{{ $t('footer.dev') }} v0.3.7</p>
      </div>
    </div>
  </footer>
</template>
