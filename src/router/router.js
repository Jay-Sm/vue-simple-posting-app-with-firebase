import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../views/PostFeed.vue'

const routes = [
  {
    path: '/',
    name: 'feed',
    component: Feed
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/profile/:uid',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
