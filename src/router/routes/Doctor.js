import { lazy } from 'react'

const DoctorRoutes = [
  {
    path: '/forms/elements/input',
    component: lazy(() => import('../../views/doctor/form-elements/input')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/input-group',
    component: lazy(() => import('../../views/doctor/form-elements/input-groups')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/input-mask',
    component: lazy(() => import('../../views/doctor/form-elements/input-mask')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/textarea',
    component: lazy(() => import('../../views/doctor/form-elements/textarea')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/checkbox',
    component: lazy(() => import('../../views/doctor/form-elements/checkboxes')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/radio',
    component: lazy(() => import('../../views/doctor/form-elements/radio')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/switch',
    component: lazy(() => import('../../views/doctor/form-elements/switch')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/select',
    component: lazy(() => import('../../views/doctor/form-elements/select')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/number-input',
    component: lazy(() => import('../../views/doctor/form-elements/number-input')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/file-uploader',
    component: lazy(() => import('../../views/doctor/form-elements/file-uploader')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/elements/editor',
    component: lazy(() => import('../../views/doctor/form-elements/editor')),
    meta: {
      action: 'read',
      resource: 'DOCTOR'
    }
  },
  {
    path: '/forms/elements/pickers',
    component: lazy(() => import('../../views/doctor/form-elements/datepicker')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/doctor',
    component: lazy(() => import('../../views/doctor/form-layouts')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/wizard',
    component: lazy(() => import('../../views/doctor/wizard')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/form-validation',
    component: lazy(() => import('../../views/doctor/validation')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  },
  {
    path: '/forms/form-repeater',
    component: lazy(() => import('../../views/doctor/form-repeater')),
    meta: {
        action: 'read',
        resource: 'DOCTOR'
      }
  }
]

export default DoctorRoutes
