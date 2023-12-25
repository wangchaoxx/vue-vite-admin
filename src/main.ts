import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import './style.css'
import App from './App.vue'
const router = createRouter({
  history: createWebHashHistory(),
})


createApp(App).use(router).mount('#app')
