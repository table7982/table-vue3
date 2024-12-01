<template>

  <Head />
  <workBox :workListItem='workList[4]' />
  <workBox :workListItem='workList[0]' />
  <workBox :workListItem='workList[1]' />
  <workBox :workListItem='workList[2]' />
  <workBox :workListItem='workList[3]' />

</template>

<script setup lang='ts' name='WorkIndex'>
import Head from './Head.vue';
import workBox from './workBox.vue';
const imgUrl0 = new URL('../../../../static/workImg/SelfImg.png', import.meta.url).href
const imgUrl1 = new URL('../../../../static/workImg/customImgBoy.png', import.meta.url).href
const imgUrl2 = new URL('../../../../static/workImg/customImgGirl.png', import.meta.url).href
const imgUrl3 = new URL('../../../../static/workImg/Drawing1.png', import.meta.url).href
const imgUrl4 = new URL('../../../../static/workImg/rjq.png', import.meta.url).href
const workList = [
  { title: '自画像', discribe: '我的自画像', imgLink: imgUrl0 },
  { title: '服装设计', discribe: '一个男装设计', imgLink: imgUrl1 },
  { title: '服装设计', discribe: '一个女装设计', imgLink: imgUrl2 },
  { title: '素描', discribe: '一副小素描', imgLink: imgUrl3 },
  { title: 'my son', discribe: '偷偷放上去能被发现吗?（・∀・）', imgLink: imgUrl4 }
]
</script>

<style scoped></style>