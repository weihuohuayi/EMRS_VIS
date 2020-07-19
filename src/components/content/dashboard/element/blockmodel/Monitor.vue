<template>
  <div class="monitor panel">
    <div class="inner">
      <div class="tabs">
        <a v-for="item in monitor" :key="item.id" href="javascript:;" :data-index="item.dataIndex" class="active">{{item.name}}</a>
      </div>
      <!--选项-->
      <div class="content"  v-for="item in monitor" :key="item.id" :style="item.flag" >
              <div class="head">
                  <span class="col" v-for="item1 in item.type" :key="item1" >{{item1}}</span>
              </div>
              <div class="marquee-view">
                  <div class="marquee">
                      <div class="row" v-for="item2 in item.details" :key="item2.id">
                          <span class="col">{{item2.time}}</span>
                          <span class="col">{{item2.address}}</span>
                          <span class="col">{{item2.code}}</span>
                          <span class="icon-dot"></span>
                      </div>
                  </div>
              </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      monitor: [
        {
          flag: "display: block;",
          id: 1,
          dataIndex: 0,
          name: "故障设备监控",
          type: ["故障时间", "设备地址", "异常代码"],
          details:[
            {
              id: 1,
              time: 20180701,
              address: "合肥市蜀山区某某大楼某某室",
              code: 10000001
            },
            {
              id: 2,
              time: 20180702,
              address: "合肥市瑶海区某某大楼某某室",
              code: 10000001
            },
            {
              id: 3,
              time: 20180703,
              address: "合肥市蜀山区某某2大楼某某室",
              code: 10000002
            },
            {
              id: 4,
              time: 20180704,
              address: "合肥市蜀山区某某2大楼某某室",
              code: 10000033
            }
          ]
        },
        {
          falg:"",
          id: 2,
          name: "异常设备监控",
          dataIndex: 1,
          type: ["异常时间", "设备地址", "异常代码"],
          details:[
            {
              id: 5,
              time: 20200801,
              address: "合肥市经开区某某大楼某某室",
              code: 20000001
            },
            {
              id: 6,
              time: 20200802,
              address: "合肥市瑶海区某某大楼某某室",
              code: 20000001
            },
            {
              id: 7,
              time: 20200803,
              address: "合肥市蜀山区某某2大楼某某室",
              code: 20000002
            },
            {
              id: 8,
              time: 20200804,
              address: "合肥市蜀山区某某2大楼某某室",
              code: 20000033
            },
            {
              id: 9,
              time: 20200904,
              address: "合肥市蜀山区某某3大楼某某室",
              code: 20000063
            }
          ]
        }
      ]
    }
  }
};
</script>

<style>
.monitor {
  height: 20rem;
}
.monitor .inner {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}
.monitor .tabs {
  padding: 0 1.5rem;
  margin-bottom: 0.75rem;
}
.monitor .tabs a {
  color: #1950c4;
  font-size: 0.75rem;
  padding: 0 1.125rem;
}

.monitor .tabs a:first-child {
  border-right: 0.083rem solid #00f2f1;
  padding-left: 0;
}

.monitor .tabs a.active {
  color: #fff;
}
.monitor .content {
  flex: 1;
  display: none;
  position: relative;
}
.monitor .head {
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.583rem;
  padding: 0.5rem 1.5rem;
  color: #68d8fe;
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
}
.monitor .col:nth-child(1) {
  width: 3.2rem;
}
.monitor .col:nth-child(2) {
  width: 8.4rem;
  /* 不换行  一行省略*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.monitor .col:nth-child(3) {
  width: 3.2rem;
}
.monitor .marquee-view {
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.monitor .row {
  line-height: 1.05;
  padding: 0.5rem 1.5rem;
  color: #61a8ff;
  font-size: 0.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.monitor .row:hover {
  color: #68d8ff;
  background: rgba(255, 255, 255, 0.1);
}
.monitor .row:hover .icon-dot {
  opacity: 1;
}

.monitor .icon-dot {
  position: absolute;
  left: 0.64rem;
  opacity: 0;
}
.monitor .marquee-view {
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.monitor .row {
  line-height: 1.05;
  padding: 0.5rem 1.5rem;
  color: #61a8ff;
  font-size: 0.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.monitor .row:hover {
  color: #68d8ff;
  background: rgba(255, 255, 255, 0.1);
}
.monitor .row:hover .icon-dot {
  opacity: 1;
}

.monitor .icon-dot {
  position: absolute;
  left: 0.64rem;
  opacity: 0;
}
/* ------------------------------------------------------------动画 */
@keyframes row {
  0% {
  }
  100% {
    transform: translateY(-50%);
  }
}
/* 调用动画 */
.monitor .marquee {
  /* //infinite永久调用动画 */
  animation: row 10s linear infinite;
}
/*鼠标划入 停止动画  */
.monitor .marquee:hover {
  animation-play-state: paused;
}
</style>