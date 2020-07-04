<template>
  <div>
    <h2>我的信息</h2>
    <h3>参数传递</h3>
    <p>{{$route.query}}</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>

</template>

<script>
  export default {
    name: 'Profile'

  }
</script>

<style scoped>

</style>