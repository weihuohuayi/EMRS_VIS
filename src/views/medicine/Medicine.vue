<template>
  <div>
    <h2>医嘱注意事项</h2>
    <p>值班宝典</p>
    <h3>呈现动态路由</h3>
    <ul>
      <li>user/张三</li>
      <li>user/李四</li>

    </ul>

  </div>

</template>

<script>
  export default {
    name: 'Medicine',
    computed: {
      // $route 获取router中激活的路由
      userId() {
        return this.$route.params.userID
      }
    }
  }
</script>

<style scoped>

</style>