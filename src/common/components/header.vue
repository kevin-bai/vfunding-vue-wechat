<template>
  <div class="header"><a href="https://www.baidu.com/" class="left-arrow "></a>红包明细</div>
</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/scss/base/_necessary";
.header{
  width: 100%;
  overflow: hidden;
  text-align: center;
  position: fixed;
  height: px2rem(80);
  line-height: px2rem(80);
  @include px2px(font-size,34);
  border-bottom: 1px solid #f6f6f6;
  padding: 0 2.5%;
  font-weight: 600;
  top:0;
  left:0;
  z-index: 999;
  background-color: #fff;
  color: #344266;
  a{
    color: #06b4f5;
  }
}
</style>
