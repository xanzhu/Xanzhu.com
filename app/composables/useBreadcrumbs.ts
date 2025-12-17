export interface BreadcrumbItem {
  name: string
  path: string
  current?: boolean
}

export function useBreadcrumbs() {
  const { t, locale } = useI18n()
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

  const fullBreadcrumbs = computed<BreadcrumbItem[]>(() => {
    const items: BreadcrumbItem[] = []

    const rawSegments = route.path.split('/').filter(Boolean)
    const segments = rawSegments[0] === locale.value ? rawSegments.slice(1) : rawSegments

    const firstSegment = segments[0] || ''
    const isBlog = firstSegment === 'blog'
    const isResources = firstSegment === 'resources'

    const blogPath = localePath('/blog')
    const resourcesPath = localePath('/resources')

    // Default
    items.push({
      name: t('breadcrumbs.home'),
      path: localePath('/'),
    })

    // Blog Logic
    if (isBlog) {
      if (segments.length === 1) {
        items.push({ name: t('breadcrumbs.blog'), path: blogPath, current: true })
      }
      else {
        items.push({ name: t('breadcrumbs.blog'), path: blogPath })
        const articleTitle = route.meta?.title || segments.slice(1).join(' ').replace(/-/g, ' ')
        items.push({ name: String(articleTitle), path: route.path, current: true })
      }
    }
    // Resources Logic
    else if (isResources) {
      const resourceSegments = segments.slice(1)
      const category = resourceSegments[0] || ''
      const resourcesTitle = t('breadcrumbs.resources')

      if (resourceSegments.length === 0) {
        items.push({ name: resourcesTitle, path: resourcesPath, current: true })
      }
      else {
        items.push({ name: resourcesTitle, path: resourcesPath })
        if (category) {
          const isCategoryPage = resourceSegments.length === 1
          items.push({
            name: t(resourceCategories[category] || category),
            path: localePath(`/resources/${category}`),
            current: isCategoryPage,
          })
        }
        if (resourceSegments.length >= 2) {
          const articleTitle = route.meta?.title || resourceSegments.slice(1).join(' ').replace(/-/g, ' ')
          items.push({ name: String(articleTitle), path: route.path, current: true })
        }
      }
    }
    // Static Logic
    else {
      const rawName = route.name as string | undefined
      const routeKey = rawName?.split('___')[0]
      if (routeKey && staticPages[routeKey]) {
        items.push({ name: t(staticPages[routeKey]), path: route.path, current: true })
      }
    }

    return items
  })

  const breadcrumbs = computed(() => {
    const list = [...fullBreadcrumbs.value]
    // Clear Home
    if (list.length >= 3) {
      list.shift()
    }
    return list
  })

  // JSON-LD
  const jsonLd = computed(() => {
    if (fullBreadcrumbs.value.length <= 1)
      return null

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': fullBreadcrumbs.value.map((item, index) => ({
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
