<template>
  <div class="job-board-modal">
    <slot name="board-modal" />
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/sass/colors.scss' as color;
@use '@/assets/sass/mixins.scss' as mixin;
@use '@/assets/sass/breakpoints.scss' as breakpoint;
@media (min-width: breakpoint.$mobile-view) {
  .job-board-modal {
    @include mixin.flex-layout($justify-content: space-between, $flex-wrap: wrap);
    @include mixin.set-position-element($position: absolute, $top: 15.5em, $left: 2.35%);
    background-color: color.$neutral-green-50;
    width: 95%;
    padding: 1em;
    border-radius: 0.4em;
    box-shadow: 0 0.9em 1.5em -1em color.$primary-green-400;
  }
}
@media (min-width: breakpoint.$desktop-small) {
  .job-board-modal {
    @include mixin.set-position-element($top: 11.25em, $left: 50%);
    transform: translate(-50%, -50%);
    max-width: 900px;
  }
}
</style>
