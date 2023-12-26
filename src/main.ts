import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
