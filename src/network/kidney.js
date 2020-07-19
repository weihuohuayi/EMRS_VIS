import Utils from 'common/utils'

// kidney

export class kidneyLabResult {
  constructor(kidneyres) {
    this.title = '肾脏功能',
      this.legend_data
    this.axis_data
    this.series_data = getSeriesDataList(kidneyres)
  }
}

function getAxisDataList(results) {

}


function getSeriesDataList(results) {
  const series_data = []
  var index = 0
  for (var item in results) {
    series_data[index] = {
      name: item,
      type: 'line',// 图表类型
      // barWidth: '35%',
      data: results[item], // 数据
      smooth: true,// 圆滑连接
      itemStyle: {
        // 修改柱子圆角
        // barBorderRadius: 5
      }
    }
    index = index + 1
  }
  return series_data
}


