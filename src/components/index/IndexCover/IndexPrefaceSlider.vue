<template>
  <img src="../../../../static/logo_white.png" class="logo">
  <div class="paragraph">
    <div class="carousel-container">
      <IndexTime class="time" />

      <br>
      <h3>前言</h3>
      <div v-for="(paragraph, index) in paragraphList" :key="index"
        :class="{ 'carousel-item': true, 'active': currentIndex === index }" @mouseenter="pauseCarousel"
        @mouseleave="startCarousel">
        <p>{{ paragraph.content }}</p>
        <a :href="paragraph.link" target="_blank" class="sourseQuote">
          <br>
          <p>&mdash; {{ paragraph.source }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='SliderBegin'>

import { ref, onMounted, onUnmounted } from 'vue';
import IndexTime from './IndexTime.vue';
interface ParagraphInterface {
  id: string;
  content: string;
  link?: string;
  source?: string;
}

const paragraphList: ParagraphInterface[] = [
  { id: 'J-Pieree01', content: 'Too many interesting things to learn,too few time.', source: 'J-Pierre', link: 'https://v.douyin.com/iAK1n1WY/ 5@8.com :8pm' },
  { id: 'gem01', content: '若是晨风还没来，晚风也可吹入怀。', source: '《若月亮还没来》', link: 'https://baike.baidu.com/item/%E8%8B%A5%E6%9C%88%E4%BA%AE%E6%B2%A1%E6%9D%A5/64384473' },
  { id: 'J-Pieree03', content: '只有当目标是探求真理的时候,科学才会真正的发生。', source: 'J-Pierre', link: 'https://v.douyin.com/iAK1n1WY/ 5@8.com :8pm' },
  { id: 'Yan01', content: '只要想念，就会相见。', source: '《十日终焉》', link: 'https://baike.baidu.com/item/%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89/63368747' },
  { id: 'Yan01', content: '宇宙很大，生活更大。', source: '《三体》', link: 'https://baike.baidu.com/item/%E4%B8%89%E4%BD%93/5739303' },
];


const currentIndex = ref(0);
const intervalRef = ref(0);

const startCarousel = () => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value);
  }
  intervalRef.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % paragraphList.length;
  }, 4000); // 3000毫秒切换一次
};

const pauseCarousel = () => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value);
  }
};

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value);
  }
});
</script>

<style scoped>
.paragraph {
  position: absolute;
  top: 30%;
  left: 5%;
  width: 45%;
  color: white;
  font-size: 1.25rem;
  z-index: 2;
  text-shadow: 0px 0px 1px white;
}

.time {
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.8rem;
  font-size: 1.8rem;
  margin-bottom: 1.25rem;
}

.paragraph h3 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 4rem;
  margin-bottom: 1.25rem;
}

.sourseQuote {
  color: white;
  text-align: right;
  font-size: 2rem;
}

.sourseQuote:hover {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.carousel-container {
  position: relative;
  /* height: 15em; */
  /* box-shadow: 0 0 10px; */
  /* overflow: hidden; */
}

.carousel-item {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s, visibility 1s;
}

.carousel-item.active {
  visibility: visible;
  opacity: 1;
}

.logo {
  position: absolute;
  top: 4%;
  left: 5%;
  z-index: 2;
}
</style>