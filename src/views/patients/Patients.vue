<template>
  <div>
    <h2>患者住院信息</h2>
    <router-link to='/patients/list' tag="button">患者列表</router-link>
    <router-link to='/patients/catgory' tag="button">患者分类</router-link>
    <router-link to='/patients/diseaseKey' tag="button">疾病病历要点</router-link>

    <router-view></router-view>
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
  import PatDetail from './user/PatDetail'

  export default {
    name: 'Patients',
    components: {
      PatDetail
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
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
      }

    }
  }
</script>

<style scoped>
  .router-link-active {
    color: rgba(255, 0, 0, 0.521);
    font-weight: bold;
  }
</style>