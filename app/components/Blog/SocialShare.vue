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
    url: `https://www.linkedin.com/shareArticle?url=${baseUrl.value}${encodedPath.value}&title=${encodedTitle.value}`,
    icon: 'line-md:linkedin',
    aria: t('share.linkedin'),
  },
  {
    url: `https://www.reddit.com/submit?url=${baseUrl.value}${encodedPath.value}&title=${encodedTitle.value}`,
    icon: 'line-md:reddit',
    aria: t('share.reddit'),
  },
  {
    url: `mailto:?subject=${encodedTitle.value}&body=${encodeURIComponent(`${t('email.share')}: ${props.post.title}`)}`,
    icon: 'line-md:email',
    aria: t('share.email'),
  },
])
</script>

<template>
  <div class="mx-auto inline-flex rounded-full px3 pb1 pt2 space-x-2 core-border core-theme">
    <div v-for="social in socials" :key="social.url" class="children:(text-black dark:text-white)">
      <NuxtLink
        :to="social.url" :aria-label="social.aria" target="_blank" rel="noopener noreferrer"
        class="p1 op90 hover:text-brand-light dark:hover:text-brand-dark"
      >
        <Icon :name="social.icon" class="h5 w5" />
      </NuxtLink>
    </div>
  </div>
</template>
