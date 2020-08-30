<template>
  <div class="column">

    <coagulation>
      <d3-line-chart slot="svg" :data="dataset" graphId='coagulation'>
      </d3-line-chart>
    </coagulation>
    
    <coagulation>
      <d3-bar-chart slot="svg" :data='data' :axis="axis" :barTitle="barTitle" :tip="tip" :color="barGraph.color"
        :animation="barGraph.animation" :width="barGraph.width" />
    </coagulation>
    <coagulation>
      <d3-line-chart slot="svg" :data="dataset" graphId='temp'>
      </d3-line-chart>
    </coagulation>


    <kidney>
      <quarter-view slot="quarter-table">
      </quarter-view>
    </kidney>

  </div>
</template>
<script>

  // 导入模板
  import Coagulation from "../element/labassay/Coagulation"
  import Kidney from "../element/labassay/Kidney"

  // 导入部件模板
  import OverView from "../element/blockmodel/OverView"
  import QuarterView from "../element/blockmodel/QuarterView"

  // 导入eCharts模板
  import BarChart from "../../eChartsV/BarChart"

  // 导入d3模板
  import D3BarChart from "../../d3V/D3BarChart"
  import D3LineChart from "../../d3V/D3LineChart"


  // 导入数据
  import { bardata } from 'network/bar-chart.js'


  export default {
    name: 'ModuleC',
    components: {
      // 各个器官系统模板
      Kidney,
      Coagulation,

      // 各个表格模板
      QuarterView,


      // eCharts模板
      BarChart,

      // d3模板
      D3BarChart,
      D3LineChart

    },
    data() {
      return {
        scaleX: 1,
        scaleY: 1,
        marginHorizontal: 0,
        title: '请输入top-title大标题',
        // bar图参数
        barlink: '',
        xname: 'x轴名',
        yname: 'y轴名',
        bardata: bardata,

        // d3 bar
        data: [50, 43, 120, 87, 99, 167, 188, 123, 355],
        axis: {
          xLine: true,
          yLine: true,
          xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', '华为', '中兴', 'oppo']
        },
        barTitle: {
          left: 'right',
          text: '柱状统计图'
        },
        tip: {
          show: true,
          text: '今日用户'
        },
        barGraph: {
          width: 300,
          color: '#3398DB',
          animation: true
        },

        // d3 line
        dataset: [
          {
        'name': 'D二聚体',
        'value': [{key: '2020-06-16 05:52:43', value: 50}, {key: '2020-06-18 09:50:03', value: 48}, {key: '2020-06-20 15:37:59', value: 62}, {key: '2020-06-23 22:37:59', value: 55}]
          },
          {
        'name': '凝聚时间',
        'value': [{key: '2020-06-16 05:52:43', value: 25}, {key: '2020-06-18 09:50:03', value: 33}, {key: '2020-06-20 15:37:59', value: 15}, {key: '2020-06-23 22:37:59', value: 75}]
          },
        ]



      }
    },
  }
</script>