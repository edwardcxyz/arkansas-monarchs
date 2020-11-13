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
      background-color rgb(40, 48, 32)
  ul
    position absolute
    top 35px
    background-color $green-medium
    color $beige
    list-style none
    padding 16px 32px
    min-width 120%
    li
      padding 8px 0
      margin 0
      a
        color $beige
        text-transform none
        &:hover
          color: $yellow
          background unset
</style>