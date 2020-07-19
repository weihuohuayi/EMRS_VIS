<template>
  <div class="column">
    <kidney>
      <quarter-view slot="quarter-table" >
      </quarter-view>    
    </kidney>

    <!-- <liver/> -->
    <!-- <cardiology/> -->

  </div>
</template>
<script>

// 导入模板
  import Kidney from "../element/labassay/Kidney"
  import BarChart from "../../eChartsV/BarChart"
  
  // 导入部件模板
  import OverView from "../element/blockmodel/OverView"
  import QuarterView from "../element/blockmodel/QuarterView"


  // 导入数据
  import { bardata } from 'network/bar-chart.js'


  export default {
    name: 'ModuleB',
    components: {
      // 各个器官系统模板
      Kidney,

      // 各个表格模板
      QuarterView,

      BarChart

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
        bardata: bardata

      }
    },
  }
</script>