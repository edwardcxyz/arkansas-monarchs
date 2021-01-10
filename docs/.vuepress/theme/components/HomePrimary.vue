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
