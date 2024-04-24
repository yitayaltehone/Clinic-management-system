import { lazy } from 'react'

const LabTechRoutes = [
  {
    path: '/labtech',
    component: lazy(() => import('../../views/lab-tech/typography')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/icons/reactfeather',
    component: lazy(() => import('../../views/lab-tech/icons')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/cards/basic',
    component: lazy(() => import('../../views/lab-tech/cards/basic')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/cards/advance',
    component: lazy(() => import('../../views/lab-tech/cards/advance')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/cards/statistics',
    component: lazy(() => import('../../views/lab-tech/cards/statistics')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/cards/analytics',
    component: lazy(() => import('../../views/lab-tech/cards/analytics')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/cards/action',
    component: lazy(() => import('../../views/lab-tech/cards/actions')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/accordion',
    component: lazy(() => import('../../views/components/accordion')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/alerts',
    component: lazy(() => import('../../views/components/alerts')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/auto-complete',
    component: lazy(() => import('../../views/components/autocomplete')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/avatar',
    component: lazy(() => import('../../views/components/avatar')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/badges',
    component: lazy(() => import('../../views/components/badge')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/blockui',
    component: lazy(() => import('../../views/components/block-ui')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/breadcrumbs',
    component: lazy(() => import('../../views/components/breadcrumbs')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/buttons',
    component: lazy(() => import('../../views/components/buttons')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/carousel',
    component: lazy(() => import('../../views/components/carousel')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/collapse',
    component: lazy(() => import('../../views/components/collapse')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/divider',
    component: lazy(() => import('../../views/components/divider')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/dropdowns',
    component: lazy(() => import('../../views/components/dropdowns')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/list-group',
    component: lazy(() => import('../../views/components/listGroup')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/modals',
    component: lazy(() => import('../../views/components/modal')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/nav-component',
    component: lazy(() => import('../../views/components/navComponent')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/offcanvas',
    component: lazy(() => import('../../views/components/offcanvas')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/pagination',
    component: lazy(() => import('../../views/components/pagination')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/pill-badges',
    component: lazy(() => import('../../views/components/badgePills')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/pills-component',
    component: lazy(() => import('../../views/components/tabPills')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/popovers',
    component: lazy(() => import('../../views/components/popovers')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/progress',
    component: lazy(() => import('../../views/components/progress')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/spinners',
    component: lazy(() => import('../../views/components/spinners')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/tabs-component',
    component: lazy(() => import('../../views/components/tabs')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/timeline',
    component: lazy(() => import('../../views/components/timeline')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/toasts',
    component: lazy(() => import('../../views/components/toasts')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  },
  {
    path: '/components/tooltips',
    component: lazy(() => import('../../views/components/tooltips')),
    meta: {
        action: 'read',
        resource: 'LABTECH'
      }
  }
]

export default LabTechRoutes
