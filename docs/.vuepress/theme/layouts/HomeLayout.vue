<template>
  <div id="home-layout" class="theme-container">
    <header class="main">
      <img :src="$site.themeConfig.logo" alt="Arkansas Monarch Conservation Partnership Logo">
      <h1>{{ $site.title.toUpperCase() }}</h1>
    </header>
    
    <nav-horizontal />
    
    <section class="hero-slider" />
    
    <section class="site-description">
      <h2 v-html="$site.description" />
    </section>
    
    <section class="features">
      <article v-for="feature in $page.frontmatter.features" class="feature">
        <router-link :to="feature.link">
          <header class="feature-image">
            <img :src="feature.image" :alt="feature.title">
          </header>
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </router-link>
      </article>
    </section>

    <section class="stats">
    </section>

    <section class="articles">
      <article class="wings-of-hope">
        <header>
          <h2>Wings of Hope</h2>
        </header>
        <p>The “Wings of Hope” video was generously funded by the U.S. Fish and Wildlife Service and U.S. Fish and Wildlife Service Partners for Fish and Wildlife with additional contributions from the Arkansas Natural Heritage Commission, Arkansas Department of Heritage, Arkansas Game and Fish Commission, The Nature Conservancy, Pulaski Conservation District, Arkansas Department of Transportation and the Botanical Garden of the Ozarks.</p>
      </article>
      <video controls poster="https://res.cloudinary.com/edwardcxyz/image/upload/v1581204642/ArkansasMonarchs/ar-mon-logo.png">
        <source :src="this.$page.frontmatter.videoLink" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </section>

    <footer>
      <section class="links">
        <nav-link v-for="link in footerLinks" :item="link" />
      </section>
      <section class="attributions">
        <a href="https://monarchjointventure.org/" target="_blank"><img src="/img/mjv-proud-partner.png"></NavLink></a>
        <div class="social-icons">
          <a href="https://www.instagram.com/arkansasmonarchs/" target="_blank"><img src="/img/instagram.png" alt="Instagram"></a>
          <a href="https://www.facebook.com/ArkansasMonarchs/" target="_blank"><img src="/img/facebook.png" alt="Facebook"></a>
          <a href="https://www.youtube.com/channel/UCXm9CFbm8-HbRUvbe6jsjiQ" target="_blank"><img src="/img/youtube.png" alt="YouTube"></a>
        </div>
        <div>&copy; 2020 Arkansas Monarch Conservation Partnership</div>
      </section>
    </footer>
    
  </div>
</template>

<script>
import NavHorizontal from '@theme/components/NavHorizontal';
import NavLink from '@theme/components/NavLink';

  export default {
    components: { NavLink, NavHorizontal },
    computed: {
      footerLinks() {
        const parentLinks = this.$site.themeConfig.links.filter((link) => link.footerIndex);

        const childrenLinks = this.$site.themeConfig.links
          .filter(link => link.children)
          .map(link => link.children).flat()
          .filter(link => link.footerIndex);

        return [...parentLinks, ...childrenLinks]
          .sort((a, b) => a.footerIndex - b.footerIndex);
      }
    },
    created() {
      console.log(this.$site);
      console.log(this.$page);
    }
  }
</script>