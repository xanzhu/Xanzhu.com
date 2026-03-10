<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()

const collection = computed(() => `blog_${locale.value}` as keyof Collections)

const { data: features } = await useAsyncData(`featuredArticles-${locale.value}`, () =>
  queryCollection(collection.value)
    .select('title', 'date', 'description', 'tag', 'path')
    .where('feature', '=', 1)
    .order('date', 'DESC')
    .limit(5)
    .all(), {
  lazy: true,
})

const featureSets = computed(() => ({
  setOne: (features.value ?? []).slice(0, 3),
  setTwo: (features.value ?? []).slice(3, 5),
}))

const headingId = useId()

const featureImage = 'https://cdn.xanzhu.com/v1/rabbit-r1/graphic.webp'
</script>

<template>
  <section class="mx-4 bg-light400 py10 dark:bg-dark900" aria-labelledby="latest-posts">
    <div
      class="mx-auto mb5 max-w-lg flex flex-col items-center justify-between px6 md:mb0 md:max-w-5xl md:flex-row space-y-5 md:space-y-0"
    >
      <div class="flex flex-col self-start md:mb10 md:justify-center">
        <h2 id="latest-posts" class="m0 text-4xl font-bold tracking-wide md:text-5xl">
          {{ t('home.feature.title') }}
        </h2>
        <p class="m0 pt3 text-sm text-dark-400 dark:text-gray-200">
          {{ t('home.feature.subHead') }}
        </p>
      </div>
      <NuxtLinkLocale
        class="self-start core-border rounded-md core-theme p4 text-inherit no-underline transition-transform duration-150 ease-linear hover:(bg-black text-white) dark:hover:(bg-white text-black)"
        to="/blog"
      >
        {{ t('home.feature.action') }}
      </NuxtLinkLocale>
    </div>

    <div
      class="grid auto-rows-fr grid-cols-1 mx-auto max-w-lg justify-items-center gap-4 px6 lg:grid-cols-3 md:grid-cols-2 md:max-w-5xl"
    >
      <div class="contents children:(core-border rounded-lg)">
        <article
          v-for="feature in featureSets.setOne" :key="feature.path"
          class="group core-theme transition transition-transform duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black)"
        >
          <NuxtLinkLocale
            class="block h-full p-5 text-black no-underline dark:text-white"
            :to="feature.path"
            :aria-labelledby="`${headingId}-${feature.path}`"
          >
            <span
              class="core-border rounded-md bg-light200 px4 py1 text-sm text-inherit op-90 dark:bg-dark800"
              role="doc-subtitle"
            >
              {{ feature.tag }}
            </span>
            <h3
              :id="`${headingId}-${feature.path}`"
              class="group-hover:text-primary mt-2 text-xl text-inherit font-semibold"
            >
              {{ feature.title }}
            </h3>
            <p class="mt-2 text-neutral-400 text-inherit font-400 op70 transition-opacity duration-300 ease-in-out dark:text-neutral-300 group-hover:op-100">
              {{ feature.description }}
            </p>
          </NuxtLinkLocale>
        </article>
      </div>

      <div class="relative hidden lg:(grid col-span-2 row-span-2)">
        <NuxtImg
          :src="featureImage"
          alt="Rabbit R1 Animation Graphic"
          loading="lazy"
          format="webp"
          class="h-full w-full rounded-lg object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 854px"
          width="854"
          height="532"
        />
        <NuxtLink
          to="https://www.rabbit.tech/rabbit-r1"
          class="absolute bottom-2 right-2 core-border rounded-md core-ui px3 py1 text-sm decoration-none hover:core-theme"
          external
          target="_blank"
        >
          Rabbit.tech
        </NuxtLink>
      </div>

      <div class="contents children:(core-border rounded-lg)">
        <article
          v-for="feature in featureSets.setTwo" :key="feature.path"
          class="group core-theme transition duration-300 ease-linear hover:(scale-102 bg-white shadow-lg dark:bg-black)"
        >
          <NuxtLinkLocale
            class="block h-full p-5 text-black no-underline dark:text-white"
            :to="feature.path"
            :aria-labelledby="`${headingId}-${feature.path}`"
          >
            <span
              class="core-border rounded-md bg-light200 px4 py1 text-sm text-inherit op-90 dark:bg-dark800"
              role="doc-subtitle"
            >
              {{ feature.tag }}
            </span>
            <h3
              :id="`${headingId}-${feature.path}`"
              class="group-hover:text-primary mt-2 text-xl text-inherit font-semibold"
            >
              {{ feature.title }}
            </h3>
            <p class="mt-2 text-neutral-400 text-inherit font-400 op70 transition-opacity duration-300 ease-in-out dark:text-neutral-300 group-hover:op-100">
              {{ feature.description }}
            </p>
          </NuxtLinkLocale>
        </article>
      </div>
    </div>
  </section>
</template>
