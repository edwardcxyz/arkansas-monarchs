<template>
  <div class="partners">
    <div
      class="partner-card"
      v-for="partner in $page.frontmatter.partners"
      :key="partner.name"
    >
      <article>
        <h3>{{ partner.name }}</h3>
        <div class="partner-content">
          <div class="partner-image">
            <img :src="partner.image" :alt="partner.name" />
          </div>
          <div class="partner-info">
            <PartnerBlurb :partner="partner" />
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
      </article>
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
    margin 24px
    padding 24px
    article
      display flex
      flex-flow column nowrap
      height 100%
      h3
        text-align center
      .partner-content
        display flex
        flex-flow row nowrap
        width 100%
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
