import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { JobData } from '@/types/job'
import DataJson from '@/assets/data.json'

export const useJobsStore = defineStore('job', () => {
  const data = ref<JobData[]>(DataJson)
  const jobFilters = ref<string[]>([])
  const jobsList = ref<JobData[]>(DataJson)
  const getJobTags = (job: JobData): string[] => {
    return [job.role, job.level, ...job.languages, ...job.tools]
  }
  const addFilter = (filter: string) => {
    if (!jobFilters.value.includes(filter)) {
      jobFilters.value = [...jobFilters.value, filter]
    }
  }
  const removeTag = (filter: string) => {
    jobFilters.value = jobFilters.value.filter((tag) => tag !== filter)
  }
  const clearFilters = () => (jobFilters.value = [])
  const filteredJobList = computed(() =>
    jobsList.value.filter((job) => {
      const filteredJobTags = getJobTags(job)
      let getJobfilters = jobFilters.value
      return getJobfilters.every((jobFilter) => filteredJobTags.includes(jobFilter))
    }),
  )

  return { data, jobFilters, addFilter, getJobTags, clearFilters, removeTag, filteredJobList }
})
