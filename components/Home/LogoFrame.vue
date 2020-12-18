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
        <!-- project -->
        <div
          class="project"
          data-classes="0  : { add: active }, 50vh : {remove : active}"
        >
          <div class="__left">
            <h2 class="title content">Creativity and Innovation.</h2>
            <p class="content">Website / Brand / Content Development</p>
            <p class="content desc">
              We like to constantly challenge the conventional way of doing
              things by finding fun and more effective ways of doing them.
            </p>
            <a href="#" class="arrow_link content">View Case</a>
          </div>
          <div class="__right">
            <div class="__image_rapper">
              <div class="__image_rapper__img content">
                <img src="/app.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <!-- project -->
        <div
          class="project"
          data-classes="50vh : { add: active }, 100vh : { remove : active }"
        >
          <div class="__left">
            <h2 class="title content">Reliability and Consistency.</h2>
            <p class="content">Website / UI : UX</p>
            <p class="content desc">
              We like to constantly challenge the conventional way of doing
              things by finding fun and more effective ways of doing them.
            </p>
            <a href="#" class="arrow_link content">View Case</a>
          </div>
          <div class="__right">
            <div class="__image_rapper">
              <div class="__image_rapper__img content">
                <img
                  src="https://cdn.dribbble.com/users/427857/screenshots/13372241/dribbble-shot-7_2x.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
        <!-- project -->
        <div class="project" data-classes="100vh : { add: active }">
          <div class="__left">
            <h2 class="title content">Jollof Spaghetti.</h2>
            <p class="content">Website / Brand / UI / UX / Mobile App</p>
            <p class="content desc">
              We like to constantly challenge the conventional way of doing
              things by finding fun and more effective ways of doing them.
            </p>
            <a href="#" class="arrow_link content">View Case</a>
          </div>
          <div class="__right">
            <div class="__image_rapper">
              <div class="__image_rapper__img content">
                <img src="/app.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social_media">
      <a href="#" class="link">
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2.79997C19.2483 3.12606 18.4534 3.34163 17.64 3.43997C18.4982 2.92729 19.1413 2.12075 19.45 1.16997C18.6436 1.65003 17.7608 1.98826 16.84 2.16997C16.2245 1.50254 15.405 1.05826 14.5098 0.906817C13.6147 0.755372 12.6945 0.905324 11.8938 1.33315C11.093 1.76099 10.4569 2.4425 10.0852 3.2708C9.71355 4.09911 9.62729 5.02736 9.84 5.90997C8.20943 5.82749 6.61444 5.40292 5.15865 4.66383C3.70287 3.92474 2.41885 2.88766 1.39 1.61997C1.02914 2.25013 0.839519 2.96379 0.84 3.68997C0.83872 4.36435 1.00422 5.02858 1.32176 5.62353C1.63929 6.21848 2.09902 6.72568 2.66 7.09997C2.00798 7.08222 1.36989 6.90726 0.8 6.58997V6.63997C0.804887 7.58486 1.13599 8.49906 1.73731 9.22793C2.33864 9.9568 3.17326 10.4556 4.1 10.64C3.74326 10.7485 3.37287 10.8058 3 10.81C2.74189 10.807 2.48442 10.7835 2.23 10.74C2.49391 11.5528 3.00462 12.2631 3.69107 12.7721C4.37753 13.2811 5.20558 13.5635 6.06 13.58C4.6172 14.7152 2.83588 15.3348 1 15.34C0.665735 15.3411 0.331736 15.321 0 15.28C1.87443 16.4902 4.05881 17.1327 6.29 17.13C7.82969 17.146 9.35714 16.855 10.7831 16.274C12.2091 15.6931 13.505 14.8338 14.5952 13.7465C15.6854 12.6591 16.548 11.3654 17.1326 9.94087C17.7172 8.51639 18.012 6.98969 18 5.44997C18 5.27996 18 5.09997 18 4.91997C18.7847 4.33478 19.4615 3.61739 20 2.79997Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a href="#" class="link">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.07 6.35001H15V7.76001H20.09L20.07 6.35001ZM19 16.05C18.6154 16.3049 18.1612 16.4341 17.7 16.42C17.3947 16.4518 17.0862 16.4203 16.7937 16.3274C16.5011 16.2345 16.2309 16.0822 16 15.88C15.573 15.3959 15.3507 14.7649 15.38 14.12H22C22.0477 13.4486 21.9904 12.7738 21.83 12.12C21.6749 11.498 21.4034 10.911 21.03 10.39C20.6541 9.88461 20.1686 9.47092 19.61 9.18001C18.9884 8.87355 18.3029 8.7193 17.61 8.73001C16.9583 8.72523 16.3123 8.85104 15.71 9.10001C15.1585 9.3325 14.6588 9.67244 14.24 10.1C13.8224 10.5361 13.499 11.0535 13.29 11.62C13.0657 12.2316 12.9539 12.8786 12.96 13.53C12.9497 14.1906 13.0581 14.8477 13.28 15.47C13.4685 16.0335 13.7677 16.5537 14.16 17C14.5659 17.4382 15.0648 17.7799 15.62 18C16.2391 18.2359 16.8976 18.3513 17.56 18.34C18.4894 18.369 19.407 18.1257 20.2 17.64C21.0009 17.0709 21.5775 16.2395 21.83 15.29H19.62C19.5017 15.6041 19.284 15.871 19 16.05ZM15.57 11.93C15.6478 11.6807 15.777 11.4504 15.9493 11.2541C16.1215 11.0577 16.3329 10.8997 16.57 10.79C16.884 10.6487 17.2258 10.5803 17.57 10.59C17.8186 10.5688 18.0689 10.6016 18.3036 10.6861C18.5384 10.7707 18.7521 10.9051 18.93 11.08C19.2698 11.4959 19.4878 11.9978 19.56 12.53H15.41C15.4262 12.3268 15.463 12.1258 15.52 11.93H15.57ZM10.28 11.45C10.789 11.2381 11.2312 10.8926 11.56 10.45C11.8622 9.98001 12.0124 9.42834 11.99 8.87001C12.0096 8.36084 11.9103 7.85412 11.7 7.39001C11.5233 6.98792 11.2397 6.64203 10.88 6.39001C10.4987 6.12798 10.0656 5.95067 9.61 5.87001C9.07082 5.75692 8.52087 5.70327 7.97 5.71001H2V18.29H8.1C8.65669 18.2904 9.21116 18.2198 9.75 18.08C10.2607 17.9479 10.7446 17.7279 11.18 17.43C11.6017 17.1377 11.9452 16.7462 12.18 16.29C12.4399 15.7798 12.5672 15.2123 12.55 14.64C12.5689 13.9307 12.37 13.2327 11.98 12.64C11.5606 12.0439 10.9385 11.6209 10.23 11.45H10.28ZM4.77 7.86001H7.36C7.59795 7.85971 7.83548 7.87979 8.07 7.92001C8.28595 7.95201 8.49334 8.0268 8.68 8.14001C8.86035 8.24202 9.00648 8.39511 9.1 8.58001C9.21582 8.80172 9.27102 9.0501 9.26 9.30001C9.27863 9.51524 9.24572 9.73182 9.16399 9.93181C9.08225 10.1318 8.95405 10.3094 8.79 10.45C8.43212 10.696 8.00388 10.8189 7.57 10.8H4.77V7.86001ZM9.61 15.3C9.50726 15.5038 9.35189 15.6764 9.16 15.8C8.9603 15.9242 8.74027 16.0122 8.51 16.06C8.25406 16.1173 7.99224 16.1441 7.73 16.14H4.73V12.69H7.73C8.24482 12.6675 8.75322 12.8112 9.18 13.1C9.37281 13.273 9.52217 13.489 9.61599 13.7305C9.7098 13.972 9.74543 14.2322 9.72 14.49C9.74704 14.7649 9.70936 15.0423 9.61 15.3Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a href="#" class="link">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 4C14.0547 3.99918 16.0298 4.79493 17.51 6.22C15.982 7.1162 14.3629 7.847 12.68 8.4C11.8425 6.95683 10.8823 5.58844 9.81 4.31C10.522 4.105 11.2591 4.00065 12 4ZM7.89 5.15C8.93769 6.34851 9.87797 7.6368 10.7 9C8.73711 9.4874 6.72251 9.73587 4.7 9.74H4.34C4.90721 7.81964 6.17394 6.18181 7.89 5.15ZM6 17.31C4.69876 15.8488 3.98608 13.9566 4 12C4 11.9 4 11.8 4 11.71H4.68C7.04738 11.6888 9.4014 11.3525 11.68 10.71C12 11.32 12.3 11.95 12.59 12.6C11.0315 13.1494 9.58001 13.9648 8.3 15.01L8 15.25C7.28712 15.8902 6.61889 16.5785 6 17.31ZM12 20C10.4061 20.0035 8.8482 19.5261 7.53 18.63C8.01685 18.0716 8.53784 17.5439 9.09 17.05L9.41 16.78C10.5932 15.7849 11.949 15.0155 13.41 14.51C14.0113 16.136 14.4795 17.8082 14.81 19.51C13.9098 19.8387 12.9583 20.0046 12 20ZM16.63 18.51C16.3028 16.9966 15.8752 15.5066 15.35 14.05H15.69C15.7294 14.0403 15.7706 14.0403 15.81 14.05H15.92H16.02H16.5C17.5524 14.053 18.5968 14.2322 19.59 14.58C19.0443 16.1704 18.0079 17.5464 16.63 18.51ZM16.5 12C16.29 12 16.08 12 15.88 12C15.7505 11.9837 15.6195 11.9837 15.49 12C15.2182 12.0167 14.9477 12.0501 14.68 12.1H14.58C14.29 11.43 13.99 10.78 13.66 10.1C15.4506 9.48506 17.1704 8.68049 18.79 7.7C19.5934 8.98937 20.0131 10.4809 20 12C20 12.17 20 12.34 20 12.51C18.8667 12.1602 17.686 11.9882 16.5 12Z"
            fill="currentColor"
          />
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

  &:after {
    content: '';
    height: 500px;
    width: 500px;
    background: rgba(255, 217, 0, 0.219);
    position: absolute;
    bottom: 0;
    right: 0;
    filter: blur(100px);
    will-change: height width;
  }

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

        .__left {
          // background: #753ff6;
        }

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
              pointer-events: none;
              transition-delay: 0s;

              &:nth-child(#{$i}) {
                transition-delay: ($i * 0.1) + 0s;
              }
            }
          }
        }

        &.active {
          opacity: 1;
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
