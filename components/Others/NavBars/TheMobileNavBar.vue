<template>
  <div class="mobile_nav" :class="{ active: isOpen }">
    <label class="__ham_button">
      <svg
        v-if="!isOpen"
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 0H10V2.14286H20V0ZM0 6.42855V8.57142H20V6.42855H0ZM5 12.8571H20V15H5V12.8571Z"
          fill="currentColor"
        />
      </svg>
      <svg
        v-if="isOpen"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.61654 7.50001L14.7688 1.34772C15.0771 1.0394 15.0771 0.539532 14.7688 0.23124C14.4605 -0.0770801 13.9606 -0.0770801 13.6523 0.23124L7.50001 6.38353L1.34772 0.23124C1.0394 -0.0770801 0.539532 -0.0770801 0.23124 0.23124C-0.0770508 0.539561 -0.0770801 1.03942 0.23124 1.34772L6.38353 7.50001L0.23124 13.6523C-0.0770801 13.9606 -0.0770801 14.4605 0.23124 14.7688C0.539561 15.0771 1.03942 15.0771 1.34772 14.7688L7.50001 8.61648L13.6523 14.7688C13.9606 15.0771 14.4605 15.0771 14.7688 14.7688C15.0771 14.4604 15.0771 13.9606 14.7688 13.6523L8.61654 7.50001Z"
          fill="black"
        />
      </svg>

      <input v-model="isOpen" type="checkbox" />
    </label>

    <div class="__links" :class="{ active: isOpen }">
      <nuxt-link to="/" class="nav_bar__link" :class="{ active: isOpen }">
        Home
      </nuxt-link>
      <nuxt-link to="/about" class="nav_bar__link" :class="{ active: isOpen }">
        About
      </nuxt-link>
      <nuxt-link to="/work" class="nav_bar__link" :class="{ active: isOpen }">
        Work
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="nav_bar__link"
        :class="{ active: isOpen }"
      >
        Reach Us
      </nuxt-link>

      <br />
      <br />

      <a href="#" class="nav_bar__link" :class="{ active: isOpen }">
        <svg width="20" height="18" viewBox="0 0 20 18">
          <use href="/images/icons/twitter.svg#twitter" />
        </svg>
      </a>
      <a href="#" class="nav_bar__link" :class="{ active: isOpen }">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use href="/images/icons/behance.svg#behance" />
        </svg>
      </a>
      <a href="#" class="nav_bar__link" :class="{ active: isOpen }">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use href="/images/icons/dribbble.svg#dribbble" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  watchQuery: true,
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    $route() {
      this.isOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins.scss';
.mobile_nav {
  margin-left: auto;
  width: fit-content;
  margin-top: 10px;
  display: none;
  @include mobile {
    display: block;
  }

  &.active {
    color: rgba(14, 12, 11, 0.98);
  }
  .__ham_button {
    position: relative;
    z-index: 11;
    input {
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }
  }
  .__links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background: #fff;
    z-index: 10;
    padding: 40px 20px;
    padding-top: 140px;
    transition: 0.5s ease-in-out;

    //hide
    opacity: 0;
    pointer-events: none;

    &.active {
      //show
      opacity: 1;
      pointer-events: unset;
    }

    a {
      display: block;
      width: fit-content;
      margin-left: auto;
      color: rgba(14, 12, 11, 0.98);
      text-decoration: none;
      margin-bottom: 30px;
      font-size: 26px;

      svg {
        height: 28px;
        width: 28px;
      }

      @for $i from 2 through 9 {
        & {
          opacity: 0;
          transform: translate(0, 60px);
          transition: 0.5s ease-in-out;
          transition-delay: 0s;

          &:nth-child(#{$i}) {
            transition-delay: ($i * 0.1) + 0s;
          }
          &.active {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
      }

      &.nuxt-link-exact-active {
        font-weight: 900;
      }
    }
  }
}
</style>
