import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { JobData } from '@/types/job'
import DataJson from '@/assets/data.json'

export const useJobsStore = defineStore('job', () => {
  const data = ref<JobData[]>(DataJson)
  const jobFilters = ref<string[]>([])
  const getJobTags = (job: JobData): string[] => {
    return [job.role, job.level, ...job.languages, ...job.tools]
  }
  const addFilter = (filter: string) => {
    const filterExist = jobFilters.value.includes(filter)
    if (!filterExist) {
      jobFilters.value.push(filter)
    }
  }
  const removeTag = (filter: string) => {
   jobFilters.value = jobFilters.value.filter(tag => tag !== filter)
  }
  const clearFilters = () => (jobFilters.value = [])
  return { data, jobFilters, addFilter, getJobTags, clearFilters, removeTag }
})
