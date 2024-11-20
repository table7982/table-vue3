<template>
  <div class="midBox clearfix">
    <div class="imgBox clearfix">
      <img :src="road" :alt="workListItem.title">
      <div class="discribeBox clearfix">
        <div class="discribe">
          <h3>{{ workListItem.title }}</h3>
          <p>{{ workListItem.discribe }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='workBox'>
import { ref } from 'vue';
let workProps = defineProps(['workListItem'])
console.log(workProps.workListItem.imgLink)
let road = ref(workProps.workListItem.imgLink)
console.log("000", road.value)
</script>

<style scoped>
.midBox {
  margin-top: 4em;
  display: flex;
  justify-content: center;

  padding-bottom: 4em;
  border-bottom: 0.1em solid white;
  /* background-color: #ccc; */
}

.imgBox {
  width: 80%;
}

.imgBox img {
  float: left;
  width: 40%;
  /* 图片宽度设置为100% */
  height: auto;
  color: white;
  border-radius: 3em;
  box-shadow: 0 0 3em;
  margin-right: 4em;
  border: 0.3em solid white;
  /* 高度自动，以保持图片的宽高比 */
  /* 其他样式，如边框、圆角等 */
}

.discribeBox {
  /* background-color: #fff; */
  width: 40%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  /* opacity: 0.5; */
  z-index: 3;
}

.imgBox .discribe {
  width: 100%;
  height: 10em;
  padding: 2em;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  /* background-color: red; */
  border: 0.1em solid white;
  border-radius: 1em;
  box-shadow: 0 0 1em;
  font-size: 1em;
}

.imgBox .discribe h3 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
</style>