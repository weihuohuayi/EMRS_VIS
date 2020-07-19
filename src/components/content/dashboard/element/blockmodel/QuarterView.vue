<template>
  <div class="wrap">
    <div class="channel panel">
      <div class="inner">
        <h3>渠道分布</h3>
        <div class="data">
          <div class="item" v-for="ob in channel.data1" :key="ob.id">
            <h4>
              {{ob.number}}
              <small>%</small>
            </h4>
            <span>
              <i :class="ob.logo"></i>
              {{ob.name}}
            </span>
          </div>
        </div>

        <div class="data">
          <div class="item" v-for="ob in channel.data2" :key="ob.id">
            <h4>
              {{ob.number}}
              <small>%</small>
            </h4>
            <span>
              <i :class="ob.logo"></i>
              {{ob.name}}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="quarter panel">
      <div class="inner">
        <h3>{{quarter.title}}</h3>
        <div class="chart">

          <!-- <div class="box"> -->
            <div class="gauge" id="gaugeQuarter" style="width: 140px;height: 60px"></div>
            <!-- <div class="label">
              &nbsp;{{quarter.speed}}
            <small>%</small>-->
            <!-- </div> -->
          <!-- </div> -->

          <div class="data">
            <div class="item">
              <h4>{{quarter.saleValue}}</h4>
              <span>
                <i class="icon-dot" style="color: #6acca3"></i>
                销售额(万元)
              </span>
            </div>
            <div class="item">
              <h4>{{quarter.incValue}}</h4>
              <span>
                <i class="icon-dot" style="color: #ed3f35"></i>
                同比增长
              </span>
            </div>
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
      channel: {
        title: "渠道分布",
        data1: [
          {
            id: 1,
            name: "机场",
            number: 39,
            logo: "icon-plane"
          },
          {
            id: 2,
            name: "商场",
            number: 28,
            logo: "icon-bag"
          }
        ],
        data2: [
          {
            id: 3,
            name: "地铁",
            number: 20,
            logo: "icon-train"
          },
          {
            id: 4,
            name: "火车站",
            number: 13,
            logo: "icon-bus"
          }
        ]
      },
      quarter: {
        title: "一季度销售进度",
        speed: 75,
        saleValue: 1321,
        incValue: 150
      },
      option: {
        grid: {
          // 直角坐标系内绘图网格
          left: "15", //grid 组件离容器左侧的距离,
          //left的值可以是80这样具体像素值，
          //也可以是'80%'这样相对于容器高度的百分比
          top: "-10",
          right: "30",
          bottom: "0",
          containLabel: true //gid区域是否包含坐标轴的刻度标签。为true的时候，
          // left/right/top/bottom/width/height决定的是包括了坐标轴标签在内的
          //所有内容所形成的矩形的位置.常用于【防止标签溢出】的场景
        },
        xAxis: {
          //直角坐标系grid中的x轴,
          //一般情况下单个grid组件最多只能放上下两个x轴,
          //多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
          type: "value", //坐标轴类型,分别有：
          //'value'-数值轴；'category'-类目轴;
          //'time'-时间轴;'log'-对数轴
          splitLine: { show: false }, //坐标轴在 grid 区域中的分隔线
          axisLabel: { show: false }, //坐标轴刻度标签
          axisTick: { show: false }, //坐标轴刻度
          axisLine: { show: false } //坐标轴轴线
        },
        yAxis: {
          type: "category",
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: "black",
            fontSize: 36
          },
          //类目数据，在类目轴（type: 'category'）中有效。
          //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
        },
        series: [
          //系列列表。每个系列通过 type 决定自己的图表类型
          {
            name: "%", //系列名称
            type: "bar", //柱状、条形图
            barWidth: 19, //柱条的宽度,默认自适应
            data: [50], //系列中数据内容数组
            label: {
              //图形上的文本标签
              show: true,
              position: "right", //标签的位置
              offset: [-10, 18], //标签文字的偏移，此处表示向上偏移40
              formatter: "{c}{a}", //标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
              color: "white", //标签字体颜色
              fontSize: 10 //标签字号
            },
            itemStyle: {
              //图形样式
              normal: {
                //normal 图形在默认状态下的样式;
                //emphasis图形在高亮状态下的样式
                barBorderRadius: 10, //柱条圆角半径,单位px.
                //此处统一设置4个角的圆角大小;
                //也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下
                color: this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#22B6ED" //柱图渐变色起点颜色
                  },
                  {
                    offset: 1,
                    color: "#3FE279" //柱图渐变色终点颜色
                  }
                ])
              }
            },
            zlevel: 1 //柱状图所有图形的 zlevel 值,
            //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
          },
          {
            name: "进度条背景",
            type: "bar",
            barGap: "-100%", //不同系列的柱间距离，为百分比。
            // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
            // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
            //并且是对此坐标系中所有 'bar' 系列生效。
            barWidth: 19,
            data: [100],
            color: "#151B87", //柱条颜色
            itemStyle: {
              normal: {
                barBorderRadius: 10
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    const ec = this.$echarts.init(document.getElementById("gaugeQuarter"));
    ec.setOption(this.option);
  }
};
</script>

<style>
.wrap {
  display: flex;
  flex-direction: row;
}
.channel,
.quarter {
  flex: 1;
  /* height: 9.667rem; */
}
.channel {
  margin-right: 0.833rem;
}
.channel .data {
  overflow: hidden;
}
.channel .item {
  margin-top: 0.85rem;
}
.channel .item:first-child {
  float: left;
}
.channel .item:last-child {
  float: right;
}
.channel h4 {
  /* color: #fff; */
  font-size: 1.333rem;
  margin-bottom: 0.2rem;
}
.channel small {
  font-size: 50%;
}
.channel span {
  display: block;
  color: #4c9bfd;
  font-size: 0.583rem;
}
.quarter .inner {
  display: flex;
  flex-direction: column;
  margin: 0 -0.25rem;
}
.quarter .chart {
  flex: 1;
  padding-top: 0.75rem;
}
.quarter .box {
  position: relative;
}
.quarter .label {
  transform: translate(-50%, -30%);
  color: #fff;
  font-size: 1.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
}
.quarter .label small {
  font-size: 50%;
}
.quarter .gauge {
  height: 3.5rem;
}
.quarter .data {
  display: flex;
  justify-content: space-between;
}
.quarter .item {
  width: 50%;
}
.quarter h4 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.4rem;
}
.quarter span {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #4c9bfd;
  font-size: 0.583rem;
}
</style>