// ** Routes Imports
// import AppRoutes from './Apps'
import PagesRoutes from './oldroutes/Pages'
import TablesRoutes from './oldroutes/Tables'
import ChartsRoutes from './oldroutes/Charts'
import DashboardRoutes from './oldroutes/Dashboards'
// import UiElementRoutes from './oldroutes/UiElements'
import ExtensionsRoutes from './oldroutes/Extensions'
import PageLayoutsRoutes from './oldroutes/PageLayouts'
import DoctorRoutes from './Doctor'
import NurseRoutes from './Nurse'
import LabTechRoutes from './LabTech'
import PharmacyRoutes from './Pharmacy'
// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard/ecommerce'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...PagesRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...TablesRoutes,
  ...ChartsRoutes,
  ...DoctorRoutes,
  ...NurseRoutes,
  ...LabTechRoutes,
  ...PharmacyRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
