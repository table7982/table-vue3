<template>
  <div class="list_container">

    <div @click="toDiaryLink(diaryMessage.route_link)" class="el_img_box_class">
      <el-image class="el_img_class" :src="diaryMessage.img_url" fit="cover">
      </el-image>
    </div>
    <div class="paragraph_container">
      <div class="text_container">
        <h3 @click="toDiaryLink(diaryMessage.route_link)">{{ diaryMessage.diary_title }}</h3>
        <span class="time_str">{{ diaryMessage.diary_time }}</span>
        <p class="discribe">{{ diaryMessage.diary_discribe }}</p>
        <div class="rate_container">
          <el-rate void-color="white" :colors='colors' size="small" v-model="value" class="rate" />
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang='ts' name='DiaryListItem'>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
defineProps(['diaryMessage'])
const colors = ref(['#ffffff', '#ffffff', '#ffffff'])
const value = ref(0)
let route = useRouter()
function toDiaryLink(path: any) {
  route.push(path)
}




</script>

<style scoped>
.list_container {
  display: flex;
  width: 80vw;
  height: 35vw;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;

  color: white;
  /* background-color: pink; */
  z-index: 0;
}

.el_img_box_class {
  width: 70%;
  z-index: 2;
}

.el_img_class {
  width: 100%;
  height: 100%;
  border-radius: .8rem;
  border: 0.1rem solid white;
  box-shadow: 0 0 .2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.el_img_class:hover {
  box-shadow: 0 0 1.5rem;
}


.paragraph_container {
  z-index: 1;
  /* background-color: skyblue; */
  width: 50%;
  height: 23vw;
  margin: auto;
  border-radius: 0 .5rem .5rem 0;
  border: 0.1rem solid white;
  box-shadow: 0 0 .2rem;
}

.text_container {

  width: 100%;
  height: 100%;
  /* background-color: pink; */
  padding: 2rem 2rem 0 2rem;
  font-family: 'Courier New', Courier, monospace;
  color: white;
}

.text_container h3 {
  font-size: 1.9rem;
}

.text_container .time_str {
  font-size: 0.75rem;
}

.text_container .discribe {
  margin-top: 1rem;
  font-size: 1.25rem;
}


.text_container h3:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>