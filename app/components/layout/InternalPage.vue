<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  date?: string
  datelabel?: string
}>()

const hasSubInfo = computed(() => !!props.description || !!props.date)
</script>

<template>
  <main class="min-h-screen flex flex-col items-center md:mt-20">
    <div class="my-10 max-w-4xl min-h-screen sm:mx-auto space-y-10">
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
          <h1 class="m0 text-2xl font-semibold sm:text-3xl">
            <slot name="title">
              {{ title }}
            </slot>
          </h1>
          <p v-if="description" class="m0 op80 dark:text-light-500">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>
        <p v-if="date" class="m0 flex flex-col">
          <span v-if="datelabel" class="self-end font-semibold">
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
        class="text-md core-border rounded-lg from-light-100 to-neutral-200 bg-gradient-to-b p-6 font-400 shadow-sm sm:(mx-3 p-10) space-y-6 dark:from-dark-800 dark:to-dark-900"
      >
        <slot name="content" />
      </section>
    </div>
  </main>
</template>
