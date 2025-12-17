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

const copied = ref(false)

const fullUrl = computed(() => {
  const base = (config.public.i18n.baseUrl || '').replace(/\/$/, '')
  return `${base}${props.post.path || ''}`
})

// Simple Copy Link
async function copyLink() {
  try {
    await navigator.clipboard.writeText(fullUrl.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
  catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// Pre-encode values
const encodedUrl = computed(() => encodeURIComponent(fullUrl.value))
const encodedTitle = computed(() => encodeURIComponent(props.post.title))

const socials = computed(() => [
  {
    name: 'twitter',
    url: `https://twitter.com/intent/tweet?url=${encodedUrl.value}&text=${encodedTitle.value}&via=Xanzhu1`,
    icon: 'ri:twitter-x-line',
  },
  {
    name: 'bluesky',
    url: `https://bsky.app/intent/compose?text=${encodedTitle.value}%20${encodedUrl.value}`,
    icon: 'ri:bluesky-fill',
  },
  {
    name: 'threads',
    url: `https://threads.net/intent/post?text=${encodedTitle.value}%20${encodedUrl.value}`,
    icon: 'ri:threads-line',
  },
  {
    name: 'linkedin',
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl.value}`,
    icon: 'ri:linkedin-fill',
  },
  {
    name: 'reddit',
    url: `https://www.reddit.com/submit?url=${encodedUrl.value}&title=${encodedTitle.value}`,
    icon: 'ri:reddit-fill',
  },
  {
    name: 'email',
    url: `mailto:?subject=${encodedTitle.value}&body=${encodeURIComponent(t('email.share'))}: ${encodedUrl.value}`,
    icon: 'ri:mail-open-fill',
  },
])
</script>

<template>
  <div
    class="mx-auto inline-flex items-center gap-1 core-border rounded-full core-theme px-3 py-1.5"
    role="group"
    :aria-label="t('share.title')"
  >
    <NuxtLink
      v-for="social in socials"
      :key="social.name"
      :to="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :title="t(`share.${social.name}`)"
      class="group p-1.5 text-black transition-all duration-200 dark:text-white hover:-translate-y-0.5"
    >
      <Icon
        :name="social.icon"
        class="h-5 w-5 opacity-80 transition-colors group-hover:text-brand-light group-hover:opacity-100 dark:group-hover:text-brand-dark"
      />
      <span class="sr-only">{{ t(`share.${social.name}`) }}</span>
    </NuxtLink>

    <div class="mx-1 h-4 w-px bg-gray-300 dark:bg-dark-400" aria-hidden="true" />

    <button
      type="button"
      :title="t('share.copy')"
      class="group cursor-pointer rounded-md border-none bg-transparent p-1.5 text-inherit transition-all duration-200 hover:-translate-y-0.5"
      @click="copyLink"
    >
      <Icon
        :name="copied ? 'ri:check-line' : 'ri:link'"
        class="h-5 w-5 transition-colors"
        :class="copied ? 'text-green-500' : 'opacity-80 group-hover:opacity-100 group-hover:text-brand-light dark:group-hover:text-brand-dark'"
      />
      <span class="sr-only">{{ copied ? t('share.copied') : t('share.copy') }}</span>
    </button>
  </div>
</template>
