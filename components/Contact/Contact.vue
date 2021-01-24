<template>
  <div class="work_page__grid">
    <div class="__left">
      <p class="__title">Contact Us</p>
      <form @submit="submit">
        <Input placeholder="Your Full Name" name="fullName" />
        <Input placeholder="Email Address" name="email" />
        <Textarea placeholder="How can we help you?" name="message" />
        <button
          :style="{
            ...(loading
              ? {
                  opacity: 0.3,
                  pointerEvents: 'none',
                }
              : {}),
          }"
        >
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 7.99964C23.985 7.82044 23.9138 7.58119 23.8 7.447L17.8 0.28902C17.5383 -0.0850127 16.9987 -0.0837809 16.6665 0.222125C16.3344 0.528031 16.3091 1.07157 16.6 1.39429L21.4375 7.15753H0.8C0.3582 7.15753 0 7.53454 0 7.99964C0 8.46474 0.3582 8.84175 0.8 8.84175H21.4375L16.6 14.605C16.2826 14.9277 16.3718 15.4811 16.704 15.787C17.0361 16.0929 17.5383 16.0711 17.8 15.7102L23.8 8.55228C23.9604 8.36941 23.991 8.17097 24 7.99964Z"
              fill="black"
            />
          </svg>
          Submit
        </button>
      </form>
    </div>
    <div class="__right">
      <p class="__title">
        A new project is an opportunity to create something unique.
        <br />
        <strong>Tell us about your idea.</strong>
      </p>
    </div>
    <div class="__toast" :class="{ active: formMessage }">
      We got your message
    </div>
  </div>
</template>

<script>
import contact from '~/api/contact'

export default {
  data() {
    return {
      formMessage: '',
      loading: false,
    }
  },
  methods: {
    submit(ev) {
      ev.preventDefault()
      this.loading = true
      const {
        fullName: { value: fullName },
        email: { value: email },
        message: { value: message },
      } = ev.currentTarget

      contact({
        body: {
          fullName,
          email,
          message,
        },
      })
        .then(this.submitted)
        .finally(() => {
          this.loading = false
        })
    },
    submitted() {
      this.formMessage = 'Your mesage has been sent successfuly!'
      setTimeout(() => {
        this.formMessage = ''
      }, 6000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins.scss';
.work_page__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  @include mobile {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
  }
  .__right,
  .__left {
    padding-top: 140px;
    padding-bottom: 140px;
    @include mobile {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  .__right {
    color: #fff;
    max-width: 460px;
    h1 {
      line-height: 1.5;
      margin: 30px 0 50px 0;
      font-size: 40px;
      @include mobile {
        font-size: 30px;
      }
    }
    .__title {
      font-weight: 900;
      font-size: 40px;
      color: #ffffffe5;
      @include mobile {
        font-size: 30px;
      }
      strong {
        margin-top: 80px;
        display: block;
        color: #ffe902;
        @include mobile {
          margin-top: 30px;
        }
      }
    }
  }
  .__left {
    width: calc(100% - 80px);
    padding-right: 80px;
    @include mobile {
      width: unset;
      padding-right: 0;
      * {
        color: #0e0c0bf6;
      }
    }
    form {
      button {
        border: none;
        font-size: 18px;
        margin-top: 30px;
        font-weight: 900;
        display: flex;
        align-items: center;
        cursor: pointer;
        svg {
          margin-right: 20px;
        }
      }
    }
    .__title {
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 40px;
    }
  }
  .__toast {
    padding: 10px 20px;
    background: rgb(14, 146, 84);
    color: #fff;
    border-radius: 4px;
    position: fixed;
    top: 110px;
    left: 50%;
    //hide
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, 20px);
    transition: 0.2s ease-in-out;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    text-align: center;
    &.active {
      display: block;
      //show
      opacity: 1;
      pointer-events: unset;
      transform: translate(-50%, 0);
    }
  }
}
</style>
