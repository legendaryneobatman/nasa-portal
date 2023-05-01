import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AsteroidOfTheDayPage from '@/pages/AsteroidOfTheDayPage.vue'
import WelcomePage from '@/pages/WelcomePage.vue'
import TopicsGridPage from '@/pages/TopicsGridPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: WelcomePage
  },
  {
    path: '/asteroid-of-the-day',
    name: 'asteroid-of-the-day',
    component: AsteroidOfTheDayPage,
    meta: {
      layout: 'ConstrainedLayout'
    }
  },
  {
    path: '/topics',
    name: 'topics',
    component: TopicsGridPage,
    meta: {
      layout: 'ConstrainedLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
