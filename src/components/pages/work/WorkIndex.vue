<template>

  <Head />
  <workBox :workListItem='workList[0]' />
  <workBox :workListItem='workList[1]' />
  <workBox :workListItem='workList[2]' />
  <workBox :workListItem='workList[3]' />

</template>

<script setup lang='ts' name='WorkIndex'>
import Head from './Head.vue';
import workBox from './workBox.vue';

const workList = [
  { title: '自画像', discribe: '我的自画像', imgLink: '../../../../img/workImg/selfImg.png' },
  { title: '服装设计', discribe: '一个男装设计', imgLink: '../../../../img/workImg/customImgBoy.png' },
  { title: '服装设计', discribe: '一个女装设计', imgLink: '../../../../img/workImg/customImgGirl.png' },
  { title: '素描', discribe: '一副小素描', imgLink: '../../../../img/workImg/Drawing1.png' },
]
</script>

<style scoped></style>