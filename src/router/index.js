import { createRouter, createWebHistory } from 'vue-router'

import PortalSwitch from '../views/PortalSwitch.vue'  
import FormLayout from '../layouts/FormLayout.vue'
import KioskSelection from '../views/KioskSelection.vue'
import StaffReviewScreen from '../views/StaffView.vue'

const routes = [
  {
    path: '/',
    name: 'PortalSwitch',
    component: PortalSwitch
  },
  {
    path: '/user',
    name: 'UserForm',
    component: FormLayout
  },
  {
    path: '/kiosk-selection',
    name: 'KioskSelection',
    component: KioskSelection
  },
  {
    path: '/staff-review',
    name: 'StaffView',
    component: StaffReviewScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router