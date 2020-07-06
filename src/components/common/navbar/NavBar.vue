<template>
  <div class="nav-bar">
    <!-- 开放插槽 -->
    <div class='left'>
      <slot name='left'></slot>
    </div>
    <div class='center'>
      <slot name='center'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    /* 文字居中排列 */
    text-align: center;

    box-shadow: 30px 10px 30px rgba(7, 7, 0, 0);   /* TODO 无法实现 */

    /* position: fixed; */
    left: 0;
    right: 0;
    top: 0;

    /* 添加导航栏阴影 */
    box-shadow: 0px 3px 1px rgba(100, 100, 100, 0.1);
  }

  .left,
  .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>