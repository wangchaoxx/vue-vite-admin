import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './routes'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(async (to) => {
  const isAuthenticated = true
  NProgress.start()
  if (
    // 检查用户是否已登录
    !isAuthenticated
    // ❗️ 避免无限重定向
    && to.name !== 'Login'
  ) {
    NProgress.done()
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }
  NProgress.done()
})

export default router
