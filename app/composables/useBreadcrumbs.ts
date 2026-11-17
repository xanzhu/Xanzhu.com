export interface BreadcrumbItem {
  name: string;
  path: string;
  current?: boolean;
}

interface BreadcrumbTitleState {
  path: string;
  title: string;
}

const staticPages: Record<string, string> = {
  "privacy-policy": "common.nav.privacy",
  "terms-of-service": "common.nav.terms",
  advisory: "common.nav.advisory",
  about: "common.nav.about",
};

const resourceCategories: Record<string, string> = {
  phishing: "app.resources.category.phishing",
  malware: "app.resources.category.malware",
  "network-security": "app.resources.category.networkSec",
  privacy: "app.resources.category.privacy",
};

const TITLE_STATE_KEY = "breadcrumb-title";

function slugToTitle(slug: string | string[] | undefined): string {
  if (!slug) return "";
  const str = Array.isArray(slug) ? slug.join(" ") : slug;
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function setBreadcrumbTitle(title: string) {
  const route = useRoute();
  const state = useState<BreadcrumbTitleState>(TITLE_STATE_KEY, () => ({ path: "", title: "" }));
  state.value = { path: route.path, title };
}

export function useBreadcrumbs() {
  const { t, locale } = useI18n();
  const route = useRoute();
  const localePath = useLocalePath();
  const { url: siteUrl } = useSiteConfig();
  const titleState = useState<BreadcrumbTitleState>(TITLE_STATE_KEY, () => ({
    path: "",
    title: "",
  }));

  // Path segments without the locale prefix
  const segments = computed(() => {
    const raw = route.path.split("/").filter(Boolean);
    return raw[0] === locale.value ? raw.slice(1) : raw;
  });

  const currentTitle = computed(() => {
    if (titleState.value.path === route.path && titleState.value.title) {
      return titleState.value.title;
    }
    if (route.meta?.title) return String(route.meta.title);
    return slugToTitle(route.params.slug || segments.value.at(-1));
  });

  const fullBreadcrumbs = computed<BreadcrumbItem[]>(() => {
    const items: BreadcrumbItem[] = [{ name: t("common.nav.home"), path: localePath("index") }];
    const [section, category, ...deeper] = segments.value;

    if (section === "blog") {
      const isIndex = segments.value.length === 1;
      items.push({ name: t("common.nav.blog"), path: localePath("blog"), current: isIndex });
      if (!isIndex) {
        items.push({ name: currentTitle.value, path: route.path, current: true });
      }
    } else if (section === "resources") {
      const isIndex = !category;
      items.push({
        name: t("common.nav.resources"),
        path: localePath("resources"),
        current: isIndex,
      });

      if (category) {
        const labelKey = resourceCategories[category];
        items.push({
          name: labelKey ? t(labelKey) : slugToTitle(category),
          path: localePath(`/resources/${category}`),
          current: deeper.length === 0,
        });
        if (deeper.length > 0) {
          items.push({ name: currentTitle.value, path: route.path, current: true });
        }
      }
    } else {
      const routeKey = (route.name as string | undefined)?.split("___")[0];
      if (routeKey && staticPages[routeKey]) {
        items.push({ name: t(staticPages[routeKey]), path: route.path, current: true });
      }
    }

    return items;
  });

  const breadcrumbs = computed(() => {
    const items = fullBreadcrumbs.value;
    return items.length >= 3 ? items.slice(1) : items;
  });

  const jsonLd = computed(() => {
    if (fullBreadcrumbs.value.length <= 1) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: fullBreadcrumbs.value.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: new URL(item.path, siteUrl).href,
      })),
    };
  });

  return { breadcrumbs, jsonLd };
}
