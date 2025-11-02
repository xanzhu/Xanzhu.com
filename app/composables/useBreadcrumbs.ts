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

  const resourceCategories: Record<string, string> = {
    'phishing': 'v2.resources.category.phishing',
    'malware': 'v2.resources.category.malware',
    'network-security': 'v2.resources.category.networkSec',
    'privacy': 'v2.resources.category.privacy',
  }

  const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const path = route.path
    const items: BreadcrumbItem[] = []
    const blogPath = localePath('/blog')
    const resourcesPath = localePath('/resources')
    const isBlog = path.startsWith(blogPath)
    const isResources = path.startsWith(resourcesPath)

    items.push({
      name: t('breadcrumbs.home'),
      path: localePath('/'),
    })

    // Blog
    if (isBlog) {
      if (path === blogPath) {
        items.push({
          name: t('breadcrumbs.blog'),
          path: blogPath,
          current: true,
        })
      }
      else if (route.meta?.title) {
        items.length = 0
        items.push({
          name: t('breadcrumbs.blog'),
          path: blogPath,
        })
        items.push({
          name: String(route.meta.title),
          path,
          current: true,
        })
      }
    }

    // Resources
    else if (isResources) {
      const pathAfterResources = path.replace(resourcesPath, '').replace(/^\//, '')
      const segments = pathAfterResources.split('/').filter(Boolean)

      // Home > Resources
      if (path === resourcesPath) {
        items.push({
          name: t('breadcrumbs.resources'),
          path: resourcesPath,
          current: true,
        })
      }
      // Resources > Category
      else if (segments.length === 1) {
        items.length = 0
        items.push({
          name: t('breadcrumbs.resources'),
          path: resourcesPath,
        })

        const category = segments[0]!
        items.push({
          name: t(resourceCategories[category] || category),
          path: `${resourcesPath}/${category}`,
          current: true,
        })
      }
      // Category > Article
      else if (segments.length >= 2 && route.meta?.title) {
        items.length = 0
        const category = segments[0]!
        const categoryPath = `${resourcesPath}/${category}`

        items.push({
          name: t(resourceCategories[category] || category),
          path: categoryPath,
        })

        items.push({
          name: String(route.meta.title),
          path,
          current: true,
        })
      }
    }

    // Individual Static Pages
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

  // JSON-LD
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
