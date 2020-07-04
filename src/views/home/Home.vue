<template>
  <div>
    <h1>首页</h1>
    <h2>欢迎页</h2>
    <p>{{msg}}</p>
    <hr>

    <!-- 传递参数 -->
    <router-link :to="{path:'/profile',query:{name:'hyj',age:'18',height:'1.80'}}" tag="button" replace>档案:传递参数
    </router-link>
    <br>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>消息</router-link>
    <br>

    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name: 'Home',
    components: {
      MainTabBar
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 生命周期，回调函数
    created() { // 创建出来组件，回调
      console.log('home created'),
        document.title = '首页'
    },
    mounted() { // template挂载后回调
      console.log('home mounted')
    },
    updated() { // 源码改变，界面发生刷新回调
      console.log('home updated')
    },
    destroyed() { // 源码改变，界面发生刷新回调
      console.log('home destroyed')
    },
    // activated和deactivated两个函数，只有在该组件被保持了状态使用了<keep-alive/>时，才有效
    activated() {
      // this.$router.push(this.path)
      console.log('activated')
    },
    deactivated() {
      // this.$router.push(this.path)
      console.log('deactivated')
    }
    // 组件内导航守卫
    // beforeRouteLeave(to, from, next) {
    //   this.path = this.$route.path
    //   next()
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .router-link-active {
    color: rgba(255, 0, 0, 0.521);
    font-weight: bold;
  }
</style>