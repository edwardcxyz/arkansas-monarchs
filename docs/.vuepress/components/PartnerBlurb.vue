<template>
  <div class="partner-blurb">
    <div class="description" :class="{ truncated: doTruncate }">
      <p>{{ partner.about }}</p>
      <p v-if="partner.about2">{{ partner.about2 }}</p>
    </div>
    <div v-if="doTruncate" class="see-more" @click="untruncate = !untruncate">
      See More...
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerBlurb',
  props: {
    partner: Object,
  },
  data() {
    return {
      untruncate: false,
    };
  },
  computed: {
    doTruncate() {
      const combined = this.partner.about + this.partner.about2;
      return combined.length >= 500 && !this.untruncate;
    },
  },
};
</script>

<style scoped lang="stylus">
.partner-blurb
  position relative
.description
  overflow hidden
  position relative
  &.truncated
    max-height 300px
.see-more
  font-family Montserrat, sans-serif
  background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
  width 100%
  position absolute
  bottom -24px
  right 0
  text-align right
  padding-top 24px
  color #999
  cursor pointer
</style>
