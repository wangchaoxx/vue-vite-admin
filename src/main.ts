import { createApp } from 'vue'
import 'virtual:uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
import App from './App.vue'

import './styles/index.scss'

createApp(App).use(router).mount('#app')
