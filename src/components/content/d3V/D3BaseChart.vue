<template>
  <div :id="this.graphId"></div>
</template>
<script>
  import * as d3 from "d3";
  export default {
    name: 'BaseChart',
    props: {
      graphId: {
        type: String,
        required: true,
        default: 'myLineChart'
      },
      width: {
        type: String,
        default: '300',
      },
      height: {
        type: String,
        default: '300',
      },
    },
    mounted() {
      this.preDraw();
      this.draw();
    },
    methods: {
      redraw() {
        this.preDraw();
        this.draw();
        this.afterDraw();
      },
      preDraw() {
        /* 初始化：Remove all old charts */
        d3.select('#' + this.graphId).selectAll('svg').remove();

        //在id为this.graphId的div容器里添加svg元素，并设置svg画布的尺寸
        this.svg = d3.select('#' + this.graphId).append('svg')
          .attr('id', this.graphId)
          // .attr("class",svg_class)
          .attr('height', this.height)
          .attr('width', this.width);

        /* 定义基本数据 */
        // 边框数据
        var margin = { top: 10, right: 20, bottom: 30, left: 30 };

        // 设置svg内的chart图片的尺寸
        this.chart_width = this.width - margin.left - margin.right;
        this.chart_height = this.height - margin.top - margin.bottom;

        this.chart = this.svg
          .append('g')
          .attr("width", this.chart_width)
          .attr("height", this.chart_height)
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      },
      draw() { },
      afterDraw() { },
    }
  };
</script>