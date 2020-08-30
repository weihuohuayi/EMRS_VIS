<template>
  <div class="column">

    <blood-biochem style="border-color: darkorange; border-width: 1px; border-style: solid;">
      <over-view slot="table" style="border: solid 1px darkred;"></over-view>
      <!-- 肝功能 -->
      <multi-line slot="chart-left-top" v-if="flag" :styleObj="double_style" title='肝细胞功能' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodHepatocytedata' :surgDate='surgDate' />
      <!-- 肾功能 -->
      <multi-line slot="chart-left-middle" v-if="flag" :styleObj="double_style" title='尿肾功能' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodKidneydata' :surgDate='surgDate' />
      <!-- 心肌酶谱+胰腺 -->
      <!-- <a slot="changeShow" href="javascript:;" v-for="item in type" :key="item.id" :class="{active: item.isActive}"
        :data-type="item.type" @click="change(item)">{{item.name}}</a> -->
      <multi-line slot="chart-left-bottom" v-if="flag" :styleObj="double_style" title='心肌酶谱+胰腺' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodJaundicedata' :surgDate='surgDate' />
      <!-- 胆红素代谢 -->
      <multi-line slot="chart-right-top" v-if="flag" :styleObj="double_style" title='胆红素代谢' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodJaundicedata' :surgDate='surgDate' />
      <!-- 血脂+血糖 能量代谢 -->
      <multi-line slot="chart-right-middle" v-if="flag" :styleObj="double_style" title='血脂+血糖 代谢' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodLipiddata' :surgDate='surgDate' />
      <!-- 电解质 -->
      <multi-line slot="chart-right-bottom" v-if="flag" :styleObj="double_style" title='电解质' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodElectrolytedata' :surgDate='surgDate' />
    </blood-biochem>

  </div>
</template>
<script>


  // 导入各生理系统模板
  // import Kidney from "../element/labassay/Kidney"
  import BloodBiochem from "../element/labassay/BloodBiochem"

  // 导入部件模板
  import OverView from "../element/blockmodel/OverView"
  import QuarterView from "../element/blockmodel/QuarterView"


  // 导入eCharts模板
  // import eChartsModel from "../../eChartsV/eChartsModel"
  import MultiLine from "../../eChartsV/MultiLine"

  // 导入数据
  import { getDetail } from 'network/detail' // 导入患者信息函数

  // 导入请求获取的检验结果数据的处理函数
  import getBloodBiochemData from 'common/datafilter/bloodbiochem.js'


  export default {
    name: 'ModuleB',
    components: {
      // 各个器官系统模板
      BloodBiochem,

      // 各个表格模板
      OverView,
      QuarterView,

      // eCharts模板
      MultiLine,
    },
    data() {
      return {
        bedNum: null,
        flag: false,
        scaleX: 1,
        scaleY: 1,
        marginHorizontal: 0,
        double_style: {
          height: 5, //单个chart的高度，后面会添加rem
          width: '18rem'
        },

        // bar图参数
        chartslink: 'www.baidu.com',
        xname: '日期',
        yname: '数值',
        labdata: '',
        bloodJaundicedata: {},
        bloodHepatocytedata: {},
        bloodLipiddata: {},
        bloodElectrolytedata: {},
        bloodKidneydata: {},
        patientInform: {},
        surgDate: '',
      }
    },
    methods: {

    },
    beforeCreate() {
      console.log("创建前：");
      this.bedNum = this.$route.params.bedNum;
      // 患者一般情况数据更新（异步加载需要用dispatch）
      this.$store.dispatch('patInfoAsync', {
        bedNum: this.$route.params.bedNum,
        success: () => {
          console.log('dispatch传递到actions成功')
        }
      }) //参数1：actions里的异步方法，参数2：对应需要传入的数据(payload),如果只有一个参数，可以单独写，如果有多个参数要传递，可以写成一个字典
    },
    created() {
      console.log("创建完成：");
      // 获取患者一般情况数据,因为异步加载需要时间去获取数据，这里延迟2秒获取数据
      setTimeout(() => {
        this.patientInform = this.$store.state.patInfo //获取store中state的数据
        console.log('从store的state中获取数据')
        console.log(this.patientInform)
        this.surgDate = this.patientInform.operationDate.split('T')[0]
        // console.log(this.surgDate)
      }, 1000)

      this.bedNum = this.$route.params.bedNum;
      console.log(this.$route.params.bedNum)
      // 请求详情数据
      getDetail(this.bedNum).then(
        res => {
          const data = res.data.data.Assay['检验非微生物报告信息']
          // 字符串转JSON
          const jsonData = eval('(' + data + ')')
          console.log(jsonData)
          this.labdata = jsonData


          // 快捷获取坐标值列表集合工具，可以去控制台复制黏贴
          // var str = ''
          //           var item ='红细胞计数'
          //           for (var key in this.bloodres[item]) {
          //             // ['2020-06-18 09:52:43', 1.0]
          //              str += '[\'' + key + '\'' + ',' + this.bloodres[item][key]['化验结果'] + '],'

          //           }
          //           console.log('str')
          //           console.log(str)


          // ☆☆☆ 血生化相关数据提取
          // 1.将获取的labdata进行数据处理，提取血生化相关数据
          var bloodbioData = getBloodBiochemData(this.labdata)
          // console.log('血生化处理数据')
          // console.log(bloodbioData)

          // 2.创建化验结果对象

          this.bloodJaundicedata = bloodbioData.biochemJaundice
          this.bloodHepatocytedata = bloodbioData.biochemHepatocyte
          this.bloodLipiddata = bloodbioData.biochemLipid
          this.bloodElectrolytedata = bloodbioData.biochemElectrolyte
          this.bloodKidneydata = bloodbioData.biochemKidney


          this.flag = true


        }).catch(err => {
          console.log(err)
        }
        )

    },
    // 页面初始化方法
    mounted() {

    }

  }
</script>

<!-- slot的样式可以在子组件内进行定义 -->