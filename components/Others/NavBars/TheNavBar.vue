<template>
  <div>
    <nav class="nav_bar">
      <button
        class="nav_bar__link"
        :class="{ 'nuxt-link-exact-active': homePageIsActive }"
        @click="scrollToTop"
      >
        Projects
      </button>
      <nuxt-link to="/about" class="nav_bar__link">About Us</nuxt-link>
      <nuxt-link to="/contact" class="nav_bar__link">Reach Us</nuxt-link>
    </nav>
  </div>
</template>

<script>
import { projects } from '~/utils/projects'
export default {
  computed: {
    homePageIsActive() {
      return projects.homePageIsActive.call(this)
    },
  },
  methods: {
    scrollToTop() {
      projects.goToProjectsList.call(this)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins.scss';

.nav_bar {
  display: flex;
  align-items: center;
  @include mobile {
    display: none;
  }
  &__link {
    margin-right: 40px;
    color: inherit;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;

    &.nuxt-link-exact-active {
      font-weight: 900;
    }
  }
}
</style>
