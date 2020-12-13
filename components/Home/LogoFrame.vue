<template>
  <div class="logo__frame" data-sticky="from: 0, duration: 100vh">
    <div
      class="rect__bg"
      data-animation="transform : {40vh : scale(1), 100vh : scale(.9) }"
    ></div>

    <div
      class="logo__holder"
      data-animation="left : { 0vh : 50%, 50vh : 0% }, transform : {0vh : scale(1) translate(-50%, 0), 50vh : scale(1.3) translate(-50%, 0)}"
    >
      <Logo />
    </div>

    <div
      class="hello__holder"
      data-classes="75vh : { add : active }"
      data-animation="
        opacity : { 75vh : 0 , 100vh : 1 },
        transform : { 70vh : translate(0,100px) , 100vh : translate(0,0) }
        "
    >
      <h2 class="content">Hello, We're</h2>
      <h1 class="content">Orb Digital</h1>
      <p class="content">
        We craft delightful digital experiences that helps you grow your
        business & services
      </p>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: { Logo },
}
</script>

<style lang="scss" scoped>
.rect__bg {
  position: fixed;
  top: 0;
  left: 0;
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
  position: relative;
  .logo__holder {
    position: absolute;
    // background: red;
    left: 50%;
    transform-origin: center;
    z-index: 1;
    transform: translate(-50%, 0);
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
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

  &.active {
    .content {
      opacity: 0;
      transform: translate(0, 40px);

      // @for $i from 1 through 3 {
      animation-name: fadeUp;
      animation-fill-mode: forwards;
      animation-duration: 0.4s;
      // }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
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

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, 0) scale(0.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translate(0, 40px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
