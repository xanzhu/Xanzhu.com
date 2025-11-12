<script lang="ts" setup>
import FooterItem from '../footer/FooterItem.vue'

const { t } = useI18n()
</script>

<template>
  <footer
    class="justify-center border-t-1 border-t-dark-4/10 border-solid border-b-none border-l-none border-r-none bg-inherit bg-white px-6 py-6 text-inherit dark:border-t-dark-2/30 dark:bg-black lg:px30 md:px-15 xl:px40"
  >
    <div class="flex flex-col items-start justify-between md:flex-row">
      <UiLogo class="text-inherit" />
      <nav :aria-label="t('footer.sr.community')">
        <FooterItem
          :title="t('footer.community')" :links="[
            { text: t('footer.github'), href: 'https://github.com/xanzhu', external: true },
            { text: t('footer.twitter'), href: 'https://x.com/xanzhu1', external: true },
          ]"
        />
      </nav>
      <nav :aria-label="t('footer.sr.blog')">
        <FooterItem
          :title="t('footer.blog')" :links="[
            { text: t('footer.latest'), href: '/blog' },
          ]"
        />
      </nav>
      <nav :aria-label="t('footer.sr.resource')">
        <FooterItem
          :title="t('footer.resources')" :links="[
            { text: t('footer.tools'), href: '/resources' },
          ]"
        />
      </nav>
      <nav :aria-label="t('footer.sr.company')">
        <FooterItem
          :title="t('footer.company')" :links="[
            { text: t('footer.about'), href: '/about' },
          ]"
        />
      </nav>
      <nav :aria-label="t('footer.sr.legal')">
        <FooterItem
          :title="t('footer.legal')" :links="[
            { text: t('footer.privacy'), href: '/privacy-policy' },
            { text: t('footer.terms'), href: '/terms-of-service' },
          ]"
        />
      </nav>
    </div>
    <div class="mt-6 flex flex-col items-center justify-between text-xs text-dark-200 md:flex-row dark:text-gray-300">
      <p>{{ t('footer.copyright') }}</p>
      <p>{{ t('footer.version') }}: {{ $config.public.Version }}</p>
    </div>
  </footer>
</template>
