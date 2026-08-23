<script setup lang="ts">
interface SurroundItem {
  path: string
  title: string
  img?: string
  alt?: string
}

const { surround } = defineProps<{
  surround: (SurroundItem | null)[]
}>()

const { t } = useI18n()

const items = computed(() => [
  {
    data: surround?.[0],
    label: t('ui.pagination.prev'),
    rel: 'prev',
    isNext: false,
  },
  {
    data: surround?.[1],
    label: t('ui.pagination.next'),
    rel: 'next',
    isNext: true,
  },
])
</script>

<template>
  <div class="mt-10 flex flex-col items-center sm:flex-row sm:gap-10 sm:justify-evenly">
    <template v-for="(nav, index) in items" :key="index">
      <div v-if="nav.data" class="w-[250px]">
        <NuxtLink
          :to="nav.data.path"
          :aria-label="nav.label"
          :rel="nav.rel"
          class="group no-underline flex flex-col transition-transform duration-300 relative"
        >
          <div class="rounded-lg bg-gray-100 h-[150px] w-[250px] relative overflow-hidden dark:bg-dark-800">
            <NuxtImg
              v-if="nav.data.img"
              :src="nav.data.img"
              height="150"
              width="250"
              class="h-full w-full transition-transform duration-500 object-cover group-hover:scale-105"
              :alt="nav.data.alt || nav.data.title"
              loading="lazy"
              decoding="async"
            />

            <div class="bg-black/40 opacity-0 transition-opacity duration-300 inset-0 absolute group-hover:opacity-100" />

            <div class="flex items-center inset-0 justify-center absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-white opacity-0 h-8 w-8 transition-all duration-300 group-hover:opacity-100"
                :class="nav.isNext ? '-translate-x-4 group-hover:translate-x-0' : 'translate-x-4 group-hover:translate-x-0'"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <path :d="nav.isNext ? 'M9 18l6-6-6-6' : 'M15 18l-6-6 6-6'" />
              </svg>
            </div>

            <div
              class="text-white p-3 translate-y-full transition-transform duration-300 bottom-0 left-0 right-0 absolute from-black/70 to-transparent bg-gradient-to-t group-hover:translate-y-0"
              :class="{ 'text-right': nav.isNext }"
            >
              <span class="text-sm font-medium opacity-90">{{ nav.label }}</span>
            </div>
          </div>

          <h4
            class="text-base text-element-dark font-medium mt-3 underline-offset-4 max-w-[250px] line-clamp-2 dark:text-element-light group-hover:underline"
          >
            {{ nav.data.title }}
          </h4>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>
