<template>
  <div class="textarea">
    <textarea rows="4" :placeholder="placeholder" :name="name" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      required: false,
      type: String,
      default() {
        return 'Type here'
      },
    },
    name: {
      required: false,
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.textarea {
  textarea {
    border: 0;
    border-bottom: 1.5px solid #0e0c0b48;
    padding: 20px 0;
    font-size: 18px;
    margin-bottom: 40px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    transition: 0.5s ease-in-out;
    resize: none;
    &:focus {
      border-color: #58cf86;
      &:invalid {
        border-color: tomato;
      }
    }
  }
}
</style>
