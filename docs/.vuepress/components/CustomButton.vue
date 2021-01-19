<template>
  <div class="custom-button">
    <a :href="to" :target="external ? '_blank' : '_self'">
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: 'CustomButtons',
  props: {
    to: String,
    external: Boolean,
  },
}
</script>

<style lang="stylus" scoped>
.custom-button
  display inline-block
  a
    display flex
    padding 12px 32px
    background-color $purple
    border-radius 26px
    text-decoration none
    font-family Montserrat, sans-serif
    font-weight 500
    color: #fff
    transition background-color 0.8s ease
    margin 4px 4px
    &:hover
      background-color $green-medium
      text-decoration none !important
</style>
