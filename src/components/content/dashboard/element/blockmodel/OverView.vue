<template>
  <div class="overview panel">
      <div class="inner">
          <div class="item" v-for="item in overView" :key="item.id">
              <span>
                  <i class="icon-dot" :style="item.color"></i>
                  {{item.name}} （{{item.ref}}）
                  <!-- <i class="icon-cup1" :style="item.color"></i>
                  <i class="icon-cup1" :style="item.color"></i>
                  <i class="icon-cup2" :style="item.color"></i>
                  <i class="icon-cup3" :style="item.color"></i>
                  <i class="icon-clock" :style="item.color"></i>
                  <i class="icon-down" :style="item.color"></i>
                  <i class="icon-cube" :style="item.color"></i>
                  <i class="icon-plane" :style="item.color"></i>
                  <i class="icon-train" :style="item.color"></i>
                  <i class="icon-bus" :style="item.color"></i>
                  <i class="icon-bag" :style="item.color"></i>
                  <i class="icon-up" :style="item.color"></i> -->
              </span>
              <h4>{{item.indicator}}</h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      overView: [
        {
          id: 1,
          name: "尿液颜色",
          indicator: "浅黄色",
          ref:"淡黄色",
          color: "color: #006cff"
        },
        {
          id: 2,
          name: "浊度",
          indicator: "清澄",
          ref:"清",
          color: "color: #6acca3"
        },
        {
          id: 3,
          name: "运营设备",
          indicator: 3001,
          color: "color: #6acca3"
        },
        {
          id: 4,
          name: "异常设备",
          indicator: 108,
          color: "color: #ed3f35"
        }
      ]
    }
  }

}
</script>

<style>
.overview{
    /* height: 4.583rem; */
  }
  .overview .inner{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .overview h4{
    font-size: 0.8rem;
    /* padding-left: 0.2rem; */
    text-align:center;
    color: black;
    margin-top: 0.333rem;
    margin-bottom: 0.333rem;
  }
  .overview span{
    font-size: 0.667rem;
    color: #4c9bfd;
}
</style>