<template>
  <div class="home-style">
    <rSwiper fast :autoPlay='true' ref="swiperDOM" class="swiper" :indicatorFlash='true' playTime=6000
      @loadEnd="funLoadEnd" @transitionend="funTransitionend">
      <rSlide>
        <div class="container moveContainer1">
          <div class="cover"></div>
          <img src="../../../../static/sliderMain.png" alt="移动图片" class="parallax-img moveImg1" />
        </div>
      </rSlide>
      <rSlide>
        <div class="container moveContainer2">
          <div class="cover"></div>
          <img src="../../../../static/sliderMain.png" alt="移动图片" class="parallax-img moveImg2" />
        </div>
      </rSlide>
      <rSlide>
        <div class="container moveContainer3">
          <div class="cover"></div>
          <img src="../../../../static/sliderMain.png" alt="移动图片" class="parallax-img moveImg3" />
        </div>
      </rSlide>
    </rSwiper>
  </div>

</template>

<script setup lang='ts' name='IndexDiarySlider'>
import { rSwiper, rSlide, refDom } from 'r-swiper'
import { ref, watch } from 'vue';
const nowIndex = ref(0) // 当前下标

const swiperDOM: any = ref(null) // Dom元素

/**
 * 2023-12-18 08:52:05 Ywr
 * 初始化加载完成反馈函数
*/
const funLoadEnd = () => {
  console.log('loading - success');
  // changePage(2, true)
  // swiperDOM.slideTo(2)
  // nowIndex.value = 2

}

/**
 * 2023-08-12 19:23:06 Ywr
 * 切换页面完成反馈函数
 * @param {Number} i 当前下标
*/
const funTransitionend = (i: any) => {
  nowIndex.value = i
  console.log('当前下标', nowIndex.value)
}

/**
 * 2023-08-12 19:23:06 Ywr
 * 切换页函数
 * @param {Number} i 下标
 * @param {Boolean} st 当前下标
*/
const changePage = (i: any, st = false) => {
  // 如果是跳转到某页
  if (st) {
    swiperDOM.value.slideTo(i)
  }
  else {
    i < 0 ? (swiperDOM.value.prev()) : (swiperDOM.value.next())
  }
}


import useIndexImgMove from '../IndexHooks/useIndexImgMove';

useIndexImgMove('.moveContainer1', '.moveImg1')
useIndexImgMove('.moveContainer2', '.moveImg2')



</script>

<style scoped>
.home-style {
  width: 100vw;
  height: 100vh;

  .box {
    width: 100vw;
    height: 100vh;
    background: url('../../../../static/sliderMain.png') no-repeat center center;
    background-size: cover;
  }

  .box2 {
    background-image: url('./2.png')
  }

  .box3 {
    background-image: url('./3.png')
  }
}

.parallax-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  height: 120%;
  /* 保持宽度自动 */
  width: 120%;
  /* 高度填满容器 */
  object-fit: cover;
  /* 长边填满容器 */
  z-index: 0;
}

.container .cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(238, 103, 97, 0.5);
  clip-path: polygon(0 0, 25% 0, 60% 100%, 0 100%);
  z-index: 1;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
