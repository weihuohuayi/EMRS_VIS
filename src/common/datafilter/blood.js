
export default function getBloodData(labdata) {
  for (var key in targetContent) {
    for (var item in labdata) {
      if (key == item) {
        targetContent[key] = labdata[item]
      }
    }
  }


  // 创建化验结果对象
  var option_main = {
    legend_data: ['红细胞计数', '白细胞计数', '血小板计数'],
    series_data: [
      {
        name: "红细胞计数",
        // 数据
        data: getCoords("红细胞计数", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        // markPoint: {
        //   label: {
        //     normal: {
        //       show: true,
        //       backgroundColor: '#fff',
        //       position: 'left',  // top 
        //       // color: '#41D6C3',
        //       // borderColor: 'rgba(65,214,195,0.3)',
        //       // borderWidth: 1,
        //       // padding: 8,${unit}
        //       formatter: `{b}: {c} μg/L(FEU)`
        //     }
        //   },
        //   symbol: 'circle',
        //   itemStyle: {
        //     normal: {
        //       borderColor: 'rgba(90,170,250,0.3)',
        //       borderWidth: 15
        //     }
        //   },
        //   symbolSize: 7,
        //   data: [
        //     { type: 'max', name: 'Max' }
        //   ]
        // },
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,


          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为5.5的水平线', yAxis: 5.5,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "RBC↑：5.5",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为4的水平线', yAxis: 4,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "RBC↓：4.0",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
      },
      {
        name: "白细胞计数",
        // 数据
        data: getCoords("白细胞计数", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为10的水平线', yAxis: 10,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "WBC↑：10",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为4的水平线', yAxis: 4,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "WBC↓：4.0",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,

      },
      {
        name: "血小板计数",
        // 数据
        data: getCoords("血小板计数", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 1,
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为300的水平线', yAxis: 300,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "PLT↑：300",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为100的水平线', yAxis: 100,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "PLT↓：100",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {

        }
      }
    ]
  }
  // "红系",
  var option_red = {
    // legend_data: ['血红蛋白', '红细胞平均血红蛋白量', '红细胞平均血红蛋白浓度','红细胞平均容积','红细胞压积','红细胞分布宽度'],

    series_data: [
      {
        name: "Hb(g/L)",
        // 数据
        data: getCoords("血红蛋白", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,

        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为160的水平线', yAxis: 160,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Hb↑：160",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为120的水平线', yAxis: 120,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Hb↓：120",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "Hct(%)",
        // 数据
        data: getCoords("红细胞压积", targetContent).map(function (i) { return [i[0], i[1] * 100]; }),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为50的水平线', yAxis: 50,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Hct↑：50",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为40的水平线', yAxis: 40,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Hct↓：40",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "MCH(pg)",
        // 数据
        data: getCoords("红细胞平均血红蛋白量", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为32的水平线', yAxis: 32,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Hb↑：32",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为26的水平线', yAxis: 26,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Hb↓：26",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "MCHC(g/L)",
        // 数据
        data: getCoords("红细胞平均血红蛋白浓度", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 1,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为380的水平线', yAxis: 380,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MCHC↑：380",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为320的水平线', yAxis: 320,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MCHC↓：320",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "MCV(fl)",
        // 数据
        data: getCoords("红细胞平均容积", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为94的水平线', yAxis: 94,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MCV↑：94",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为84的水平线', yAxis: 84,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MCV↓：84",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "RDW(%)",
        // 数据
        data: getCoords("红细胞分布宽度", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为14的水平线', yAxis: 14,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "RDW↑：14",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },

    ]
  }
  // 白系
  var option_white_abs = {
    // legend_data: ['中性粒细胞绝对值', '嗜酸性粒细胞绝对值', '嗜碱性粒细胞绝对值', '单核细胞绝对值', '淋巴细胞绝对值'],


    series_data: [
      {
        name: "中性粒",
        // 数据
        data: getCoords("中性粒细胞绝对值", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,

        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为7的水平线', yAxis: 7,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "NEU↑：7",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为2的水平线', yAxis: 2,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "NEU↓：2",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "嗜酸",
        // 数据
        data: getCoords("嗜酸性粒细胞绝对值", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为1的水平线', yAxis: 1,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "EOS↑：1",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "嗜碱",
        // 数据
        data: getCoords("嗜碱性粒细胞绝对值", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为0.1的水平线', yAxis: 0.1,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "BAS↑：0.1",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "单核",
        // 数据
        data: getCoords("单核细胞绝对值", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为1.2的水平线', yAxis: 1.2,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MONO↑：1.2",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为0.2的水平线', yAxis: 0.2,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MONO↓：0.2",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "淋巴",
        // 数据
        data: getCoords("淋巴细胞绝对值", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为4的水平线', yAxis: 11,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "LYM↑：4",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为0.8的水平线', yAxis: 0.8,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "LYM↓：0.8",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
    ]
  }

  var option_white_percent = {
    // legend_data: ['中性粒细胞百分比', '嗜酸性粒细胞百分比', '嗜碱性粒细胞百分比', '单核细胞百分比', '淋巴细胞百分比'],


    series_data: [
      {
        name: "中性粒",
        // 数据
        data: getCoords("中性粒细胞百分比", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,

        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为70的水平线', yAxis: 70,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "NEU↑：70%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为50的水平线', yAxis: 50,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "NEU↓：50%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "嗜酸",
        // 数据
        data: getCoords("嗜酸性粒细胞百分比", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为10的水平线', yAxis: 10,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "EOS↑：10%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "嗜碱",
        // 数据
        data: getCoords("嗜碱性粒细胞百分比", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为1的水平线', yAxis: 1,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "BAS↑：1%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "单核",
        // 数据
        data: getCoords("单核细胞百分比", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为12的水平线', yAxis: 12,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MONO↑：12%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为4的水平线', yAxis: 4,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MONO↓：4%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "淋巴",
        // 数据
        data: getCoords("淋巴细胞百分比", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为40的水平线', yAxis: 40,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "LYM↑：40%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为20的水平线', yAxis: 20,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "LYM↓：20%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
    ]
  }
  // 血小板质量
  var option_plt = {
    // legend_data: ['血小板压积', '血小板平均体积'],


    series_data: [
      {
        name: "Pct(%)",
        // 数据
        data: getCoords("血小板压积", targetContent).map(function (i) { return [i[0], i[1] * 100]; }),
        // 图表类型
        type: "line",
        yAxisIndex: 0,

        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为25的水平线', yAxis: 25,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Pct↑：25%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为10的水平线', yAxis: 10,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "Pct↓：10%",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
      {
        name: "MPV(fl)",
        // 数据
        data: getCoords("血小板平均体积", targetContent),
        // 图表类型
        type: "line",
        yAxisIndex: 0,
        //警示线
        markLine: {
          symbol: markline_symbol,

          //警示线标签
          label: markline_label,
          //警示线的样式，虚实  颜色
          lineStyle: markline_lineStyle,

          data: [
            //可以有多条警示线，另外多条警示线还可以对应不同的yAxis，
            //name警示线命名，type值有 max min average，
            // { type: 'average', name: '平均值' }
            //警示线标签及样式单独设置
            {
              name: 'Y轴值为11的水平线', yAxis: 11,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MPV↑：11",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: 'Y轴值为7的水平线', yAxis: 7,
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: "MPV↓：7",
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 圆滑连接
        smooth: true,
        itemStyle: {
          // normal: { label: { show: true } }  // 显示每个坐标点的值
        }
      },
    ]
  }

  return {
    //'三系'
    bloodMain: option_main,
    // '红系'
    bloodRed: option_red,
    // '白系'
    bloodWhite: {
      'option_white_abs': option_white_abs,
      'option_white_pct': option_white_percent
    },
    // '血小板'
    bloodPlt: option_plt,
  }
}




// 设置血液学结果的模板
var targetContent = {
  //血液一般情况

  // 血液细胞绝对值
  "红细胞计数": '',
  "白细胞计数": '',
  "血小板计数": '',

  // 红细胞质量
  "红细胞分布宽度": '',
  "红细胞压积": '',
  "红细胞平均容积": '',
  "红细胞平均血红蛋白浓度": '',
  "红细胞平均血红蛋白量": '',
  "血红蛋白": '',

  // 白细胞质量
  "中性粒细胞绝对值": '',
  "嗜碱性粒细胞绝对值": '',
  "嗜酸性粒细胞绝对值": '',
  "单核细胞绝对值": '',
  "淋巴细胞绝对值": '',
  // 血液细胞百分比
  "中性粒细胞百分比": '',
  "嗜碱性粒细胞百分比": '',
  "嗜酸性粒细胞百分比": '',
  "单核细胞百分比": '',
  "淋巴细胞百分比": '',



  // 血小板质量
  "血小板平均体积": '',
  "血小板压积": '',

  // "红细胞沉降率":'',
  // "血小板抗体":'',

  // "血浆纤维蛋白原":'',

  // "血浆纤维蛋白原":'',
}

// 快捷获取坐标值工具
function getCoords(item, targetContent) {
  var itemList = []
  // var item ='红细胞计数'
  for (var key in targetContent[item]) {
    // ['2020-06-18 09:52:43', 1.0]
    var li = [key, targetContent[item][key]['化验结果']]
    itemList.push(li)
  }
  // console.log('list')
  // console.log(itemList)
  return itemList
}


// var markline_symbol= ['circle', 'arrow'],    //表示箭头从左向右
//var markline_symbol=['arrow', 'circle'], //表示箭头从右向左
var markline_symbol = "none"            //表示没有箭头的直线

//警示线标签
var markline_label = {
  show: true,
  position: "middle",    //将警示值放在哪个位置，start middle end 开头 中间 结尾
  formatter: "参考范围",   //警示线上显示内容
}

//警示线的样式，虚实  颜色
var markline_lineStyle = {
  // type: "solid",
  // color: "#FF4B5C",
}





