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
        <!-- 价格 -->
        <div class="price">

        </div>
        <!-- 描述 -->
        <div class="desc"></div>
      </div>
      <!-- 内容右 -->
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default{

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .shopcart
    position fixed
    left 0
    bottom 0
    z-index 101
    width 100%
    height 48px
    
    .content
      display flex
      background #141d27
      .content-left
        flex 1
        font-size 0
        .logo-wrapper
          display inline-block
          position relative
          top -10px
          margin 0 12px
          padding 6px 
          width 56px
          height 56px
          box-sizing border-box
          vertical-align top
          border-radius 50%
          background #141d27
          .logo
            width 100%
            height 100%
            border-radius 50%
            background #2b343c
            text-align center
            .icon-shopping_cart
              line-height 44px
              font-size 24px
              color #80858a
        .price
          display inline-block
        .desc  
          display inline-block        
      .content-right
        flex 0 0 105px
        width 105px

  
</style>