<template>
  <svg
    width="20"
    height="45"
    viewBox="0 0 20 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="bounce"
  >
    <path
      d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10V20C2.5 24.1421 5.85786 27.5 10 27.5C14.1421 27.5 17.5 24.1421 17.5 20V10C17.5 5.85786 14.1421 2.5 10 2.5ZM10 0C15.5228 0 20 4.47715 20 10V20C20 25.5228 15.5228 30 10 30C4.47715 30 0 25.5228 0 20V10C0 4.47715 4.47715 0 10 0Z"
      fill="#FFE902"
    />
    <path
      d="M8.75 7.5C8.75 6.80964 9.30964 6.25 10 6.25C10.6904 6.25 11.25 6.80964 11.25 7.5V14.1667C11.25 14.857 10.6904 15.4167 10 15.4167C9.30964 15.4167 8.75 14.857 8.75 14.1667V7.5Z"
      fill="#FFE902"
      class="bounce-2"
    />
    <g class="bounce">
      <path
        d="M10.5253 44.8587C10.0176 45.1522 9.37084 44.9737 9.08072 44.46C8.7906 43.9463 8.967 43.2918 9.4747 42.9983L14.4157 40.1413C14.9234 39.8478 15.5702 40.0263 15.8603 40.54C16.1504 41.0537 15.9741 41.7082 15.4663 42.0017L10.5253 44.8587Z"
        fill="#FFE902"
      />
      <path
        d="M10.5253 42.9983C11.033 43.2918 11.2094 43.9463 10.9193 44.46C10.6292 44.9737 9.9824 45.1522 9.47469 44.8587L4.53367 42.0017C4.02596 41.7082 3.84956 41.0537 4.13968 40.54C4.4298 40.0263 5.07657 39.8478 5.58428 40.1413L10.5253 42.9983Z"
        fill="#FFE902"
      />
    </g>
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bounce {
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  overflow: visible;
}

.bounce-2 {
  animation-name: bounce2;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  overflow: visible;
}

@keyframes bounce {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 11px);
  }
}
@keyframes bounce2 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 5px);
  }
}
</style>
