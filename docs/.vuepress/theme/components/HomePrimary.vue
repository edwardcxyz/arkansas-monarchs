<template>
  <div class="home-content">

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
  </div>
</template>