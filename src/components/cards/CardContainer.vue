<template>
  <div class="cardBox clearfix">
    <div class="timeLine">
    </div>
    <div class="arrow"></div>
    <CardBox :spaceListItem="spaceList[0]" />
    <CardBox :spaceListItem="spaceList[1]" />
  </div>

</template>

<script setup lang='ts' name='CardContainer'>
import Card from './Card.vue';
import CardBox from './CardBox.vue';
const spaceList = [
  [
    { title: '我的作品', englishTitle: 'my works', backTitle: '小小作品', backDiscribe: '自画像、服装设计、素描作品', btnLink: '/work' },
    { title: '我的链接', englishTitle: 'my links', backTitle: '小小足迹', backDiscribe: 'B站、抖音、小红书账号', btnLink: '/link' }
  ],
  [
    { title: '敬请期待', englishTitle: 'my works', backTitle: '敬请期待', backDiscribe: '敬请期待', btnLink: '/link' },
    { title: '敬请期待', englishTitle: 'my tracks', backTitle: '敬请期待', backDiscribe: '敬请期待', btnLink: '/link' }
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
  height: 110%;
  background-color: white;
  color: white;
  box-shadow: 0 0 1.25rem;
}

.arrow {
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 110%;
  transform: translateX(-50%);
  border-left: 1.25rem solid transparent;
  border-right: 1.25rem solid transparent;
  border-top: 1.25rem solid white;

}
</style>