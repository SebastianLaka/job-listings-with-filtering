<script setup lang="ts"></script>
<template>
  <article class="job-card">
    <slot name="job-info"/>
  </article>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as color;
@use '@/assets/sass/breakpoints.scss' as breakpoint;
@use '@/assets/sass/mixins.scss' as mixin;
@media (min-width: breakpoint.$mobile-view) {
  .job-card {
    @include mixin.flex-layout(
      $flex-direction: column,
      $justify-content: center,
    );
    @include mixin.set-gap(1em 0);
    @include mixin.set-position-element($position: relative);
    padding: 2em 1em;
    border-radius: .4em;
    box-shadow: 0 .9em 1.5em -1em color.$primary-green-400;
  }
}
@media (min-width: breakpoint.$desktop-small) {
  .job-card {
    @include mixin.flex-layout($flex-direction: row, $justify-content: space-between, $align-items: center);
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
