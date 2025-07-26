export interface BreadcrumbItem {
  name: string
  path: string
  current?: boolean
}

export function useBreadcrumbs() {
  const { t } = useI18n()
  const route = useRoute()
  const localePath = useLocalePath()
  const config = useRuntimeConfig()

  // Move useState outside of computed
  const currentPost = useState<any>('currentPost', () => null)
  const baseUrl = computed(() => config.public.i18n.baseUrl)

  const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const path = route.path
    const items: BreadcrumbItem[] = []

    // Home breadcrumb
    items.push({
      name: t('breadcrumbs.home'),
      path: localePath('/'),
    })

    // Blog breadcrumbs
    if (path.includes('/blog')) {
      items.push({
        name: t('breadcrumbs.blog'),
        path: localePath('/blog'),
      })

      // Individual blog post
      if (!path.endsWith('/blog')) {
        if (currentPost.value?.title) {
          items.push({
            name: currentPost.value.title,
            path: path,
            current: true,
          })
        }
      }
    }

    // Legal pages
    else if (path === localePath('/privacy-policy')) {
      items.push({
        name: t('breadcrumbs.privacy'),
        path: path,
        current: true,
      })
    }
    else if (path === localePath('/terms-of-service')) {
      items.push({
        name: t('breadcrumbs.terms'),
        path: path,
        current: true,
      })
    }

    // Analysis page
    else if (path === localePath('/analysis')) {
      items.push({
        name: t('breadcrumbs.analysis'),
        path: path,
        current: true,
      })
    }

    // Resources page
    else if (path === localePath('/resources')) {
      items.push({
        name: t('breadcrumbs.resources'),
        path: path,
        current: true,
      })
    }

    return items
  })

  // Generate JSON-LD structured data
  const jsonLd = computed(() => {
    if (breadcrumbs.value.length <= 1) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.value.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${baseUrl.value || 'https://xanzhu.com'}${item.path}`,
      })),
    }
  })

  return {
    breadcrumbs,
    jsonLd,
  }
}






