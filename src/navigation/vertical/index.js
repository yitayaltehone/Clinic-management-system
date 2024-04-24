// ** Navigation imports
// import apps from './apps'
import pages from './oldnav/pages'
//import forms from './forms'
import tables from './oldnav/tables'
import others from './oldnav/others'
import charts from './oldnav/charts'
import dashboards from './oldnav/dashboards'
// import uiElements from './oldnav/ui-elements'
import bernosNav from './oldnav/bernos-nav'
import doctorNav from './doctor'
import nurseNav from './nurse'
import labtechNav from './labtech'
import pharmacy from './pharmacy'
// ** Merge & Export
export default [...bernosNav, ...dashboards, ...doctorNav, ...nurseNav, ...pharmacy, ...labtechNav, ...pages, ...tables, ...charts, ...others]
