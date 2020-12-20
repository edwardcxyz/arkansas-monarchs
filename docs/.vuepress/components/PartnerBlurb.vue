<template>
  <div class="partner-blurb">
    <div class="description">
      <p>{{ p1 }}</p>
      <p v-if="p2 && !truncate">{{ p2 }}</p>
      <div v-if="p2 && truncate" class="see-more" @click="truncate = !truncate">
        See More...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerBlurb',
  props: {
    p1: String,
    p2: String,
  },
  data() {
    return {
      truncate: true,
    };
  },
};
</script>

<style scoped lang="stylus">
.description
  overflow hidden
  position relative
  .see-more
    font-family Montserrat, sans-serif
    background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
    width 100%
    position absolute
    bottom 0px
    right 0
    text-align right
    padding-top 24px
    color #999
    cursor pointer
</style>
