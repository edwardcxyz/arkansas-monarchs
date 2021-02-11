<template>
  <RouterLink
    v-if="isInternal"
    class="nav-link"
    :to="link"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    <template v-if="item.text === 'Home'">
      <div class="home-icon">
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0.937988L0 8.01926V9.35881H1.69698V14.938H5.93942V11.5047H8.06064V14.938H12.303V9.35881H14V8.01926L7 0.937988ZM11.0303 8.07132V13.6505H9.33332V10.2172H4.66668V13.6505H2.9697V8.07132H1.74844L7 2.75876L12.2516 8.07132H11.0303Z" fill="white"/>
        </svg>
      </div>
    </template>
    <template v-else>
      {{ item.text }}
    </template>
  </RouterLink>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    {{ item.text }}
    <OutboundLink v-if="isBlankTarget" />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util';

export default {
  name: 'NavLink',

  props: {
    item: {
      required: true,
    },
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          (rootLink) => rootLink === this.link
        );
      }
      return this.link === '/';
    },

    isNonHttpURI() {
      return isMailto(this.link) || isTel(this.link);
    },

    isBlankTarget() {
      return this.target === '_blank';
    },

    isInternal() {
      return !isExternal(this.link) && !this.isBlankTarget;
    },

    target() {
      if (this.isNonHttpURI) {
        return null;
      }
      if (this.item.target) {
        return this.item.target;
      }
      return isExternal(this.link) ? '_blank' : '';
    },

    rel() {
      if (this.isNonHttpURI) {
        return null;
      }
      if (this.item.rel) {
        return this.item.rel;
      }
      return this.isBlankTarget ? 'noopener noreferrer' : '';
    },
  },

  methods: {
    focusoutAction() {
      this.$emit('focusout');
    },
  },
};
</script>

<style lang="stylus">
.home-icon
  width 14px 
  text-align center
</style>
