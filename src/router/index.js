import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services', 
    component: () => import('../pages/Services.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/Contact.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})