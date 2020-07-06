<template>

  <div class="sudoku">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "Sudoku",
  }
</script>

<style scoped>
  .sudoku {
    /* 里面元素水平排放 */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    /* 折叠排放 */
    flex-wrap: wrap;
  }
</style>