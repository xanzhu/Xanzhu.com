<template>
  <div class="flex">
    <div class="space-x-2">
      <NuxtLink
        :to="`https://twitter.com/intent/tweet?url=https://xanzhu.com${post._path}&text=${post.title}&via=Xanzhu1`"
        target="_blank"
        class="hover:text-[#ff0000]"
      >
        <Icon name="mdi:twitter" class="h-5 w-5" />
      </NuxtLink>
      <NuxtLink
        :to="`https://www.linkedin.com/shareArticle?url=https://xanzhu.com${post._path}&title=${post.title}`"
        target="_blank"
        class="hover:text-[#ff0000]"
      >
        <Icon name="mdi:linkedin" class="h-5 w-5" />
      </NuxtLink>
      <NuxtLink
        :to="`https://www.reddit.com/submit?url=https://xanzhu.com${post._path}&title=${post.title}`"
        target="_blank"
        class="hover:text-[#ff0000]"
      >
        <Icon name="mdi:reddit" class="h-5 w-5" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
