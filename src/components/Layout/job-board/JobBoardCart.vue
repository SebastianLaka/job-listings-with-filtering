<script setup lang="ts"></script>
<template>
  <article class="job-card">
    
    <slot name="job-info"/>
    <slot name="job-requirements" />
  </article>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as color;
@use '@/assets/sass/breakpoints.scss' as breakpoint;
@media (min-width: breakpoint.$mobile-view) {
  .job-card {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1em 0;
  }
}
@media (min-width: breakpoint.$desktop-small) {
  .job-card {
    flex-direction: row;
  }
}
</style>
