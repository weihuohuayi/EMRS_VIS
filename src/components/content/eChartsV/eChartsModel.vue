<template>
  <div class="e-chart">
    <!-- 1.初始化eCharts 需要一个有宽高的 盒子  height: 500px; width: 100% -->

    <div ref='mapbox' :style="{height:chart_height, width:chart_width}">
    </div>

  </div>
</template>

<script>

  export default {
    name: 'eChart',
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
      cData: Object,
    },
    data() {
      return {
        link: this.textlink,
        // title: this.cData.title,
        legend_data: this.cData.legend_data,
        axis_data: this.cData.axis_data,
        series_data: this.cData.series_data,
        x_name: this.xname,
        y_name: this.yname,
        chart_height: this.styleObj.height,
        chart_width: this.styleObj.width,
        color: ['#188ae2', '#E8830B', '#7460ae', '#fc4b6c', '#31ce77', '#e732cb', '#9dce8a', '#2E8B57', '#696969'],
      }
    },
    watch: {
      cData: function (val) {
        console.log(val)
        this.series_data = val.series_data
        // this.legend_data = val.legend_data
        // this.axis_data = val.Axis_data
        // this.series_data = val.series
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
            // left: '35',
            // top: '20',
            link: this.link,
            textStyle: {
              color: 'black'
              // color: '#B6B6B6'
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
            orient: 'horizontal',
            x: 'left',
            icon: "circle",
            // 如果series里面已经有name属性了，那么legend里的data可以删掉。
            data: this.legend_data,
            // legend之间间距
            itemGap: 5,
            // 修改图例组件中的文字
            textStyle: {
              color: '#4c9bfd', // 图例文字颜色
            },
            bottom: '10%',
            right: '10%' //距离右边10%
          },
          // 网格配置，图表在DOM中的定位
          grid: {
            top: '10%',
            left: '6%',
            right: '1%',
            bottom: '32%',
            // x: '12%', y: '12%', x2: '12%', y2: '80%',
            // height: '60%',  //和bottom相互排斥
            width: '100%',
            // 显示边框
            show: false,
            borderColor: '#012f4a',// 边框颜色
            // 是否显示刻度标签
            containLabel: true
          },
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
          // 设置x轴的相关配置
          xAxis: {
            // 类型：category类目，value值
            type: 'time',
            name: this.x_name,
            nameLocation: 'center',
            nameGap: '20',
            nameTextStyle: {
              color: 'black',
              fontWeight: 'bold',
              fontSize: '10'
            },
            data: this.axis_data,
            axisTick: {
              show: false //去除刻度线
            },

            // X轴线显示
            axisLine: {
              show: true,  //去除X轴线
              lineStyle: {
                color: '#BFC2C8',
                width: '1'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: '#4c9bfd',//文本颜色
              fontSize: 11,
              formatter: (params) => {
                // return this.$echarts.format.formatTime('MM-dd hh:mm', new Date(params))
                return this.$echarts.format.formatTime('MM-dd', new Date(params))
                console.log(params)
              },
              rotate: 15,//文本显示旋转角度
              interval: 0
            },
            //折线与坐标轴之间保留间隙
            boundaryGap: false //去除轴内间距，
          },
          // 设置y轴的相关配置
          yAxis: [
            {//第一个y轴位置在左侧
              position: 'left',
              type: 'value',  // 数据作为刻度文字
              name: this.y_name,
              nameLocation: 'center',
              nameGap: '45',
              // Y轴显示
              axisLine: {
                show: false, //去除轴线
                lineStyle: {
                  color: this.color[0]
                }
              },
              axisTick: {
                show: false  //去除刻度线
              },
              boundaryGap: false, //去除轴内间距
              // 修改Y轴分隔线的线条颜色
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'dotted',
                  color: 'rgba(155, 155, 155, 0.5)'
                }
              },
              axisLabel: {
                show: false, //去除Y轴标签显示
                textStyle: {
                  color: this.color[0], //文本颜色
                  fontSize: 11
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
            {//第二个y轴位置在左侧
              position: 'left',
              offset: 30,
              type: 'value',  // 数据作为刻度文字
              name: this.y_name,
              nameLocation: 'center',
              nameGap: '45',
              // Y轴显示
              axisLine: {
                show: false, //去除轴线
                lineStyle: {
                  color: this.color[1]
                }
              },
              axisTick: {
                show: false  //去除刻度线
              },
              boundaryGap: false, //去除轴内间距
              // 修改Y轴分隔线的线条颜色
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'dotted',
                  color: 'rgba(155, 155, 155, 0.5)'
                }
              },
              axisLabel: {
                show: false, //去除Y轴标签显示
                textStyle: {
                  color: this.color[1], //文本颜色
                  fontSize: 11
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
            }
          ],
          // 系列图表配置，决定显示哪种类型的图表及其数据
          series: this.series_data,
        };

        // 给echarts对象添加option
        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize', function () { myChart.resize() });
      },
    },
    mounted() {
      // console.log('mounted测试');
      // console.log(this.cData);
      // console.log(this.title);
      // console.log(this.series_data);
      // console.log(this.x_name);
      // console.log(this.y_name);
      // console.log(this.chart_height);
      // console.log(this.chart_width);
      // console.log(this.styleObj.height);
      // console.log(this.styleObj.width);
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

  .slotbox {
    position: absolute;
    top: '0rem'
  }
</style>