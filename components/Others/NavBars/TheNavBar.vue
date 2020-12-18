<template>
  <div>
    <nav class="nav_bar">
      <p class="nav_bar__link">Home</p>
      <p class="nav_bar__link">About</p>
      <p class="nav_bar__link">Work</p>
      <p class="nav_bar__link">Reach Us</p>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav_bar {
  display: flex;
  align-items: center;
  &__link {
    margin-right: 20px;
  }
}
</style>
