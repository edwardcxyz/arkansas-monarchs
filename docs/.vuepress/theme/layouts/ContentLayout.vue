<template>
  <div id="content-layout" class="theme-container">
    <header class="main">
      <router-link to="/"><img :src="$site.themeConfig.logo" alt="Arkansas Monarch Conservation Partnership Logo"></router-link>
      <h1>{{ $site.title.toUpperCase() }}</h1>
    </header>
    
    <nav-horizontal />
    <hero-image small />

    <div class="lifted-container">
      <div v-if="$page.frontmatter.extraLinks" class="extra-links">
        <custom-button
          v-for="link in $page.frontmatter.extraLinks"
          :key="link.name"
          :to="link.url"
        >{{ link.name }}</custom-button>
      </div>
      <div v-else class="spaceryay"></div>

      <home v-if="$page.frontmatter.home" />
      <Content v-else />

      <footer>
        <section class="main links">
          <nav-link v-for="link in footerLinks" :item="link" is-footer />
        </section>
        <section class="main attributions">
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
  </div>
</template>

<script>
import NavHorizontal from '@theme/components/NavHorizontal';
import NavLink from '@theme/components/NavLink';
import Home from '@theme/components/HomePrimary';
import HeroImage from '@theme/components/HeroImage';

  export default {
    components: { NavLink, NavHorizontal, Home, HeroImage },
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
      // console.log(this.$site);
      // console.log(this.$page);
    }
  }
</script>

<style lang="stylus" scoped>
.lifted-container
  position relative
  top -112px
.extra-links
  display flex
  padding 8px 64px
  justify-content flex-end
  align-items center
.spaceryay
  height 52px
</style>
