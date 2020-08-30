<template>
  <div class="e-chart">
    <!-- 1.初始化eCharts 需要一个有宽高的 盒子  height: 500px; width: 100% -->

    <div ref='mapbox' :style="{height:chart_height, width:chart_width}">
    </div>

  </div>
</template>

<script>

  export default {
    name: 'MultiLine',
    props: {
      styleObj: {
        type: Object,
        required: false,
        default: () => {
          return {
            'height': '250px',
            'width': '100%'
          }
        }
      },
      height: {
        type: String,
        required: false,
        default: '250px'
      },
      width: {
        type: String,
        required: false,
        default: '100%'
      },
      title: {
        type: String,
        required: false,
        default: ''
      },
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
      surgDate: {
        type: String,
        required: false,
        default: ''
      },
      cData: Object,
    },
    data() {
      return {
        link: this.textlink,
        // title: this.title, 不能同名命名
        legend_data: this.cData.legend_data,
        grid: this.cData.grid,
        xAxis: this.cData.xAxis,
        visualMap: this.cData.visual_map,
        yAxis: this.cData.yAxis,
        series_data: this.cData.series_data,
        x_name: this.xname,
        y_name: this.yname,
        surg_date: this.surgDate,
        // chart_height: this.styleObj.height,
        chart_width: this.styleObj.width,
        color: ['#188ae2', '#7460ae', '#fc4b6c', '#31ce77', '#e732cb', '#E8830B', '#2E8B57', '#696969', '#8A2BE2'],
      }
    },
    computed: {
      chart_height: function () {
        return this.styleObj.height * this.cData.legend_data.length + 'rem'
      }
    },
    watch: {
      surgDate: function (val) {
        this.surg_date = val
        // console.log('watch')
        // console.log(this.surg_date)
        // console.log(this.series_data)
        const surgLine = {
          name: '手术日垂直线', xAxis: this.surg_date,
          lineStyle: {
            type: "solid",
            color: "darkgreen",
          },
          label: {
            show: false
          }
        }


        // console.log('添加手术线')
        this.series_data.forEach(item => item.markLine.data.push(surgLine))
        // console.log(this.series_data)

        this.drawBar()

      },
      cData: function (val) {
        // console.log(val)
        // this.legend_data = val.legend_data
        // this.xAxis = val.xAxis
        // this.yAxis = val.yAxis
        this.series_data = val.series
        this.drawBar()
      }
    },
    methods: {
      drawBar() {
        let myChart = this.$echarts.init(this.$refs.mapbox);

        // 4.指定图表的配置项和数据
        let option = {
          backgroundColor: '#fff',
          // color设置线条颜色
          color: this.color,

          // 设置图表标题
          title: {
            text: this.title,
            link: this.link,
            textStyle: {
              color: 'black'
            },
          },

          // 图表的提示框组件
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                show: true,
                backgroundColor: '#6a7985',
                // color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
              }
            },
            padding: 10,
            textStyle: {
              // fontSize: 12,
              color: 'white',
              // lineHeight: 24
            },
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); border-radius: 30;',
            // 显示内容格式
            formatter: (params) => {
              // console.log(params)
              var result = `${params[0].data[0]} <br/>`
              params.map(item => {
                // result += `${item.seriesName} : ${isNaN(item.value[1]) ? '-' : item.value[1]} ${unit}</br>`
                result += `${item.marker} ${item.seriesName} : ${isNaN(item.value[1]) ? '-' : item.value[1]} </br>`
                // console.log(item);
              })
              return result
            }
          },
          // 图例组件
          legend: {
            // 如果series里面已经有name属性了，那么legend里的data可以删掉。
            data: this.legend_data,
          },
          // 网格配置，图表在DOM中的定位
          grid: this.grid,

          // 工具箱组件，可以另存为等功能
          toolbox: {
            feature: {
              mark: { show: true },
              // dataZoom: {
              //   yAxisIndex: 'none'
              // },
              dataView: {
                readOnly: false
              },
              magicType: {
                show: true,
                title: {
                  line: '折线图切换',
                  bar: '柱形图切换',
                  stack: '堆积',
                  tiled: '平铺'
                },
                type: ['line', 'bar']
              },
              restore: {},
              // saveAsImage: {}
            }
          },


          // 设置visualMap的相关配置
          visualMap: this.visualMap,

          // 设置x轴的相关配置
          xAxis: this.xAxis,
          // 设置y轴的相关配置
          yAxis: this.yAxis,
          // 系列图表配置，决定显示哪种类型的图表及其数据
          series: this.series_data,
        };

        // 给echarts对象添加option
        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize', function () { myChart.resize() });
      },
    },
    created() {
    },
    mounted() {
      // console.log('mounted测试');
      // console.log(this.cData);
      // console.log(this.grid);
      // console.log(this.title);
      // console.log(this.xAxis);
      // console.log(this.yAxis);
      // console.log(this.visualMap);
      // console.log(this.series_data);
      // console.log(this.cData.legend_data.length );
      // console.log(this.styleObj.height);
      // console.log(this.chart_height);
      // console.log(this.chart_height);
      // console.log(this.chart_width);

      // console.log(this.styleObj.width);


      this.drawBar()
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>