<template>
  <div class="home-style">
    <el-carousel class="swiper" height="100vh" @change="handleCarouselChange">
      <el-carousel-item>
        <div class="container moveContainer1">
          <div class="cover" id="cover1"></div>
          <img src="../../../../static/SuPicture.jpg" alt="移动图片" class="parallax-img moveImg1" id="SuPicture" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="container moveContainer2">
          <div class="cover" id="cover2"></div>
          <img src="../../../../static/SuStation.jpg" alt="苏州站" class="parallax-img moveImg2" id="SuStation" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="container moveContainer3">
          <div class="cover" id="cover3"></div>
          <img src="../../../../static/sliderMain.png" alt="首页图片" class="parallax-img moveImg3" id="sliderMain" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script setup lang='ts' name='IndexDiarySlider'>
import { nextTick } from 'vue';
import useIndexMianColor from '../IndexHooks/useIndexMianColor'
let { getImageColor } = useIndexMianColor()



function changeColor() {
  let img1 = document.querySelector('#SuPicture') as HTMLInputElement | null;
  let rgbcolor1 = getImageColor(img1, 'id1')
  var cover1: any = document.querySelector('#cover1') as HTMLCollectionOf<HTMLElement> | null
  cover1.style.setProperty('background-color', rgbcolor1);
  let img2 = document.querySelector('#SuStation') as HTMLInputElement | null;
  let rgbcolor2 = getImageColor(img2, 'id2')
  let cover2: any = document.querySelector('#cover2') as HTMLCollectionOf<HTMLElement> | null
  cover2.style.setProperty('background-color', rgbcolor2);
}

// window.addEventListener('load', function () {
//   changeColor()
// });


import { ref, watch, onMounted } from 'vue';
import useIndexImgMove from '../IndexHooks/useIndexImgMove';
import emitter from '@/utils/emitter';

const imgUrl0 = new URL('../../../../static/SuPicture.jpg', import.meta.url).href
const imgUrl1 = new URL('../../../../static/SuStation.jpg', import.meta.url).href
const imgUrl2 = new URL('../../../../static/sliderMain.png', import.meta.url).href
// 定义图片 URL 数组
const imageUrls = [imgUrl0, imgUrl1, imgUrl2];

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

onMounted(() => {
  console.log('该组件挂载了！')
  nextTick(() => {


    Promise.all([
      loadImage(imageUrls[0]),
      loadImage(imageUrls[1]),
      loadImage(imageUrls[2]),
    ])
      .then((images) => {
        // 所有图片加载完成后执行的操作
        console.log("所有图片加载完成");
        changeColor()
        // 可以在这里处理图片数组，比如将它们显示在页面上

      })
      .catch((error) => {
        console.error("图片加载失败: ", error);
      });
  });
})



let nowIndex = ref(0) // 当前下标




function handleCarouselChange(newIndex: number, oldIndex: number) {
  console.log(newIndex)
  nowIndex.value = newIndex
}

watch(nowIndex, (newSliderIndexValue) => {
  emitter.emit('sendSliderNewValue', newSliderIndexValue)
}
)




let { ImgMove } = useIndexImgMove()
ImgMove('.moveContainer1', '.moveImg1')
ImgMove('.moveContainer2', '.moveImg2')
ImgMove('.moveContainer3', '.moveImg3')


</script>

<style scoped>
.home-style {
  width: 100vw;
  height: 100vh;

}

.swiper {
  width: 100%;
  height: 100vh;
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
  clip-path: polygon(0 0, 35% 0, 75% 100%, 0 100%);
  z-index: 1;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
