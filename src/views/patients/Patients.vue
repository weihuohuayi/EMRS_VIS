<template>
  <div id="patients">
    <!-- 导航栏 -->
    <nav-bar class="pat-nav">
      <div slot="center">患者住院信息</div>
    </nav-bar>

    <hosp-slogan />

    <!-- 标签切换控制 -->
    <tab-control :titles="['患者列表', '患者分类', '病历书写要点']" v-on:index-click="Clickedevent" />

    <!-- 患者列表 -->
    <div id="vshow">
      <pat-list :patients="patientList" v-show='chooseTag==0' />
      <category-list v-show='chooseTag==1' />
      <!-- <medical-records v-show='chooseTag==3' /> -->
    </div>

    <!-- <router-link to='/patients/list' tag="button">患者列表</router-link>
    <router-link to='/patients/catgory' tag="button">患者分类</router-link> -->
    <!-- <router-link to='/patients/diseaseKey' tag="button">疾病病历要点</router-link> -->
    <!-- <router-view></router-view> -->

    <!-- <scroll></scroll> -->



    <!-- <patdetail></patdetail> -->

    <h2>Vuex状态管理：实现不同页面的变量共享</h2>

    <h2>1.Vuex变量：state</h2>
    <h4>{{$store.state.counter}}</h4>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>2.Vuex计算属性：getters</h2>
    <h4>{{$store.getters.powerCounter}}</h4>
    <h4>住院患者：{{$store.getters.inpatients}}</h4>
    <h4>住院患者姓名：</h4>
    <h4>住院总人数：{{$store.getters.inpatientsLength}}人</h4>
    <h4>老年患者：{{$store.getters.moreAgePatnt(65)}}</h4>

    <h2>3.Vuex方法：mutation</h2>

  </div>

</template>

<script>
  // 导入方法
  import { request } from 'network/api'


  // 导入子组件
  import HospSlogan from './childComps/HospSlogan'
  import PatList from './childComps/PatList'
  import CategoryList from './childComps/CategoryList'

  // 导入公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'



  export default {
    name: 'Patients',
    components: {
      // 子组件
      PatList,
      CategoryList,
      // 公共组件
      NavBar,
      Scroll,
      TabControl,
      HospSlogan
    },
    data() {
      return {
        patientList: [],
        chooseTag: "0"
      }
    },
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        this.$store.commit('incrementCount', count)
      },
      Clickedevent(index) {
        console.log("子组件的触发事件", index);
        this.chooseTag = index;
      }

    },
    created() {
      request(
        {
          url: '/OnlinePatients/'
        }).then(
          res => {
            console.log(res)
            this.patientList = res.data.data
          }).catch(err => {
            console.log(err)
          })
    }
  }
</script>

<style scoped>
  #patients {
    padding-top: var(--navbar-height);
  }


  /* 导航 */
  .pat-nav {
    background-color: var(--color-block);
    color: white;
    font-weight: bolder;
  }


  .router-link-active {
    color: rgba(255, 0, 0, 0.521);
    font-weight: bold;
  }
</style>