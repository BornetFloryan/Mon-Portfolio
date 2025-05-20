import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import StagesView from '../views/StagesView.vue'
import ClemessyView from '../views/ClemessyView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  {
    path: '/stages',
    name: 'stages',
    component: StagesView,
    children: [
      {
        path: 'clemessy',
        name: 'clemessy',
        component: ClemessyView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
