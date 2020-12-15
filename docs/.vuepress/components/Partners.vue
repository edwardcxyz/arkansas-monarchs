<template>
  <div class="partners">
    <div
      class="partner-card"
      v-for="partner in $page.frontmatter.partners"
      :key="partner.name"
    >
      <div class="partner-image">
        <img :src="partner.image" :alt="partner.name" />
      </div>
      <div class="partner-description">
        {{ partner.about }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
};
</script>

<style lang="stylus">
.partners
  font-weight 500
  min-height 400px
  display flex
  flex-flow column nowrap
  .partner-card
    border-radius 8px
    background $fff
    box-shadow 8px 8px 24px 1px $body-bg
    display flex
    margin 24px
    padding 24px
  .partner-image
    width 40%
    display flex
    justify-content center
    img
      object-fit contain
      width 90%
      height 200px
  .partner-description
    display flex
    align-items center
    width 50%
    padding 12px
    
</style>
