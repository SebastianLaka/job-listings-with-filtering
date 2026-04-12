<script setup lang="ts">
defineSlots<{
  'site-header'?: (props: {}) => any
}>()
</script>
<template>
  <header class="site-header">
    <slot name="site-header" />
  </header>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as color;
@use '@/assets/sass/breakpoints.scss' as breakpoint;
@media (min-width: breakpoint.$mobile-view) {
  .site-header {
    background-color: color.$primary-green-400;
    height: 30vh;
  }
}

@media (min-width: breakpoint.$desktop-small) {
  .site-header {
    height: 19.5vh;
  }
}
</style>
