<script setup>
defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: value => ['info', 'warning', 'success', 'update'].includes(value),
  },
  icon: {
    type: String,
    default: null,
  },
})

const variantStyles = {
  info: 'border-blue-200 bg-blue-50 text-blue-900 dark:(border-blue-800 bg-blue-950/30 text-blue-100)',
  warning: 'border-amber-200 bg-amber-50 text-amber-900 dark:(border-amber-800 bg-amber-950/30 text-amber-100)',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:(border-emerald-800 bg-emerald-950/30 text-emerald-100)',
  update: 'border-purple-200 bg-purple-50 text-purple-900 dark:(border-purple-800 bg-purple-950/30 text-purple-100)',
}

const defaultIcons = {
  info: 'i-heroicons-information-circle',
  warning: 'i-heroicons-exclamation-triangle',
  success: 'i-heroicons-check-circle',
  update: 'i-heroicons-arrow-path',
}
</script>

<template>
  <div
    class="flex items-center gap-3 b-1 rounded-lg b-solid p-4"
    :class="variantStyles[variant]"
  >
    <Icon
      class="mt-0.5 h-5 w-5 flex-shrink-0"
      :name="icon || defaultIcons[variant]"
    />

    <div class="flex-1 text-sm leading-relaxed">
      <slot />
    </div>
  </div>
</template>
