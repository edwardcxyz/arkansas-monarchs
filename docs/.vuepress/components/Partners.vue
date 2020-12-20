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
      <div class="partner-info">
        <PartnerBlurb :p1="partner.about" :p2="partner.about2 || null" />
        <div class="social">
          <a v-if="partner.facebook" :href="partner.facebook">
            <img src="/img/facebook.png" alt="facebook logo icon" />
          </a>
          <a v-if="partner.instagram" :href="partner.instagram">
            <img src="/img/instagram.png" alt="instagram logo icon" />
          </a>
          <a v-if="partner.twitter" :href="partner.twitter">
            <img src="/img/twitter.png" alt="twitter logo icon" />
          </a>
        </div>
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
    flex-flow row wrap
    margin 24px
    padding 24px
    .partner-image
      width 40%
      height 100%
      display flex
      img
        display block
        object-fit contain
        width 90%
        height 200px
    .partner-info
      width 50%
      .social
        width 100%
        margin-top 32px
        display flex
        justify-content center
        img
          height 24px
          width 24px
          margin 0 12px
</style>
