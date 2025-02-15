<template>
  <div class="cardBox clearfix">
    <div class="timeLine">
    </div>
    <div class="arrow"></div>
    <IndexCard :spaceListItem="spaceList[0]" />
    <IndexCard :spaceListItem="spaceList[1]" />
  </div>
</template>

<script setup lang='ts' name='IndexCardContainer'>
import IndexCard from './IndexCardPosition.vue';
const spaceList = [
  [
    { title: '我的作品', englishTitle: 'my works', backTitle: '小小作品', backDiscribe: '自画像、服装设计、素描作品', btnLink: '/work' },
    { title: '我的链接', englishTitle: 'my links', backTitle: '小小足迹', backDiscribe: 'B站、抖音、小红书账号', btnLink: '/link' }
  ],
  [
    { title: '我的记录', englishTitle: 'my notes', backTitle: '小小记录', backDiscribe: '随便写写', btnLink: '/diarylist' },
    { title: '瞎想遐想', englishTitle: 'my thinking', backTitle: '小小思考', backDiscribe: '随便想想', btnLink: '/thinking' }
  ],

]
</script>

<style scoped>
.cardBox {
  position: relative;
}

.timeLine {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 0.4%;
  height: 100%;
  background-color: white;
  color: white;
  box-shadow: 0 0 1.25rem;
}

.arrow {
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(-100%);
  border-left: 1.25rem solid transparent;
  border-right: 1.25rem solid transparent;
  border-top: 1.25rem solid white;
  z-index: 100;

}
</style>