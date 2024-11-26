<template>
  <div class="home-style">
    <rSwiper fast :autoPlay='true' ref="swiperDOM" class="swiper" :indicatorFlash='true' playTime=6000
      @loadEnd="funLoadEnd" @transitionend="funTransitionend">
      <rSlide>
        <div class="container moveContainer1">
          <canvas class="cover2"></canvas>
          <div class="cover" id="cover1"></div>
          <img src="../../../../static/SuPicture.jpg" alt="移动图片" class="parallax-img moveImg1" id="SuPicture" />
        </div>
      </rSlide>
      <rSlide>
        <div class="container moveContainer2">
          <div class="cover"></div>
          <img src="../../../../static/SuStation.jpg" alt="苏州站" class="parallax-img moveImg2" id="SuStation" />
        </div>
      </rSlide>
      <rSlide>
        <div class="container moveContainer3">
          <div class="cover"></div>
          <img src="../../../../static/sliderMain.png" alt="首页图片" class="parallax-img moveImg3" id="sliderMain" />
        </div>
      </rSlide>
    </rSwiper>
  </div>

</template>

<script setup lang='ts' name='IndexDiarySlider'>


function getImageColor(img: any, id: string) {
  let canvas: any = document.querySelector('.cover2');
  canvas.width = img.width;
  canvas.height = img.height;
  // console.log(canvas.height)
  // console.log(canvas.width)
  let skipNumCol = canvas.width / 15
  let skipNumRol = canvas.height / 15
  skipNumCol = Math.round(skipNumCol)
  skipNumRol = Math.round(skipNumRol)
  // console.log(img)
  let context: any = canvas.getContext("2d");

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  // 获取像素数据
  let data = context.getImageData(0, 0, img.width, img.height).data;
  // console.log(data)
  let r = 1, g = 1, b = 1;
  let cnt = 0
  // 取所有像素的平均值
  for (var row = 0; row < img.height; row++) {
    for (var col = 0; col < img.width; col++) {
      // console.log(data[((img.width * row) + col) * 4])
      if (row == 0) {
        r += data[((img.width * row) + col)];
        g += data[((img.width * row) + col) + 1];
        b += data[((img.width * row) + col) + 2];
      } else {
        r += data[((img.width * row) + col) * 4];
        g += data[((img.width * row) + col) * 4 + 1];
        b += data[((img.width * row) + col) * 4 + 2];
      }
      cnt++
      // console.log(r, g, b)
      col += skipNumCol
    }
    row += skipNumRol
  }
  // console.log(cnt, '运行了这些次。')
  // console.log(r, g, b)
  // 求取平均值
  // r /= (img.width * img.height);
  // g /= (img.width * img.height);
  // b /= (img.width * img.height);
  r /= cnt;
  g /= cnt;
  b /= cnt;
  // 将最终的值取整
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  console.log(r, g, b)
  return "rgb(" + r + "," + g + "," + b + ")";
}


// onMounted(() => {
//   let img1 = document.querySelector('#SuPicture') as HTMLInputElement | null;
//   let rgbcolor = getImageColor(img1, 'id1')
//   let cover1 = document.querySelector('#cover1') as HTMLCollectionOf<HTMLElement> | null
//   console.log(cover1)
//   cover1.style.setProperty('background-color', rgbcolor);


// })

window.addEventListener('load', function () {
  let img1 = document.querySelector('#SuPicture') as HTMLInputElement | null;
  let rgbcolor = getImageColor(img1, 'id1')
  let cover1 = document.querySelector('#cover1') as HTMLCollectionOf<HTMLElement> | null
  console.log(cover1)
  cover1.style.setProperty('background-color', rgbcolor);


});


import { rSwiper, rSlide } from 'r-swiper'
import { ref, watch, onMounted } from 'vue';
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
  emitter.emit('sendSliderNewValue', nowIndex.value)

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


watch(nowIndex, (newSliderIndexValue) => {
  emitter.emit('sendSliderNewValue', newSliderIndexValue)
}
)



import useIndexImgMove from '../IndexHooks/useIndexImgMove';
import emitter from '@/utils/emitter';
let { ImgMove } = useIndexImgMove()
ImgMove('.moveContainer1', '.moveImg1')
ImgMove('.moveContainer2', '.moveImg2')
ImgMove('.moveContainer3', '.moveImg3')


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
  background-color: rgb(238, 103, 97);
  opacity: 0.5;
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
