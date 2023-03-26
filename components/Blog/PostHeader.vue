<template>
  <header
    class="md:(grid-cols-2 space-y-5 gap-4 my-4 place-items-center) grid grid-cols-1"
  >
    <div
      class="col-span-1 shrink-0 space-y-3 px-4 mt-5 sm:(px-0 mx-4) mb-3 md:(mt-0)"
    >
      <div
        v-if="post.tag"
        class="text-sm inline-flex space-x-3 children:(border-1 dark:border-dark-600 dark:opacity-100 opacity-80 border-gray-300 rounded-sm px-2 py-0.5 dark:bg-dark-900 bg-light-400 dark:text-white text-black)"
      >
        <span>
          {{ post.tag }}
        </span>
        <Date
          v-if="post.date && !post.updated"
          :date="post.date"
          itemprop="datePublished"
          class="md:hidden"
        />
        <BlogReadTime class="<sm:hidden" :content="post" />
        <p v-if="post.updated" class="md:hidden flex items-center space-x-1">
          <Icon
            name="material-symbols:update-rounded"
            class="h-3.5 w-3.5 dark:text-yellow-400"
          />
          <Date
            :date="post.updated"
            itemprop="dateModified"
            class="dark:text-yellow-400 font-semibold"
          />
        </p>
      </div>
      <div>
        <h1
          itemprop="headline"
          class="md:(text-2xl mr-6) break-words text-xl font-bold sm:leading-tight lg:text-3xl xl:text-4xl"
        >
          {{ post.title }}
        </h1>
        <p class="dark:opacity-70 pt-3 opacity-80">{{ post.description }}</p>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex flex-row items-center space-x-2 opacity-90">
          <!-- Add Author font matter -->
          <p class="text-sm font-medium">Xanzhu</p>
          <p class="text-[#ff0000] font-medium">/</p>
          <!-- Shift updated here -->
          <Date
            v-if="post.date"
            :date="post.date"
            itemprop="datePublished"
            class="text-sm"
          />
        </div>
        <BlogSocialShare v-bind:post="post" />
      </div>
    </div>
    <div v-if="post.img" class="relative col-span-1 grow-0">
      <div>
        <NuxtImg
          crossorigin="anonymous"
          itemprop="image"
          :src="post.img"
          :alt="post.alt"
          :title="post.alt"
          loading="lazy"
          height="407"
          width="600"
          class="w-full object-cover rounded-md"
        />
        <div
          v-if="post.source"
          class="dark:(text-light-200 opacity-70) text-dark-700 opacity-80 absolute right-0 px-1 py-1 text-xs <sm:mr-2 tracking-wide"
        >
          <p class="inline-block" />
          {{ t("Blog.source") + ": " + post.source }}
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const { t } = useI18n();

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
