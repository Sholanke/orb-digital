<template>
  <div class="container">
    <LogoFrame />
  </div>
</template>

<script>
import LogoFrame from '~/components/Home/LogoFrame'

export default {
  components: { LogoFrame },
  head: {
    title: 'Orb Digital',
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/stickymate@1.2.9/stickymate.min.js',
      },
    ],
  },
}
</script>

<style lang="scss" scoped></style>
