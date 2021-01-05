<template>
  <div>
    <nav class="nav_bar">
      <nuxt-link to="/" class="nav_bar__link">Home</nuxt-link>
      <nuxt-link to="/about" class="nav_bar__link">About</nuxt-link>
      <nuxt-link to="/work" class="nav_bar__link">Work</nuxt-link>
      <nuxt-link to="/contact" class="nav_bar__link">Reach Us</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {}
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
    &.nuxt-link-exact-active {
      font-weight: 900;
    }
  }
}
</style>
