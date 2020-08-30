// 引入axios
import axios from 'axios'
// 导入方法
import { getDetail, patient } from 'network/detail'
// ...
actions: {
  fetchOrderList({ commit, state }) {
    // 而vuex中this的指向是store，因此不能使用
    // 直接引入axios请求即可
    // 请求详情数据
    getDetail(this.bedNum).then(
      res => {
        const data = res.data.data
        console.log(data)

        // 创建患者基本信息
        this.patInfo = new patient(data.name, data.OrderDate, data.operationDate, data.MedRec)

        // 创建患者
      }).catch(err => {
        console.log(err)
      })

  }
}
