<template>
  <section class="hero-image" :class="{ small }">
    <img
      v-if="$page.frontmatter.heroImage"
      :src="$page.frontmatter.heroImage"
    />
  </section>
</template>

<script>
export default {
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
  &.small
    img
      height 350px
    &::after
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      //background linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 90%)
      content ''
  img
    position relative
    width 100%
    height 500px
    object-fit cover
</style>
