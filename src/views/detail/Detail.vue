<template>
  <div>
    <h2>{{bedNum}} 详细信息</h2>
    <!-- <p>{{$route.params.bedNum}}</p> -->
    <p>{{patAbstract}}</p>

  </div>

</template>

<script>
  // import axios from 'axios'
  import { request } from 'network/api'

  export default {
    name: 'Detail',
    computed: {
      // $route 获取router中激活的路由
      bedNum() {
        return this.$route.params.bedNum
      }
    },
    data() {
      return {
        patAbstract: ''
      }
    },
    created() {
      request(
        {
          url: '/OnlinePatient/' + this.bedNum
        }).then(
          res => {
            console.log(res)
            this.patAbstract = res.data.data
          }).catch(err => {
            console.log(err)
          })
    }
  }
</script>

<style scoped>

</style>