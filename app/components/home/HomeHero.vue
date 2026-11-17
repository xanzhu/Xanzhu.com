<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale, t } = useI18n();

const collectionName = `blog_${locale.value}` as keyof Collections;

const { data: featured } = await useAsyncData(`featuredArticles-${locale.value}`, () =>
  queryCollection(collectionName)
    .select("title", "date", "description", "tag", "path")
    .where("feature", "=", 1)
    .order("date", "DESC")
    .limit(3)
    .all(),
);
</script>

<template>
  <section
    aria-labelledby="hero"
    class="flex-1 w-full flex flex-col justify-center items-center space-y-10"
  >
    <!-- TODO? <div aria-hidden="true">
      <UiSvg load-s-v-g="beta02" />
    </div> -->
    <div class="w-full max-w-4xl">
      <h1
        id="hero"
        class="font-bold px4 text-balance text-[clamp(2rem,3vw,5rem)] font-stretch-[130%] uppercase"
      >
        {{ t("app.home.heroTitle") }}
      </h1>
    </div>

    <section class="px-4 flex justify-center items-center w-full max-w-4xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        <article
          v-for="(article, index) in featured"
          :key="article.path"
          class="@container rounded-md core-border"
          :class="
            index === 0
              ? 'col-span-1 md:col-span-2 bg-light-200 dark:(bg-neutral-950 text-white) md:min-h-44 m0'
              : 'col-span-1 bg-neutral-900 text-white dark:(bg-light-300 text-black) md:min-h-36 lg:min-h-44'
          "
        >
          <NuxtLinkLocale :to="article.path" class="p2 flex h-full flex-col group">
            <div>
              <span
                v-if="article.tag"
                class="inline-block text-xs @md:text-sm uppercase core-border core-theme font-semibold p1 rounded-sm"
                :class="
                  index === 0
                    ? 'bg-black text-white dark:(bg-white text-black)'
                    : 'bg-white text-black'
                "
                >{{ article.tag }}</span
              >
              <h3
                class="font-bold text-2xl lg:text-3xl mt-2 line-clamp-3 group-hover:(underline-2 underline underline-offset-4)"
              >
                {{ article.title }}
              </h3>
              <p class="text-sm @md:text-base mt-2 op80">
                {{ article.description }}
              </p>
            </div>
            <UiDate
              class="font-mono text-xs @md:text-sm mt-auto pt-4"
              v-if="article.date"
              :date="article.date"
            />
          </NuxtLinkLocale>
        </article>

        <NuxtLinkLocale
          to="blog"
          class="col-span-1 md:col-span-2 justify-between flex bg-green-500 p2 rounded-md items-center group hover:bg-green-600"
        >
          <span class="font-stretch-[130%] uppercase font-bold text-black text-lg @md:text-2xl">
            {{ t("common.nav.blog") }}
          </span>
          <Icon name="lucide:arrow-right" class="shrink-0 h7 w7 text-black" aria-hidden="true" />
        </NuxtLinkLocale>
      </div>
    </section>
  </section>
</template>
