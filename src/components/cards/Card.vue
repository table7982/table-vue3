<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="title">FLIP CARD</slot>
        <slot name="paragraph">Hover Me</slot>

      </div>
      <div class="flip-card-back">
        <slot name="backTitle">FLIP CARD</slot>
        <slot name="backParagraph">Hover Me</slot>
        <a class="btnLink button" :href="btnLink">
          <span class="text">点我试试</span>
          <span class="blob"></span>
          <span class="blob"></span>
          <span class="blob"></span>
          <span class="blob"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='Card'>
defineProps(['btnLink'])
</script>

<style scoped>
.btnLink {
  margin: 4%;
}

.button {
  position: relative;
  font-family: inherit;
  font-size: 18px;
  border-radius: 40em;
  width: 8em;
  height: 3em;
  z-index: 1;
  color: white;
  cursor: pointer;
  overflow: hidden;
  border: none;
}

.button .text {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 3em;
  border-radius: 40em;
  border: none;
  background: linear-gradient(rgba(255, 255, 255, 0.473),
      rgba(150, 150, 150, 0.25));
  z-index: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.button .blob {
  position: absolute;
  z-index: -1;
  border-radius: 5em;
  width: 5em;
  height: 3em;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
}

.button .blob:nth-child(2) {
  left: 0em;
  top: 0;
  background: #ff930f;
}

.button .blob:nth-child(3) {
  left: 1.8em;
  top: 0;
  z-index: -1;
  background: #bf0fff;
}

.button .blob:nth-child(4) {
  left: 4em;
  top: -1em;
  background: #ff1b6b;
}

.button .blob:nth-child(5) {
  left: 4.3em;
  top: 1.6em;
  background: #0061ff;
}

.button:hover .blob:nth-child(2) {
  background: #0061ff;
}

.button:hover .blob:nth-child(3) {
  background: #ff1b6b;
}

.button:hover .blob:nth-child(4) {
  background: #bf0fff;
}

.button:hover .blob:nth-child(5) {
  background: #ff930f;
}

.button:hover .blob {
  transform: scale(1.3);
}

.button:active {
  border: 2px solid white;
}


.flip-card {
  background-color: transparent;
  width: 80%;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
}

.flip-card-back {
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
      bisque 40%, rgb(255, 185, 160) 78%);
  color: white;
  transform: rotateY(180deg);
}
</style>