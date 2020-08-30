import echarts from 'echarts'

export default function getBloodBiochemData(labdata) {
  for (var key in targetContent) {
    for (var item in labdata) {
      if (key == item) {
        targetContent[key] = labdata[item]
      }
    }
  }


  // 创建化验结果对象
  // 黄疸
  var option_jaundice = {
    legend_data: legend_data_jaundice,
    xAxis: getxAxisArray(legend_data_jaundice),
    yAxis: getyAxisArray(legend_data_jaundice, jaundice_series_param),
    grid: getGridArray(legend_data_jaundice, jaundice_series_param),
    series_data: getSeriesArray(jaundice_series_param),
    visual_map: getVisualMap(jaundice_series_param)
  }

  // "肝功",
  var option_hepatocyte = {
    legend_data: legend_data_hepatocyte,
    xAxis: getxAxisArray(legend_data_hepatocyte),
    yAxis: getyAxisArray(legend_data_hepatocyte, hepatocyte_series_param),
    grid: getGridArray(legend_data_hepatocyte, hepatocyte_series_param),
    series_data: getSeriesArray(hepatocyte_series_param),
    visual_map: getVisualMap(hepatocyte_series_param)

  }

  // "血脂",
  var option_lipid = {
    legend_data: legend_data_lipid,
    xAxis: getxAxisArray(legend_data_lipid),
    yAxis: getyAxisArray(legend_data_lipid, lipid_series_param),
    grid: getGridArray(legend_data_lipid, lipid_series_param),
    series_data: getSeriesArray(lipid_series_param),
    visual_map: getVisualMap(lipid_series_param)

  }

  // "肾功",
  var option_kidney = {
    legend_data: legend_data_kidney,
    xAxis: getxAxisArray(legend_data_kidney),
    yAxis: getyAxisArray(legend_data_kidney, kidney_series_param),
    grid: getGridArray(legend_data_kidney, kidney_series_param),
    series_data: getSeriesArray(kidney_series_param),
    visual_map: getVisualMap(kidney_series_param)
  }

  // "电解质",

  var option_electrolyte = {
    legend_data: legend_data_electrolyte,
    xAxis: getxAxisArray(legend_data_electrolyte),
    yAxis: getyAxisArray(legend_data_electrolyte, electrolyte_series_param),
    grid: getGridArray(legend_data_electrolyte, electrolyte_series_param),
    series_data: getSeriesArray(electrolyte_series_param),
    visual_map: getVisualMap(electrolyte_series_param)
  }


  return {
    //'黄疸'
    biochemJaundice: option_jaundice,
    // '肝细胞'
    biochemHepatocyte: option_hepatocyte,
    // '血脂'
    biochemLipid: option_lipid,
    // '电解质'
    biochemElectrolyte: option_electrolyte,
    // '肾功'
    biochemKidney: option_kidney
  }
}




// 变量
var legend_data_jaundice = ['总胆红素', '直接胆红素', '间接胆红素', '溶血', '黄疸']
var jaundice_series_param = [
  { 'name': 'TBil', 'CNname': '总胆红素', 'ref': { 'max': 21, 'min': 5 }, },
  { 'name': 'DBil', 'CNname': '直接胆红素', 'ref': { 'max': 6.0, 'min': NaN }, },
  { 'name': 'IBil', 'CNname': '间接胆红素', 'ref': { 'max': 20.0, 'min': 5.0 }, },

  { 'name': 'Hemolysis', 'CNname': '溶血', 'ref': { 'max': NaN, 'min': NaN }, },
  { 'name': 'Jaundice', 'CNname': '黄疸', 'ref': { 'max': NaN, 'min': NaN }, },
]

var legend_data_hepatocyte = ['白蛋白', '视黄醇结合蛋白', '谷丙转氨酶', '谷草转氨酶', 'r-谷氨酰转肽酶', '碱性磷酸酶', '总胆汁酸', 'IV胶原测定', 'α- L-岩藻糖苷酶', "甘氨酰脯氨酸氨基肽酶", "血胆碱脂酶", "血清纤维连接蛋白"]
var hepatocyte_series_param = [
  { 'name': 'ALB', 'CNname': '白蛋白', 'ref': { 'max': 55, 'min': 40 }, },
  { 'name': 'RBP', 'CNname': '视黄醇结合蛋白', 'ref': { 'max': 70, 'min': 25 }, },
  { 'name': 'ALT', 'CNname': '谷丙转氨酶', 'ref': { 'max': 45, 'min': NaN }, },
  { 'name': 'AST', 'CNname': '谷草转氨酶', 'ref': { 'max': 50, 'min': NaN }, },
  { 'name': 'γ-GT', 'CNname': 'r-谷氨酰转肽酶', 'ref': { 'max': 64, 'min': 9 }, },
  { 'name': 'ALB', 'CNname': '碱性磷酸酶', 'ref': { 'max': 120, 'min': 30 }, },
  { 'name': 'TBA', 'CNname': '总胆汁酸', 'ref': { 'max': 10, 'min': NaN }, },
  { 'name': 'IV-Col', 'CNname': 'IV胶原测定', 'ref': { 'max': 140, 'min': NaN }, },
  { 'name': 'AFU', 'CNname': 'α- L-岩藻糖苷酶', 'ref': { 'max': 40, 'min': NaN }, },
  { 'name': 'GPDA', 'CNname': '甘氨酰脯氨酸氨基肽酶', 'ref': { 'max': 84, 'min': 38 }, },
  { 'name': 'CHE', 'CNname': '血胆碱脂酶', 'ref': { 'max': 10, 'min': 4 }, },
  { 'name': 'FN', 'CNname': '血清纤维连接蛋白', 'ref': { 'max': 652, 'min': 246 }, },
]



var legend_data_lipid = ['总胆固醇', 'HDL-胆固醇', 'LDL-胆固醇', '小而密低密度脂蛋白胆固醇', '甘油三酯', '游离脂肪酸', '葡萄糖', '糖化白蛋白/白蛋白', '糖化白蛋白I', '糖化白蛋白II', 'β羟丁酸']
var lipid_series_param = [
  { 'name': 'TC', 'CNname': '总胆固醇', 'ref': { 'max': 21, 'min': 5 }, },
  { 'name': 'HDL-C', 'CNname': 'HDL-胆固醇', 'ref': { 'max': 2.19, 'min': 0.9 }, },
  { 'name': 'LDL-C', 'CNname': 'LDL-胆固醇', 'ref': { 'max': 3.36, 'min': NaN }, },
  { 'name': 's-LDL-C', 'CNname': '小而密低密度脂蛋白胆固醇', 'ref': { 'max': 1.17, 'min': 0.25 }, },
  { 'name': 'TG', 'CNname': '甘油三酯', 'ref': { 'max': 1.70, 'min': NaN }, },
  { 'name': 'FFA', 'CNname': '游离脂肪酸', 'ref': { 'max': 769, 'min': 129 }, },
  { 'name': 'Glu', 'CNname': '葡萄糖', 'ref': { 'max': 6.1, 'min': 3.9 }, },
  { 'name': 'GA/ALB', 'CNname': '糖化白蛋白/白蛋白', 'ref': { 'max': 16, 'min': 11 }, },
  { 'name': 'GA-I', 'CNname': '糖化白蛋白I', 'ref': { 'max': NaN, 'min': NaN }, },
  { 'name': 'GA-II', 'CNname': '糖化白蛋白II', 'ref': { 'max': NaN, 'min': NaN }, },
  { 'name': 'β-HB', 'CNname': 'β羟丁酸', 'ref': { 'max': 0.3, 'min': 0.03 }, },
]





var legend_data_kidney = ['肌酐', '尿素氮', '尿酸', '血清胱抑素C', '中性粒细胞明胶酶相关脂质运载蛋白测定']
var kidney_series_param = [
  { 'name': 'Scr', 'CNname': '肌酐', 'ref': { 'max': 106, 'min': 40 }, },
  { 'name': 'BUN', 'CNname': '尿素氮', 'ref': { 'max': 8.0, 'min': 2.8 }, },
  { 'name': 'Cl-', 'CNname': '尿酸', 'ref': { 'max': 428, 'min': 208 }, },
  { 'name': 'Cys C', 'CNname': '血清胱抑素C', 'ref': { 'max': 1.25, 'min': 0.63 }, },
  { 'name': 'NGAL', 'CNname': '中性粒细胞明胶酶相关脂质运载蛋白测定', 'ref': { 'max': 180, 'min': NaN }, },
]


var legend_data_electrolyte = ['钠', '钾', '氯', '钙', '磷', '镁']
var electrolyte_series_param = [
  { 'name': 'Na+', 'CNname': '钠', 'ref': { 'max': 145, 'min': 135 }, },
  { 'name': 'K+', 'CNname': '钾', 'ref': { 'max': 5.5, 'min': 3.5 }, },
  { 'name': 'Cl-', 'CNname': '氯', 'ref': { 'max': 106, 'min': 96 }, },
  { 'name': 'Ca2+', 'CNname': '钙', 'ref': { 'max': 2.65, 'min': 2.2 }, },
  { 'name': 'PO4', 'CNname': '磷', 'ref': { 'max': 1.45, 'min': 0.8 }, },
  { 'name': 'Mg2+', 'CNname': '镁', 'ref': { 'max': 1.03, 'min': 0.77 }, },
]













// 函数

function getxAxisArray(legend_data) {
  var xAxis = []
  for (var i = 0; i < legend_data.length; i++) {
    xAxis.push({
      gridIndex: i,
      show: false,
      type: 'time',
      boundaryGap: false,
    })
  }
  return xAxis
}

function getyAxisArray(legend_data, series_param) {
  var yAxis = []
  for (var i = 0; i < legend_data.length; i++) {
    // console.log('测试yAxis')
    // 获取检测值和参考值中最大值的数值
    let max = getCurveExtremum(legend_data[i], series_param[i]).max
    let min = getCurveExtremum(legend_data[i], series_param[i]).min

    // chart的高度比例系数
    let diff = (max - min) / 4
    // console.log(series_param[i]);
    // console.log(min);

    yAxis.push(
      {
        gridIndex: i,
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        splitNumber: 1,
        name: legend_data[i],
        nameLocation: 'right',
        nameRotate: 360,
        z: 1,  //防止文字被图像遮挡
        nameTextStyle: {
          backgroundColor: '#CC6666',
          color: 'white',
          fontWeight: 'bold',
          padding: 4,
          align: 'center',
          verticalAlign: 'middle',

        },
        // 截取Y轴一部分显示
        max: max + diff,
        min: min - diff,

      }
    )
  }
  return yAxis
}


function getGridArray(legend_data, series_param) {
  let grid = []

  // 第一张chart的上边距
  let digit_top = 30 / legend_data.length
  let digit_bottom = 40 / legend_data.length
  let height = (100 - digit_top - digit_bottom) / legend_data.length
  // chart的左边距
  let left = '15%'

  // for (var i = 0; i < legend_data.length; i++) {
  //   // 获取检测值和参考值中最大值的数值
  //   let max = getCurveExtremum(legend_data[i], series_param[i]).max

  //   if (max == 0) {
  //     max = max + 3
  //   }
  //   else {
  //     max = max * ratio
  //   }

  //   if (i < legend_data.length) {
  //     grid.push(
  //       {
  //         top: digit_top + '%',
  //         height: max + '%',
  //         left: left
  //       }
  //     )
  //   }
  //   else {
  //     grid.push(
  //       {
  //         bottom: '2%',
  //         height: max + '%',
  //         left: left
  //       }
  //     )
  //   }
  //   digit_top = digit_top + max
  // }
  for (var i = 0; i < legend_data.length; i++) {
    if (i < legend_data.length) {
      grid.push(
        {
          top: digit_top + '%',
          height: height + '%',
          left: left
        }
      )
    }
    else {
      grid.push(
        {
          bottom: digit_bottom + '%',
          height: height + '%',
          left: left
        }
      )

    }
    digit_top = digit_top + height
  }

  return grid
}






function getSeriesArray(series_param) {
  var series_data = []
  for (var i = 0; i < series_param.length; i++) {
    let ymin = isNaN(series_param[i]['ref']['min']) ? 0 : series_param[i]['ref']['min']
    series_data.push(
      {
        name: series_param[i]['name'],
        // 数据
        data: getCoords(series_param[i]['CNname'], targetContent),
        // 图表类型
        type: "line",
        xAxisIndex: i,
        yAxisIndex: i,
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
              name: '上限的水平线', yAxis: series_param[i]['ref']['max'],
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: series_param[i]['name'] + "↑：" + series_param[i]['ref']['max'],
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
            //两个坐标之间的标线
            {
              name: '下限的水平线', yAxis: series_param[i]['ref']['min'],
              label: {
                show: true,
                position: "middle", // label标签内容所在位置为中间
                formatter: series_param[i]['name'] + "↓：" + series_param[i]['ref']['min'],
              },
              lineStyle: {
                // type: "solid",
                // color: "#FF4B5C",
              },
            },
          ]
        },
        // 折线区域背景填充图，定义区域范围并填充颜色
        markArea: {
          silent: false,
          itemStyle: {
            color: 'gray',  //BCE7B1  B8C4F1
            opacity: 0.2
          },
          data: [
            [{
              name: '',
              yAxis: ymin
            },
            {
              yAxis: series_param[i]['ref']['max']
            }]
          ],
        },

        // 圆滑连接
        smooth: true,
        // areaStyle: {},  //线下面积背景
        lineStyle: {
          width: 3,
          type: 'solid',

          //线条渐变色
          // color: new echarts.graphic.LinearGradient(
          //   0, 1, 0, 0, [       //4个参数用于配置渐变色的起止位置 右/下/左/上  
          //   { offset: 0, color: '#00FFFF' },
          //   { offset: 0.5, color: '#FFF565' },
          //   { offset: 1, color: '#FE4365' }
          // ]
          // ),
          // opacity: 1    // 填充区域透明度

        },
        // itemStyle: {
        //   normal: {
        //   }
        // }
      }
    )
  }
  return series_data
}

// 折线不同区域显示不同颜色
function getVisualMap(series_param) {
  var visual_map = []

  for (var i = 0; i < series_param.length; i++) {
    let ymin = isNaN(series_param[i]['ref']['min']) ? 0 : series_param[i]['ref']['min']
    let ymax = isNaN(series_param[i]['ref']['max']) ? 0.000000001 : series_param[i]['ref']['max']
    visual_map.push(
      {
        show: false,
        seriesIndex: i,
        pieces: [
          {
            gt: -Infinity,
            // lte: series_param[i]['ref']['min'],
            lte: ymin,
            color: 'green'  //0000FF  00FFFF
          },
          {
            // gt: series_param[i]['ref']['min'],
            gt: ymin,
            // lte: series_param[i]['ref']['max'],
            lte: ymax,
            color: '#FFF565'  //FFF565  D5D5D5
          },
          {
            gt: ymax,
            // gt: series_param[i]['ref']['max'],
            lte: Infinity,
            // let: 100,
            color: '#e91642'  //FE4365  e91642
          }
        ]
      }
    )
  }
  return visual_map

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



function getCurveExtremum(legend_data_i, series_param_i) {
  let max = Number(getCoords(legend_data_i, targetContent)[0][1])
  let min = Number(getCoords(legend_data_i, targetContent)[0][1])
  getCoords(legend_data_i, targetContent).forEach(item => max = Number(item[1]) > max ? Number(item[1]) : max)
  getCoords(legend_data_i, targetContent).forEach(item => min = Number(item[1]) < min ? Number(item[1]) : min)
  // console.log('测试Extremum检测值最小值');

  // console.log(getCoords(legend_data_i, targetContent));
  // console.log(min);

  try {
    if (!isNaN(series_param_i.ref.max)) {
      max = max > series_param_i.ref.max ? max : series_param_i.ref.max
      // console.log(max);
    }
    if (!isNaN(series_param_i.ref.min)) {
      min = min < series_param_i.ref.min ? min : series_param_i.ref.min
      // console.log(min);
    }
  }
  catch (err) {
  }
  finally {
    return {
      max: max,
      min: min
    }
  }
}



// 其他设置的固定参数变量


// var markline_symbol= ['circle', 'arrow'],    //表示箭头从左向右
//var markline_symbol=['arrow', 'circle'], //表示箭头从右向左
var markline_symbol = "none"            //表示没有箭头的直线

//警示线标签
var markline_label = {
  show: true,
  position: "middle",    //将警示值放在哪个位置，start middle end 开头 中间 结尾
  formatter: "手术时间",   //警示线上显示内容
}

//警示线的样式，虚实  颜色
var markline_lineStyle = {
  // type: "solid",
  // color: "#FF4B5C",
}






// 设置血液学结果的模板
var targetContent = {
  //肝功能


  // 肝脏
  "白蛋白": '',
  "视黄醇结合蛋白": '',
  "白蛋白/球蛋白": '',

  // 1%的肝细胞坏死，即可ALT升高1倍，最敏感
  "谷丙转氨酶": '',
  "谷草转氨酶": '',
  // 胆管阻塞
  "r-谷氨酰转肽酶": '',
  "碱性磷酸酶": '',
  // 肝纤维化
  "总胆汁酸": '',
  "IV胶原测定": '', //血管基底膜的主要成分，肝硬化的指标，其浓度与肝纤维化程度相关。
  // 肝癌
  'α- L-岩藻糖苷酶': '',
  "甘氨酰脯氨酸氨基肽酶": '',
  // 肝脏可以合成胆碱酯酶，肝病会引起胆碱酯酶活性下降
  "血胆碱脂酶": '',
  "血清纤维连接蛋白": '',  //急性肝炎、重症肝炎、失代偿的肝硬化和肝癌患者，含量显著降低。


  // 胆红素代谢
  "总胆红素": '',
  "直接胆红素": '',
  "间接胆红素": '',
  "溶血": '',
  "黄疸": '',



  //尿肾功能
  "中性粒细胞明胶酶相关脂质运载蛋白测定": '',
  "尿素氮": '',
  "肌酐": '',
  "尿酸": '',
  "血清胱抑素C": '',





  // 血脂代谢

  "总胆固醇": '',
  "HDL-胆固醇": '',
  "LDL-胆固醇": '',
  "小而密低密度脂蛋白胆固醇": '',
  "甘油三酯": '',
  "游离脂肪酸": '',



  // 血糖代谢，糖尿病
  "葡萄糖": '',
  "糖化白蛋白/白蛋白": '',
  "糖化白蛋白I": '',
  "糖化白蛋白II": '', //主要反映的是近2-3周平均的血糖水平
  // "糖化血红蛋白A1": '', //主要反映的是近2-3个月平均的血糖水平
  // "糖化血红蛋白A1c": '',

  "β羟丁酸": '',




  // 电解质electrolyte
  "钠": '',
  "钾": '',
  "氯": '',

  "钙": '',
  "磷": '',
  "镁": '',



  // 心肌酶谱
  "乳酸脱氢酶": '',
  "K(CK)": '',
  // 胰腺
  "脂肪酶": '',

}