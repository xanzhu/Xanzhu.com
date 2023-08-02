<template>
  <div class="flex space-x-2 justify-center sm:justify-start">
    <div v-for="social in socials" class="children:(dark:text-white text-black)">
      <NuxtLink :to="social.url" :aria-label="social.aria" target="_blank"
        class="dark:hover:text-brand-dark hover:text-brand-light">
        <Icon :name="social.icon" class="h5 w5" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  post: {
    _path: string;
    title: string;
  };
}

const { post } = defineProps<Props>();
const { t } = useI18n();

const postPath = post._path;
const postTitle = post.title;
const emailTitle = t('email.share')

const socials = [
  {
    url: `https://twitter.com/intent/tweet?url=https://xanzhu.com${postPath}&text=${postTitle}&via=Xanzhu1`,
    icon: "mdi:twitter",
    aria: t('share.twitter')
  },
  {
    url: `https://www.linkedin.com/shareArticle?url=https://xanzhu.com${postPath}&title=${postTitle}`,
    icon: "mdi:linkedin",
    aria: t('share.linkedin')
  },
  {
    url: `https://www.reddit.com/submit?url=https://xanzhu.com${postPath}&title=${postTitle}`,
    icon: "mdi:reddit",
    aria: t('share.reddit')
  },
  {
    url: `mailto:?subject=${postTitle}&body=${emailTitle}: ${postTitle}`,
    icon: "mdi:email",
    aria: t('share.email')
  }
];
</script>