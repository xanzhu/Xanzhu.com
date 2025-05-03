<script setup lang="ts">
const { locale, t } = useI18n()

const { data: features } = await useAsyncData('feature-articles', async () => {
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
  <section class="mx-auto mt-10">
    <div class="flex items-center md:justify-center lg:p10 lg:space-x-50 sm:space-x-45">
      <h2 class="mx6 text-4xl md:(text-5xl)">
        {{ t('home.latest') }}
      </h2>
      <span class="hidden md:(mx-10 h-2px w-30% flex bg-dark-400) lg:w-40%" />
    </div>
    <div
      class="grid auto-rows-fr grid-cols-1 max-w-lg justify-items-center gap-4 px6 lg:grid-cols-3 md:grid-cols-2 md:max-w-5xl children:(core-border rounded-lg) lg:px45 md:px25"
    >
      <article
        v-for="(feature, index) in features?.slice(0, 3)" :key="index"
        class="group transition duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black) core-theme"
      >
        <div class="col-span-1 cursor-pointer p-5 dark:text-white">
          <NuxtLinkLocale class="group-hover text-black no-underline dark:text-white" :to="feature._path">
            <span class="rounded-md bg-light4 px4 py1 text-sm op-60 core-border dark:bg-dark8">{{
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
          to="https://rabbit.tech"
          class="absolute bottom-2 right-2 rounded-md px3 py1 text-sm underline-none decoration-none core-border core-ui hover:core-theme"
        >
          Rabbit.tech
        </NuxtLink>
      </div>

      <article
        v-for="(feature, index) in features?.slice(3, 6)" :key="index"
        class="group transition duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black) core-theme"
      >
        <div class="col-span-1 cursor-pointer p-5 dark:text-white">
          <NuxtLinkLocale
            class="group-hover text-black no-underline dark:text-white" :to="feature._path"
            :aria-label="`Read more about ${feature.title}`"
          >
            <span class="rounded-md bg-light4 px4 py1 text-sm op-60 core-border dark:bg-dark8">{{
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
  </section>
</template>
