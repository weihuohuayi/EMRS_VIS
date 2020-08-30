<template>
  <div class="panel labassay biochem">
    <div class="inner">
      <div class="caption">
        <h3>
          <i class="icon-cube" style="color: #ed3f35;"></i>
          {{title}}</h3>
      </div>
      <slot name="table"></slot>
      <slot name="quarter-table"></slot>
      <div class="double-chart">
        <!-- <div class="label">单位:万</div> -->
        <!-- 开放插槽 -->
        <div class='double-column'>
          <slot name="chart-left-top"></slot>
          <slot name="chart-left-middle"></slot>
          <slot name="chart-left-bottom"></slot>
        </div>

        <div class='double-column'>
          <slot name="chart-right-top"></slot>
          <slot name="chart-right-middle"></slot>
          <slot name="chart-right-bottom"></slot>
        </div>
      </div>
      <div class="pannel-foot">
        <p>提示信息:
        <ul>
          <li>肝损伤：白蛋白+ALT+AST</li>
          <li>胆管阻塞：ALP+γ-GT</li>
          <li>肝硬化：总胆汁酸+IV胶原</li>
          <li>肝硬化失代偿期：胆碱酯酶↓+血清纤维连接蛋白↓</li>
          <li>肝癌: α- L-岩藻糖苷酶+甘氨酰脯氨酸氨基肽酶</li>
          <li>肾功能不全：肌酐、尿素氮（不精准）</li>
          <li>肾脏轻微损伤：血清胱抑素C（敏感准确）</li>
          <li>急性肾损伤：中性粒细胞明胶酶相关脂质运载蛋白测定</li>
          <li>DM糖尿病：2次FPG>7 or OGTT2h PG>11.1 or 随机PG>11.1</li>
          <li>IGT糖耐量减低：FPG &lt; 7 OGTT2h PG=7.8~11.1</li>
          <li>近2-3周平均的血糖水平：糖化白蛋白</li>
          <li>近2-3个月平均的血糖水平：糖化血红蛋白</li>
          <li>糖尿病酮症酸中毒：β-羟丁酸</li>
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
        title: "血生化：糖脂肝肾电解质（血细胞以外成分）",
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




  /* 
  .labassay a {
    padding: 0.167rem;
    font-size: 0.667rem;
    margin: 0.125rem 0 0 0.875rem;
    border-radius: 0.25rem;
    color: #0bace6;
    text-decoration: none;
    去除超链接下划线 
  } */

  /* 
  .labassay a.active {
    background-color: #4c9bfd;
    color: #fff;
  } */

  .labassay .inner {
    display: flex;
    flex-direction: column;
  }


  .labassay .slot {
    margin: 0px;
  }



  .biochem .double-chart {
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    padding-top: 0.6rem;
    position: relative;

  }

  .biochem .double-chart .double-column {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* padding-top: 0.6rem; */
    position: relative;
  }

  .pannel-foot p {
    padding-left: 0.2rem;
    margin-left: 0.2rem;
    border-left: 2px solid #00f2f1;
  }
</style>