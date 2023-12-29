import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      isCollapse: false
    }
  },
  getters:{
    getIsCollapse: (state) => state.isCollapse
  },
  actions:{
    setIsCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }
})
