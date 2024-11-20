<template>
  <div class="carousel-container">
    <Time class="time" />
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
</template>

<script setup lang='ts' name='SliderBegin'>

import { ref, onMounted, onUnmounted } from 'vue';
import Time from './Time.vue';
interface ParagraphInterface {
  id: string;
  content: string;
  link: string;
  source: string;
}

const paragraphList: ParagraphInterface[] = [
  { id: 'J-Pieree01', content: 'Too many interesting things to learn,too few time.', source: 'J-Pierre', link: 'https://v.douyin.com/iAK1n1WY/ 5@8.com :8pm' },
  { id: 'J-Pieree02', content: '不是我配不上这个时代,就是这个时代配不上我。', source: 'J-Pierre', link: 'https://v.douyin.com/iAK1n1WY/ 5@8.com :8pm' },
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
.time {
  font-family: 'Courier New', Courier, monospace;
  line-height: 20px;
  font-size: 18px;
  margin-bottom: 20px;
}

.paragraph h3 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  margin-bottom: 20px;
}

.sourseQuote {
  color: white;
  text-align: right;
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
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s, visibility 1s;
}

.carousel-item.active {
  visibility: visible;
  opacity: 1;
}
</style>