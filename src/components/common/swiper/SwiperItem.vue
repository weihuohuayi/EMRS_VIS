<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Slide"
  }
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
    text-align:center;
  }

  .slide img {
    width: 80%;
    height: 18rem;
    border-radius: 30px;
  }
</style>