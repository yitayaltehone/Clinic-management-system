import { Copy, Circle, Box, Package, RotateCw, AlertTriangle } from 'react-feather'

export default [
    {
      header: 'Pharmacy Pages'
    },
    {
      id: 'Pharmacy',
      title: 'Pharmacy',
      icon: <Copy size={20} />,
      action: 'read',
      resource: 'Pharmacy',
      children: [
        {
          id: 'NewPharmacy',
          title: 'Store',
          icon: <Circle size={12} />,
          action: 'read',
          resource: 'Pharmacy',
          navLink: '/pharmacy'
        },
        {
          id: 'prescriptions',
          title: 'prescriptions',
          icon: <Circle size={12} />,
          action: 'read',
          resource: 'Pharmacy',
          navLink: '/prescriptions'
        }
    ]
}
]