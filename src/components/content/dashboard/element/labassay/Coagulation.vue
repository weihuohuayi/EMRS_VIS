<template>
  <div class="panel labassay coagulation">
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
        <slot name="chart">
          <slot name="svg"></slot>
        </slot>

      </div>
      <div class="pannel-foot">提示信息</div>
    </div>
  </div>
  </div>
</template>

<script>

  export default {
    name: 'Coagulation ',
    data() {
      return {
        title: "凝血谱",

      }
    }
  };
</script>

<style>

</style>