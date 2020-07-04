<template>
  <div>
    <h1>手术安排</h1>
    <h2>内容</h2>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Surgery',
    data() {
      return {
        msg: '谢谢关心'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>