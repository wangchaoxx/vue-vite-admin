import Layout from '~/components/Layout/index.vue'

export const routes = [
  { path: '/', name: 'Dashboard', icon: 'Menu', component: () => import('~/pages/Index.vue') },
  // { path: '/:pathMatch(.*)*', hidden: true, name: 'NotFound', component: () => import('~/pages/NotFound.vue') },
  {
    path: '/system',
    name: '系统管理',
    component: Layout,
    children: [
      { path: '/user', name: '用户管理', component: () => import('~/pages/system/User.vue') },
      { path: '/menu', name: '菜单管理', component: () => import('~/pages/system/Menu.vue') },
      { path: '/rule', name: '角色管理', component: () => import('~/pages/system/Rule.vue') },
    ],
  },
]
