import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: ["/home"],
    component: Home,
  },
  {
    path: '/event',
    name: 'Event',
    component: Event,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/gallery/:eventName',
    name: 'Gallery Event',
    component: () => import('../views/Gallery.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
