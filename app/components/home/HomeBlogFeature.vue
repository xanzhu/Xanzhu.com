<script setup lang="ts">
const { locale, t } = useI18n()

const { data: features } = await useAsyncData(`featuredArticles-${locale.value}`, async () => {
  const query = locale.value !== 'en' ? `${locale.value}/blog` : '/blog'
  try {
    return await queryContent(query)
      .sort({ date: -1 })
      .where({ feature: true })
      .only(['title', 'description', 'date', 'tag', '_path'])
      .limit(5)
      .find()
  }
  catch (err) {
    console.error('Error fetching articles:', err)
    return []
  }
})
</script>

<template>
  <div class="mx-auto bg-light-3 py10 dark:bg-dark-900">
    <div class="mx-auto mt10 max-w-lg flex items-center justify-between px6 md:max-w-5xl 2xl:px45 xl:px25">
      <div class="mb-10 flex flex-col justify-center space-y-2">
        <h2 id="latest-posts" class="m0 text-4xl font-bold tracking-wide md:text-5xl">
          {{ $t('home.latest') }}
        </h2>
        <p class="m0 text-sm text-dark-400 dark:text-gray-200">
          {{ $t('home.features.description') }}
        </p>
      </div>
      <NuxtLinkLocale
        class="self-start rounded-md p4 text-inherit decoration-none transition duration-150 ease-linear core-border core-theme hover:(bg-black text-white) dark:hover:(invert)"
        to="/blog"
      >
        {{ $t('footer.blog') }}
      </NuxtLinkLocale>
    </div>
    <div
      class="grid auto-rows-fr grid-cols-1 mx-auto max-w-lg justify-items-center gap-4 px6 pb10 lg:grid-cols-3 md:grid-cols-2 md:max-w-5xl children:(core-border rounded-lg) 2xl:px45 xl:px25"
      role="feed" :aria-label="t('v2.home.featuredPosts')"
    >
      <article
        v-for="feature in features?.slice(0, 3)" :key="feature._path"
        class="group transition duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black) core-theme"
      >
        <div class="col-span-1 cursor-pointer p-5 dark:text-white">
          <NuxtLinkLocale class="group-hover text-black no-underline dark:text-white" :to="feature._path">
            <span class="rounded-md bg-light2 px4 py1 text-sm op-90 core-border dark:bg-dark8">{{
              feature.tag }}</span>
            <h3 class="group-hover:text-primary text-xl font-semibold">
              {{ feature.title }}
            </h3>
            <p class="font-300 op70 group-hover:op-100">
              {{ feature.description }}
            </p>
          </NuxtLinkLocale>
        </div>
      </article>

      <div class="relative hidden lg:(grid col-span-2 row-span-2)">
        <NuxtImg
          src="https://cdn.xanzhu.com/v1/rabbit-r1/graphic.webp" class="h-full w-full rounded-lg object-cover"
          alt="Rabbit R1 Animation Graphic" loading="lazy" format="webp" width="800" height="600"
          sizes="sm:100vw md:50vw lg:800px"
        />
        <NuxtLink
          to="https://www.rabbit.tech"
          class="absolute bottom-2 right-2 rounded-md px3 py1 text-sm underline-none decoration-none core-border core-ui hover:core-theme"
        >
          Rabbit.tech
        </NuxtLink>
      </div>

      <article
        v-for="feature in features?.slice(3, 6)" :key="feature._path"
        class="group transition duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black) core-theme"
        role="article"
      >
        <div class="col-span-1 cursor-pointer p-5 dark:text-white">
          <NuxtLinkLocale
            class="group-hover text-black no-underline dark:text-white" :to="feature._path"
            :aria-label="`Read ${feature.title}`"
          >
            <span class="rounded-md bg-light2 px4 py1 text-sm op-90 core-border dark:bg-dark8" role="doc-subtitle">{{
              feature.tag }}</span>
            <h3 class="group-hover:text-primary text-xl font-semibold">
              {{ feature.title }}
            </h3>
            <p class="font-300 op70 group-hover:op-100">
              {{ feature.description }}
            </p>
          </NuxtLinkLocale>
        </div>
      </article>
    </div>
  </div>
</template>
