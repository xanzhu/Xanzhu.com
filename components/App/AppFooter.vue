<template>
  <footer
    class="flex flex-col-reverse p-1 sm:(flex-row px-2) justify-between text-black sm:bg-light-400 dark:(text-white sm:bg-dark-900) items-center">
    <div class="flex sm:(flex-col p-2)">
      <p class="dark:text-[#FF0000] text-red-700 font-medium text-xs hidden sm:flex" v-t="'footer.rights'" />
      <p class="text-xs" v-t="'footer.copy'" />
    </div>
    <AppSocials class="sm:mt-2" />
    <div class="text-xs mx-4">
      <div class="space-x-3 p-1 sm:p-0">
        <NuxtLink :to="localePath('/privacy-policy')" class="nav-link">
          {{ $t("links.privacy_policy")}}
        </NuxtLink>
        <a href="https://status.xanzhu.com" rel="nofollow noopener noreferrer" target="_blank" class="nav-link"
          :aria-label="$t('links.status') + ' ' + $t('aria.button.NewWindow')">
          {{ $t("links.status") }}
          <IconExternal class="h-3 flex-col inline-flex -mt-0.5" />
        </a>
        <p class="justify-end hidden font-thin sm:flex">{{ $t('footer.dev') }} v0.3.6</p>
      </div>
    </div>
  </footer>
</template>
