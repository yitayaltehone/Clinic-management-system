import { lazy } from 'react'

const PharmacyRoutes = [
  {
    path: '/Pharmacy',
    component: lazy(() => import('../.././views/Pharmacy/')),
    meta: {
        action: 'read',
        resource: 'Pharmacy'
      }
  },
  {
    path: '/prescriptions',
    component: lazy(() => import('../.././views/Pharmacy/Prescriptions/Prescriptions')),
    meta: {
        action: 'read',
        resource: 'Pharmacy'
      }
  },
  {
    path: '/patients/getone/:id',
    component: lazy(() => import('../../views/patients/PatientHistory')),
    meta: {
      action: 'read',
      resource: 'Pharmacy'
    }
  },
  {
    path: '/Prescription/order/:id',
    component: lazy(() => import('../../views/Pharmacy/Prescriptions/PrescriptionsOrder')),
    meta: {
      action: 'read',
      resource: 'Pharmacy'
    }
  }
  
]

 export default PharmacyRoutes

