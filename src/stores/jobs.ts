import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import DataJson from '@/assets/data.json'

export const useJobsStore = defineStore('job', () => {
  const data = DataJson

  return { data }
})
