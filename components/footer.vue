<template>
  <footer class="flex flex-col items-center text-xs pb-4 sm:(h-4 flex-row py-4 px-4 w-full) md:px-6 lg:px-12 dark:(bg-dark-900 text-light-200) bg-gray-300 text-dark-900" role="contentinfo">
    <div class="flex space-x-3 my-4 sm:(space-x-6 flex-1 justify-start my-0)">
      <nuxt-link :to="localePath('/privacy-policy')" class="nav-link">
        {{ $t('links.privacy_policy') }}
      </nuxt-link>
      <a href="https://status.xanzhu.com" rel="nofollow noopener noreferrer" target="_blank" class="nav-link">
        {{ $t('links.status') }}
        <Icon-External class="h-3 flex-col -mb-0.4" />
      </a>
    </div>
    <Socials />
    <div class="sm:(flex flex-1 justify-end font-normal) font-medium">
      © XANZHU 2021 (Developer v0.3.3)
    </div>
  </footer>
</template>
