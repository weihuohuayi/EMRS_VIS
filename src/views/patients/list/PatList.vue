<template>
  <div>
    <ul>
      <li v-for='item in patientList'>
        <h3>床号：{{item.bedNum}}</h3>
        姓名：{{item.name}}<br />
        入院时间：{{item.OrderDate}}
        医疗组：{{item.AttendingDoctorCode}}<br />
        手术安排：{{item.operationDate}}
        <router-link :to="'/details/'+item.bedNum" tag="button" replace>详细信息</router-link>
      </li>
    </ul>
  </div>

</template>

<script>

  import { request } from 'network/api'


  export default {
    name: 'PatList',
    data() {
      return {
        patientList: ''
      }
    },
    created() {
      request(
        {
          url: '/OnlinePatients/'
        }).then(
          res => {
            console.log(res)
            this.patientList = res.data.data
          }).catch(err => {
            console.log(err)
          })
    }
  }
</script>

<style scoped>

</style>