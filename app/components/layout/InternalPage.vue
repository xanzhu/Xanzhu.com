<script setup lang="ts">
const { title, description, date, datelabel } = defineProps<{
  title?: string
  description?: string
  date?: string
  datelabel?: string
}>()

const hasSubInfo = computed(() => !!description || !!date)
</script>

<template>
  <main class="flex flex-col min-h-screen items-center md:mt-20">
    <div class="my-10 max-w-4xl min-h-screen space-y-10 sm:mx-auto">
      <div
        class="mx-4 flex flex-col space-y-4"
        :class="hasSubInfo
          ? 'sm:(flex-row items-center justify-between space-y-0)'
          : 'items-center'"
      >
        <div
          class="flex flex-col"
          :class="!hasSubInfo ? 'items-center' : undefined"
        >
          <h1 class="text-2xl font-semibold m0 sm:text-3xl">
            <slot name="title">
              {{ title }}
            </slot>
          </h1>
          <p v-if="description" class="mt-4 op80 dark:text-light-500">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>
        <p v-if="date" class="m0 flex flex-col">
          <span v-if="datelabel" class="font-semibold self-end">
            <slot name="date-label">{{ datelabel }}</slot>
          </span>
          <span class="font-400">
            <slot name="date">
              <LazyUiDate :date="date" />
            </slot>
          </span>
        </p>
      </div>

      <section
        class="text-md core-ui font-400 p-6 core-border rounded-lg shadow-xs space-y-6 sm:(mx-3 p-10) dark:from-dark-800 dark:to-dark-900"
      >
        <slot name="content" />
      </section>
    </div>
  </main>
</template>
