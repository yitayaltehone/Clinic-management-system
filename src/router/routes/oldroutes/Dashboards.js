import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../../views/dashboard/analytics'))
  },
  {
    path: '/dashboard/ecommerce',
    component: lazy(() => import('../../../views/dashboard/ecommerce')),
    exact: true
  },
  {
    path: '/patient/test',
    component: lazy(() => import('../../../views/patients/')),
    exact: true
  }
]

export default DashboardRoutes
