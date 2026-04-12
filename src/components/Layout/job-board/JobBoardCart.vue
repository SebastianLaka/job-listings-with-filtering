<script setup lang="ts"></script>
<template>
  <article class="job-card">
    <slot name="company-logo" />
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
    justify-content: center;
    gap: 1em 0;
    position: relative;
    padding: 2em 1em;
    border-radius: .4em;
    box-shadow: 0 .9em 1.5em -1em color.$primary-green-400;
  }
}
@media (min-width: breakpoint.$desktop-small) {
  .job-card {
    flex-direction: row;
  }
}
</style>
