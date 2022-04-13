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
    name: 'Gallery'
  }
]

const router = new VueRouter({
  routes
})

export default router
