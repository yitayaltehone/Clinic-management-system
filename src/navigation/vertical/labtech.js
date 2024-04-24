// ** Icons Import
import { Type, Eye, CreditCard, Circle, Briefcase, Box, Layout } from 'react-feather'

export default [
  {
    header: 'Lab Technitian'
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <Type size={12} />,
    action: 'read',
    resource: 'LABTECH',
    navLink: '/labtech'
  },
  {
    id: 'feather',
    title: 'Feather',
    icon: <Eye size={20} />,
    action: 'read',
    resource: 'LABTECH',
    navLink: '/icons/reactfeather'
  },
  {
    id: 'cards',
    title: 'Card',
    icon: <CreditCard size={20} />,
    badge: 'light-success',
    badgeText: 'New',
    action: 'read',
    resource: 'LABTECH',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        icon: <Circle size={12} />,
        navLink: '/cards/basic',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'cardAdvance',
        title: 'Advance',
        icon: <Circle size={12} />,
        navLink: '/cards/advance',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'cardStatistics',
        title: 'Statistics',
        icon: <Circle size={12} />,
        navLink: '/cards/statistics',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'CardAnalytics',
        title: 'Analytics',
        icon: <Circle size={12} />,
        navLink: '/cards/analytics',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'cardActions',
        title: 'Actions',
        icon: <Circle size={12} />,
        navLink: '/cards/action',
        action: 'read',
        resource: 'LABTECH'
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    icon: <Briefcase size={20} />,
    action: 'read',
    resource: 'LABTECH',
    children: [
      {
        id: 'accordion',
        title: 'Accordion',
        icon: <Circle size={12} />,
        navLink: '/components/accordion',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'alerts',
        title: 'Alerts',
        icon: <Circle size={12} />,
        navLink: '/components/alerts',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'autoComplete',
        title: 'Auto Complete',
        icon: <Circle size={12} />,
        navLink: '/components/auto-complete',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'avatar',
        title: 'Avatar',
        icon: <Circle size={12} />,
        navLink: '/components/avatar',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'badges',
        title: 'Badges',
        icon: <Circle size={12} />,
        navLink: '/components/badges',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'blockui',
        title: 'BlockUI',
        icon: <Circle size={12} />,
        navLink: '/components/blockui',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'breadCrumbs',
        title: 'Breadcrumbs',
        icon: <Circle size={12} />,
        navLink: '/components/breadcrumbs',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'buttons',
        title: 'Buttons',
        icon: <Circle size={12} />,
        navLink: '/components/buttons',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'collapse',
        title: 'Collapse',
        icon: <Circle size={12} />,
        navLink: '/components/collapse',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'divider',
        title: 'Divider',
        icon: <Circle size={12} />,
        navLink: '/components/divider',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'dropDowns',
        title: 'Dropdowns',
        icon: <Circle size={12} />,
        navLink: '/components/dropdowns',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'listGroup',
        title: 'List Group',
        icon: <Circle size={12} />,
        navLink: '/components/list-group',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'modals',
        title: 'Modals',
        icon: <Circle size={12} />,
        navLink: '/components/modals',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'navsComponent',
        title: 'Navs Component',
        icon: <Circle size={12} />,
        navLink: '/components/nav-component',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'offCanvas',
        title: 'OffCanvas',
        icon: <Circle size={12} />,
        navLink: '/components/offcanvas',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'pagination',
        title: 'Pagination',
        icon: <Circle size={12} />,
        navLink: '/components/pagination',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'pillBadges',
        title: 'Pill Badges',
        icon: <Circle size={12} />,
        navLink: '/components/pill-badges',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'pillsComponent',
        title: 'Pills Component',
        icon: <Circle size={12} />,
        navLink: '/components/pills-component',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'popovers',
        title: 'Popovers',
        icon: <Circle size={12} />,
        navLink: '/components/popovers',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'progress',
        title: 'Progress',
        icon: <Circle size={12} />,
        navLink: '/components/progress',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'spinners',
        title: 'Spinner',
        icon: <Circle size={12} />,
        navLink: '/components/spinners',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'tabsComponent',
        title: 'Tabs Component',
        icon: <Circle size={12} />,
        navLink: '/components/tabs-component',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'timeline',
        title: 'Timeline',
        icon: <Circle size={12} />,
        navLink: '/components/timeline',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'toasts',
        title: 'Toasts',
        icon: <Circle size={12} />,
        navLink: '/components/toasts',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'tooltips',
        title: 'Tooltips',
        icon: <Circle size={12} />,
        navLink: '/components/tooltips',
        action: 'read',
        resource: 'LABTECH'
      }
    ]
  },
  {
    id: 'extensions',
    title: 'Extensions',
    icon: <Box size={20} />,
    action: 'read',
    resource: 'LABTECH',
    children: [
      {
        id: 'sweetAlert',
        title: 'Sweet Alert',
        icon: <Circle size={12} />,
        navLink: '/extensions/sweet-alert',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'toastr',
        title: 'Toastr',
        icon: <Circle size={12} />,
        navLink: '/extensions/toastr',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'slider',
        title: 'Sliders',
        icon: <Circle size={12} />,
        navLink: '/extensions/slider',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'drag_&_drop',
        title: 'Drag & Drop',
        icon: <Circle size={12} />,
        navLink: '/extensions/drag-and-drop',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'tour',
        title: 'Tour',
        icon: <Circle size={12} />,
        navLink: '/extensions/tour',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'clipBoard',
        title: 'Clipboard',
        icon: <Circle size={12} />,
        navLink: '/extensions/clipboard',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'reactPlayer',
        title: 'React Player',
        icon: <Circle size={12} />,
        navLink: '/extensions/react-player',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'contentMenu',
        title: 'Context Menu',
        icon: <Circle size={12} />,
        navLink: '/extensions/context-menu',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'swiper',
        title: 'Swiper',
        icon: <Circle size={12} />,
        navLink: '/extensions/swiper',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'ratings',
        title: 'Ratings',
        icon: <Circle size={12} />,
        navLink: '/extensions/ratings',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'i18n',
        title: 'I18n',
        icon: <Circle size={12} />,
        navLink: '/extensions/i18n',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'extPagination',
        title: 'React Paginate',
        icon: <Circle size={12} />,
        navLink: '/extensions/pagination',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'extImport',
        title: 'Import',
        icon: <Circle size={12} />,
        navLink: '/extensions/import',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'extExport',
        title: 'Export',
        icon: <Circle size={12} />,
        navLink: '/extensions/export',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'extExportSelected',
        title: 'Export Selected',
        icon: <Circle size={12} />,
        navLink: '/extensions/export-selected',
        action: 'read',
        resource: 'LABTECH'
      }
    ]
  },
  {
    id: 'pageLayouts',
    title: 'Page Layouts',
    icon: <Layout size={20} />,
    action: 'read',
    resource: 'LABTECH',
    children: [
      {
        id: 'collapsedMenu',
        title: 'Collapsed Menu',
        icon: <Circle size={12} />,
        navLink: '/page-layout/collapse-menu',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'layoutBoxed',
        title: 'Layout Boxed',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-boxed',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'withoutMenu',
        title: 'Without Menu',
        icon: <Circle size={12} />,
        navLink: '/page-layout/without-menu',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'layoutEmpty',
        title: 'Layout Empty',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty',
        action: 'read',
        resource: 'LABTECH'
      },
      {
        id: 'layoutBlank',
        title: 'Layout Blank',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-blank',
        action: 'read',
        resource: 'LABTECH'
      }
    ]
  }
]
