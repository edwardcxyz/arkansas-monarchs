<template>
  <section class="main features">
    <card
      v-for="feature in $page.frontmatter.features"
      :key="feature.title"
      :feature="feature"
    />
  </section>
</template>

<script>
export default {
  name: 'Features',
};
</script>
