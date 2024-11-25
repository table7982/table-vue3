<template>
  <div>
    <p>{{ currentDate }}</p>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script setup lang='ts' name='IndexTime'>
import { ref, onMounted, onUnmounted } from 'vue';

// 定义响应式数据
const currentDate = ref('');
const currentTime = ref('');

// 更新日期和时间的函数
function updateDateTime() {
  const now = new Date();
  currentDate.value = now.toLocaleDateString();
  currentTime.value = now.toLocaleTimeString();
}

// 立即更新一次，然后每1000毫秒更新一次
updateDateTime();
const intervalId = setInterval(updateDateTime, 1000);

// 组件卸载时清除定时器
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* 这里可以添加一些样式 */
</style>