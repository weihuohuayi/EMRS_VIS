<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar></detail-nav-bar>
    <br>
    <br>


    <h2>{{$route.params.bedNum}}</h2>
    <!-- 患者主诉信息 -->
    <detail-base-info :pat-info="patInfo"></detail-base-info>
    <!-- 患者化验指标 -->
    <dash-board-lab></dash-board-lab>



    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </div>

</template>

<script>
  // 导入方法
  import { getDetail, patient } from 'network/detail'

  // 导入公共组件
  import NavBar from 'components/common/navbar/NavBar'


  // 导入子组件
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailBaseInfo from './childComps/DetailBaseInfo'


  // 导入大屏组件
  import DashBoardLab from 'components/content/dashboard/DashBoardLab'



  export default {
    name: 'Detail',
    components: {
      // 子组件
      DetailNavBar,
      DetailBaseInfo,
      // 公共组件
      NavBar,
      // 大屏组件
      DashBoardLab

    },
    // computed: {
    //   // $route 获取router中激活的路由
    //   bedNum() {
    //     return this.$route.params.bedNum
    //   }
    // }, 
    data() {
      return {
        bedNum: null,
        patAbstract: '空行',
        patInfo: {}
      }
    },
    created() {
      this.bedNum = this.$route.params.bedNum;
      console.log(this.$route.params.bedNum)
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
</script>

<style scoped>
  h2 {
    color: maroon;
  }

  .spacetemp {
    margin-bottom: 100px;
  }
</style>