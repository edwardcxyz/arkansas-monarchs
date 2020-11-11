<template>
  <div id="home-layout" class="theme-container">
    <header class="main">
      <img :src="$site.themeConfig.logo" alt="Arkansas Monarch Conservation Partnership Logo">
      <h1>{{ $site.title.toUpperCase() }}</h1>
    </header>
    <nav class="main">
      <router-link to="/about-us"><div class="item">ABOUT US</div></router-link>
      <div class="item">ABOUT MONARCHS</div>
      <div class="item">NATIVE BEES</div>
      <div class="item">CONSERVATION PLAN</div>
      <div class="item">EVENTS</div>
      <div class="item">GET INVOLVED</div>
      <div class="item">RESOURCES</div>
    </nav>
    
    <section class="hero-slider" />
    
    <section class="site-description">
      <h2 v-html="$site.description" />
    </section>
    
    <section class="features">
      <article v-for="feature in $page.frontmatter.features" class="feature">
        <router-link :to="feature.link">
          <header class="feature-image">
            <img :src="feature.image" alt="">
          </header>
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </router-link>
      </article>
    </section>
    
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$site);
      console.log(this.$page);
    }
  }
</script>