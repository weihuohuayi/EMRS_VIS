<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">欢迎页</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners" />

    <!-- <swiper>
      <swiper-item v-for=" (item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      </swiper-item>
      </swiper> -->

    <p style="text-align: center;">{{msg}}</p>
    <hr>

    <!-- 九宫格 -->
    <home-sudoku :sudokus="sudokus" />
    <!-- <sudoku>
      <sudoku-item v-for="(sudoku,index) in sudokus" :key="index" :sudoku="sudoku" :sudokus="sudokus" :index="index">
        <a href="#">
          <img :src="sudoku.img_src" width="40" height="40">
        </a>
        {{sudoku.name}}
      </sudoku-item>
    </sudoku> -->
    <hr>
    <TESword />




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
  // 导入子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeSudoku from './childComps/HomeSudoku'
  import TESword from './childComps/TESword'

  // 导入公共组件
  import NavBar from 'components/common/navbar/NavBar'

  // 导入方法
  import { getHomeMultiimg } from 'network/home'


  export default {
    name: 'Home',
    components: {
      // 子组件
      HomeSwiper,
      HomeSudoku,
      TESword,
      // 公共组件
      NavBar
    },
    data() {
      return {
        msg: '项目负责：胡叶君   浙江大学运动医学',
        result: null,
        banners: [
          {
            image: require('assets/img/home/banners/knee.jpg'),
            link: ''
          },
          {
            image: require('assets/img/home/banners/shoulder.jpg'),
          },
          {
            image: require('assets/img/home/banners/spine.jpg'),
          },
          {
            image: require('assets/img/home/banners/wrist.jpg'),
          },
          {
            image: require('assets/img/home/banners/hip.jpg'),
          }
        ],
        sudokus: [{
          id: 0,
          name: '浙大医学院',
          img_src: require('assets/img/home/sudokus/zjumed.jpg')
        }, {
          id: 1,
          name: '教学通知',
          img_src: require('assets/img/home/sudokus/notice.jpg')
        }, {
          id: 2,
          name: '病历学习',
          img_src: require('assets/img/home/sudokus/records.jpg')
        }, {
          id: 3,
          name: '读片时间',
          img_src: require('assets/img/home/sudokus/xray.jpg')
        }, {
          id: 4,
          name: '手术视频',
          img_src: require('assets/img/home/sudokus/surgery.jpg')
        }, {
          id: 5,
          name: '医嘱方案',
          img_src: require('assets/img/home/sudokus/medicine.jpg')
        }, {
          id: 6,
          name: '前沿进展',
          img_src: require('assets/img/home/sudokus/science.jpg')
        }, {
          id: 7,
          name: '留言反馈',
          img_src: require('assets/img/home/sudokus/suggestion.jpg')
        }, {
          id: 8,
          name: '联系我们',
          img_src: require('assets/img/home/sudokus/message.gif')
        }
        ]
      }
    },
    // 生命周期，回调函数
    created() { // 创建出来组件，回调
      console.log('home created'),
        document.title = '首页'
      getHomeMultiimg().then(res => {
        console.log(res)
        // this.result = res
      })
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
  /* 导航 */
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    font-weight: bolder;
  }

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