<template>
  <div class="goods">
    <!-- 左侧菜单 -->
    <div class="menu-wrapper">

    </div>
    <!-- 右侧商品 -->
    <div class="foods-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden

  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
  .foods.wrapper
    flex 1
    
</style>