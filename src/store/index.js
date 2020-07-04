import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  // 定义在state里的这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化。
  // 当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新。
  state: {
    counter: 1000,
    patients: [
      { bedId: '0101', id: '0170425', name: '张三', age: 42, hospital: 'in' },
      { bedId: '2408', id: '013425', name: '李四', age: 25, hospital: 'in' },
      { bedId: '3003', id: '0124425', name: '王二', age: 33, hospital: 'out' },
      { bedId: '4002', id: '017335', name: '刘九', age: 87, hospital: 'out' }

    ]
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, countstep) {
      state.counter += countstep
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    // 在computed中的使用方式
    // inpatients() {
    // return this.$store.state.patients.filter(s => {
    //   return s.hospital == 'in'
    // return this.$store.state.patients.filter(s => s.hospital == 'in')
    inpatients(state) {
      return state.patients.filter(s => s.hospital == 'in')
    },
    inpatientsLength(state, getters) {
      return getters.inpatients.length
    },
    // 老年患者提取
    moreAgePatnt(state) {
      // return function (age) {
      //   return state.patients.filter(s => s.age > age)
      // }
      return age => {
        return state.patients.filter(s => s.age > age)
      }
    }
  },

  modules: {

  }
})

// 3. 将我们的store对象传入到vue实例中
export default store
