<template>
  <footer
    class="text-inherit px-6 md:px-20 lg:px30 justify-center py-6 border-t-dark-4/10 dark:border-t-dark-2/30 border-t-1 border-solid border-b-none border-r-none border-l-none bg-inherit">
    <div class="flex flex-col md:flex-row justify-between items-start">
      <UiLogo class="text-inherit" />
      <nav :aria-label="t('footer.sr.community')">
        <FooterItem :title="t('footer.community')" :links="[
          { text: t('footer.github'), href: 'https://github.com/xanzhu', external: true },
          { text: t('footer.twitter'), href: 'https://x.com/xanzhu1', external: true },
        ]" />
      </nav>
      <nav :aria-label="t('footer.sr.blog')">
        <FooterItem :title="t('footer.blog')" :links="[
          { text: t('footer.latest'), href: '/blog' },
        ]" />
      </nav>
      <nav :aria-label="t('footer.sr.resource')">
        <FooterItem :title="t('footer.resources')" :links="[
          { text: t('footer.tools'), href: '/resources' },
        ]" />
      </nav>
      <nav :aria-label="t('footer.sr.company')">
        <FooterItem :title="t('footer.company')" :links="[
          { text: t('footer.about'), href: '/about' },
        ]" />
      </nav>
      <nav :aria-label="t('footer.sr.legal')">
        <FooterItem :title="t('footer.legal')" :links="[
          { text: t('footer.privacy'), href: '/privacy-policy' },
          { text: t('footer.terms'), href: '/terms-of-service' },
        ]" />
      </nav>
    </div>
    <div class="mt-6 flex flex-col md:flex-row justify-between items-center text-xs dark:text-gray-300 text-dark-200">
      <p>{{ $t('footer.copyright') }}</p>
      <p>{{ $t('footer.version') }}: {{ $config.public.Version }}</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FooterItem from './FooterItem.vue';
const { t } = useI18n();
</script>