<template>
  <section class="hero-image">
    <img
      v-if="$page.frontmatter.heroImage"
      :src="$page.frontmatter.heroImage"
      :style="{ height: small ? '200px' : '500px' }"
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
  img
    width 100%
    object-fit cover
</style>
