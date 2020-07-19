<template>
  <div class="title">
    <span class="left-z"></span>
    {{title}}
    <span class="right-z">
      {{currentTime  | updatetime}}
    </span>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "TopTitle",
    props: ['title'],
    data() {
      return {
        currentTime: new Date()
      }
    },
    mounted() {  //生命周期模板挂载之后
      // this.init();
      let _this = this;
      this.timer = setInterval(() => {
        _this.currentTime = new Date();
      }, 1000)

    },
    filters: {
      updatetime: function (value) {
        // return moment(value).format('LTS');
        return moment(value).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    beforeDestroy() {//生命周期实例销毁之前
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  };


</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 1.25rem;
    color: #8f0000;
    line-height: 1.875rem;
    margin-top: 1.25rem;
    position: relative;
  }

  .left-z {
    position: absolute;
    width: 30%;
    height: 1.5rem;
    /* background: url("../assets/left-z.png") no-repeat center; */
    background-size: 100% 100%;
    top: 1rem;
    left: 3rem;
  }

  .right-z {
    position: absolute;
    width: 30%;
    height: 1.5rem;
    /* background: url("../assets/right-z.png") no-repeat center; */
    background-size: 100% 100%;
    top: 1rem;
    right: 3rem;
    color: yellowgreen;
    font-size: 1rem;
  }
</style>