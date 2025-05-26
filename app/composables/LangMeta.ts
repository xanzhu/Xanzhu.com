export function useLangMeta(
  i18nKey: string,
  seoImage: string,
  format: 'prefix' | 'suffix' = 'suffix',
) {
  const { t } = useI18n()

  // Compute i18n values
  const seoTitle = computed(() => t(`${i18nKey}.title`))
  const seoDesc = computed(() => t(`${i18nKey}.description`))

  // titleTemplate position
  const formatTitle = format === 'prefix' ? `Xanzhu - %s` : `%s - Xanzhu`

  // Formatted title with title template! >_>
  const formatSeoTitle = `${formatTitle.replace('%s', seoTitle.value)}`

  // Built-in SeoMeta Composable
  useSeoMeta({
    title: seoTitle,
    description: seoDesc,
    ogTitle: formatSeoTitle,
    ogDescription: seoDesc,
    twitterDescription: seoDesc,
    twitterTitle: formatSeoTitle,
    twitterImage: seoImage,
    ogImage: seoImage,
    titleTemplate: formatTitle,
    ogType: 'website',
  })
}
