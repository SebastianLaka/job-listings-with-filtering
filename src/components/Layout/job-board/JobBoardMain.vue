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
          <p v-if="job.new" class="job-info__new">NEW</p>
          <p v-if="job.featured" class="job-info__featured">FEATURED</p>
        </div>
        <div class="job-details">
          <p>{{ job.position }}</p>
          <div class="job-hire-details">
            <p>{{ job.postedAt }}</p>
            <p>{{ job.contract }}</p>
            <p>{{ job.location }}</p>
          </div>
        </div>
      </template>
      <template #job-requirements>
        <div class="job-board-requirements">
          <ul class="requirements-list">
            <li v-for="language in job.languages" :key="language">
              {{ language }}
            </li>
            <li v-for="tool in job.tools" :key="tool">
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
</style>
