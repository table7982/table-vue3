<template>
  <div class="headContainer">
    <div class="headBox">
      {{ title }}
    </div>

  </div>

</template>

<script setup lang='ts' name='Head'>
defineProps(['title'])
</script>

<style scoped>
.headContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1em solid white;
}

.headBox {
  width: 5em;
  font-size: 2em;
  text-align: center;
  margin: 0.8em;
  color: white;
  box-shadow: 0 0 5px;

}
</style>