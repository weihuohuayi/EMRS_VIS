<template>
  <tab-bar>
    <tab-bar-item link='/home'>
      <!-- <img slot="item-icon" src="../assets/img/tabbar/homepage.jpg" alt=""> -->
      <img slot="item-icon" src="~assets/img/tabbar/homepage.jpg" alt="">

      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link='/patients'>
      <img slot="item-icon" src="~assets/img/tabbar/patients.jpg" alt="">
      <div slot="item-text">患者</div>
    </tab-bar-item>
    <tab-bar-item link='/surgery'>
      <img slot="item-icon" src="~assets/img/tabbar/surgery.jpg" alt="">
      <div slot="item-text">手术</div>
    </tab-bar-item>
    <tab-bar-item link='/medicine'>
      <img slot="item-icon" src="~assets/img/tabbar/medicine.jpg" alt="">
      <div slot="item-text">医嘱</div>
    </tab-bar-item>
    <tab-bar-item link='/profile'>
      <img slot="item-icon" src="~assets/img/tabbar/profile.jpg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  // import TabBar from './tabbar/TabBar'
  // import TabBarItem from './tabbar/TabBarItem'
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>