<template>
  <div>
    <cld-image
      :public-id="src"
      responsive
    >
      <cld-transformation height="128" crop="scale" />
      <cld-transformation fetch-format="auto" quality="auto" loading="lazy" />
    </cld-image>
  </div>
</template>
<script>
export default {
  data () {
    return {
      src:
        'v1606016381/xanzhu.com/banner_v3webp_nrm3rv.webp'
    }
  }
}
</script>
