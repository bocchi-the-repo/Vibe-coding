import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Animation from '@/views/Animation.vue'
import Live from '@/views/Live.vue'
import Movies from '@/views/Movies.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Login', component: Login },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: 'animation', name: 'Animation', component: Animation },
      { path: 'live', name: 'Live', component: Live },
      { path: 'movies', name: 'Movies', component: Movies }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
