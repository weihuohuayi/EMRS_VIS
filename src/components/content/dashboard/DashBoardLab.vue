<template lang="html">
  <div id="dashboard-lab" class="viewport">
    <div class="container">
      <!-- <div class="dashboard-bg-image">部分标签-背景图片</div> -->
      <div :style="marginStyle">
        <div class="dashboard-container">
          <!-- 头部的盒子 -->
          <top-title :title.sync="title"></top-title>
          <!-- 页面主体部分 -->
          <section class="mainbox">
            <!-- left -->
            <module-a />
            <!-- middle -->
            <module-b />
            <!-- right     -->
            <module-c />
          </section>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>


  // 导入子组件
  import TopTitle from './childComps/TopTitle';

  // 导入模块子组件
  import ModuleA from './module/ModuleA';
  import ModuleB from './module/ModuleB';
  import ModuleC from './module/ModuleC';

  export default {
    name: 'DashBoardLab',
    data() {
      return {
        // 大屏内容的横向外边距
        marginHorizontal: 1,
        title: '化验结果',
      }
    },
    components: {
      TopTitle,
      ModuleA,
      ModuleB,
      ModuleC
    },
    mounted() {
      // this._init()
    },
    methods: {

    },

    computed: {
      marginStyle: function () {
        return {
          margin: `0px ${this.marginHorizontal}px`
        };
      }
    },
  }

</script>

<style scoped>
  .dashboard-bg-image {
    width: 100%;
    height: 100%;

    /* 设置绝对位置后，就和上级标签没有关系了 */
    position: absolute;
    background: url('~assets/img/dashboard/bg.jpg');
    background-repeat: no-repeat top center;
    background-size: 100% 100%;
  }

  .mainbox {
    /* 大屏参数 */
    /* min-width: 1024px;
    max-width: 1920px; */
    margin: 0 auto;
    /* background-color: wheat; */
    padding: 0.625rem 0.625rem 0;

    /* 里面内容并排放 */
    display: flex;
  }


  .column {
    flex: 3;
    position: relative;
  }

  .column:nth-child(2) {
    flex: 4;
    margin: 0 0.625rem 1rem;
  }

  .panel {
    /* 边框 */
    box-sizing: border-box;
    border: 2px solid rgb(200, 210, 255);
    /* border-image: url(./assets/images/border.png) 51 38 21 132; */
    border-width: 2.125rem 1.583rem 0.875rem 5.5rem;
    position: relative;
    margin-bottom: 0.833rem;
    background-color: rgba(10, 10, 150, .1);
  }

  .panel::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid rgba(1, 1, 252, 0.986);
    border-top: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }

  .panel::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid rgba(1, 1, 252, 0.986);
    border-top: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }

  .pannel-foot {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .pannel-foot::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid rgba(1, 1, 252, 0.986);
    border-bottom: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }

  .pannel-foot::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid rgba(1, 1, 252, 0.986);
    border-bottom: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }
</style>