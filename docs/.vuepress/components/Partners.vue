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
        <p>{{ partner.about }}</p>
        <p v-if="partner.about2">{{ partner.about2 }}</p>
        <div class="social-icons">
          <a :href="partner.facebook">
            <img src="/img/facebook.png" alt="facebook icon" />
          </a>
          <a :href="partner.instagram">
            <img src="/img/instagram.png" alt="instagram icon" />
          </a>
          <a :href="partner.twitter">
            <img src="/img/twitter.png" alt="twitter icon" />
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
    margin 24px
    padding 24px
  .partner-image
    width 40%
    display flex
    flex-direction column
    justify-content center
    align-items center
    img
      display block
      object-fit contain
      width 90%
      height 200px
    .social-icons
      display flex
      margin 24px 0 0 0
      img
        width 32px
        height 32px
        margin 0 12px
  .partner-description
    display flex
    flex-direction column
    align-items center
    width 50%
    padding 12px
    .social-icons
      display flex
      margin 24px 0 0 0
      width 100%
      justify-content center
      img
        width 32px
        height 32px
        margin 0 12px

</style>
