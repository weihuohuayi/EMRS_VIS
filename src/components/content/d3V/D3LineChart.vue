<script>
  import * as d3 from "d3";
  import BaseChart from './D3BaseChart.vue';
  export default {
    name: 'LineChart',
    extends: BaseChart,
    props: {
      graphId: {
        type: String,
        required: true,
        default: 'myLineChart'
      },
      data: {
        type: Array,
        required: true,
        default: () => [
          //   {
          // 'name': 'D二聚体',
          // 'value': [{key: '2020-06-16', value: 10}, {key: '2020-06-17', value: 12}, {key: '2020-06-19', value: 13}, {key: '2020-06-20', value: 17}]
          //   },
        ]
      }
    },
    mounted() {
      this.draw();
    },
    watch: {
      data() {
        this.draw();
      }
    },
    methods: {

      draw() {
        // 定义时间解析函数
        let parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S") // %p:%M:%S
        // console.log(parseTime('2011-11-05 19:25:55')) 
        let dates = this.data.flatMap((d) => d.value.map(v => parseTime(v.key)))
        // console.log(dates)
        // console.log('最小日期')
        // console.log(d3.min(dates))
        // this.data.forEach((d, i, a) => a[i] = parse(d));

        // 比例尺
        let xScale = d3
          .scaleTime()
          .domain([d3.min(dates), d3.max(dates)]) // input
          .range([0, this.chart_width]); // output
        let yScale = d3
          .scaleLinear()
          .domain([0, d3.max(this.data.flatMap((d) => d.value.map(v => v.value))) + 2]) // input
          .range([this.chart_height, 0]); // output

        // 定义X轴与Y轴的格式：
        var xAxis = d3.axisBottom(xScale)
          .tickFormat(d => (d.getMonth() + 1) + '-' + d.getDate())  //d.getFullYear()   + d.getTime() 
        var yAxis = d3.axisLeft(yScale)
          .ticks(5);


        // 提取时间元素
        // let timeList=[]
        // for(var item in dataset[1].value){
        //   timeList.push(dataset[1].value[item].key)
        // }

        // 绘制X轴与Y轴：
        this.chart
          .append("g")
          .attr("class", "x axis")
          // .attr("transform", "translate(0," + this.chart_height + ")")
          .attr("transform", `translate(0, ${this.chart_height})`)
          .call(xAxis)
          .selectAll('text')  // `text` has already been created
          .attr('dx', -20)
          .attr('dy', 10)
          .attr('transform', 'rotate(-10)')
          .style('font-weight', 'bold')
          .selectAll('tspan')
          .data('1') // Returns two vals 如果写字符串是，则一个字符代表一个数据
          .enter()
          .append('tspan')
          .attr('x', 0)
          // .attr('dy', function (d, i) { return (2 * i + 1) + 'em'; })
          .attr('dy', function (d, i) { return 1 + 'em'; })
          .text(function (d, i) { return '☆'; });



        this.chart
          .append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .attr("transform", "rotate(0)")
          // .selectAll('text')
          // .style('font-weight', 'bold')
          .append("text")
          .attr("stroke", "gray")
          .attr("text-anchor", "end")
          .style("font-size", "10px")
          .style("font-style", "微软雅黑")
          .attr("transform", "translate(0,0)")
          .attr("dy", "1em")
          .text("数值");





        // 定义绘图线
        let lineGenerator = d3
          .line()
          .x(function (d, i) {
            return xScale(parseTime(d.key));
          })
          .y(function (d) {
            return yScale(d.value);
          })
          .curve(d3.curveMonotoneX)
        //.curve(d3.curveNatural)
        //.curve(d3.curveLinear)
        //.curve(d3.curveBasis);      //作用是 使线段变得缓和 //可以删除试下




        // 对数据进行绘图
        // 重新赋值数据
        var dataset = this.data;
        // 设置颜色
        // let colorZ = d3.scaleOrdinal(d3.schemeDark2)
        let colorZ = d3.scaleOrdinal(d3.schemeCategory10)
        dataset.forEach((v, vi) => {

          // 折线
          this.chart
            .append("path")
            .attr('fill', 'none')
            .attr('stroke', (d, i) => colorZ(vi))
            .attr("stroke-width", 2)
            .attr("d", lineGenerator(v.value))
            .attr("opacity", 0)
            // .ease(d3.easePolyOut)
            .call(function (path) {
              path
                .transition()  //添加动画
                .duration(2500) //设置动画持续时间
                .attr("opacity", 1)
                .attrTween("stroke-dasharray", function () {
                  var l = this.getTotalLength(),
                    i = d3.interpolateString("0," + l, l + "," + l);
                  return function (t) {
                    return i(t);
                  };
                })
                .style('stroke-dashoffset', function (d, i) {
                  return d3.select(this).node().getTotalLength();
                });
            })

          // 打点，做交互
          this.chart
            .selectAll(".dot")
            .data(v.value)
            .enter()
            .append("circle")
            .attr('id', (d, i) => 'c' + vi + i)
            .attr('stroke', '#fff')
            .attr('fill', (d, i) => colorZ(vi))
            .attr("cx", function (d, i) {
              let x = xScale(parseTime(d.key))
              //  if (i === v.value.length - 1) tp_x = x - 40
              return x
            })
            .attr("cy", function (d) {
              return yScale(d.value)
            })
            .attr("opacity", 0)
            .attr("r", 3)
            // 交互渐变动画
            .on("mouseover", (d, i) => {
              this.chart.select('#c' + vi + i)
                .transition()
                .duration(500)
                .attr('r', 7)
              var g = this.chart.append('g')
                .attr('id', `hoverg${vi}`)
                .attr("transform", "translate(" + (xScale(parseTime(d.key)) - 20) + "," + (yScale(d.value) + 30) + ")")
              g.append("rect")
                .attr("x", function (d) { return this.parentNode.getBBox().x - 3; })
                .attr("y", function (d, i) { return this.parentNode.getBBox().y - 20 })
                .attr("width", 110)
                .attr("height", 25)
                .style("fill", "#fffbf0")
              g.append('text')
                .text(`${d.key}`)
                .style("fill", colorZ(vi))
              g.append('text')
                .attr("transform", "translate(0,15)")
                .text(`Result:${d.value}`)
                .style("fill", colorZ(vi))
            })

            .on("mouseout", (d) => {
              this.chart.select(`#hoverg${vi}`).remove()
              this.chart.selectAll('circle')
                .transition()
                .duration(500)
                .attr('r', 3)
            })
            .transition()
            .duration(1000)
            .ease(d3.easePolyIn)
            .delay((d, i) => i * 200)
            .attr("opacity", 1)


          // 图例
          this.chart
            .selectAll('.legend')
            .data(v.name)
            .enter()
            .append('text')
            .attr('dx', 10)
            // .attr('dy', vi * 20 + 30)
            .attr('y', (d, i) => 15 + vi * 25)
            // .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
            .text(v.name)
            .style("fill", colorZ(vi))
            .style('font-weight', 'bold')
        })


        // 标题
        this.chart
          .append("g")
          .attr("class", "title")
          .append('text')
          .attr('transform', `translate(${this.chart_width / 2}, 8)`)
          .attr('font-size', '1.2em')
          .attr('text-anchor', 'middle')
          .style('font-weight', 'bold')
          .text('凝血谱')
          .attr('fill', 'black')






      }
    }
  };
</script>
<style>
  .dot {
    fill: #989a99;
    stroke: #fff;
  }

  .tick>line.currentColor {
    stroke: #989a99;
  }

  .x.axis>.tick>line {
    stroke: white;
  }

  .x.axis>.domain,
  .y.axis>.domain {
    stroke: #989a99;
  }

  .y.axis>.tick>line {
    stroke: #989a99;
  }

  .y.axis>.tick>text,
  .x.axis>.tick>text {
    color: #989a99;
  }
</style>