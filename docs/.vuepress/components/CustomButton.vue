<template>
  <div class="custom-button">
    <a :href="to">
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: 'CustomButtons',
  props: {
    to: String,
  },
}
</script>

<style lang="stylus" scoped>
.custom-button
  display inline-block
  a
    display flex
    padding 12px 16px
    background-color $green-bright
    border-radius 4px
    text-decoration none
    font-family Montserrat, sans-serif
    font-weight 500
    color: #fff
    margin-top 40px
    transition all 0.2s
    &:hover
      background-color darken($green-bright, 15%)
      text-decoration none !important
</style>
