<template>
    <!-- Paragraph Quotes (Beta) v0.1 -->
    <div>
        <blockquote class="text-xl max-w-xl italic sm:p10 text-black op90 dark:text-white flex flex-col mx-auto px-4 pl-0">
            <span class="m0 font-semibold">"{{ content }}"</span>
            <span v-if="author" class="text-lg font-medium flex justify-end">- {{ author }}</span>
        </blockquote>
    </div>
</template>
<script setup lang="ts">
defineProps({
  content: { type: String, required: true },
  author: { type: String }
});
</script>