<template>
  <footer
    class="sm:(flex-row bg-light-400) dark:(text-white sm:bg-dark-900) flex flex-col-reverse items-center justify-between p-1 px-2 text-black"
    role="contentinfo">
    <div class="sm:(flex-col p-2) flex">
      <p class="text-xs font-medium">&copy; XANZHU 2023</p>
      <p class="<sm:hidden text-xs font-thin">{{ t('App.rights') }}</p>
    </div>
    <ul class="children:p-1 flex flex-row">
      <li>
        <NuxtLink tabindex="0" to="https://www.linkedin.com/company/xanzhu" rel="me" target="_blank">
          <IconLinkedIn />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink tabindex="0" to="https://github.com/xanzhu" rel="me" target="_blank">
          <IconGithub />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink tabindex="0" to="https://twitter.com/Xanzhu1" rel="me" target="_blank">
          <IconTwitter />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink tabindex="0" to="https://mastodon.social/@xanzhu" rel="me" target="_blank">
          <IconMastodon />
        </NuxtLink>
      </li>
    </ul>
    <div class="mx-4 text-xs">
      <ul class="<sm:p-1 space-x-3 flex" role="navigation">
        <li role="menuitem">
          <NuxtLink tabindex="0" :to="localePath('/privacy-policy')" class="nav-internal"> {{
            t("Nav.privacy_policy")
          }}
          </NuxtLink>
        </li>
        <li role="menuitem">
          <NuxtLink tabindex="0" to="https://status.xanzhu.com" target="_blank" class="nav-internal">
            {{ t("Nav.status") }}
            <IconExternal class="-mt-0.5 inline-flex h-3 flex-col" />
          </NuxtLink>
        </li>
      </ul>
      <p class="text-right font-thin <sm:hidden">{{ t('App.build') }} v0.3.8</p>
    </div>
  </footer>
</template>
<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>