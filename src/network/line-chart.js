// 传递参数为series，title，legend_data, axis_data

// 需要改造为kidney
let seriesData = [10, 52, 200, 334, 390, 330, 220];
let xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let legendData = [];

let linedata = {
  title: '该line图标题',
  legend_data: legendData,
  axis_data: xAxisData,
  series_data: [
    {
      // name: '直接访问',
      type: 'line',
      barWidth: '35%',
      data: seriesData,
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }
  ]
}

export {
  linedata

}