export const routes = [
  { path: '/', component: () => import('../pages/Index.vue') },
  { path: '/about', component: () => import('../pages/About.vue') },
  { path: '/home', component: () => import('../pages/Home.vue') },
]
