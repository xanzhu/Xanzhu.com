export function useLangMeta(
  i18nKey: string,
  seoImage?: string,
  format: 'prefix' | 'suffix' = 'suffix',
  localScope?: (key: string) => string,
) {
  const { t: globalT } = useI18n()
  const t = localScope ?? globalT

  const seoTitle = computed(() => t(`${i18nKey}.title`))
  const seoDesc = computed(() => t(`${i18nKey}.desc`))

  const titleTemplate = format === 'prefix' ? 'Xanzhu - %s' : '%s - Xanzhu'

  const formattedTitle = computed(() => titleTemplate.replace('%s', seoTitle.value))

  // Built-in SeoMeta Composable
  useSeoMeta({
    title: seoTitle,
    description: seoDesc,
    ogTitle: formattedTitle,
    ogDescription: seoDesc,
    twitterDescription: seoDesc,
    twitterTitle: formattedTitle,
    twitterImage: seoImage,
    ogImage: seoImage,
    titleTemplate: formattedTitle,
    ogType: 'website',
  })
}
