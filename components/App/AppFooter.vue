<template>
  <footer
    class="flex flex-col items-center text-xs mt-10 pb-4 sm:(h-4 flex-row py-4 px-4 w-full mt-0) md:px-6 lg:px-12 dark:(bg-dark-900 text-light-200) bg-gray-300 text-dark-900"
    role="contentinfo"
  >
    <div class="flex space-x-3 py-4 sm:(space-x-6 flex-1 justify-start py-0)">
      <NuxtLink
        v-t="'links.privacy_policy'"
        :to="localePath('/privacy-policy')"
        class="nav-link"
      />
      <a
        href="https://status.xanzhu.com"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="nav-link"
      >
        {{ $t("links.status") }}
        <IconExternal class="h-3 flex-col inline-flex -mb-0.4" />
      </a>
    </div>
    <AppSocials />
    <div class="sm:(flex flex-1 justify-end font-normal) font-medium">
      © XANZHU 2022
    </div>
  </footer>
</template>
