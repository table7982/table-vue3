<template>
  <div class="midBox clearfix">
    <div class="imgBox clearfix">
      <img v-bind:src="workListItem.imgLink" :alt="workListItem.title">
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

</script>

<style scoped>
.midBox {
  margin-top: 4rem;
  display: flex;

  justify-content: center;
  flex-direction: row;
  padding-bottom: 4rem;
  border-bottom: 0.1em solid white;
  /* background-color: #ccc; */
}

.imgBox {
  width: 90%;
}

.imgBox img {
  float: left;
  width: 40%;
  /* 图片宽度设置为100% */
  height: auto;
  color: white;
  border-radius: 1.125rem;
  box-shadow: 0 0 3rem;
  margin-right: 4rem;
  border: 0.3rem solid white;
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
  height: 10rem;
  padding: 1rem;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  /* background-color: red; */
  border: 0.1rem solid white;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 0 1rem;
  font-size: 2rem;
}

.imgBox .discribe h3 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
</style>