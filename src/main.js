//main.js为入口文件
import Vue from 'vue'
import App from './App.vue'

// 导入路由组件
import router from './router'
import store from './store'

// 导入第三方组件组件
import echarts from 'echarts'  //引入echarts
Vue.prototype.$echarts = echarts  //挂载在原型，组件内使用直接this.$echarts调用


Vue.config.productionTip = false






new Vue({
  router,
  store,  //将store 写入这里，相当于执行后面这个操作 Vue.prototype.$store = store
  render: h => h(App)
}).$mount('#app')


// 设置全局过滤器

// 导入格式化插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})



