<template>
    <NuxtImg :src="source" />
</template>
<script lang="ts">
export default {
    props: {
        source: { type: String }
    }
}
</script>