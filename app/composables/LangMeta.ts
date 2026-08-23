export function useLangMeta(
  i18nKey: string,
  seoImage?: string,
  format: 'prefix' | 'suffix' = 'suffix',
  localScope?: (key: string) => string,
) {
  const t = localScope ?? useI18n().t

  const seoTitle = computed(() => t(`${i18nKey}.title`))
  const seoDesc = computed(() => t(`${i18nKey}.desc`))
  const titleTemplate = format === 'prefix' ? 'Xanzhu - %s' : '%s - Xanzhu'
  const formattedTitle = computed(() => titleTemplate.replace('%s', seoTitle.value))

  useSeoMeta({
    title: seoTitle,
    description: seoDesc,
    ogTitle: formattedTitle,
    ogDescription: seoDesc,
    ogImage: seoImage,
    titleTemplate,
    ogType: 'website',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  })
}
