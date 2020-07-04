<template>
  <div id="tab-bar">
    <!-- 开放插槽 -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: rgb(211, 211, 211);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2);
  }
</style>