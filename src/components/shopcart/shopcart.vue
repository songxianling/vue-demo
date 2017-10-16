<template>
  <div class="shopcart">
    <div class="content">
      <!-- 内容左 -->
      <div class="content-left">
        <!-- logo区域 -->
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <!-- 买的数据信息 -->
        <!-- 商品总价 -->
        <div class="price">
          ￥{{totalPrice}}
        </div>
        <!-- 描述 -->
        <div class="desc">
          另需配送费 ￥{{deliveryPrice}}元
        </div>
      </div>
      <!-- 内容右 -->
      <div class="content-right">
        <div class="pay">
          ￥{{minPrice}}元起送
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    selectFoods: {
      type: Array,
      defalut() {
        return [];
      }

    },
    deliveryPrice: {
      type: Number,
      defalut: 0
    },
    minPrice: {
      type: Number,
      defalut: 0
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((food) => {
        total += food.price * food.count;
      });
      return total;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';

.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 101;
  width: 100%;
  height: 48px;

  .content {
    display: flex;
    background: #141d27;
    color: rgba(255, 255, 255, 0.4);

    .content-left {
      flex: 1;
      font-size: 0;

      .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #2b343c;
          text-align: center;

          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;
          }
        }
      }

      .price {
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin-top: 12px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 700;
      }

      .desc {
        display: inline-block;
        margin: 12px 0 0 12px;
        vertical-align: top;
        line-height: 24px;
        font-size: 10px;
      }
    }

    .content-right {
      flex: 0 0 105px;
      width: 105px;

      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        background: #2b333b;
      }
    }
  }
}
</style>