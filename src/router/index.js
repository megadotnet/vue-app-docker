import { createRouter, createWebHashHistory } from 'vue-router'
import PointsManagement from '../components/admin/PointsManagement.vue'
import AdminLayout from '../components/admin/AdminLayout.vue'

const routes = [
  {
    path: '/',
    component: AdminLayout,
    children: [
      {
        path: '/',
        name: 'PointsDashboard',
        component: PointsManagement,
        meta: { title: '积分概览' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
