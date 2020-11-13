<template>
  <nav class="horizontal-nav">
    <template v-for="item in $site.themeConfig.links">
      <nav-link v-if="!item.children" :item="{ text: item.text, link: item.link }" />
      <nav-link-group v-else :text="item.text" :items="item.children" /> 
    </template>
  </nav>
</template>

<script>
import NavLink from '@theme/components/NavLink';
import NavLinkGroup from '@theme/components/NavLinkGroup';

export default {
  name: 'NavHorizontal',
  components: { NavLink, NavLinkGroup },
  created() {
    console.log('links', this.$site.themeConfig.links);
  }
}
</script>

<style lang="stylus">
nav.horizontal-nav
  display flex
  justify-content space-around
  background-color $green-light
  font-family 'Montserrat', sans-serif
  font-size 16px
  a
    color #fff
    text-transform uppercase
    padding 16px 8px
    white-space nowrap
    font-weight 500
    &:hover
      background-color rgb(40, 48, 32)
</style>