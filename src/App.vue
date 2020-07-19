<template>
  <div id="app">

    <!-- 基于路由配置的相关关系进行对应的显示 -->
    <!-- 保持组件创建状态 ,排除Detail ，因为Detail每次加载时候数据都不一样，需要重新刷新，因此不保留-->
    <keep-alive exclude='Detail'>
      <router-view></router-view>
    </keep-alive>

    <!-- 下方导航栏 -->
    <main-tab-bar />

  </div>
</template>


<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  /* 导入全局基础样式 */
  @import "~assets/css/base.css";
  @import "~assets/fonts/icomoon.css";
</style>