import Layout from '~/components/Layout/index.vue'

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('~/pages/login/index.vue'),
    meta: { title: '登录' },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('~/pages/index.vue'),
      meta: { title: 'Dashboard', icon: 'dashboard' },
    }],
  },
  { path: '/:pathMatch(.*)*', hidden: true, name: 'NotFound', component: () => import('~/pages/NotFound.vue') },
  {
    path: '/system',
    name: 'System',
    component: Layout,
    meta: { title: '系统管理', icon: 'system' },
    children: [
      { path: 'user', name: 'SystemUser', component: () => import('~/pages/system/User.vue'), meta: { title: '用户管理', icon: '' } },
      { path: 'menu', name: 'SystemMenu', component: () => import('~/pages/system/Menu.vue'), meta: { title: '菜单管理', icon: '' } },
      { path: 'rule', name: 'SystemRule', component: () => import('~/pages/system/Rule.vue'), meta: { title: '角色管理', icon: '' } },
    ],
  },
]
