import { createRouter, createWebHistory } from 'vue-router'
import FormLayout from '../layouts/FormLayout.vue'
import KioskSelection from '../views/KioskSelection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FormLayout  // initial page: the multi-step form
  },
  {
    path: '/kiosk-selection',
    name: 'kiosk-selection',
    component: KioskSelection  // after form submit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router