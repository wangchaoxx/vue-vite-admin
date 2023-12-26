export const routes = [
  { path: '/', component: () => import('../pages/index.vue') },
  { path: '/about', component: import('../pages/about.vue') },
]
