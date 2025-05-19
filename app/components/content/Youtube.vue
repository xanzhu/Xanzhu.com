<script setup lang="ts">
interface Props {
  src: string
  title?: string
}

const props = defineProps<Props>()
const { t } = useI18n()

const credentialless = false
const width = 560
const height = 315
const frameborder = 0
const allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
const referrerpolicy = 'strict-origin-when-cross-origin'
const allowfullscreen = true

const computedWidth = `${width}px`
const computedHeight = `${height}px`
const computedFrameborder = frameborder.toString()
const iframeTitle = computed(() => props.title || t('v2.blog_iframe'))
</script>

<template>
  <div class="relative m-[1.5rem_0] h-0 w-full pb-[56.25%]">
    <iframe
      :credentialless="credentialless" :width="computedWidth" :height="computedHeight" :src="props.src"
      :title="iframeTitle" :frameborder="computedFrameborder" :allow="allow" :referrerpolicy="referrerpolicy"
      :allowfullscreen="allowfullscreen" loading="lazy" class="absolute left-0 top-0 h-full w-full rounded-md"
    />
  </div>
</template>
