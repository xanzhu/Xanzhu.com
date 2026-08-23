<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()

const collectionName = `blog_${locale.value}` as keyof Collections

const { data: features } = await useAsyncData(`featuredArticles-${locale.value}`, () =>
  queryCollection(collectionName)
    .select('title', 'date', 'description', 'tag', 'path')
    .where('feature', '=', 1)
    .order('date', 'DESC')
    .limit(5)
    .all(), {
  dedupe: 'defer',
})

const featureSets = computed(() => ({
  setOne: (features.value ?? []).slice(0, 3),
  setTwo: (features.value ?? []).slice(3, 5),
}))

const headingId = useId()

const featureImage = 'https://cdn.xanzhu.com/v1/rabbit-r1/graphic.webp'
</script>

<template>
  <section class="mx-4 py10 bg-light400 dark:bg-dark900" :aria-labelledby="headingId">
    <div
      class="mx-auto mb5 px6 flex flex-col max-w-lg items-center justify-between space-y-5 md:mb0 md:flex-row md:max-w-5xl md:space-y-0"
    >
      <div class="flex flex-col self-start md:mb10 md:justify-center">
        <h2 :id="headingId" class="text-4xl tracking-wide font-bold m0 md:text-5xl">
          {{ t('home.feature.title') }}
        </h2>
        <p class="text-sm text-dark-400 m0 pt3 dark:text-gray-200">
          {{ t('home.feature.subHead') }}
        </p>
      </div>
      <NuxtLinkLocale
        class="core-theme text-inherit p4 core-border rounded-md no-underline transition-transform duration-150 ease-linear self-start hover:(text-white bg-black) dark:hover:(text-black bg-white)"
        to="/blog"
      >
        {{ t('home.feature.action') }}
      </NuxtLinkLocale>
    </div>

    <div
      class="mx-auto px6 gap-4 grid auto-rows-fr grid-cols-1 max-w-lg justify-items-center lg:grid-cols-3 md:grid-cols-2 md:max-w-5xl"
    >
      <div class="contents children:(core-border rounded-lg)">
        <article
          v-for="feature in featureSets.setOne" :key="feature.path"
          class="group core-theme transition transition-transform duration-300 ease-linear hover:(bg-white shadow-lg scale-102 dark:bg-black)"
        >
          <NuxtLinkLocale
            class="text-black p-5 no-underline h-full block dark:text-white"
            :to="feature.path"
            :aria-labelledby="`${headingId}-${feature.path.replace(/\//g, '-')}`"
          >
            <span
              class="text-sm text-inherit px4 py1 core-border rounded-md bg-light200 op-90 dark:bg-dark800"
              role="doc-subtitle"
            >
              {{ feature.tag }}
            </span>
            <h3
              :id="`${headingId}-${feature.path.replace(/\//g, '-')}`"
              class="group-hover:text-primary text-xl text-inherit font-semibold mt-2"
            >
              {{ feature.title }}
            </h3>
            <p class="text-neutral-400 text-inherit font-400 mt-2 op70 transition-opacity duration-300 ease-in-out dark:text-neutral-300 group-hover:op-100">
              {{ feature.description }}
            </p>
          </NuxtLinkLocale>
        </article>
      </div>

      <div class="hidden relative lg:(grid col-span-2 row-span-2)">
        <NuxtImg
          :src="featureImage"
          alt="Rabbit R1 Animation Graphic"
          loading="lazy"
          format="webp"
          class="rounded-lg h-full w-full object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 854px"
          width="854"
          height="532"
        />
        <NuxtLink
          to="https://www.rabbit.tech/rabbit-r1"
          class="text-sm core-ui px3 py1 core-border rounded-md decoration-none bottom-2 right-2 absolute hover:core-theme"
          external
          target="_blank"
        >
          Rabbit.tech
        </NuxtLink>
      </div>

      <div class="contents children:(core-border rounded-lg)">
        <article
          v-for="feature in featureSets.setTwo" :key="feature.path"
          class="group core-theme transition duration-300 ease-linear hover:(bg-white shadow-lg scale-102 dark:bg-black)"
        >
          <NuxtLinkLocale
            class="text-black p-5 no-underline h-full block dark:text-white"
            :to="feature.path"
            :aria-labelledby="`${headingId}-${feature.path.replace(/\//g, '-')}`"
          >
            <span
              class="text-sm text-inherit px4 py1 core-border rounded-md bg-light200 op-90 dark:bg-dark800"
              role="doc-subtitle"
            >
              {{ feature.tag }}
            </span>
            <h3
              :id="`${headingId}-${feature.path.replace(/\//g, '-')}`"
              class="group-hover:text-primary text-xl text-inherit font-semibold mt-2"
            >
              {{ feature.title }}
            </h3>
            <p class="text-neutral-400 text-inherit font-400 mt-2 op70 transition-opacity duration-300 ease-in-out dark:text-neutral-300 group-hover:op-100">
              {{ feature.description }}
            </p>
          </NuxtLinkLocale>
        </article>
      </div>
    </div>
  </section>
</template>
