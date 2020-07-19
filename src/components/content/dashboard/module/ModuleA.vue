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


    <!-- <liver/> -->
    <!-- <cardiology/> -->

  </div>
</template>
<script>

  // 导入各系统模板
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
  import getBloodData from 'common/datasplit/blood.js'



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



        // this.option.series[0].data = key[0];
        // this.option.series[1].data = key[1];

        // let myChart = this.$echarts.init(this.$refs.mapbox);
        // myChart.setOption(this.option);

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





          // // 获取肾脏数据
          // for (var key in this.kidneyres) {
          //   for (var item in jsonData) {
          //     if (key == item) {
          //       this.kidneyres[key] = jsonData[item]
          //     }
          //   }
          // }
          // console.log('kidneyres')
          // console.log(this.kidneyres)


          // // 创建化验结果对象
          // // this.kidneydata = new kidneyLabResult(this.kidneyres)
          // this.kidneydata = {
          //   title: '肾功能',
          //   // axis_data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          //   legend_data: ['尿红细胞定量', '尿白细胞定量', '嗜酸性粒细胞百分比'],
          //   series_data: [
          //     {
          //       name: "尿红细胞定量",
          //       // 数据
          //       data: [['2020-06-18 09:52:43', 1.0]],
          //       // 图表类型
          //       type: "line",
          //       markPoint: {
          //         label: {
          //           normal: {
          //             show: true,
          //             backgroundColor: '#fff',
          //             position: 'left',  // top 
          //             // color: '#41D6C3',
          //             // borderColor: 'rgba(65,214,195,0.3)',
          //             // borderWidth: 1,
          //             // padding: 8,${unit}
          //             formatter: `{b}: {c} μg/L(FEU)`
          //           }
          //         },
          //         symbol: 'circle',
          //         itemStyle: {
          //           normal: {
          //             borderColor: 'rgba(90,170,250,0.3)',
          //             borderWidth: 15
          //           }
          //         },
          //         symbolSize: 7,
          //         data: [
          //           { type: 'max', name: 'Max' }
          //         ]
          //       },
          //       markLine: {
          //         symbol: ['circle', 'arrow'],    //表示箭头从左向右
          //         //symbol:['arrow', 'circle'], //表示箭头从右向左
          //         //symbol:"none",            //表示没有箭头的直线

          //         //警示线标签
          //         label: {
          //           show: true,
          //           position: "middle",    //将警示值放在哪个位置，start middle end 开头 中间 结尾
          //           formatter: "参考范围",   //警示线上显示内容
          //         },
          //         //警示线的样式，虚实  颜色
          //         lineStyle: {
          //           // type: "solid",
          //           color: "#FF4B5C",
          //         },


          //         data: [
          //           //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
          //           //name警示线命名，type值有 max min average，
          //           // { type: 'average', name: '平均值' }
          //           //警示线标签及样式单独设置
          //           {
          //             name: 'Y轴值为3000的水平线', yAxis: 3000,
          //             label: {
          //               show: true,
          //               position: "middle", // label标签内容所在位置为中间
          //               formatter: "参考上限",
          //             },
          //             lineStyle: {
          //               // type: "solid",
          //               color: "#FF4B5C",
          //             },
          //           },
          //           //两个坐标之间的标线
          //           {
          //             name: 'Y轴值为1080的水平线', yAxis: 1080,
          //             label: {
          //               show: true,
          //               position: "middle", // label标签内容所在位置为中间
          //               formatter: "参考下限",
          //             },
          //             lineStyle: {
          //               // type: "solid",
          //               color: "#FF4B5C",
          //             },
          //           },


          //         ]
          //       },
          //       // 圆滑连接
          //       smooth: true,
          //       itemStyle: {

          //       }
          //     },
          //     {
          //       name: "尿白细胞定量",
          //       // 数据
          //       data: [['2020-06-16 09:36:24', 5.3]],
          //       // 图表类型
          //       type: "line",
          //       // 圆滑连接
          //       smooth: true,
          //       itemStyle: {

          //       }
          //     },
          //     {
          //       name: "嗜酸性粒细胞百分比",
          //       // 数据
          //       data: [['2020-06-16 08:37:24', 2.6], ['2020-06-18 09:18:05', 4.5], ['2020-06-20 10:46:07', 0.0]],
          //       // 图表类型
          //       type: "line",
          //       // 圆滑连接
          //       smooth: true,
          //       itemStyle: {

          //       }
          //     },
          //   ]
          // }



          this.flag = true


        }).catch(err => {
          console.log(err)
        }
        )

    }
  }
</script>