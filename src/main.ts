import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import router from './router'
import App from './App.vue'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.scss'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
