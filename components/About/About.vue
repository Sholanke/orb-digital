<template>
  <div class="about_page__grid">
    <div class="__left">
      <h1>Clientele</h1>
      <p>Bank Of Agriculture</p>
      <p>Emerging Africa Group</p>
      <p>Unlimited LA</p>
      <p>Coupin</p>
    </div>
    <div class="__right">
      <p class="__title">ABOUT US</p>
      <h1>Let's help you put your business jig-saw together piece by piece</h1>
      <p>
        We are an organization inspired by the challenge of every task with an
        urge towards excellence and high-pitch for standards.
        <br />
        Our vast experience and ingenuity in our routine, work collectively to
        keep us competent in a competitive environment, that's why we are
        renowned for a leading-edge in providing an unparalleled level of
        service.
        <br />
        <br />
        We push the limits of our mind.
        <br />
        <br />
        <strong>We Think, Create & Inspire</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins.scss';
.about_page__grid {
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
    padding-top: 150px;
    padding-bottom: 150px;
    @include mobile {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  .__right {
    color: #fff;
    max-width: 460px;
    @include mobile {
      background: #161311;
      margin: 0 -20px;
      padding: 50px 20px;
    }
    h1 {
      line-height: 1.5;
      margin: 30px 0 50px 0;
      font-size: 40px;
    }
    .__title {
      font-weight: 600;
      opacity: 0.8;
      color: #ffe902;
    }
    p {
      line-height: 2.5;
      font-size: 18px;
      strong {
        color: #ffe902;
      }
    }
  }
  .__left {
    width: calc(100% - 80px);
    @include mobile {
      * {
        color: #0e0c0bf6;
      }
    }
    * {
      color: #0e0c0bf6;
    }
    h1 {
      text-transform: uppercase;
      font-size: 20px;
      opacity: 0.8;
      margin-bottom: 30px;
    }
    p {
      margin: 20px 0;
      font-size: 30px;
      @include mobile {
        font-size: 25px;
      }
    }
  }
}
</style>
