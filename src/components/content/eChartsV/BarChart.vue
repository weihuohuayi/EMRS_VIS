<template>
  <div class="bar-chart">
    <!-- 1.初始化eCharts 需要一个有宽高的 盒子  height: 500px; width: 100% -->
    <div ref='mapbox' style="height: 200px; width: 100%;"></div>
  </div>
</template>

<script>



  export default {
    name: 'BarChart',
    props: {
      textlink: {
        type: String,
        required: false,
        default: ''
      },
      xname: {
        type: String,
        required: false,
        default: ''
      },
      yname: {
        type: String,
        required: false,
        default: ''
      },
      bardata: Object
    },
    data() {
      return {
        link: this.textlink,
        title: this.bardata.title,
        legend_data: this.bardata.legend_data,
        axis_data: this.bardata.axis_data,
        series_data: this.bardata.series_data,
        x_name: this.xname,
        y_name: this.yname,
      }
    },
    watch: {
      bardata: function (val) {
        this.title = val.title
        this.legend_data = val.legend_data
        this.axis_data = val.Axis_data
        this.series_data = val.series
        this.drawBar()
      }
    },
    methods: {
      drawBar() {
        let myChart = this.$echarts.init(this.$refs.mapbox);

        // 4.指定图表的配置项和数据
        myChart.setOption({

          // color设置线条颜色
          color: ['#83d0d5', '#f1cb48', '#188ae2', '#E8830B', '#7460ae', '#fc4b6c', '#31ce77', '#eae0bc', '#e732cb', '#9dce8a'],

          // 设置图表标题
          title: {
            text: this.title,
            left: '35',
            top: '20',
            link: this.link,
            textStyle: {
              color: 'black'
              // color: '#B6B6B6'
            }
          },

          // 图表的提示框组件
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          // 图例组件
          legend: {
            // 如果series里面已经有name属性了，那么legend里的data可以删掉。
            data: this.legend_data,
            // 修改图例组件中的文字
            textStyle: {
              color: '#4c9bfd',
            },
            right: '10'
          },
          // 网格配置，图表在DOM中的定位
          grid: {
            top: '30%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            // 显示边框
            show: true,
            borderColor: '#012f4a',// 边框颜色
            // 是否显示刻度标签
            containLabel: true
          },
          // 工具箱组件，可以另存为等功能
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          // 设置x轴的相关配置
          xAxis: {
            // 类型：category类目，value值
            type: 'category',
            // 折线与坐标轴之间保留间隙
            boundaryGap: false,
            name: this.x_name,
            nameLocation: 'center',
            nameGap: '50',
            data: this.axis_data,
            axisTick: {
              show: false //去除刻度线
            },
            axisLabel: {
              color: '#4c9bfd',//文本颜色
              rotate: 30,
              interval: 0
            },
            axisLine: {
              show: false,  //去除轴线
              lineStyle: {
                color: '#BFC2C8'
              }
            },
            boundaryGap: false //去除轴内间距
          },
          // 设置y轴的相关配置
          yAxis: {
            type: 'value',
            name: this.y_name,
            nameLocation: 'center',
            nameGap: '45',
            axisLine: {
              lineStyle: {
                color: '#BFC2C8'
              }
            },
            axisTick: {
              show: false
            },
            // 修改Y轴分隔线的线条颜色
            splitLine: {
              lineStyle: {
                color: '#898D95'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#BFC2C8'
              },
              interval: 0,
              // formatter: function (value, index) {
              //   if (value >= 1000 && value < 10000000) {
              //     value = value / 1000 + 'K'
              //   } else if (value >= 1000000 && value < 1000000000) {
              //     value = value / 1000000 + 'M'
              //   } else if (value >= 1000000000) {
              //     value = value / 1000000000 + 'B'
              //   }
              //   return value
              // }
            }
          },
          // 系列图表配置，决定显示哪种类型的图表
          series: this.series_data

        })


        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize', function () { myChart.resize() });
      },
    },
    mounted() {
      // console.log(this.series_data);
      // console.log(this.x_name);
      // console.log(this.y_name);
      this.drawBar()
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>