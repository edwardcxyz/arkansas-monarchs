<template>
  <section class="hero-image">
    <img v-if="$page.frontmatter.heroImage" :src="$page.frontmatter.heroImage" />
  </section>
</template>

<script>
export default {
  created() {
    console.log(this.$page.frontmatter.heroImage);
  },
}
</script>

<style lang="stylus">
.hero-image
  overflow hidden
  img
    width 100%
    height 500px
    object-fit cover
</style>