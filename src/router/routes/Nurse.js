// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const NurseRoutes = [
  {
    path: '/users',
    component: lazy(() => import('../../views/user/list'))
    
  },
  {
    path: '/patientss',
    exact: true,
    component: lazy(() => import('../../views/patients'))
  },
  {
    path: '/patient-archive',
    exact: true,
    component: lazy(() => import('../../views/patients-archive')) 
  },
  {
    path: '/patients/getone/:id',
    exact: true,
    component: lazy(() => import('../../views/patients/PatientHistory'))
  },
  {
    path: '/patients/view',
    exact: true,
    component: () => <Redirect to='/patients/view/1' />
  },
  // {
  //   path: '/patients/view/:id',
  //   component: lazy(() => import('../../views/patients/view')),
  //   meta: {
  //     navLink: '/patients/view'
  //   }
  // },
  {
    path: '/nurse',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/nurse/email')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/nurse/email')),
    meta: {
      navLink: '/apps/email',
      action: 'read',
      resource: 'NURSE'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/nurse/email')),
    meta: {
      navLink: '/apps/email',
      action: 'read',
        resource: 'NURSE'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/nurse/email')),
    meta: {
      navLink: '/apps/email',
        action: 'read',
        resource: 'NURSE'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/nurse/chat')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/nurse/todo')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/nurse/todo')),
    meta: {
      navLink: '/apps/todo',
      action: 'read',
      resource: 'NURSE'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/nurse/todo')),
    meta: {
      navLink: '/apps/todo',
      action: 'read',
      resource: 'NURSE'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/nurse/calendar')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/nurse/invoice/list')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/nurse/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview',
      action: 'read',
      resource: 'NURSE'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987'/>,
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/nurse/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit',
      action: 'read',
      resource: 'NURSE'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />,
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/nurse/invoice/add')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/nurse/invoice/print')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/nurse/ecommerce/shop')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/nurse/ecommerce/wishlist')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />,
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/nurse/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail',
      action: 'read',
      resource: 'NURSE'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/nurse/ecommerce/checkout')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/nurse/user/list')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />,
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/nurse/user/view')),
    meta: {
      navLink: '/apps/user/view',
      action: 'read',
      resource: 'NURSE'
    }
  },
  {
    path: '/apps/roles',
    component: lazy(() => import('../../views/nurse/roles-permissions/roles')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  },
  {
    path: '/apps/permissions',
    component: lazy(() => import('../../views/nurse/roles-permissions/permissions')),
    meta: {
        action: 'read',
        resource: 'NURSE'
      }
  }
]

export default NurseRoutes
