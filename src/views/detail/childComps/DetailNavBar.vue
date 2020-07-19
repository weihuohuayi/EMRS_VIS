<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.png" width=30px height=20px></img>
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item" :class="{active: currentIndex===index}"
          @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  // 导入方法

  // 导入公共组件
  import NavBar from 'components/common/navbar/NavBar'

  // 导入子组件


  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ["主诉", "病历", "就诊史", "医嘱", "化验", "影像"],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.go(-1)
        // this.$router.back()
      }
    }
  }


</script>

<style scoped>
  .nav-bar {
    background-color: white;
  }

  .nav-bar img {
    margin-top: 10px;
  }

  .title {
    display: flex;
    /* flex: ; */
    color: rgb(73, 73, 73);
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
    font-weight: bold;
  }
</style>