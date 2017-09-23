<template>
  <div id="app">
    <v-header></v-header>
    <div class="header">首次初始化vue-elemo</div>
    <div class="tab">tab</div>
    <div class="footer">footer</div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header';

export default {
  // components 注册一个组件
  components: {
    'v-header': header
  }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  
</style>
