<template>
  <div class="item">
    <div class="item-info">
      <h3>床号：{{patsItem.bedNum}}</h3>
      <p class="name">姓名：{{patsItem.name[0]}}XX</p>
      <span>入院时间：{{patsItem.OrderDate}}</span> <span>医疗组：{{patsItem.AttendingDoctorCode}}</span>
      <p class="surgery">手术安排：{{patsItem.operationDate}}</p>
      <router-link :to="'/details/'+patsItem.bedNum" tag="button" replace>详细信息</router-link>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'PatListItem',
    props: {
      patsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .item {
    padding-bottom: 10px;
    position: relative;

    /* 设置一个item的宽度，匹配上级元素的宽度，进行每行显示数量调控 */
    width: 48%;
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    border-color: rgba(190, 220, 255, 0.644);
  }

  /* .goods img {
    width: 100%;
    border-radius: 5px;
  } */

  .item-info {
    font-size: 12px;
    /* position: absolute; */
    bottom: 2.5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .item-info p {
    /* overflow一行显示，更多内容... */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .item-info .name {
    color: var(--color-high-text);
    /* margin-right: 20px; */
  }

  .item-info .surgery {
    position: relative;
    color: var(--color-tint);

  }

  .surgery::before {
    content: '__';
    /* position: absolute; */
    /* left: -1px; */
    top: 0;
    width: 15px;
    height: 15px;
    background: url("~assets/img/patients/knife.jpg") 0 0/15px 15px;
  }
</style>