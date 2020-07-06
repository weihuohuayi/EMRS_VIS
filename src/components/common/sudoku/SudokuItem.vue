<template>
  <div class="sudoku_item" :class="curSelect==sudoku.id?'opacity':''" @touchstart="touchstart(index)"
    @touchend="touchend">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "SudokuItem",
    props: {
      sudoku: Object,
      sudokus: Array,
      index: Number
    },
    data() {
      return {
        curSelect: null,

      }
    },
    methods: {
      touchstart: function (e) {
        var that = this;
        var list = that.sudokus;
        for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == e) {
            that.curSelect = i;
            console.log(i);

          }
        }
      }, touchend: function () {
        var that = this;
        that.curSelect = null;
      }
    },
  }
</script>

<style scoped>
  .sudoku_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* 图片文字对齐方向  按列上下对齐 */
    width: 30%;
    /* 每行盛放的元素个数 */
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: -1px;
    /* 边框 */
    /* border-style: solid;
    border-width: 1px;
    border-color: rgb(223, 223, 223); */
  }

  .opacity {
    opacity: 0.4;
    background: #e5e5e5;
  }

  .sudoku_item img {
    margin-bottom: 3px;
    display: block;
  }
</style>