<template>
  <div class="bottom-btn">
    <a href="https://www.baidu.com/">{{btnText}}</a>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Vue} from 'js/base'
  export default {
    data() {
      return {
        btnText: '立即下载'
      };
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../assets/scss/base/_necessary";
  .bottom-btn {
    @extend .fixed;
    bottom: 0;
    width: 100%;
    height: px2rem(106);
    line-height: px2rem(106);
    @include px2px(font-size,40);
    text-align: center;
    border-top: 1px solid #66a5d9;
    background: #fefbed;
    z-index: 100;
    a {
      text-align: center;
      color: #0077de;
    }
  }
</style>
