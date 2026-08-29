export interface BreadcrumbItem {
  name: string
  path: string
  current?: boolean
}

const staticPages: Record<string, string> = {
  'privacy-policy': 'nav.privacy',
  'terms-of-service': 'nav.terms',
  'analysis': 'nav.analysis',
  'about': 'nav.about',
}

const resourceCategories: Record<string, string> = {
  'phishing': 'resources.category.phishing',
  'malware': 'resources.category.malware',
  'network-security': 'resources.category.networkSec',
  'privacy': 'resources.category.privacy',
}

const TRAILING_SLASH = /\/$/

export function useBreadcrumbs() {
  const { t, locale } = useI18n()
  const route = useRoute()
  const localePath = useLocalePath()
  const config = useRuntimeConfig()

  const dynamicTitle = useState<string>('breadcrumb-title', () => '')
  const baseUrl = computed(() => config.public.i18n.baseUrl)

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
      name: t('nav.home'),
      path: localePath('/'),
    })

    // Blog Logic
    if (isBlog) {
      if (segments.length === 1) {
        items.push({ name: t('nav.blog'), path: blogPath, current: true })
      }
      else {
        items.push({ name: t('nav.blog'), path: blogPath })
        items.push({
          name: dynamicTitle.value || String(route.meta?.title || ''),
          path: route.path,
          current: true,
        })
      }
    }
    // Resources Logic
    else if (isResources) {
      const resourceSegments = segments.slice(1)
      const category = resourceSegments[0] || ''
      const resourcesTitle = t('nav.resources')

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
          items.push({
            name: dynamicTitle.value || String(route.meta?.title || ''),
            path: route.path,
            current: true,
          })
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
    const items = fullBreadcrumbs.value
    return items.length >= 3 ? items.slice(1) : items
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
        'item': `${(baseUrl.value || 'https://xanzhu.com').replace(TRAILING_SLASH, '')}${item.path}`,
      })),
    }
  })

  return {
    breadcrumbs,
    jsonLd,
  }
}
