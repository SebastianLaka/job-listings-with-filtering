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
.site-header{
    background-color: color.$primary-green-400;
}
</style>
