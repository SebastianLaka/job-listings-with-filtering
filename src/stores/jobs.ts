import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { JobData } from '@/types/job'
import DataJson from '@/assets/data.json'

export const useJobsStore = defineStore('job', () => {
  const data = ref<JobData[]>(DataJson)
  return { data }
})
