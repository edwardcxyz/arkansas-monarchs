<template>
  <section class="hero-image">
    <img
      v-if="$page.frontmatter.heroImage"
      :src="$page.frontmatter.heroImage"
      :style="{ height: small ? '300px' : '500px' }"
    />
  </section>
</template>

<script>
export default {
  created() {
    console.log(this.$page.frontmatter.heroImage);
  },
  props: {
    small: Boolean,
  },
};
</script>

<style lang="stylus">
.hero-image
  overflow hidden
  background-color #fff
  position relative
  &::after
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff)
    content ''
  img
    position relative
    width 100%
    object-fit cover
</style>
