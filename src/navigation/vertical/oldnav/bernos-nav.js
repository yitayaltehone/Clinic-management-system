// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Settings } from 'react-feather'

export default [
  {
    header: 'Admin'
  },
  {
    id: 'patients',
    title: 'Patients',
    icon: <User size={20} />,
    children: [
        {
          id: 'patient-list',
          title: 'New Patients',
          icon: <Circle size={12} />,
          navLink: '/patientss'
        },
        {
          id: 'patient-archive',
          title: 'Patient Archive',
          icon: <Circle size={12} />,
          navLink: '/patient-archive'
        },
        {
          id: 'in-patients',
          title: 'In Patients',
          icon: <Circle size={12} />,
          navLink: '/in-patients'
        },
        {
            id: 'lab-requests',
            title: 'Lab Requests',
            icon: <Circle size={12} />,
            navLink: '/lab-requests'
        },
        {
            id: 'pharmacy',
            title: 'Pharmacy',
            icon: <Circle size={12} />,
            navLink: '/pharmacy'
        },
        {
            id: 'appointment',
            title: 'Appointments',
            icon: <Circle size={12} />,
            navLink: '/apps/permissions'
        },
        {
          id: 'menu-test',
          title: 'Just Test',
          icon: <Circle size={12} />,
          navLink: '/patient/test'
      },
      {
        id: 'doctor-test',
        title: 'Just Test',
        icon: <Circle size={12} />,
        navLink: '/doctor',
        resource: 'DOCTOR'
    }
    ]
  },
  {
    id: 'admin',
    title: 'Admin',
    icon: <Settings size={20} />,
    children: [
      {
        id: 'users',
        title: 'Users',
        icon: <Circle size={12} />,
        navLink: '/users'
      },
      {
        id: 'role',
        title: 'Roles',
        icon: <Circle size={12} />,
        navLink: '/apps/roles'
      }
    ]
  }
]
