<script lang="ts" setup>
const { t } = useI18n()
const config = useRuntimeConfig()
</script>

<template>
  <footer
    class="justify-center border-t-1 border-t-dark-4/10 border-solid border-b-none border-l-none border-r-none bg-inherit bg-white px-6 py-6 text-inherit dark:border-t-dark-2/30 dark:bg-black lg:px30 md:px-15 xl:px40"
  >
    <div class="flex flex-col items-start justify-between md:flex-row">
      <UiLogo class="text-inherit" />
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
    <div class="mt-6 flex flex-col items-center justify-between text-xs text-dark-200 md:flex-row dark:text-gray-300">
      <p>{{ t('footer.rights') }}</p>
      <p>{{ t('footer.version') }}: {{ config.public.version }}</p>
    </div>
  </footer>
</template>
