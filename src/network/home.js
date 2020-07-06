// 对首页需要请求的所有数据进行封装管理

import { requestpic } from 'network/api'

// 获取图片
export function getHomeMultiimg() {
  return requestpic({
    url: '',
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}