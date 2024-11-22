import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestFist from '@/components/TestFist.vue'
import CountView from '@/views/CountView.vue'
import Subcount1View from '@/views/Subcount1View.vue'
import Subcount2View from '@/views/Subcount2View.vue'
import CrudArticleView from '@/views/CrudArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/article',
      name: 'article',
      component: CrudArticleView,
    },
    {
      path: '/count',
      name: 'count',
      component: CountView,
      children: [
        { path: 'subCount1', component: Subcount1View },
        { path: 'subCount2', component: Subcount2View },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
