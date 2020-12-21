<template>
  <div class="work_page__grid">
    <div class="__left">
      <p class="__title">Contact Us</p>
      <form action="">
        <Input placeholder="Your Full Name" />
        <Input placeholder="Email Address" />
        <Textarea placeholder="How can we help you?" />
        <button>Submit</button>
      </form>
    </div>
    <div class="__right">
      <p class="__title">
        A new project is an opportunity to create something unique.
        <br />
        <strong>Tell us about your idea.</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.work_page__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  .__right,
  .__left {
    padding-top: 140px;
    padding-bottom: 140px;
  }
  .__right {
    color: #fff;
    max-width: 460px;
    h1 {
      line-height: 1.5;
      margin: 30px 0 50px 0;
      font-size: 40px;
    }
    .__title {
      font-weight: 900;
      font-size: 40px;
      color: #ffffffe5;
      strong {
        margin-top: 80px;
        display: block;
        color: #ffe902;
      }
    }
  }
  .__left {
    width: calc(100% - 80px);
    padding-right: 80px;
    form {
      button {
        border: none;
        font-size: 18px;
        margin-top: 30px;
        font-weight: 900;
      }
    }
    .__title {
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 40px;
    }
  }
}
</style>
