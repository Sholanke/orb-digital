<template>
  <div class="grid_page">
    <div class="grid_page__container__grid">
      <div class="col logo_col">
        <svg width="300" height="301" class="logo" viewBox="0 0 300 301">
          <use href="/images/logo.svg#logo" />
        </svg>
        <div class="social_media">
          <a href="#" class="link">
            <svg width="20" height="18" viewBox="0 0 20 18">
              <use href="/images/icons/twitter.svg#twitter" />
            </svg>
          </a>
          <a href="#" class="link">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="/images/icons/behance.svg#behance" />
            </svg>
          </a>
          <a href="#" class="link">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="/images/icons/dribbble.svg#dribbble" />
            </svg>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="__header max_width">
          <TheNavBar />
        </div>
        <div class="max_width">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid_page {
  padding: 0 60px;
  color: #0e0c0bf6;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;

  &:after {
    content: '';
    position: fixed;
    width: 50vw;
    right: 0;
    top: 0;
    height: 100vh;
    background: linear-gradient(#0e0c0bf6, #161311f6 70.71%),
      linear-gradient(#533d3df6, #ac7c64f6 70.71%);
    z-index: -1;
    display: block;
  }

  .__header {
    width: 100%;
    padding: 30px 0;
    padding-top: 57px;
  }
  &__container__grid {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 60px;
    .col {
      &.logo_col {
        padding-top: 30px;
        height: 100vh;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .logo {
          width: 80px;
          height: 80px;
        }
        svg {
          color: #000;
        }
      }
    }
  }
  //   &__grid {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr;
  //     min-height: 100vh;
  //   }
}
.social_media {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 100px;

  @for $i from 1 through 3 {
    .link {
      color: #000;
      margin: 20px 0;
      display: block;
      transition: 0.5s ease-in-out;

      &:nth-child(#{$i}) {
        transition-delay: ($i * 0.2) + 0s;
        will-change: transform;
      }
    }
  }
}
</style>
