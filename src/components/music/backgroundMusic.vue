<template>
  <div class="indicaterAllContainer" @click="closeIndicater">
    <div class="indicaterBox">
      <p class="indicaterText">X&nbsp;点下方播放音乐</p>
    </div>
    <div class="indicaterContainer">
      <svg t="1736426025025" class="indicate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="8814">
        <path d="M0 170.666667 1024 170.666667 512 853.333333Z" p-id="8815"></path>
      </svg>
    </div>
  </div>

  <div class="musicContainer" @click="toggleMusic">
    <audio ref="audioPlayer" :src="musicUrl" autoplay loop @loadeddata="handleLoadeddata" @play="handlePlay"
      @pause="handlePause"></audio>
    <div class="iconContainer">
      <svg t="1736429566898" class="play" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="10647">
        <path
          d="M899.117 526.883a30.04 30.04 0 0 1-3.976 5.365 29.922 29.922 0 0 1-1.548 1.58l-0.2 0.186a30.087 30.087 0 0 1-5.472 4.057L165.858 955.094c-0.047 0.027-0.1 0.046-0.143 0.073q-1.155 0.659-2.37 1.214c-0.145 0.066-0.289 0.132-0.434 0.2q-1.084 0.476-2.212 0.864c-0.238 0.083-0.475 0.165-0.713 0.241-0.645 0.205-1.3 0.386-1.963 0.548-0.348 0.085-0.7 0.168-1.044 0.24-0.56 0.116-1.126 0.213-1.7 0.3q-1.416 0.21-2.833 0.283h-0.016a29.977 29.977 0 0 1-4.5-0.107c-0.243-0.024-0.483-0.057-0.723-0.086a30.513 30.513 0 0 1-2.109-0.331 31.377 31.377 0 0 1-1.021-0.222c-0.6-0.139-1.191-0.293-1.78-0.469-0.331-0.1-0.658-0.2-0.984-0.315q-0.921-0.309-1.82-0.676c-0.241-0.1-0.479-0.2-0.716-0.307q-1.047-0.461-2.055-1c-0.108-0.058-0.215-0.118-0.322-0.177a29.753 29.753 0 0 1-8.652-7.174l-0.071-0.089a29.873 29.873 0 0 1-1.59-2.124c-0.3-0.439-0.589-0.885-0.866-1.34-0.108-0.179-0.233-0.341-0.338-0.524a29.859 29.859 0 0 1-4-16V95.886a30 30 0 0 1 44.981-26.984l722.265 417a30 30 0 0 1 10.988 40.981zM180.89 877.13l632.327-365.2L180.89 146.856V877.13z"
          fill="white" p-id="10648"></path>
      </svg>
      <svg t="1736430437262" class="stop" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="12538">
        <path
          d="M733.4 1024c-83.9 0-152.2-68.3-152.2-152.2V152.2C581.2 68.3 649.5 0 733.4 0s152.2 68.3 152.2 152.2v719.6c0 83.9-68.3 152.2-152.2 152.2z m0-941c-38.2 0-69.2 31-69.2 69.2v719.6c0 38.2 31 69.2 69.2 69.2s69.2-31 69.2-69.2V152.2c0-38.1-31-69.2-69.2-69.2z m-442.8 941c-83.9 0-152.2-68.3-152.2-152.2V152.2C138.4 68.3 206.7 0 290.6 0s152.2 68.3 152.2 152.2v719.6c0 83.9-68.3 152.2-152.2 152.2z m0-941c-38.1 0-69.2 31-69.2 69.2v719.6c0 38.2 31 69.2 69.2 69.2s69.2-31 69.2-69.2V152.2c0-38.1-31.1-69.2-69.2-69.2z"
          fill="white" p-id="12539"></path>
      </svg>
    </div>
  </div>

</template>



<script setup lang='ts' name='backgroundMusic'>
// import { el } from 'element-plus/es/locales.mjs';
import { onMounted, ref, watch } from 'vue';
import { defineProps } from 'vue';
const routeID = defineProps(['music_url_props']);

console.log('routeID', routeID.music_url_props)
import useDiaryData from '../pages/diary/diaryHooks/useDiaryData';
const { getDiaryListById } = useDiaryData()

const DiaryMessageObject = getDiaryListById(routeID.music_url_props)
// console.log('1234', DiaryMessageObject['music_url'])
// const music_rule: any = {
//   'id03': 'music/org_bgm.mp3',
//   'id02': 'music/su_music.mp3',
//   'id01': 'music/su_music.mp3',
// }
// console.log('musicUrl', music_rule[routeID.music_url_props])
const musicUrl = DiaryMessageObject['music_url']
const audioPlayer = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const handlePlay = () => {
  isPlaying.value = true;
};

const handlePause = () => {
  isPlaying.value = false;
};

const toggleMusic = () => {
  if (isPlaying.value) {
    audioPlayer.value?.pause();
  } else {
    audioPlayer.value?.play();
  }
};


function handleLoadeddata() {
  audioPlayer.value?.play();
}



function closeIndicater() {
  let indicaterTs: any = document.querySelector('.indicaterAllContainer')
  if (indicaterTs) {
    indicaterTs.style.display = 'none'; // 隐藏元素
  }
}



watch(isPlaying, (new_isPlaying) => {
  console.log(new_isPlaying)
  if (new_isPlaying) {
    let playTs: any = document.querySelector('.play')
    playTs.style.display = 'none';
    let stopTs: any = document.querySelector('.stop')
    stopTs.style.display = 'block';
  } else if (!new_isPlaying) {
    let playTs: any = document.querySelector('.play')
    playTs.style.display = 'block';
    let stopTs: any = document.querySelector('.stop')
    stopTs.style.display = 'none';
  }
})


</script>

<style scoped>
.indicaterAllContainer {
  opacity: 0.6;
  width: 4.5rem;
  height: 11rem;
  /* background-color: pink; */
  position: fixed;
  bottom: 12rem;
  right: 2rem;
  z-index: 1000;
}

.indicaterContainer {
  width: 70%;
  margin: 0 auto;
  /* background-color: skyblue; */
}

.indicaterBox {
  cursor: pointer;
  margin: 0 auto;
  padding: .5rem;
  width: 60%;
  height: 12.5rem;
  background-color: black;
  border-radius: .5rem;

}

.indicaterText {
  cursor: pointer;
  color: white;
  writing-mode: vertical-rl;
  margin: auto auto;
  letter-spacing: .1rem;
  font-size: 1.3rem;
  opacity: 1;

}

/* .indicate {
  background-color: #fff;
} */

.musicContainer {
  position: fixed;
  cursor: pointer;
  bottom: 2rem;
  right: 2rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  /* background-color: pink; */
  color: white;
  z-index: 1000;
  border: 0.15rem solid white;
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
}

.musicContainer:hover {

  box-shadow: 0 0 .7rem;

}

.iconContainer {
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 0.7rem;
  left: 0.7rem;
  /* background-color: #fff; */
}

.play {
  position: relative;
  top: 0rem;
  left: .3rem;
  height: 3rem;
  width: 3rem;
  /* display: none; */
}

.stop {
  position: relative;
  top: .25rem;
  left: .25rem;
  height: 2.5rem;
  width: 2.5rem;
  display: none;
}
</style>