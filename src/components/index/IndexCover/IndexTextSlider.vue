<template>
  <div class="screenAbsolutePosition">
    <div class="diaryParagraphStyle">
      <div v-for="textItem in IndexTextSliderData" :key="textItem.id"
        :class="{ 'textItemStyle': true, 'active': textItem.id === textIndex }"
        @click="pushRouterToDiary(textItem.link_id)">
        <p>{{ textItem.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='IndexTextSlider'>
import emitter from '@/utils/emitter';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let textIndex = ref(0)
emitter.on('sendSliderNewValue', (value: any) => {
  console.log('sendSliderNewValue被触发', value)
  textIndex.value = value
})



const IndexTextSliderData = [
  { id: 0, text: '给秋天一个约定', link_id: 'id01' },
  { id: 1, text: '苏州一日行', link_id: 'id02' },
  { id: 2, text: '写点什么', link_id: 'id03' }
]


let route = useRouter()
function pushRouterToDiary(link_id: string) {
  route.push(`/diaryitem/${link_id}`)
}

</script>

<style scoped>
.screenAbsolutePosition {
  position: absolute;
  bottom: 15%;
  right: 12%;
  /* width: 1rem; */
  height: 18rem;
  /* background-color: pink; */
  color: white;
}

.diaryParagraphStyle {
  position: relative;


}

.textItemStyle {
  position: absolute;
  font-size: 3rem;
  text-align: center;
  font-weight: bolder;
  font-family: 'Courier New', Courier, monospace;
  opacity: 0;
  visibility: hidden;
  text-shadow: 2px 2px 3px black;
  transition: opacity 0.5s, visibility 0.5s;
}

.active {
  color: white;
  opacity: 1;
  visibility: visible;
}


.active:hover {
  color: #ccc;
  cursor: pointer;
}

.active:active {
  color: white;
}
</style>