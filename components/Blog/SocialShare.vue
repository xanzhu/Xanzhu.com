<template>
  <div class="md:(sticky top-20) flex justify-center mt-5">
    <ul
      class="items-center md:(space-y-4 flex flex-col items-center space-x-0) flex flex-row justify-left space-x-2 children:(p-2 accent-color rounded-full cursor-pointer)"
    >
      <li
        class="border-1 dark:border-[#15191b] dark:hover:(bg-gradient-to-r from-red-600 to-[#ff0000] text-white) hover:(bg-gradient-to-r from-blue-500 to-[#0066CC] text-white)"
      >
        <NuxtLink
          :to="`https://twitter.com/intent/tweet?url=https://xanzhu.com${post._path}&text=${post.title}&via=Xanzhu1`"
          target="_blank"
        >
          <IconTwitter />
        </NuxtLink>
      </li>
      <li
        class="border-1 dark:border-[#15191b] dark:hover:(bg-gradient-to-r from-red-600 to-[#ff0000] text-white) hover:(bg-gradient-to-r from-blue-500 to-[#0066CC] text-white)"
      >
        <NuxtLink
          :to="`https://www.linkedin.com/shareArticle?url=https://xanzhu.com${post._path}&title=${post.title}`"
          target="_blank"
        >
          <IconLinkedIn />
        </NuxtLink>
      </li>
      <li
        class="border-1 dark:border-[#15191b] dark:hover:(bg-gradient-to-r from-red-600 to-[#ff0000] text-white) hover:(bg-gradient-to-r from-blue-500 to-[#0066CC] text-white)"
      >
        <NuxtLink
          :to="`https://www.reddit.com/submit?url=https://xanzhu.com${post._path}&title=${post.title}`"
          target="_blank"
        >
          <IconReddit />
        </NuxtLink>
      </li>
    </ul>
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

<!-- 
  Dark
  Background #0a0c0d
  Border #15191b
 -->
