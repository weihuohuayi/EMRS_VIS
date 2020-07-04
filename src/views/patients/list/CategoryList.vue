<template>
  <div>
    <h3>入院患者</h3>
    <ul>
      <li v-for='item in preList'>
        <h3>床号：{{item.bedNum}}</h3>
        姓名：{{item.name}}
        入院时间：{{item.OrderDate}}
        <button href='/details/:bedNum'>详细信息</button>
      </li>
    </ul>

    <h3>术前准备</h3>
    <ul>
      <li v-for='item in onList'>
        <h3>床号：{{item.bedNum}}</h3>
        姓名：{{item.name}}
        手术安排：{{item.operationDate}}
        <button href='/details/:bedNum'>详细信息</button>
      </li>
    </ul>

    <h3>术后患者</h3>
    <ul>
      <li v-for='item in postList'>
        <h3>床号：{{item.bedNum}}</h3>
        姓名：{{item.name}}
        手术安排：{{item.operationDate}}
        <button href='/details/:bedNum'>详细信息</button>
      </li>
    </ul>

  </div>

</template>

<script>
  import axios from 'axios'
  // import { request } from '../../../network/api'

  export default {
    name: 'PatList',
    data() {
      return {
        preList: '',
        onList: '',
        postList: ''
      }
    },
    created() {
      const insPatList = axios.create({
        baseURL: 'http://127.0.0.1:5000/api',
        timeout: 5000
      })

      axios.all([
        insPatList({
          url: '/OnlinePatients',
          params: {
            Department: '滨江骨科二病区',
            beforeSurgery: 'yes'
          }
        }),
        insPatList({
          url: '/OnlinePatients',
          params: {
            Department: '滨江骨科二病区',
            onSurgery: 'yes'
          }
        }),
        insPatList({
          url: '/OnlinePatients',
          params: {
            Department: '滨江骨科二病区',
            afterSurgery: 'yes'
          }
        })
      ]
      ).then(axios.spread((preList, onList, postList) => {
        console.log(preList)
        this.preList = preList.data.data
        this.onList = onList.data.data
        this.postList = postList.data.data
      }))
    }
  }
</script>

<style scoped>

</style>