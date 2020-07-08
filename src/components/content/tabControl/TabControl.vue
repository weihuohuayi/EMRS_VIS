<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index===currentIndex}"
      @click="tabItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0

      }
    },
    methods: {
      tabItemClick(index) {
        this.currentIndex = index

        // 子组件触发一个事件名称叫  index-click  传递item数据
        this.$emit('index-click', index)
        // console.log(index);
        

      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }

  .tab-control-item {
    flex: 1;

    /* 继承上级标签内容 */
    /* text-align: center; */
  }

  .tab-control-item span {
    padding: 5px
  }

  .active {
    color: var(--color-high-text);
    font-weight: bold;

  }

  .active span {
    border-bottom: 3px solid var(--color-href-text);
    border-width: 5px;
  }
</style>