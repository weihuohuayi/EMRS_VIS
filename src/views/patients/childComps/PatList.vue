<template>
  <div class="patsList">
    <pat-list-item v-for='(item,index) in patients' :pats-item="item" :key="index">
    </pat-list-item>
  </div>

</template>

<script>


  // 导入子组件
  import PatListItem from './PatListItem'

  export default {
    name: 'PatList',
    props: {
      patients: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      PatListItem
    }
  }
</script>

<style scoped>
  .patsList {
    display: flex;
    /* 自动换行，折叠 */
    flex-wrap: wrap;
    /* 均等分 */
    justify-content: space-around;
    padding: 2px;
  }
</style>