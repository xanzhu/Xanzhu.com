<script setup lang="ts">
interface Post {
  _path?: string
  title: string
}

const props = defineProps<{
  post: Post
}>()

const { t } = useI18n()
const config = useRuntimeConfig()
const baseUrl = computed(() => config.public.i18n.baseUrl)

const encodedPath = computed(() => encodeURIComponent(props.post._path || ''))
const encodedTitle = computed(() => encodeURIComponent(props.post.title))

const socials = computed(() => [
  {
    url: `https://twitter.com/intent/tweet?url=${baseUrl.value}${encodedPath.value}&text=${encodedTitle.value}&via=Xanzhu1`,
    icon: 'line-md:twitter-x',
    aria: t('share.twitter'),
  },
  {
    url: `https://www.facebook.com/sharer/sharer.php?u=${baseUrl.value}${encodedPath.value}`,
    icon: 'line-md:facebook',
    aria: t('share.facebook'),
  },
  {
    url: `https://threads.net/intent/post?text=${encodedTitle.value}%20${baseUrl.value}${encodedPath.value}`,
    icon: 'line-md:instagram',
    aria: t('share.threads'),
  },
  {
    url: `https://t.me/share/url?url=${baseUrl.value}${encodedPath.value}&text=${encodedTitle.value}`,
    icon: 'line-md:telegram',
    aria: t('share.telegram'),
  },
  {
    url: `https://www.linkedin.com/shareArticle?url=${baseUrl.value}${encodedPath.value}&title=${encodedTitle.value}`,
    icon: 'line-md:linkedin',
    aria: t('share.linkedin'),
  },
  {
    url: `mailto:?subject=${encodedTitle.value}&body=${encodeURIComponent(`${t('email.share')}: ${props.post.title}`)}`,
    icon: 'line-md:email',
    aria: t('share.email'),
  },
  {
    url: `https://www.reddit.com/submit?url=${baseUrl.value}${encodedPath.value}&title=${encodedTitle.value}`,
    icon: 'line-md:reddit',
    aria: t('share.reddit'),
  },
])
</script>

<template>
  <div class="mx-auto inline-flex core-border rounded-full core-theme px3 pb1 pt2 space-x-2">
    <div v-for="social in socials" :key="social.url" class="children:(text-black dark:text-white)">
      <NuxtLink
        :to="social.url" target="_blank" rel="noopener noreferrer"
        class="p1 op90 hover:text-brand-light dark:hover:text-brand-dark"
      >
        <Icon :name="social.icon" class="h5 w5" />
        <span class="sr-only">{{ social.aria }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
