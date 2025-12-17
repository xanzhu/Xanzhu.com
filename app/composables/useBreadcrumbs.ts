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
    'privacy-policy': 'breadcrumbs.privacy',
    'terms-of-service': 'breadcrumbs.terms',
    'analysis': 'breadcrumbs.analysis',
    'about': 'breadcrumbs.about',
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

    const segments = path.split('/').filter(Boolean)
    const firstSegment = segments[0] || ''
    const isBlog = firstSegment === 'blog'
    const isResources = firstSegment === 'resources'

    const blogPath = localePath('/blog')
    const resourcesPath = localePath('/resources')

    items.push({
      name: t('breadcrumbs.home'),
      path: localePath('/'),
    })

    // Blog
    if (isBlog) {
      if (segments.length === 1) {
        // Blog index page
        items.push({
          name: t('breadcrumbs.blog'),
          path: blogPath,
          current: true,
        })
      }
      else {
        // Blog article
        items.splice(1)
        items.push({
          name: t('breadcrumbs.blog'),
          path: blogPath,
        })

        const articleTitle = route.meta?.title || segments.slice(1).join(' ')
        items.push({
          name: String(articleTitle),
          path,
          current: true,
        })
      }
    }

    // Resources
    else if (isResources) {
      const resourceSegments = segments.slice(1)
      const category = resourceSegments[0] || ''
      const articleSegments = resourceSegments.slice(1)
      const resourcesTitle = t('breadcrumbs.resources')

      if (resourceSegments.length === 0) {
        // Resources index page
        items.push({
          name: resourcesTitle,
          path: resourcesPath,
          current: true,
        })
      }
      else if (resourceSegments.length === 1) {
        // Resources > Category
        items.splice(1)
        items.push({
          name: resourcesTitle,
          path: resourcesPath,
        })
        items.push({
          name: t(resourceCategories[category] || category),
          path: `${resourcesPath}/${category}`,
          current: true,
        })
      }
      else if (resourceSegments.length >= 2) {
        // Category > Article
        items.splice(1)
        items.push({
          name: resourcesTitle,
          path: resourcesPath,
        })
        items.push({
          name: t(resourceCategories[category] || category),
          path: `${resourcesPath}/${category}`,
        })

        const articleTitle = route.meta?.title || articleSegments.join(' ')
        items.push({
          name: String(articleTitle),
          path,
          current: true,
        })
      }
    }

    // Individual Static Pages
    else {
      const rawName = route.name as string | undefined
      const routeKey = rawName?.split('___')[0]

      if (routeKey && staticPages[routeKey]) {
        items.push({
          name: t(staticPages[routeKey]),
          path: route.path,
          current: true,
        })
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
