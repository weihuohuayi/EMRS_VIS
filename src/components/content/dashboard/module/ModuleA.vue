<template>
  <div class="column">


    <blood-routine style="border-color: darkorange; border-width: 1px; border-style: solid;">
      <over-view slot="table" style="border: solid 1px darkred;"></over-view>
      <e-charts-model slot="chart-left-top" v-if="flag" :styleObj="quater_style" title='细胞组成' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodMaindata' />
      <e-charts-model slot="chart-right-top" v-if="flag" :styleObj="quater_style" title='红系' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodReddata' />
      <a slot="changeShow" href="javascript:;" v-for="item in type" :key="item.id" :class="{active: item.isActive}"
        :data-type="item.type" @click="change(item)">{{item.name}}</a>
      <e-charts-model slot="chart-left-bottom" v-if="flag" :styleObj="quater_style" title='白系' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodWhitedata' />
      <e-charts-model slot="chart-right-bottom" v-if="flag" :styleObj="quater_style" title='血小板' :textlink='chartslink'
        :xname='xname' :yname='yname' :cData='bloodPltdata' />
    </blood-routine>

    <kidney style="border-color: darkorange; border-width: 1px; border-style: solid;">
      <!-- <line-chart :textlink='barlink' :xname='xname' :yname='yname' :linedata='linedata' /> -->

    </kidney>



  </div>
</template>
<script>

  // 导入各生理系统模板
  import Kidney from "../element/labassay/Kidney"
  import BloodRoutine from "../element/labassay/BloodRoutine"

  // 导入部件模板
  import OverView from "../element/blockmodel/OverView"
  import QuarterView from "../element/blockmodel/QuarterView"

  // 导入eCharts模板
  import LineChart from "../../eChartsV/LineChart"
  import eChartsModel from "../../eChartsV/eChartsModel"

  // 导入数据
  import { bardata } from 'network/bar-chart.js'

  import { getDetail } from 'network/detail' // 导入患者信息函数
  import { kidneyLabResult } from 'network/kidney.js'

  // 导入请求获取的检验结果数据的处理函数
  import getBloodData from 'common/datafilter/blood.js'



  export default {
    name: 'ModuleA',
    components: {
      // 各个器官系统模板
      Kidney,
      BloodRoutine,

      // 各个表格模板
      OverView,
      QuarterView,

      // eCharts模板
      eChartsModel,
      LineChart
    },
    data() {
      return {
        bedNum: null,
        flag: false,
        scaleX: 1,
        scaleY: 1,
        marginHorizontal: 0,
        quater_style: {
          height: '20rem',
          width: '13rem'
        },
        title: '请输入top-title大标题',
        // bar图参数
        chartslink: 'www.baidu.com',
        xname: '日期',
        yname: '数值',
        bardata: bardata,
        labdata: '',
        kidneyres: {
          //尿液一般情况
          // "尿液PH": '',
          // "尿比重": '',
          // "D-二聚体": '',
          // "尿液颜色":'',
          // //红色尿→判断部位（RBC均一-下尿路；RBC大小不一-肾小球性）
          // "尿潜血":'',
          "尿红细胞定量": '', //尿沉查试验
          // //白色尿-感染-细菌尿
          "尿白细胞定量": '',
          // "尿亚硝酸盐":'',//肠杆菌科，产生硝酸盐还原酶，尿硝酸盐还原为亚硝酸盐
          // "尿粘液丝":'',//尿液污染或泌尿系统感染
          // // 尿干化学检测
          // "尿白细胞酯酶":'',
          // // 尿镜检
          "尿非鳞状上皮细胞": '',
          "尿鳞状上皮细胞": '',//远端尿道，表示尿样本受到污染


          // "尿酮体":'',//血糖控制差或饥饿，营养不良  
          // "尿胆原":'',//肝实质
          // "尿胆红素":'',//肝实质或阻塞性黄疸
          // "尿素氮":'',
          // "尿蛋白":'',
          // "尿酮体":'',
          // "尿酸":'',
        },

        bloodMaindata: {},
        bloodReddata: {},
        bloodWhitedata: {},
        bloodPltdata: {},
        type: [
          {
            id: 1,
            name: "白细胞绝对值",
            type: "option_white_abs",
            isActive: true
          },
          {
            id: 2,
            name: "白细胞百分比",
            type: "option_white_pct",
            isActive: false
          },
        ]
      }
    },
    methods: {
      change(param) {
        // console.log(param)
        for (const item of this.type) {

          if (item.type === param.type) {
            item.isActive = true;
          } else {
            item.isActive = false;
          }
        }
        var bloodData = getBloodData(this.labdata)
        this.bloodWhitedata = bloodData.bloodWhite[param.type]

      }
    },
    created() {
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


          // ☆☆☆ 血液相关数据提取
          // 1.将获取的labdata进行数据处理，提取血液相关数据
          var bloodData = getBloodData(this.labdata)
          // console.log('血液处理数据')
          // console.log(bloodData)

          // 2.创建化验结果对象
          this.bloodMaindata = bloodData.bloodMain
          this.bloodReddata = bloodData.bloodRed
          this.bloodPltdata = bloodData.bloodPlt
          this.bloodWhitedata = bloodData.bloodWhite['option_white_abs']




          this.flag = true


        }).catch(err => {
          console.log(err)
        }
        )

    }
  }
</script>

<!-- slot的样式可以在子组件内进行定义 -->