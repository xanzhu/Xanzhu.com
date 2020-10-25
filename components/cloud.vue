<template>
  <div>
    <img :src="src" class="w-full h-20 sm:h-32 object-cover" alt="Black and white visual background" loading="lazy">
  </div>
</template>
<script>
export default {
  data () {
    return {
      src: this.$cloudinary.image.url(
        'https://res.cloudinary.com/xanzhu/image/upload/v1603593731/xanzhu.com/banner-image_itbtx2.webp'
      )
    }
  }
}
</script>
