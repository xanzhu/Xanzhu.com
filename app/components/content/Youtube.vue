<script setup lang="ts">
interface Props {
  credentialless?: boolean
  width?: string | number
  height?: string | number
  src: string
  title?: string
  frameborder?: string | number
  allow?: string
  referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
  allowfullscreen?: boolean
}

const props = withDefaults(defineProps <Props> (), {
  credentialless: false,
  width: 560,
  height: 315,
  title: '',
  frameborder: 0,
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  referrerpolicy: 'strict-origin-when-cross-origin',
  allowfullscreen: true,
})

const computedWidth = computed(() => typeof props.width === 'number' ? `${props.width}px` : props.width)
const computedHeight = computed(() => typeof props.height === 'number' ? `${props.height}px` : props.height)
const computedFrameborder = computed(() => props.frameborder.toString())
</script>

<template>
  <div class="relative m-[1.5rem_0] h-0 w-full pb-[56.25%]">
    <iframe
      :credentialless="credentialless" :width="computedWidth" :height="computedHeight" :src="src" :title="title"
      :frameborder="computedFrameborder" :allow="allow" :referrerpolicy="referrerpolicy"
      :allowfullscreen="allowfullscreen" loading="lazy" class="absolute left-0 top-0 h-full w-full rounded-md"
    />
  </div>
</template>
