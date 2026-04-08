<script setup lang="ts">
</script>

<template>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium ab, dignissimos quos molestias nam pariatur itaque quae quasi, dolorum amet magnam obcaecati repudiandae explicabo aliquam culpa, quo sint tempora earum magni sequi eos. Quis voluptatibus tempore vitae praesentium aliquam. Molestiae minus dolor reprehenderit quasi. Iusto reiciendis excepturi distinctio ad!</p>
</template>

<style scoped lang="scss">
@use 'sass:map';
@use '@/assets/sass/fonts.scss' as font;
@use '@/assets/sass/colors.scss' as color;
@use '@/assets/sass/reset.scss' as *;
p{
  font-size: font.$primary-font-size;
  color: color.$primary-green-400;
  background-color: color.$neutral-green-900;
  font-weight: map.get(font.$font-weights , "bold");
}
</style>
