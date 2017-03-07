<template>
  <div class=" bg_white">
    <!-- 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个ref属性 -->
    <div class="content padding_t_80 padding_b_106">
      <swiper :options="swiperOption" ref="mySwiperA">
        <!-- 幻灯内容 -->
        <swiper-slide class="bg1"><img src="./images/download_bg1.png" alt=""><span class="icon"><img src="./images/icon-JianTou.png" alt=""></span></swiper-slide>
        <swiper-slide class="bg2"><img src="./images/download_bg2.png" alt=""><span class="icon"><img src="./images/icon-JianTou.png" alt=""></span></swiper-slide>
        <swiper-slide class="bg3"><img src="./images/download_bg3.png" alt=""><span class="icon"><img src="./images/icon-JianTou.png" alt=""></span></swiper-slide>
      </swiper>
      <bottom-btn></bottom-btn>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Vue, $, Common, wx} from 'js/base'
  import bottomBtn from './components/bottom-btn.vue'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default{
    data () {
      return {
        swiperOption: {
          swiperSlides: 0,
          autoplay: 5000,
          speed: 600,
          direction: 'vertical',
          notNextTick: false,
          pagination: '.swiper-pagination'
        }
      };
    },
    mounted: function () {
    },
    components: {
      swiper,
      swiperSlide,
      'bottom-btn': bottomBtn
    },
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/scss/base/_necessary";

  .icon {
    position: absolute;
    width: px2rem(50);
    bottom: px2rem(44);
    left: 50%;
    margin-left: px2rem(-25);
  }

  .content {
    width: 100%;
    height: 100vh;
    /*margin-top: px2rem(160);*/
  }

  .swiper-container {
    height: 100%;
    width: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    background: #006ad1;
    img {
      width: 100vw;
      height: 100%;
    }
  }
  .padding_b_106{
    padding-bottom: px2rem(106);
  }
</style>
