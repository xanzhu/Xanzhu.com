<script setup lang="ts">
interface SurroundItem {
  path: string
  title: string
  img?: string
  alt?: string
}

const props = defineProps<{
  surround: (SurroundItem | null)[]
}>()

const { t } = useI18n()

const items = computed(() => [
  {
    data: props.surround?.[0],
    label: t('v2.blog.prevPost'),
    rel: 'prev',
    isNext: false,
  },
  {
    data: props.surround?.[1],
    label: t('v2.blog.nextPost'),
    rel: 'next',
    isNext: true,
  },
])
</script>

<template>
  <div class="mt-10 flex flex-col items-center sm:flex-row sm:justify-evenly sm:gap-10">
    <template v-for="(nav, index) in items" :key="index">
      <div v-if="nav.data" class="w-[250px]">
        <NuxtLink
          :to="nav.data.path"
          :aria-label="nav.label"
          :rel="nav.rel"
          class="group relative flex flex-col no-underline transition-transform duration-300"
        >
          <div class="relative h-[150px] w-[250px] overflow-hidden rounded-lg bg-gray-100 dark:bg-dark-800">
            <NuxtImg
              v-if="nav.data.img"
              :src="nav.data.img"
              height="150"
              width="250"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              :alt="nav.data.alt || nav.data.title"
              loading="lazy"
              decoding="async"
            />

            <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div class="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                :class="nav.isNext ? '-translate-x-4 group-hover:translate-x-0' : 'translate-x-4 group-hover:translate-x-0'"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <path :d="nav.isNext ? 'M9 18l6-6-6-6' : 'M15 18l-6-6 6-6'" />
              </svg>
            </div>

            <div
              class="absolute bottom-0 left-0 right-0 translate-y-full from-black/70 to-transparent bg-gradient-to-t p-3 text-white transition-transform duration-300 group-hover:translate-y-0"
              :class="{ 'text-right': nav.isNext }"
            >
              <span class="text-sm font-medium opacity-90">{{ nav.label }}</span>
            </div>
          </div>

          <h4
            class="line-clamp-2 mt-3 max-w-[250px] text-base text-element-dark font-medium underline-offset-4 dark:text-element-light group-hover:underline"
          >
            {{ nav.data.title }}
          </h4>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>
