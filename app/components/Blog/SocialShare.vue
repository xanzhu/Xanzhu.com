<script setup lang="ts">
interface Post {
  path?: string
  title: string
}

const { post } = defineProps<{
  post: Post
}>()

const { t } = useI18n()
const config = useRuntimeConfig()

const copied = ref(false)

const fullUrl = computed(() => {
  const base = (config.public.i18n.baseUrl || '').replace(/\/$/, '')
  return `${base}${post.path || ''}`
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

const socials = computed(() => {
  const url = encodeURIComponent(fullUrl.value)
  const title = encodeURIComponent(post.title)
  const emailBody = encodeURIComponent(t('ui.sharing.email'))

  return [
    {
      name: 'twitter',
      url: `https://twitter.com/intent/tweet?url=${url}&text=${title}&via=Xanzhu1`,
      icon: 'ri:twitter-x-line',
    },
    {
      name: 'bluesky',
      url: `https://bsky.app/intent/compose?text=${title}%20${url}`,
      icon: 'ri:bluesky-fill',
    },
    {
      name: 'threads',
      url: `https://threads.net/intent/post?text=${title}%20${url}`,
      icon: 'ri:threads-line',
    },
    {
      name: 'linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      icon: 'ri:linkedin-fill',
    },
    {
      name: 'reddit',
      url: `https://www.reddit.com/submit?url=${url}&title=${title}`,
      icon: 'ri:reddit-fill',
    },
    {
      name: 'email',
      url: `mailto:?subject=${title}&body=${emailBody}: ${url}`,
      icon: 'ri:mail-open-fill',
    },
  ]
})
</script>

<template>
  <div
    class="mx-auto inline-flex items-center gap-1 core-border rounded-full core-theme px-3 py-1.5"
    role="group"
    :aria-label="t('ui.sharing.title')"
  >
    <NuxtLink
      v-for="social in socials"
      :key="social.name"
      :to="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :title="t(`ui.sharing.${social.name}`)"
      class="group p-1.5 text-black transition-all duration-200 dark:text-white hover:-translate-y-0.5"
    >
      <Icon
        :name="social.icon"
        class="h-5 w-5 opacity-80 transition-colors group-hover:text-brand-light group-hover:opacity-100 dark:group-hover:text-brand-dark"
      />
      <span class="sr-only">{{ t(`ui.sharing.${social.name}`) }}</span>
    </NuxtLink>

    <div class="mx-1 h-4 w-px bg-gray-300 dark:bg-dark-400" aria-hidden="true" />

    <button
      type="button"
      :title="t('ui.sharing.copy')"
      class="group cursor-pointer rounded-md border-none bg-transparent p-1.5 text-inherit transition-all duration-200 hover:-translate-y-0.5"
      @click="copyLink"
    >
      <Icon
        :name="copied ? 'ri:check-line' : 'ri:link'"
        class="h-5 w-5 transition-colors"
        :class="copied ? 'text-green-500' : 'opacity-80 group-hover:opacity-100 group-hover:text-brand-light dark:group-hover:text-brand-dark'"
      />
      <span class="sr-only">{{ copied ? t('ui.sharing.copied') : t('ui.sharing.copy') }}</span>
    </button>
  </div>
</template>
