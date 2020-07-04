import { requestAxios, request } from 'network/api'




// 自定义函数格式request(config,sucess, failure)
// requestAxios(
//   { url: '/临时3.json' },  //config
//   res => console.log(res),//sucess
// )

// 获取图片
export function getHomeMultiimg() {
  return request({
    url: '/临时3.json',
  })
  //   .then(res => {
  //   console.log(res);
  // }).catch(err => {
  //   console.log(err);
  // })
}