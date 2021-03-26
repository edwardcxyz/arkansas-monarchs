<template>
  <div class="home-content">
    <section class="main site-description">
      <h2 v-html="$site.description" />
    </section>

    <section class="main features">
      <card
        v-for="feature in $page.frontmatter.features"
        :key="feature.title"
        :feature="feature"
      />
    </section>

    <section class="signup-form">
      <!-- Begin Mailchimp Signup Form -->
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
      <style type="text/css">
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
          We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      </style>
      <style type="text/css">
        #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
        #mergeRow-gdpr {margin-top: 20px;}
        #mergeRow-gdpr fieldset label {font-weight: normal;}
        #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
        #mc-embedded-subscribe.button {background-color: #71367a; border-radius: 32px;}
      </style>
      <div id="mc_embed_signup">
      <form action="https://arkansasmonarchs.us20.list-manage.com/subscribe/post?u=4bd43a5c5e4f09ca10e81992f&amp;id=beb3646f32" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
        <label for="mce-EMAIL">Subscribe to our email list!</label>
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4bd43a5c5e4f09ca10e81992f_beb3646f32" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          </div>
      </form>
      </div>
      <!--End mc_embed_signup-->
    </section>

    <section class="stats">
      <div
        class="stat"
        v-for="stat in $page.frontmatter.stats"
        :key="`stat-${stat.title}`"
      >
        <h2 class="title">{{ stat.title }}</h2>
        <p class="value">{{ stat.value }}</p>
      </div>
    </section>

    <section class="main articles">
      <article class="wings-of-hope">
        <header>
          <h2>Wings of Hope</h2>
        </header>
        <p>
          The “Wings of Hope” video was generously funded by the U.S. Fish and
          Wildlife Service and U.S. Fish and Wildlife Service Partners for Fish
          and Wildlife with additional contributions from the Arkansas Natural
          Heritage Commission, Arkansas Department of Heritage, Arkansas Game
          and Fish Commission, The Nature Conservancy, Pulaski Conservation
          District, Arkansas Department of Transportation and the Botanical
          Garden of the Ozarks.
        </p>
      </article>
      <video
        controls
        poster="https://res.cloudinary.com/edwardcxyz/image/upload/v1581204642/ArkansasMonarchs/ar-mon-logo.png"
      >
        <source :src="this.$page.frontmatter.videoLink" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
section.signup-form
  padding-bottom 64px
  background #fff
section.stats
  display flex
  flex-flow row nowrap
  height 379px
  background-image url(/img/stats-bg.png)
  background-size cover
  justify-content space-evenly
  align-items center
  color #fff
  div.stat
    display flex
    flex-flow column-reverse nowrap
    justify-content flex-end
    align-items center
    border 3px solid #fff
    border-radius 15px
    width 270px
    height 176px
    padding-top 32px
    h2.title,
    p.value
      text-align center
      width 200px
      margin 0
      border 0
    h2.title
      font-family 'Lora', serif
      font-size 20px
      font-weight 400
    p.value
      font-family 'Montserrat', sans-serif
      font-size 42px
      font-weight 800
</style>
