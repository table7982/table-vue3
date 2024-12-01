<template>
  <div class="linksLogo">
    <a href="https://space.bilibili.com/1842925705?spm_id_from=333.1007.0.0" target="_blank">
      <img src="../../../../static/linkImg/bilibili.png" alt="Bilibili">
      <p>Bilibili</p>
    </a>
    <a href="https://v.douyin.com/iAoT7NGD/ 9@8.com :4pm" target="_blank">
      <img src="../../../../static/linkImg/tiktok.png" alt="抖音">
      <p>抖音</p>
    </a>
    <a href="https://github.com/table7982?tab=repositories" target="_blank">
      <img src="../../../../static/linkImg/git.png" alt="Github">
      <p>Github</p>
    </a>
  </div>
</template>

<script setup lang='ts' name='LinkBox'>

</script>

<style scoped>
.linksLogo {
  margin: 4em;
  display: flex;
  justify-content: space-around;
  /* background-color: red; */
}

.linksLogo img {
  width: 5em;
}

.linksLogo a {
  color: white;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;

}

.linksLogo p {
  font-size: 1em;
}
</style>
