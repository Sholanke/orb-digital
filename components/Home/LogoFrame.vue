<template>
  <div
    class="logo__frame"
    data-sticky="from: 0, duration: 150vh"
    data-classes="8vh: { add: frame_2 }"
    :data-frame="frame"
  >
    <div class="rect__bg anime">
      <div v-for="i in 160" :key="i" class="box"></div>
    </div>

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

    <div class="hero_holder">
      <div class="nav_bar">
        <TheNavBar />
      </div>
      <div class="project_holder">
        <div
          v-for="(
            { dataClasses, description, title, subTitle, image, caseLink },
            index
          ) in projects"
          :key="index"
          class="project"
          :data-classes="dataClasses"
        >
          <div class="__left">
            <h2 class="title content">{{ title }}</h2>
            <p class="content">{{ subTitle }}</p>
            <p class="content desc">{{ description }}</p>
            <a :href="caseLink" class="arrow_link content">View Case</a>
          </div>
          <div class="__right">
            <div class="__image_rapper">
              <div class="__image_rapper__img content">
                <img :src="image" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
</template>

<script>
import Logo from '~/components/Logo'
import Arrow from '~/components/Home/LogoFrameScrollArrow'
import TheNavBar from '~/components/Others/NavBars/TheNavBar'

export default {
  components: { Logo, Arrow, TheNavBar },
  data() {
    return {
      frame: 0,
      scrollCount: 0,
      projects: [
        {
          title: 'Creativity and Innovation',
          subTitle: 'Website / UI : UX',
          description:
            'We like to constantly challenge the conventional way of doing things by finding fun and more effective ways of doing them.',
          dataClasses: '0  : { add: active }, 50vh : {remove : active}',
          caseLink: '#',
          image:
            'https://cdn.dribbble.com/users/427857/screenshots/13372241/dribbble-shot-7_2x.png',
        },
        {
          title: 'Reliability and Consistency.',
          subTitle: 'Website / UI : UX',
          description:
            'We like to constantly challenge the conventional way of doing things by finding fun and more effective ways of doing them.',
          dataClasses: '50vh : { add: active }, 100vh : { remove : active }',
          caseLink: '#',
          image: '/app.png',
        },
        {
          title: 'Jollof.',
          subTitle: 'Website / UI : UX',
          description:
            'We like to constantly challenge the conventional way of doing things by finding fun and more effective ways of doing them.',
          dataClasses: '100vh : { add: active }',
          caseLink: '#',
          image:
            'https://cdn.dribbble.com/users/427857/screenshots/13372241/dribbble-shot-7_2x.png',
        },
      ],
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
  background: #0e0c0bf6;
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
  //   background: rgba(255, 217, 0, 0.219);
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
  }
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
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        padding-top: 150px;
        min-height: 560px;
        opacity: 0;
        transition: 1s;
        pointer-events: none;

        .__left,
        .__right {
          flex: 1;
          h2 {
            font-size: 50px;
            margin-bottom: 20px;
          }
          p {
            font-size: 20px;
          }
          .__image_rapper {
            height: 450px;
            width: 100%;
            position: relative;
            transform: translate(20%, 0);

            .__image_rapper__img {
              height: 100%;
              width: 1000px;
              display: block;
              position: absolute;
              left: 0;
              border-radius: 15px;
              transform: translate(20%, 0);
              img {
                position: absolute;
                height: 100%;
              }
            }
          }
          .arrow_link {
            display: block;
            color: rgb(255, 255, 255);
            margin-top: 50px;
            font-size: 20px;
            text-decoration: none;
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

              &:nth-child(#{$i}) {
                transition-delay: ($i * 0.1) + 0s;
              }
            }
          }
        }

        &.active {
          opacity: 1;
          pointer-events: unset;

          // transition-delay: 0.5s;
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

    .arrow_container {
      position: fixed;
      bottom: 21px;
      width: 100%;
      display: flex;
      justify-content: center;
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
      left: 50px;
    }
    .rect__bg {
      height: calc(100vh - 100px);
      width: calc(100vw - 100px);
      border-radius: 10px;
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
    }
    .logo__holder {
      left: 4vw !important;
      top: 0 !important;
      transform: translate(-35%, -30%) scale(0.275) !important;
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
      .link {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  }
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
  padding-bottom: 100px;

  @for $i from 1 through 3 {
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
