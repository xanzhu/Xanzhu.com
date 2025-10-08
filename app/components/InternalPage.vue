<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  date?: string
  datelabel?: string
}>()

const formattedDate = computed(() => props.date)
const hasSubInfo = computed(() => !!props.description || !!props.date)
</script>

<template>
  <div class="min-h-screen flex flex-col items-center md:mt-20">
    <div class="my-10 max-w-4xl min-h-screen sm:mx-auto space-y-10">
      <div
        class="mx-4 flex flex-col space-y-4" :class="{
          'sm:(flex-row items-center justify-between space-y-0)': hasSubInfo,
          'items-center': !hasSubInfo && !description && !date }"
      >
        <div class="flex flex-col" :class="{ 'items-center': !hasSubInfo && !description && !date }">
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
          <span v-if="datelabel" class="flex self-end font-semibold">
            <slot name="date-label">
              {{ datelabel }}
            </slot>
          </span>
          <span v-if="formattedDate" class="font-400">
            <slot name="date">
              <Date :date="formattedDate" />
            </slot>
          </span>
        </p>
      </div>

      <div
        class="text-md core-border rounded-lg from-light-100 to-neutral-200 bg-gradient-to-b p-6 font-400 shadow-sm sm:(mx-3 p-10) space-y-6 dark:from-dark-800 dark:to-dark-900"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
