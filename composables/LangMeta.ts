export function useLangMeta(
  key: string,
  seoImage: string,
  format: "prefix" | "suffix" = "suffix"
) {
  const { t } = useI18n();

  // Compute i18n values
  const seoTitle = computed(() => t(`${key}.title`));
  const seoDesc = computed(() => t(`${key}.description`));

  // titleTemplate position
  const formatTitle = format === "prefix" ? `Xanzhu - %s` : `%s - Xanzhu`;

  // Built-in SeoMeta Composable
  useSeoMeta({
    title: seoTitle.value,
    description: seoDesc.value,
    ogTitle: formatTitle,
    ogDescription: seoDesc.value,
    twitterDescription: seoDesc.value,
    twitterTitle: formatTitle,
    twitterImage: seoImage,
    ogImage: seoImage,
    titleTemplate: formatTitle,
  });
}
