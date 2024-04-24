// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    header: 'Nurse Pages'
  },
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={20} />,
    action: 'read',
    resource: 'NURSE',
    navLink: '/nurse'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    action: 'read',
    resource: 'NURSE',
    navLink: '/apps/chat'
  },
  {
    id: 'todo',
    title: 'Todo',
    icon: <CheckSquare size={20} />,
    action: 'read',
    resource: 'NURSE',
    navLink: '/apps/todo'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    action: 'read',
    resource: 'NURSE',
    navLink: '/apps/calendar'
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    action: 'read',
    resource: 'NURSE',
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        action: 'read',
        resource: 'NURSE',
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        action: 'read',
        resource: 'NURSE',
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Edit',
        icon: <Circle size={12} />,
        action: 'read',
        resource: 'NURSE',
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Add',
        icon: <Circle size={12} />,
        action: 'read',
         resource: 'NURSE',
        navLink: '/apps/invoice/add'
      }
    ]
  },

  {
    id: 'roles-permissions',
    title: 'Roles & Permissions',
    icon: <Shield size={20} />,
    action: 'read',
    resource: 'NURSE',
    children: [
      {
        id: 'roles',
        title: 'Roles',
        icon: <Circle size={12} />,
        action: 'read',
         resource: 'NURSE',
        navLink: '/apps/roles'
      },
      {
        id: 'permissions',
        title: 'Permissions',
        icon: <Circle size={12} />,
        action: 'read',
         resource: 'NURSE',
        navLink: '/apps/permissions'
      }
    ]
  },
  {
    id: 'eCommerce',
    title: 'eCommerce',
    icon: <ShoppingCart size={20} />,
    children: [
      {
        id: 'shop',
        title: 'Shop',
        icon: <Circle size={12} />,
        action: 'read',
       resource: 'NURSE',
        navLink: '/apps/ecommerce/shop'
      },
      {
        id: 'detail',
        title: 'Details',
        icon: <Circle size={12} />,
        action: 'read',
         resource: 'NURSE',
        navLink: '/apps/ecommerce/product-detail'
      },
      {
        id: 'wishList',
        title: 'Wish List',
        icon: <Circle size={12} />,
        action: 'read',
         resource: 'NURSE',
        navLink: '/apps/ecommerce/wishlist'
      },
      {
        id: 'checkout',
        title: 'Checkout',
        icon: <Circle size={12} />,
        action: 'read',
        resource: 'NURSE',
        navLink: '/apps/ecommerce/checkout'
      }
    ]
  },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        action: 'read',
        resource: 'NURSE',
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        action: 'read',
        resource: 'NURSE',
        navLink: '/apps/user/view'
      }
    ]
  }
]
