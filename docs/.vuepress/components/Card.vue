<template>
  <article class="feature">
    <a
      :href="feature.link"
      :target="isExternal(feature.link) ? '_blank' : '_self'"
    >
      <header class="feature-image">
        <img :src="feature.image" :alt="feature.title" />
      </header>
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </a>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    feature: Object, // { title, details, image, link }
  },
  methods: {
    isExternal(link) {
      return link.startsWith('http');
    },
  },
};
</script>

<style lang="stylus" scoped>
article.feature
  display flex
  flex-flow column nowrap
  width 250px
  max-width 250px
  min-width 250px
  margin 0 24px
  min-height 400px
  border-radius 12px
  background-color $body-bg
  padding 0 0 16px 0
  min-height 430px
  box-shadow 8px 8px 24px 1px $beige
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
    font-weight 700
    text-transform uppercase
  p
    font-size 14px
    font-weight 500
    margin 0
    padding 0 16px
</style>
