<template>
  <div class="nav">
    <div :class="{ 'nav-bar': true }">
      <div @click="changeSituation" id="nav_bar_id" :class="{ 'nav-bar-active': if_active }">&#9776;</div>
    </div>
    <div class="list-margin-top">
      <div :class="{ 'nav-list-none': if_active === 0 }">
        <div @click="changeSituation" to="/index" class="link-style">
          <p class="text">收起</p>
        </div>
        <RouterLink to="/index" class="link-style">
          <p class="text">首页</p>
        </RouterLink>
        <RouterLink to="/work" class="link-style">
          <p class="text">小小作品</p>
        </RouterLink>
        <RouterLink to="/link" class="link-style">
          <p class="text">小小足迹</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useHeaderData } from '@/store/headerData'
import { storeToRefs } from 'pinia';
let HeaderStore: any = useHeaderData()
let { if_active }: any = storeToRefs(HeaderStore)
function changeSituation() {
  console.log(if_active.value)
  if (if_active.value === 0) {
    if_active.value = 1
  } else if (if_active.value === 1) {
    if_active.value = 0
  }
}

</script>
<style scoped>
.nav {
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: right;
  right: 1rem;
  width: 12rem;
  text-align: right;
  font-size: 3rem;

  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.nav-bar {
  position: absolute;
  right: 0;
  /* background-color: rgba(141, 141, 141, 0.5); */
  transition: all 0.2s ease-in-out;
}

/* .list-margin-top {
  margin-top: 4rem;
} */

.nav-bar:hover {
  color: #9e9e9e;
}

.nav-bar:active {
  color: #5d5d5d;
}

.nav-bar-active {
  color: #5d5d5d;
  transform-origin: center;
  transform: rotate(90deg);
  transition: all 0.2s ease-in-out;
}

.text {
  font-size: 1.5rem;
  padding: 0 3rem;
  text-align: center;
  line-height: 4rem;
  background-color: rgba(141, 141, 141, 0.5);
  transition: all 0.3s ease-in-out;
  border-top: 0.025rem solid #ccc;
}

.link-style {
  color: #ffffff;


}

.text:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.link-style:hover {
  color: #000000;
}

.nav-list-none {
  display: none;

}
</style>