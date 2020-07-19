<template>
  <div class="point panel">
    <div class="inner">
      <h3>点位分布统计</h3>
      <div class="chart">
        <!--扇形图显示处-->
        <div class="pie" id="pointPie"></div>

        <div class="data">
          <div class="item">
            <h4>320,11</h4>
            <span>
              <i class="icon-dot" style="color: #ed3f35"></i>
              点位总数
            </span>
          </div>
          <div class="item">
            <h4>418</h4>
            <span>
              <i class="icon-dot" style="color: #eacf19"></i>
              本月新增
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        // 控制提示
        tooltip: {
          // 非轴图形，使用item的意思是放到数据对应图形上触发提示
          trigger: "item",
          // 格式化提示内容：
          // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 控制图表
        series: [
          {
            // 图表名称
            name: "地区",
            // 图表类型
            type: "pie",
            // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
            // 百分比基于  图表DOM容器的半径
            radius: ["10%", "70%"],
            // 图表中心位置 left 50%  top 50% 距离图表DOM容器
            center: ["50%", "50%"],
            // 半径模式，另外一种是 area 面积模式
            roseType: "radius",
            // 数据集 value 数据的值 name 数据的名称
            data: [
              { value: 20, name: "云南" },
              { value: 5, name: "北京" },
              { value: 15, name: "山东" },
              { value: 25, name: "河北" },
              { value: 20, name: "江苏" },
              { value: 35, name: "浙江" },
              { value: 30, name: "四川" },
              { value: 40, name: "湖北" }
            ],
            //文字调整
            label: {
              fontSize: 10
            },
            //引导线
            labelLine: {
              length: 8,
              length2: 10
            }
          }
        ],
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff"
        ]
      }
    };
  },
  mounted() {
    const ec = this.$echarts.init(document.getElementById("pointPie"));
    ec.setOption(this.option)
  }
};
</script>

<style>
.point {
  height: 14.167rem;
}
.point .chart {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
}
.point .pie {
  width: 13rem;
  height: 10rem;
  margin-left: -0.4rem;
}
.point .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  /* background-image: url(../assets/images/rect.png); */
  background-size: cover;
}
.point h4 {
  margin-bottom: 0.5rem;
  font-size: 1.167rem;
  color: #fff;
}
.point span {
  display: block;
  color: #4c9bfd;
  font-size: 0.667rem;
}
</style>