<script setup lang="ts">
const { title, description, date, dateLabel } = defineProps<{
  title?: string;
  description?: string;
  date?: string;
  dateLabel?: string;
}>();

const slots = useSlots();
const hasTitle = computed(() => !!title || !!slots.title);
const hasDescription = computed(() => !!description || !!slots.description);
const hasDate = computed(() => !!date || !!slots.date);
const hasSubInfo = computed(() => hasDate.value || hasDescription.value);
</script>

<template>
  <div class="flex flex-col items-center md:mt-20">
    <div class="my-10 max-w-4xl min-h-screen space-y-10 sm:mx-auto">
      <header
        class="mx-4 flex flex-col space-y-4"
        :class="
          hasSubInfo ? 'sm:(flex-row items-center justify-between space-y-0)' : 'items-center'
        "
      >
        <div class="flex flex-col" :class="!hasSubInfo ? 'items-center' : undefined">
          <h1 v-if="hasTitle" class="text-2xl font-semibold m0 sm:text-3xl">
            <slot name="title">
              {{ title }}
            </slot>
          </h1>
          <p v-if="hasDescription" class="mt-4 op80 dark:text-light-500">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>
        <div v-if="dateLabel" class="m0 flex flex-col">
          <span v-if="dateLabel" class="font-semibold self-end">
            <slot name="dateLabel">{{ dateLabel }}</slot>
          </span>
          <span class="font-400">
            <slot name="date">
              <LazyUiDate v-if="date" :date="date" />
            </slot>
          </span>
        </div>
      </header>

      <article
        class="text-md core-ui font-400 p-6 core-border rounded-lg shadow-xs space-y-6 sm:(mx-3 p-10) dark:from-dark-800 dark:to-dark-900"
      >
        <slot name="content" />
      </article>
    </div>
  </div>
</template>
