<template>
  <div id="app">

    <!-- 保持组件创建状态 ,排除exclude-->
    <keep-alive exclude='Profile'>
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
  @import "~assets/css/base.css";
</style>