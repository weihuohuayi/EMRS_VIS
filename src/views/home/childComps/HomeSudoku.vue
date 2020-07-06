<template>
  <sudoku>
    <sudoku-item v-for="(sudoku,index) in sudokus" :key="index" :sudoku="sudoku" :sudokus="sudokus" :index="index">
      <a href="#">
        <img :src="sudoku.img_src">
      </a>
      {{sudoku.name}}
    </sudoku-item>
  </sudoku>
</template>


<script>
  import { Sudoku, SudokuItem } from 'components/common/sudoku';

  export default {
    name: 'HomeSudoku',
    props: {
      sudokus: Array
    },
    components: {
      Sudoku,
      SudokuItem
    },
  }
</script>

<style scoped>

</style>