<template>
  <section class="features">
    <template v-for="group in $page.frontmatter.linksGrouped">
      <h2>{{ group.title  }}</h2>
      <card v-for="link in group.links" :key="link.title" :feature="link" />
    </template>
  </section>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style lang="stylus" scoped>
.features
  display flex
  flex-flow row wrap
  overflow hidden
  h2
    width 100%
  article
    margin-top 24px !important
</style>
