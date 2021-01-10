<template>
  <article class="feature">
    <router-link :to="feature.link">
      <header class="feature-image">
        <img :src="feature.image" :alt="feature.title" />
      </header>
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    feature: Object, // { title, link, image, details  }
  },
};
</script>

<style lang="stylus" scoped>
article.feature
  display flex
  flex-flow column nowrap
  width 250px
  margin 0 24px
  min-height 400px
  border-radius 12px
  background-color $body-bg
  padding 0 0 16px 0
  min-height 430px
  a
    color: rgb(52, 63, 42)
  header.feature-image
    height 272px
    width 100%
    overflow hidden
    border-top-left-radius 12px
    border-top-right-radius 12px
    img
      width: 100%
      height 100%
      object-fit cover
  h2
    font-size 14px
    border-bottom 0
    padding-left 16px
    padding-bottom 0
    padding: 8px 0 0 16px
    width: 100%
    font-weight 700
    text-transform uppercase
  p
    font-size 14px
    font-weight 500
    margin 0
    padding 0 16px
</style>
