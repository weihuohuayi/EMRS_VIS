import Vue from 'vue'
import Vuex from 'vuex'

// 导入其他需要使用的方法
import { getDetail, patient } from 'network/detail'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
// 单一状态树——单一数据源，只有一个store
const store = new Vuex.Store({
  // 定义在state里的这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化。
  // 当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新。
  state: {
    // 等价于data
    patInfo: {},
    counter: 1000,
    patients: [
      { bedId: '0101', id: '0170425', name: '张三', age: 42, hospital: 'in' },
      { bedId: '2408', id: '013425', name: '李四', age: 25, hospital: 'in' },
      { bedId: '3003', id: '0124425', name: '王二', age: 33, hospital: 'out' },
      { bedId: '4002', id: '017335', name: '刘九', age: 87, hospital: 'out' }
    ]
  },
  getters: {
    // 等价于computed,计算属性
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
  mutations: {
    // 等价于methods方法，修改state里属性，只有一个方式，就是使用mutations，不能用actions
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, countstep) {
      state.counter += countstep
    },
    updatePatInfo(state, payload) {
      console.log('异步加载actions→mutations')
      console.log(payload.bedNum)
      console.log('回调函数')
      payload.success()
      // 请求详情数据
      getDetail(payload.bedNum).then(
        res => {
          const data = res.data.data
          // console.log(data)
          // 创建患者基本信息
          state.patInfo = new patient(data.name, data.OrderDate, data.operationDate, data.MedRec)

          // 创建患者
        }).catch(err => {
          console.log(err)
        })

    },

  },
  actions: {
    // 异步操作
    patInfoAsync(context, payload) {  //context 相当于store对象  payload为外界传入的数据
      // setTimeout(() => {
      //   // context.commit('updatePatInfo', payload); //context提交
      //   console.log('异步加载')
      //   console.log(payload)
      // }, 2000)
      context.commit('updatePatInfo', payload); //context提交，用commit执行mutations里的方法
    }

  },


  modules: {

  }
})

// 3. 将我们的store对象传入到vue实例中
export default store
