<template>
  <div class="nav-link-group"
    @mouseover="hover = true"
    @mouseleave="hover = false">
    <div class="group-title" :class="{ hover }">
      {{ text }}
    </div>
    <ul v-show="hover">
      <li v-for="item in items" class="item">
        <nav-link :item="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink';

export default {
  name: 'NavLinkGroup',
  components: { NavLink },
  data() {
    return {
      hover: false,
    }
  },
  props: {
    text: String,
    items: Array,
  }
}
</script>

<style lang="stylus">
.nav-link-group
  position relative
  .group-title
    color #fff
    text-transform uppercase
    padding 16px 8px
    white-space nowrap
    font-weight 500
    &.hover
      background-color rgb(52, 63, 42)
  ul
    position absolute
    top 51px
    background-color $green-medium
    color $beige
    list-style none
    min-width 120%
    padding 12px 0
    margin 0
    li
      font-size 14px
      width 100%
      margin 0
      padding 8px 64px 8px 32px
      a
        color $beige
        text-transform none
        &:hover
          color: $yellow
          background unset
</style>