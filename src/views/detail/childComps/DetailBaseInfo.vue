<template>
  <div v-if="Object.keys(patInfo).length !== 0" class="base-info">
    <div class="info-title">
      <span class="name">{{patInfo.name}} </span>

    </div>
    <div class="info-basic">
      <span class="age">{{patInfo.age | ageFilter}}</span>
      <span class="gender">{{patInfo.gender}}性 </span>
      <span class="body-style">BMI：{{patInfo.BMI}}</span>
    </div>

    <div class="info-other">
      <span>{{patInfo.drink_cigrett}}</span>
      <span>入院：{{patInfo.OrderDate | dataFormat("MM-DD")}} &#9824; {{patInfo.countHospitalDays}}</span>
      <span>手术：{{patInfo.operationDate | dataFormat("MM-DD")}} &#9824; {{patInfo.countPostSurgDays}}</span>
    </div>

    <div class="info-illness">
      <span class="chiefComplaint">主诉：{{patInfo.chiefComplaint}}</span>
      <br>
      <span class="diagnosis">诊断：{{patInfo.diagnosis}}</span>
    </div>

  </div>

</template>


<script>
  // 导入自定义工具插件
  // import utils.js
  // project\EMRS\src\common\utils.js

  export default {
    name: 'DetailBaseInfo',
    props: {
      patInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      ageFilter(age) {
        let result = age;
        if (age > 64) {
          result = age + "岁，老年"
        }
        else {
          result = age + "岁,"
        }
        return result
      }
    },
    created() {
      // console.log('create')
      // console.log(this.patInfo.countPostSurgDays)
    }
  }


</script>


<style scoped>
  .base-info {
    margin-top: 5px;
    padding: 0 8px;
    color: black;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222;
  }

  .info-title .name {
    font-size: 15px;
  }

  .info-title .gender {
    color: var(--color-high-text);
    font-weight: bolder;
  }

  .info-basic {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .info-basic .gender {
    font-size: 20px;
    color: var(--color-high-text);
    margin-left: 5px;
  }

  .info-basic .age {
    font-size: 20px;
    color: var(--color-high-text);
  }

  /* text-decoration: line-through; */
  .info-basic .body-style {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .info-illness {
    line-height: 25px;
  }

  .info-other {
    color: gray;
    margin-top: 5px;
    line-height: 25px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }
</style>