import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import StagesView from '../views/StagesView.vue'
import ClemessyView from '../views/ClemessyView.vue'
import ClemessyUE41View from '@/views/ClemessyUE41View.vue'
import ClemessyUE46View from '@/views/ClemessyUE46View.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  {
    path: '/stages',
    name: 'stages',
    component: StagesView
  },
  {
    path: '/stages/clemessy',
    name: 'clemessy',
    component: ClemessyView
  },
  {
    path: '/stages/clemessy/ue41',
    name: 'clemessy-ue41',
    component: ClemessyUE41View
  },
  {
    path: '/stages/clemessy/ue46',
    name: 'clemessy-ue46',
    component: ClemessyUE46View
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router