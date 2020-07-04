<template>

  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      link: String
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link),
          console.log(this.$route.path),
          console.log(this.link),
          console.log(this.$route.path.indexOf('/home'))
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active {
    color: firebrick;
    font-weight: bold;
    font-size: large;
  }
</style>