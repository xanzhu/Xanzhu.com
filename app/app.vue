<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
});
</script>
