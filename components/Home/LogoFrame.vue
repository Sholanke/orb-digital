<template>
  <div
    class="logo__frame"
    data-sticky="from: 0, duration: 10vh"
    data-classes="1vh: { add: frame_2 }"
    :data-frame="frame"
  >
    <div class="rect__bg"></div>

    <div class="logo__holder">
      <Logo />
    </div>

    <div class="hello__holder">
      <h2 class="content">Hello, We're</h2>
      <h1 class="content">Orb Digital</h1>
      <p class="content">
        We craft delightful digital experiences that helps you grow your
        business & services
      </p>
      <div class="content arrow_container">
        <Arrow />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Arrow from '~/components/Home/LogoFrameScrollArrow'

export default {
  components: { Logo, Arrow },
  data() {
    return {
      frame: 0,
    }
  },
  mounted() {
    document.querySelector('body').style.overflow = 'hidden'
    setTimeout(() => {
      document.querySelector('body').style.overflow = 'unset'
      this.updateFrame(1)
    }, 1000)
  },
  methods: {
    updateFrame(frame) {
      this.frame = frame
    },
  },
}
</script>

<style lang="scss" scoped>
.logo__frame_container {
  min-height: 100vh;
}
.rect__bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  background: #ffe902;
  z-index: -1;
}

.logo__frame {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  .logo__holder,
  .hello__holder,
  .rect__bg {
    transition: 1s ease-in-out;
  }

  .logo__holder {
    position: absolute;
    // background: red;
    left: 50%;
    top: 50%;
    transform-origin: center;
    z-index: 1;
    transform: translate(-50%, -50%);
  }
  .hello__holder {
    width: 100vw;
    height: 100vh;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    margin: auto;
    text-align: center;
    z-index: 1;
    // hide
    .arrow_container {
      position: fixed;
      bottom: 21px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    @for $i from 1 through 4 {
      .content {
        opacity: 0;
        transform: translate(0, 60px);
        transition: 0.5s ease-in-out;
        pointer-events: none;

        &:nth-child(#{$i}) {
          transition-delay: ($i * 0.1) + 0.5s;
        }
      }
    }

    h1 {
      font-size: 70px;
    }

    h1,
    h2,
    p {
      margin: 10px 0;
    }
    p {
      font-size: 22px;
      line-height: 1.7;
    }
  }
  &[data-frame='1'] {
    .logo__holder {
      left: 0;
    }
    .rect__bg {
      height: calc(100vh - 100px);
      width: calc(100vw - 100px);
    }
    .hello__holder {
      .content {
        opacity: 1;
        transform: translate(0, 0);
        pointer-events: unset;
      }
    }
  }
  &[data-frame='2'],
  &.frame_2 {
    .rect__bg {
      height: 100vh !important;
      width: 100vw !important;
    }
    .logo__holder {
      left: 0 !important;
      top: 0 !important;
      transform: translate(0%, 0%) scale(0.375) !important;
    }
    .hello__holder {
      @for $i from 1 through 4 {
        .content {
          opacity: 0;
          transform: translate(0, 60px) !important;
          transition: 0.5s ease-in-out !important;
          pointer-events: none !important;

          &:nth-child(#{$i}) {
            transition-delay: ($i * 0.1);
          }
        }
      }
    }
  }
}
</style>
