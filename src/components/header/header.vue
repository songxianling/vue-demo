<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <!-- 头信息 -->
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <!-- 描述+送达时间 -->
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <!-- 商品活动信息 -->
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .header
    color :#fff
    background :#000
    .content-wrapper
      padding :24px 12px 18px 24px
      box-sizing :border-box
      font-size :0
      .avatar
        display :inline-block
        vertical-align :top
      .content
        display inline-block  
        margin-left :16px
        font-size :14px
        .title
          margin :2px 0 8px 0
          .brand
            display :inline-block
            width :30px
            height 18px
            vertical-align :top
            bg-image('brand')
            background-size :100% 100%
            background-repeat :no-repeat
          .name
            margin-left :6px
            line-height :18px
            font-size :16px
            font-weight 700
        .description
          margin-bottom :10px
          line-height :12px
          font-size :12px  
        .support
          .icon
            display :inline-block
            width :12px
            height :12px
            vertical-align :top
            margin-right :4px    
            background-size :100% 100%
            background-repeat :no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')  
            &.invoice
              bg-image('invoice_1')  
            &.special
              bg-image('special_1')  
          .text
            line-height :12px
            font-size :10px
</style>