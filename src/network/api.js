// 引入axios库
import axios from 'axios'


export function request(config) {
  // 返回一个promise
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:5000/api',
      timeout: 5000
    })

    // 3.传入对象，发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
