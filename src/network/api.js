// 引入axios库
import axios from 'axios'

// 患者数据
export function request(config) {
  // 返回一个promise
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance = axios.create({
      // baseURL: 'http://127.0.0.1:5000/api',
      baseURL: 'http://hunter_backend.vaiwan.com/api',
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
    // 返回一个promise
  })
}


// 搜图
export function requestpic(config) {
  // 返回一个promise
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance = axios.create({
      baseURL: 'https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture',
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
    // 返回一个promise
  })
}
