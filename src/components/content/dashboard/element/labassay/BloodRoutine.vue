<template>
  <div class="panel labassay ">
    <div class="inner">
      <div class="caption">
        <h3>
          <i class="icon-cube" style="color: #ed3f35;"></i>
          {{title}}</h3>
      </div>
      <div class="chart">
        <!-- <div class="label">单位:万</div> -->
        <!-- 开放插槽 -->
        <slot name="table"></slot>
        <slot name="quarter-table"></slot>
        <div class='quater-chart'>
          <div class='slot'>
            <slot name="chart-left-top"></slot>
          </div>
          <div class='slot'>
            <slot name="chart-right-top"></slot>
          </div>
          <div class='slot'>
            <slot name="changeShow"></slot>
            <slot name="chart-left-bottom"></slot>
          </div>
          <div class='slot'>
            <slot name="chart-right-bottom"></slot>
          </div>
        </div>

      </div>
      <div class="pannel-foot">
        <p>提示信息:
        <ul>
          <li>感染：白细胞看总数，中性粒和淋巴看比例</li>
          <li>贫血: 红细胞看总数、血红蛋白看含量 60-90-120</li>
          <li>凝血：血小板100-300</li>
        </ul>
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: "血液系统：血常规",
      }
    }
  };
</script>

<style>
  .labassay {
    /* height:auto;  */
  }

  .labassay .caption {
    display: flex;
    line-height: 1;
    /* flex 水平居中 */
    /* justify-content: center; */
    /* flex 垂直居中 */
    align-items: center;
  }





  .labassay a {
    padding: 0.167rem;
    font-size: 0.667rem;
    margin: 0.125rem 0 0 0.875rem;
    border-radius: 0.25rem;
    color: #0bace6;
    text-decoration: none;
    /* 去除超链接下划线 */
  }

  .labassay a.active {
    background-color: #4c9bfd;
    color: #fff;
  }

  .labassay .inner {
    display: flex;
    flex-direction: column;
  }



  .labassay .chart .quater-chart {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    /* padding-top: 0.6rem; */
    position: relative;
  }

  .pannel-foot p {
    padding-left: 0.2rem;
    margin-left: 0.2rem;
    border-left: 2px solid #00f2f1;
  }
</style>