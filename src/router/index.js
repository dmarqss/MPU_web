import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/AuthView.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPasswordView.vue')
  },

  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../views/ResetPasswordView.vue')
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
