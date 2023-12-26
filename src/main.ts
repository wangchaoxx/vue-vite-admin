import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import './style.css'
import 'virtual:uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'
const router = createRouter({
  history: createWebHashHistory(),
})


createApp(App).use(router).mount('#app')
