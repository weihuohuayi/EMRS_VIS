<template>
  <div class="patsCategory">
    <div class="cate">
      <h3>入院患者</h3>
      <ul>
        <li v-for='item in preList'>
          <h3>{{item.bedNum}}</h3>
          {{item.name[0]}}XX <br />
          入院：
          <br />
          {{item.OrderDate.split("T")[0]}}
          <br />
          <button href='/details/:bedNum'>详细信息</button>
        </li>
      </ul>
    </div>

    <div class="cate">
      <h3>术前准备</h3>
      <ul>
        <li v-for='item in onList'>
          <h3>{{item.bedNum}}</h3>
          {{item.name[0]}}XX
          <br />
          手术：
          <br />
          {{item.operationDate.split("T")[0]}}
          <br />
          <button href='/details/:bedNum'>详细信息</button>
        </li>
      </ul>
    </div>

    <div class="cate">
      <h3>术后患者</h3>
      <ul>
        <li v-for='item in postList'>
          <h3 class="bed">{{item.bedNum}}</h3>
          {{item.name}}
          <br />
          手术：
          <br />
          {{item.operationDate.split("T")[0]}}
          <br />
          <button href='/details/:bedNum'>详细信息</button>
        </li>
      </ul>
    </div>

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
  .patsCategory {
    display: flex;
    /* 自动换行，折叠 */
    /* flex-wrap: wrap; */
    /* 均等分 */
    justify-content: space-around;
    /* text-align: center; */
    bottom: 2.5px;

  }

  h3 {
    /* text-align: center; */
    margin-bottom: 1px;
  }

  .cate {
    background: rgb(233, 245, 255);
    width: 33%;
    padding-bottom: 20px;
  }
</style>