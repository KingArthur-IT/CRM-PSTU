// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue')
  },
  {
    path: '/home',
    component: () => import('@/layouts/auth/Home.vue'),
    children: [
      {
        path: '/home',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/home/users',
        name: 'Users',
        component: () => import('@/views/Users.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
