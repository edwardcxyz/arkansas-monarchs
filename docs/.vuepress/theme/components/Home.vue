<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="hero"></header>

    <h1 v-if="data.heroText !== null" id="main-title">
      {{ data.heroText || $title || 'Hello' }}
    </h1>

    <p v-if="data.tagline !== null" class="description">
      {{ data.tagline || $description || '' }}
    </p>

    <NavLinks/>
    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <div class="feature-row">
      <div class="feature-thumb">
        <img src="/img/echinacea-field-thumb.png">
      </div>
      <div class="feature-blurb">
        <h3>Arkansas Monarch and Pollinator Conservation Plan</h3>
        <p>
          Following years of declines in populations of monarch butterflies and pollinators, the U.S. Fish and Wildlife Service has received petitions to list several pollinator species as threatened or endangered under the Endangered Species Act. The presidents of the United States and Mexico and the prime minister of Canada have called for cooperative action to address declining monarch populations. In June 2014, a Presidential Memorandum was issued from the White House directing federal actions to address the issue of pollinator conservation resulting in the creation of a Pollinator Health Task Force and the National Strategy to Promote the Health of Honey Bees and Other Pollinators
        </p>
        <a href="https://res.cloudinary.com/edwardcxyz/image/upload/v1597203794/ArkansasMonarchs/Arkansas-Monarch-and-Pollinator-Conservation-Plan-SinglePageLayout.pdf">
          View the PDF
        </a>
      </div>
    </div>

    <div class="feature-row">
      <div class="feature-blurb">
        <h3>Wings of Hope</h3>
        The “Wings of Hope” video was generously funded by the U.S. Fish and Wildlife Service and U.S. Fish and Wildlife Service Partners for Fish and Wildlife with additional contributions from the Arkansas Natural Heritage Commission, Arkansas Department of Heritage, Arkansas Game and Fish Commission, The Nature Conservancy, Pulaski Conservation District, Arkansas Department of Transportation and the Botanical Garden of the Ozarks.
      </div>
      <div class="video-container">
        <video controls poster="https://res.cloudinary.com/edwardcxyz/image/upload/v1581204642/ArkansasMonarchs/ar-mon-logo.png">
          <source :src="data.videoLink" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Home',

  components: { NavLink, NavLinks },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding 32px 0 0
  max-width $homePageWidth
  margin 0px auto
  display block
  height 100%
  background-color rgba(255, 255, 255, .5)
  .hero
    margin-top 24px
    text-align center
    background-image url('/img/hero-01.png')
    height 30vh
    width 100%
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  h1
    font-size 3rem
  h1, .description, .action
    margin 1.8rem auto
  #main-title
    text-align center
    font-size 2rem
  .description
    max-width 35rem
    font-size 1.2rem
    line-height 1.3
    color lighten($textColor, 40%)
    margin-bottom 8px
    text-align center
  .action-button
    display inline-block
    font-size 1.2rem
    color #fff
    background-color $accentColor
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($accentColor, 10%)
    &:hover
      background-color lighten($accentColor, 10%)
  .feature-row
    display flex
    flex-flow row wrap
    justify-content center
    align-items center
    margin 40px 0 80px 0
    padding 0 32px
    div
      flex-basis 40%
      display block
    .feature-blurb
      flex-grow 1
      padding 0px 24px
      h3
        margin-top: 0;
      p
        // max-width 400px
    .video-container
      text-align center
      min-width 300px
      flex-grow 1
      video
        max-width 100%
        border-radius: 4px;
        box-shadow: 1px 1px 8px #333;
    .feature-thumb
      img
        min-width: 300px;
        max-width: 100%;
        border-radius: 4px;
        box-shadow: 1px 1px 8px #333;
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
    font-size 0.7rem

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
