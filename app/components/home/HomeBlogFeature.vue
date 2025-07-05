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
    <div
      class="mx-auto mb5 max-w-lg flex flex-col items-center justify-between px6 md:mb0 md:max-w-5xl md:flex-row space-y-5 2xl:px45 xl:px25 md:space-y-0"
    >
      <div class="flex flex-col self-start md:mb10 md:justify-center">
        <h2 id="latest-posts" class="m0 text-4xl font-bold tracking-wide md:text-5xl">
          {{ $t('home.latest') }}
        </h2>
        <p class="m0 pt3 text-sm text-dark-400 dark:text-gray-200">
          {{ $t('home.features.description') }}
        </p>
      </div>
      <NuxtLinkLocale
        class="self-start core-border rounded-md core-theme p4 text-inherit decoration-none transition duration-150 ease-linear hover:(bg-black text-white) dark:hover:(invert)"
        to="/blog"
      >
        {{ $t('footer.blog') }}
      </NuxtLinkLocale>
    </div>
    <div
      class="grid auto-rows-fr grid-cols-1 mx-auto max-w-lg justify-items-center gap-4 px6 pb10 lg:grid-cols-3 md:grid-cols-2 md:max-w-5xl 2xl:px45 xl:px25"
    >
      <div class="contents children:(core-border rounded-lg)" role="feed" :aria-label="t('v2.home.featuredPosts')">
        <article
          v-for="feature in features?.slice(0, 3)" :key="feature._path"
          class="group core-theme transition duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black)"
          role="article"
        >
          <div class="col-span-1 cursor-pointer p-5 dark:text-white">
            <NuxtLinkLocale
              class="group-hover text-black no-underline dark:text-white" :to="feature._path"
              :aria-labelledby="`post${feature._path?.replaceAll('/', '-')}`"
            >
              <span class="core-border rounded-md bg-light2 px4 py1 text-sm op-90 dark:bg-dark8">
                {{ feature.tag }}
              </span>
              <h3
                :id="`post${feature._path?.replaceAll('/', '-')}`"
                class="group-hover:text-primary text-xl font-semibold"
              >
                {{ feature.title }}
              </h3>
              <p class="font-300 op70 group-hover:op-100">
                {{ feature.description }}
              </p>
            </NuxtLinkLocale>
          </div>
        </article>
      </div>

      <div class="relative hidden lg:(grid col-span-2 row-span-2)">
        <NuxtImg
          src="https://cdn.xanzhu.com/v1/rabbit-r1/graphic.webp" alt="Rabbit R1 Animation Graphic" loading="lazy"
          format="webp" class="h-full w-full rounded-lg object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 854px" width="854" height="532"
        />
        <NuxtLink
          to="https://www.rabbit.tech"
          class="absolute bottom-2 right-2 core-border rounded-md core-ui px3 py1 text-sm underline-none decoration-none hover:core-theme"
        >
          Rabbit.tech
        </NuxtLink>
      </div>

      <div class="contents children:(core-border rounded-lg)" role="feed" aria-label="Featured Blog Posts Continued">
        <article
          v-for="feature in features?.slice(3, 6)" :key="feature._path"
          class="group core-theme transition duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black)"
          role="article"
        >
          <div class="col-span-1 cursor-pointer p-5 dark:text-white">
            <NuxtLinkLocale
              class="group-hover text-black no-underline dark:text-white" :to="feature._path"
              :aria-labelledby="`post${feature._path?.replaceAll('/', '-')}`"
            >
              <span class="core-border rounded-md bg-light2 px4 py1 text-sm op-90 dark:bg-dark8" role="doc-subtitle">
                {{ feature.tag }}
              </span>
              <h3
                :id="`post${feature._path?.replaceAll('/', '-')}`"
                class="group-hover:text-primary text-xl font-semibold"
              >
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
  </div>
</template>
