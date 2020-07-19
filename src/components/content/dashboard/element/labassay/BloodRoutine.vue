<template>
  <div class="panel labassay ">
    <div class="inner">
      <div class="caption">
        <h3>{{title}}</h3>
      </div>
      <div class="chart">
        <!-- <div class="label">单位:万</div> -->
        <!-- 开放插槽 -->
        <slot name="table"></slot>
        <slot name="quarter-table"></slot>
        <div class='quater-chart'>
          <div class='slot'>
            <slot name="chart-left-top"></slot>
          </div>
          <div class='slot'>
            <slot name="chart-right-top"></slot>
          </div>
          <div class='slot'>
            <slot name="changeShow"></slot>
            <slot name="chart-left-bottom"></slot>
          </div>
          <div class='slot'>
            <slot name="chart-right-bottom"></slot>
          </div>
        </div>

      </div>
      <div class="pannel-foot">提示信息</div>
    </div>
  </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: "血液系统：血常规",
        type: [
          {
            id: 1,
            name: "尿细胞定量",
            // type: "year",
            isActive: true
          },
          {
            id: 2,
            name: "尿物质含量",
            // type: "quarter",
            isActive: false
          },
          {
            id: 3,
            name: "血液细胞百分比堆叠图",
            type: "month",
            isActive: false
          },
          {
            id: 4,
            name: "周",
            type: "week",
            isActive: false
          }
        ],
        option: {
          //鼠标提示工具
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            // 类目类型
            type: "category",
            // x轴刻度文字
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisTick: {
              show: false //去除刻度线
            },
            axisLabel: {
              color: "#4c9bfd" //文本颜色
            },
            axisLine: {
              show: false //去除轴线
            },
            boundaryGap: false //去除轴内间距
          },
          yAxis: {
            // 数据作为刻度文字
            type: "value",
            axisTick: {
              show: false //去除刻度线
            },
            axisLabel: {
              color: "#4c9bfd" //文本颜色
            },
            axisLine: {
              show: false //去除轴线
            },
            boundaryGap: false //去除轴内间距
          },
          //图例组件
          legend: {
            textStyle: {
              color: "#4c9bfd" // 图例文字颜色
            },
            right: "10%" //距离右边10%
          },
          // 设置网格样式
          grid: {
            show: true, // 显示边框
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            borderColor: "#012f4a", // 边框颜色
            containLabel: true // 包含刻度文字在内
          },
          series: [
            {
              name: "预期销售额",
              // 数据
              data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              // 图表类型
              type: "line",
              // 圆滑连接
              smooth: true,
              itemStyle: {
                color: "#00f2f1" // 线颜色
              }
            },
            {
              name: "实际销售额",
              // 数据
              data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
              // 图表类型
              type: "line",
              // 圆滑连接
              smooth: true,
              itemStyle: {
                color: "#ed3f35" // 线颜色
              }
            }
          ]
        },
        saleNumber: {
          year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ],
          quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
          ],
          month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
          ],
          week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
          ]
        }
      };
    },
    // mounted() {
    //   let myChart = this.$echarts.init(this.$refs.mapbox);
    //   myChart.setOption(this.option);
    // },
    methods: {
      change(param) {
        for (const item of this.type) {
          if (item.type === param.type) {
            item.isActive = true;
          } else {
            item.isActive = false;
          }
        }

        const key = this.saleNumber[param.type];
        this.option.series[0].data = key[0];
        this.option.series[1].data = key[1];

        let myChart = this.$echarts.init(this.$refs.mapbox);
        myChart.setOption(this.option);

      }
    }
  };
</script>

<style>
  .labassay {
    /* height:auto;  */
  }

  .labassay .caption {
    display: flex;
    line-height: 1;
    /* flex 水平居中 */
    /* justify-content: center; */
    /* flex 垂直居中 */
    align-items: center;
  }

  .labassay h3 {
    height: 0.75rem;
    padding-right: 0.75rem;
    border-right: 0.1rem solid #00f2f1;
  }

  .labassay a {
    padding: 0.167rem;
    font-size: 0.667rem;
    margin: 0.125rem 0 0 0.875rem;
    border-radius: 0.125rem;
    color: #0bace6;
  }

  .labassay a.active {
    background-color: #4c9bfd;
    color: #fff;
  }

  .labassay .inner {
    display: flex;
    flex-direction: column;
  }

  .labassay .chart {
    flex: 1;
    padding-top: 0.6rem;
    position: relative;
  }

  .labassay .chart .quater-chart {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    /* padding-top: 0.6rem; */
    position: relative;
  }



  .labassay .label {
    position: absolute;
    left: 1.75rem;
    top: 0.75rem;
    color: #4996f5;
    font-size: 0.583rem;
  }

  .labassay .line {
    width: 100%;
    height: 100%;
  }
</style>