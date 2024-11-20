<template>
  <div class="container">
    <img src="../../../img/logo_white.png" class="logo">
    <div class="cover"></div>
    <img src="../../../img/sliderMain.png" alt="移动图片" class="parallax-img" />
    <div class="paragraph">
      <SliderBegin />
    </div>
    <button class="btn" onclick="location.href='#mySpace'">TABLE的空间</button>
  </div>

</template>

<script setup lang='ts' name='Begin'>
import { reactive } from 'vue'
import SliderBegin from './SliderBegin.vue'
// 确保代码在 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  const img: any = document.querySelector('.parallax-img');
  const container: any = document.querySelector('.container');

  if (!img || !container) {
    console.error('Target elements not found. Please check your HTML structure and selectors.');
    return;
  }

  container.addEventListener('mousemove', (e: any) => {
    const { clientX, clientY } = e; // 获取鼠标位置
    const { offsetWidth, offsetHeight } = container; // 获取容器尺寸

    // 计算鼠标相对位置
    const xPercent = (clientX / offsetWidth - 0.5) * 10; // 范围 -10% 到 10%
    const yPercent = (clientY / offsetHeight - 0.5) * 10;

    // 应用平移效果
    img.style.transform = `translate(-50%, -50%) translate(${xPercent}%, ${yPercent}%)`;
  });
});


</script>

<style scoped>
.paragraph {
  position: absolute;
  top: 30%;
  left: 5%;
  width: 25%;
  color: white;
  font-size: 20px;
  z-index: 2;
  text-shadow: 0px 0px 1px white;
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



.logo {
  position: absolute;
  top: 4%;
  left: 5%;
  z-index: 2;
}

.btn {
  transition: all 0.3s ease-in-out;
  font-family: "Dosis", sans-serif;
}

.btn {
  /* width: 150px; */
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 5%;
  height: 60px;
  border-radius: 50px;
  background-image: linear-gradient(135deg, #feb692 0%, #ea5455 100%);
  box-shadow: 0 0 30px;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 25px;
  color: white;
  z-index: 2;
}

.btn:hover {
  transform: translate(-50%, 8%);
  box-shadow: none;
}

.btn:active {
  opacity: 0.7;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
</style>