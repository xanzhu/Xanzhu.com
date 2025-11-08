<script setup lang="ts">
interface Post {
  path?: string
  title: string
}

const props = defineProps<{
  post: Post
}>()

const { t } = useI18n()
const config = useRuntimeConfig()
const baseUrl = computed(() => config.public.i18n.baseUrl)

const encodedPath = computed(() => encodeURIComponent(props.post.path || ''))
const encodedTitle = computed(() => encodeURIComponent(props.post.title))

const socials = computed(() => [
  {
    url: `https://twitter.com/intent/tweet?url=${baseUrl.value}${encodedPath.value}&text=${encodedTitle.value}&via=Xanzhu1`,
    icon: 'ri:twitter-x-line',
    aria: t('share.twitter'),
  },
  {
    url: `https://bsky.app/intent/compose?text=${encodedTitle.value}%20${baseUrl.value}${encodedPath.value}`,
    icon: 'ri:bluesky-fill',
    aria: t('share.bluesky'),
  },
  {
    url: `https://www.facebook.com/sharer/sharer.php?u=${baseUrl.value}${encodedPath.value}`,
    icon: 'ri:facebook-fill',
    aria: t('share.facebook'),
  },
  {
    url: `https://threads.net/intent/post?text=${encodedTitle.value}%20${baseUrl.value}${encodedPath.value}`,
    icon: 'ri:threads-line',
    aria: t('share.threads'),
  },
  {
    url: `https://www.linkedin.com/shareArticle?url=${baseUrl.value}${encodedPath.value}&title=${encodedTitle.value}`,
    icon: 'ri:linkedin-fill',
    aria: t('share.linkedin'),
  },
  {
    url: `mailto:?subject=${encodedTitle.value}&body=${encodeURIComponent(`${t('email.share')}: ${props.post.title}`)}`,
    icon: 'ri:mail-open-fill',
    aria: t('share.email'),
  },
  {
    url: `https://www.reddit.com/submit?url=${baseUrl.value}${encodedPath.value}&title=${encodedTitle.value}`,
    icon: 'ri:reddit-fill',
    aria: t('share.reddit'),
  },
])
</script>

<template>
  <div class="mx-auto inline-flex core-border rounded-sm core-theme px3 pb1 pt2 space-x-2">
    <div v-for="social in socials" :key="social.url" class="children:(bg-none text-black dark:text-white)">
      <NuxtLink
        :to="social.url" target="_blank" rel="noopener noreferrer"
        class="p1 op90 hover:text-brand-light dark:hover:text-brand-dark"
      >
        <Icon :name="social.icon" class="h6 w6" />
        <span class="sr-only">{{ social.aria }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
