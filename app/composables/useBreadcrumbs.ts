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

  const baseUrl = computed(() => config.public.i18n.baseUrl)

  const staticPages: Record<string, string> = {
    '/privacy-policy': 'breadcrumbs.privacy',
    '/terms-of-service': 'breadcrumbs.terms',
    '/analysis': 'breadcrumbs.analysis',
    '/resources': 'breadcrumbs.resources',
    '/about': 'breadcrumbs.about',
  }

  const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const path = route.path
    const items: BreadcrumbItem[] = []

    items.push({
      name: t('breadcrumbs.home'),
      path: localePath('/'),
    })

    // Blog breadcrumbs
    const blogPath = localePath('/blog')

    if (path.startsWith(blogPath)) {
      items.push({
        name: t('breadcrumbs.blog'),
        path: blogPath,
        current: path === blogPath,
      })

      // Individual blog post
      if (path !== blogPath && route.meta?.title) {
        items.push({
          name: String(route.meta.title),
          path,
          current: true,
        })
      }
    }

    // Static pages
    else {
      for (const [rawPath, translationKey] of Object.entries(staticPages)) {
        const localizedPath = localePath(rawPath)
        if (path === localizedPath) {
          items.push({
            name: t(translationKey),
            path: localizedPath,
            current: true,
          })
          break
        }
      }
    }

    return items
  })

  // JSON-LD structured data
  const jsonLd = computed(() => {
    if (breadcrumbs.value.length <= 1)
      return null

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.value.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': `${(baseUrl.value || 'https://xanzhu.com').replace(/\/$/, '')}${item.path}`,
      })),
    }
  })

  return {
    breadcrumbs,
    jsonLd,
  }
}
