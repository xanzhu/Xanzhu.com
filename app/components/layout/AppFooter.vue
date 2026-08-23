<script lang="ts" setup>
const { t } = useI18n()
const config = useRuntimeConfig()
</script>

<template>
  <footer
    class="text-inherit px-6 py-6 border-t-1 border-t-dark-400/10 bg-inherit bg-white justify-center lg:px30 md:px-15 xl:px40 dark:border-t-dark-200/30 dark:bg-black"
  >
    <div class="flex flex-col items-start justify-between md:flex-row">
      <UiLogo v-once class="text-inherit" />
      <nav>
        <FooterItem
          :title="t('footer.category.community')" :links="[
            // TODO: Turn into icons
            { text: t('footer.items.github'), href: 'https://github.com/xanzhu', external: true },
            { text: t('footer.items.twitter'), href: 'https://x.com/xanzhu1', external: true },
          ]"
        />
      </nav>
      <nav>
        <FooterItem
          :title="t('footer.category.latest')" :links="[
            { text: t('nav.blog'), href: '/blog' },
          ]"
        />
      </nav>
      <nav>
        <FooterItem
          :title="t('footer.category.resources')" :links="[
            { text: t('footer.items.tools'), href: '/resources' },
          ]"
        />
      </nav>
      <nav>
        <FooterItem
          :title="t('footer.category.company')" :links="[
            { text: t('nav.about'), href: '/about' },
          ]"
        />
      </nav>
      <nav>
        <FooterItem
          :title="t('footer.category.legal')" :links="[
            { text: t('footer.items.privacy'), href: '/privacy-policy' },
            { text: t('footer.items.terms'), href: '/terms-of-service' },
          ]"
        />
      </nav>
    </div>
    <div class="text-xs text-dark-200 mt-6 flex flex-col items-center justify-between dark:text-gray-300 md:flex-row">
      <p>{{ t('footer.rights') }}</p>
      <p>{{ t('footer.version') }}: {{ config.public.version }}</p>
    </div>
  </footer>
</template>
