<template>
  <div class="logo__frame" :data-frame="frame >= 2 ? 2 : frame">
    <div class="rect__bg anime">
      <div v-for="i in 160" :key="i" class="box"></div>
    </div>

    <div class="logo__holder">
      <Logo />
    </div>

    <div class="hello__holder">
      <h2 class="content">Hello, We're</h2>
      <h1 class="content __color_theme">Orb Digital</h1>
      <p class="content">
        We craft delightful digital experiences that helps you grow your
        business & services
      </p>
      <div class="content arrow_container">
        <Arrow />
      </div>
    </div>

    <div class="hero_holder">
      <div class="nav_bar">
        <TheNavBar />
        <TheMobileNavBar />
      </div>
      <div class="project_holder">
        <div
          v-for="(
            { description, title, subTitles, image, slug }, index
          ) in projects"
          :key="index"
          class="project"
          :class="frame === index + 2 ? 'active' : ''"
        >
          <div class="__left">
            <h2 class="title content">{{ title }}</h2>
            <div class="content">
              <p v-for="subTitle in subTitles" :key="subTitle">
                {{ subTitle }}
              </p>
            </div>

            <p v-if="description" class="content desc">{{ description }}</p>
            <nuxt-link :to="`/projects/${slug}`" class="arrow_link content">
              <svg
                width="32"
                height="20"
                viewBox="0 0 32 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.5792 9.99955C31.5595 9.77555 31.4658 9.47649 31.3161 9.30876L23.4213 0.361275C23.0769 -0.106266 22.3668 -0.104726 21.9298 0.277656C21.4928 0.660039 21.4595 1.33947 21.8423 1.74287L28.2075 8.94691H1.05264C0.47132 8.94691 0 9.41818 0 9.99955C0 10.5809 0.47132 11.0522 1.05264 11.0522H28.2075L21.8423 18.2562C21.4246 18.6596 21.5421 19.3513 21.9791 19.7337C22.4161 20.1161 23.0769 20.0889 23.4213 19.6378L31.3161 10.6903C31.5271 10.4618 31.5674 10.2137 31.5792 9.99955Z"
                  fill="currentColor"
                />
              </svg>

              View case study</nuxt-link
            >
          </div>
          <div class="__right">
            <div class="__image_rapper">
              <nuxt-link :to="`projects/${slug}`">
                <div class="__image_rapper__img content">
                  <div class="tab_header">
                    <span class="action_button"></span>
                    <span class="action_button"></span>
                    <span class="action_button"></span>
                  </div>
                  <img :src="image" alt="" srcset="" />
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="content arrow_container">
        <Arrow />
      </div>
    </div>

    <div class="social_media">
      <div class="slider">
        <div
          class="thumb"
          :data-frame="frame"
          :style="{ top: `${sliderPos}px` }"
        ></div>
      </div>

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
</template>

<script>
import Logo from '~/components/Logo'
import Arrow from '~/components/Home/LogoFrameScrollArrow'
import TheNavBar from '~/components/Others/NavBars/TheNavBar'
import { projects, debouncer, wheelDirection } from '~/utils/projects'

export default {
  components: { Logo, Arrow, TheNavBar },
  data() {
    return {
      frame: 0,
      projects: projects.all,
    }
  },
  computed: {
    sliderPos() {
      let position = 190 * ((this.frame - 2) / (this.projects.length - 1))
      position = position === Infinity ? 0 : position
      return position
    },
  },
  mounted() {
    document.querySelector('body').style.overflow = 'hidden'
    setTimeout(() => {
      this.updateFrame(1)
      projects.initControls(this.goToNextProject, this.goToPrevProject)
    }, 1000)
    this.$once('hook:beforeDestroy', () => {
      projects.stopControls()
      document.querySelector('body').style.overflow = 'unset'
    })

    const debouncedHandler = debouncer((e) => {
      wheelDirection(e) === 'next'
        ? this.goToNextProject()
        : this.goToPrevProject()
    }, 100)

    window.addEventListener('wheel', (e) => {
      debouncedHandler(e)
    })
  },
  methods: {
    updateFrame(frame) {
      this.frame = frame
    },
    goToNextProject() {
      this.updateFrame(
        this.frame <= this.projects.length ? this.frame + 1 : this.frame
      )
    },
    goToPrevProject() {
      this.updateFrame(this.frame > 1 ? this.frame - 1 : this.frame)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins.scss';

.logo__frame_container {
  min-height: 100vh;
}

.logo__frame {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;

  .logo__holder,
  .hello__holder,
  .rect__bg {
    transition: 1s ease-in-out;
    will-change: transform opacity top left;
  }

  .rect__bg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to top, #0e0c0bfb, #0e0c0b);
    z-index: -1;
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 2px;
    padding: 4px;
    overflow: hidden;

    // &:after {
    //   content: '';
    //   height: 500px;
    //   width: 500px;
    //   background: rgba(255, 217, 0, 0.089);
    //   position: absolute;
    //   bottom: 0;
    //   right: 0;
    //   filter: blur(100px);
    //   will-change: height width;
    // }

    .box {
      background: #0e0c0b;
      border-radius: 10px;
      position: relative;
      z-index: 1;
      @include mobile {
        display: none;
      }
    }
  }

  .hero_holder {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 1;
    //hide
    opacity: 0;
    transition: 1s ease;
    padding: 40px 30px;
    max-width: 1070px;
    transform: translateX(-50%);

    .project_holder {
      position: relative;
      .project {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        padding-top: 70px;
        min-height: 560px;
        opacity: 0;
        transition: 1s;
        pointer-events: none;

        @include mobile {
          flex-direction: column;
        }

        .__left,
        .__right {
          flex: 1;
          h2 {
            font-size: 50px;
            margin-bottom: 20px;
            @include mobile {
              font-size: 36px;
            }
          }
          p {
            line-height: 1.7;
            font-size: 17px;
            margin-bottom: 10px;
          }
          .__image_rapper {
            height: 540px;
            width: 100%;
            position: relative;
            transform: translate(20%, 0);

            @include mobile {
              transform: translate(0);
            }
            .__image_rapper__img {
              height: 100%;
              width: 800px;
              display: block;
              position: absolute;
              left: 0;
              border-radius: 10px;
              transform: translate(100px, 0);
              overflow: hidden;

              @include mobile {
                position: unset;
                transform: 0;
                width: 100%;
                margin-top: 10px;
              }
              .tab_header {
                background: rgb(255, 255, 255);
                height: 30px;
                display: flex;
                align-items: center;
                padding: 0 10px;
                box-shadow: 0 0 30px rgba(80, 98, 105, 0.2);
                position: relative;
                z-index: 1;

                .action_button {
                  height: 13px;
                  width: 13px;
                  background: red;
                  margin-right: 10px;
                  border-radius: 100vh;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  &:nth-child(1) {
                    background: tomato;
                    &:after {
                      content: '';
                      height: 5px;
                      width: 5px;
                      background: rgb(175, 68, 49);
                      display: block;
                      border-radius: 100vh;
                    }
                  }
                  &:nth-child(2) {
                    background: orange;
                  }
                  &:nth-child(3) {
                    background: rgb(26, 182, 65);
                  }
                }
              }
              img {
                position: absolute;
                height: 100%;
                width: 100%;
                top: 30px;

                @include mobile {
                  position: unset;
                  width: 100%;
                  height: 198px;
                  border-radius: 0 0 6px 6px;
                }
              }
            }
          }
          .arrow_link {
            display: flex;
            align-items: center;
            color: rgb(255, 255, 255);
            font-size: 20px;
            text-decoration: none;
            margin-top: auto;
            margin-bottom: 20px;
            svg {
              margin-right: 20px;
            }
            @include mobile {
              margin-top: 50px;
            }
          }
          .desc {
            margin-top: 40px;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.8);
          }
          @for $i from 2 through 4 {
            .content {
              opacity: 0;
              transform: translate(0, 60px);
              transition: 0.5s ease-in-out;
              transition-delay: 0s;
              will-change: transform;

              &:nth-child(#{$i}) {
                transition-delay: ($i * 0.1) + 0s;
              }
            }
          }
        }

        .__left {
          flex: 0.7;
          display: flex;
          flex-direction: column;
          padding-top: 140px;

          @include mobile {
            flex: 1;
            width: 100%;
            padding-top: 0;
          }
        }

        &.active {
          opacity: 1;
          pointer-events: unset;
          .__left,
          .__right {
            .content {
              opacity: 1;
              transform: translate(0, 0);
            }
          }
        }
      }
    }
    .arrow_container {
      bottom: 30px;
      transition: 0.3s ease-out;

      @include mobile {
        left: 0;
      }
      &.hide {
        opacity: 0;
      }
    }
  }

  .logo__holder {
    position: absolute;
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
    @include mobile {
      padding: 0 30px;
    }

    //hide contents
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
      @include mobile {
        font-size: 40px;
      }
    }

    h2 {
      font-size: 50px;
      font-weight: 100;
      @include mobile {
        font-size: 40px;
      }
    }

    h1,
    h2,
    p {
      margin: 10px 0;
    }
    p {
      font-size: 20px;
      line-height: 1.7;
      margin-top: 50px;
    }
  }

  &[data-frame='1'] {
    .logo__holder {
      left: 50px;
      @include mobile {
        left: 50%;
        top: 0;
        transform: translate(-48%, -30%) scale(0.275);
      }
    }
    .rect__bg {
      height: calc(100vh - 100px);
      width: calc(100vw - 100px);
      border-radius: 10px;

      @include mobile {
        height: calc(100vh - 52px);
        width: calc(100vw - 20px);
        transform: translate(-50%, 0);
        top: 42px;
      }
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
      border-radius: 0;

      @include mobile {
        top: 0 !important;
        left: 0 !important;
        transform: translate(0, 0) !important;
      }
    }
    .logo__holder {
      left: 4vw !important;
      top: 0 !important;
      transform: translate(-35%, -30%) scale(0.245) !important;

      @include mobile {
        transform: translate(-35%, -30%) scale(0.175) !important;
      }
    }
    .hello__holder {
      @for $i from 1 through 4 {
        .content {
          opacity: 0;
          transform: translate(0, 60px) !important;
          transition: 0.5s ease-in-out !important;
          pointer-events: none !important;

          &:nth-child(#{$i}) {
            transition-delay: ($i * 0.1) + 0s;
          }
        }
      }
    }
    .hero_holder {
      opacity: 1;
      transition-delay: 0.5s;
    }
    .social_media {
      .slider {
        opacity: 1;
        transition-delay: 0.8s;
      }
      .link {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  }
}

.arrow_container {
  position: fixed;
  bottom: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.social_media {
  position: fixed;
  width: 82px;
  height: 100%;
  left: 4.3vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 64px;

  @include mobile {
    display: none;
  }

  @for $i from 2 through 4 {
    .link {
      color: #fff;
      margin: 20px 0;
      display: block;
      opacity: 0;
      transition: 0.5s ease-in-out;

      &:nth-child(#{$i}) {
        transition-delay: ($i * 0.2) + 0s;
        transform: translate(0, 20px);
        will-change: transform;
      }
    }
  }
}

.slider {
  height: 250px;
  width: 1px;
  background: #ffffff2f;
  left: 4.3vw;
  margin-bottom: 100px;
  opacity: 0;
  transition: 0.2s ease-out;
  overflow: visible;

  @include mobile {
    display: none;
  }
  .thumb {
    background: #ffe801;
    height: 60px;
    position: relative;
    transition: 0.2s ease;
    will-change: transform;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
::v-deep {
  .nav_bar {
    .nav_bar {
      a,
      button {
        &.nuxt-link-exact-active {
          color: #ffe902;
        }
        @include mobile {
          display: none;
        }
      }
    }
  }
}
</style>
