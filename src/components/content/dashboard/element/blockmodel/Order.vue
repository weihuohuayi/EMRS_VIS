<template>
  <div class="order panel">
    <div class="inner">
      <!-- 筛选 -->
      <div class="filter">
        <a
          v-for="item in type"
          :key="item.id"
          href="javascript:;"
          :data-key="item.code"
          :class="{active: item.isActive}"
          :id="item.id"
          @click="change(item)"
        >{{item.name}}</a>
      </div>
      <!-- 数据 -->
      <div class="data">
        <div class="item">
          <h4>20,301,987</h4>
          <span>
            <i class="icon-dot" style="color: #ed3f35;"></i>
            订单量
          </span>
        </div>
        <div class="item">
          <h4>99834</h4>
          <span>
            <i class="icon-dot" style="color: #eacf19;"></i>
            销售额(万元)
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: [
        {
          id: 1,
          name: "365天",
          code: "day365",
          isActive: true
        },
        {
          id: 2,
          name: "90天",
          code: "day90",
          isActive: false
        },
        {
          id: 3,
          name: "30天",
          code: "day30",
          isActive: false
        },
        {
          id: 4,
          name: "24小时",
          code: "day1",
          isActive: false
        }
      ],
      orderMsg: {
        day365: { orders: "20,301,987", amount: "99834" },
        day90: { orders: "301,987", amount: "9834" },
        day30: { orders: "1,987", amount: "3834" },
        day1: { orders: "987", amount: "834" }
      }
    };
  },
  methods: {
    change(param) {
      // console.log("当前状态码： "+ param)
      // this.$(param.id).addClass('active').siblings().removeClass('active');

      //设置选中后为白色，显示选中状态
      for (const item of this.type) {
        if (item.code === param.code) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      }

      const key = this.orderMsg[param.code];
      this.$(".order .item h4:eq(0)").text(key.orders);
      this.$(".order .item h4:eq(1)").text(key.amount);
    }
    // ,
    // timer() {
    //   let index = 0;
    //   let aclick = this.$(".order a");
    //   index++;
    //   if (index > 3) {
    //     index = 0;
    //   }
    //   aclick.eq(index).click();
    // }
  }
  // ,
  // created() {
  //   setInterval(this.timer, 3000);
  // }
};
</script>

<style>
.order {
  height: 6.167rem;
}
.order .filter {
  display: flex;
}
.order .filter a {
  display: block;
  height: 0.75rem;
  line-height: 1;
  padding: 0 0.75rem;
  color: #1950c4;
  font-size: 0.75rem;
  border-right: 0.083rem solid #00f2f1;
}
.order .filter a:first-child {
  padding-left: 0;
}
.order .filter a:last-child {
  border-right: none;
}
.order .filter a.active {
  color: #fff;
  font-size: 0.833rem;
}
.order .data {
  display: flex;
  margin-top: 0.833rem;
}
.order .item {
  width: 50%;
}
.order h4 {
  font-size: 1.167rem;
  color: #fff;
  margin-bottom: 0.417rem;
}
.order span {
  display: block;
  color: #4c9bfd;
  font-size: 0.667rem;
}
</style>