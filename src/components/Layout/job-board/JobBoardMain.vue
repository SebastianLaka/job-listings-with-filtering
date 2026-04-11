<script setup lang="ts">
import JobBoardCart from './JobBoardCart.vue'
import { useJobsStore } from '@/stores/jobs'
const jobs = useJobsStore()
console.log(jobs.data)
</script>
<template>
  <main class="jobs-board-container">
    <JobBoardCart v-for="job in jobs.data" :key="job.id">
      <template #job-info>
        <div class="job-info">
          <p class="job-info__company-name">{{ job.company }}</p>
          <p v-if="job.new" class="job-info__new">NEW!</p>
          <p v-if="job.featured" class="job-info__featured">FEATURED</p>
        </div>
        <div class="job-details">
          <p class="job-details__position">{{ job.position }}</p>
          <div class="job-hire-details">
            <p class="job-hire-details__post">{{ job.postedAt }}</p>
            <p class="job-hire-details__contract">{{ job.contract }}</p>
            <p class="job-hire-details__location">{{ job.location }}</p>
          </div>
        </div>
      </template>
      <template #job-requirements>
        <div class="job-board-requirements">
          <p class="job-board-requirements__role">{{ job.role }}</p>
          <p class="job-board-requirements__level">{{ job.level }}</p>
          <ul class="requirements-list">
            <li
              v-for="language in job.languages"
              :key="language"
              class="requirements-list__language"
            >
              {{ language }}
            </li>
            <li v-for="tool in job.tools" :key="tool" class="requirements-list__tool">
              {{ tool }}
            </li>
          </ul>
        </div>
      </template>
    </JobBoardCart>
  </main>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as color;
@use '@/assets/sass/fonts.scss' as font;
@use '@/assets/sass/breakpoints.scss' as breakpoint;
@media (min-width: breakpoint.$mobile-view) {
  .jobs-board-container {
    .job-info {
      display: flex;
      align-items: center;
      gap: 0 1em;
      padding: 1em 0;
      &__company-name {
        padding-right: 1em;
        color: color.$primary-green-400;
        font-weight: map.get(font.$font-weights, 'bold');
      }
      &__new,
      &__featured {
        background-color: color.$primary-green-400;
        color: color.$neutral-green-50;
        padding: 0.4em 0.75em;
        border-radius: 3em;
        line-height: 1;
        height: 1.5rem;

      }
      &__featured {
        background-color: black;
      }
    }
    .job-details {
      display: flex;
      flex-direction: column;
      gap: 0.5em 0;
      &__position {
        font-weight: map.get(font.$font-weights, 'bold');
      }
      .job-hire-details {
        display: flex;
        gap: 0 1.75em;
        &__post,
        &__contract,
        &__location {
          color: color.$neutral-gray-400;
          font-weight: map.get(font.$font-weights, 'medium');
        }
        &__contract,
        &__location {
          position: relative;
          &::before {
            position: absolute;
            content: '';
            top: 30%;
            left: -25%;
            border-radius: 50%;
            width: 4px; height: 4px;
            background-color: color.$neutral-gray-400;
          }
        }
      }
    }
    .job-board-requirements {
      display: flex;
      gap: 0 1em;
      &__role,
      &__level {
        color: color.$primary-green-400;
        font-weight: map.get(font.$font-weights, 'bold');
      }
      .requirements-list {
        display: flex;
        gap: 0 1em;
        list-style-type: none;
        &__language,
        &__tool {
          color: color.$primary-green-400;
          font-weight: map.get(font.$font-weights, 'bold');
        }
      }
    }
  }
}
</style>
