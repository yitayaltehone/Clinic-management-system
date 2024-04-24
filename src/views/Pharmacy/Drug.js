import { Button } from "@mui/material"
import { Row, Col } from "reactstrap"
import AddDrug from './NewDrug/AddDrug'
import DrugLst from "./DrugLst"
// import TableServerSide from '../../tables/data-tables/advance/TableServerSide'
// import TableAdvSearch from '../../tables/data-tables/advance/TableAdvSearch'
// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import { Medication } from '@mui/icons-material'
// ** Styles
import '@styles/react/apps/app-users.scss'
import PharmacyData from "./PharmacyData"

const Drug = () => {
    return ( 
    <div className='app-user-list'>
        <Row>
         <Col lg='3' sm='6'>
            <StatsHorizontal 
            color='success'
            statTitle='Available Drugs'
            icon={<Medication size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
          />

          </Col>
          <Col lg='3' sm='6'>
            <StatsHorizontal
            color='info'
            statTitle='New Drugs'
            icon={<Medication size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>11,501</h3>}
          />

          </Col>
          <Col lg='3' sm='6'>
            <StatsHorizontal
            color='warning'
            statTitle='Sold-Drugs'
            icon={<Medication size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>9,000</h3>}
          />

          </Col>
          <Col lg='3' sm='6'>
            <StatsHorizontal
            color='danger'
            statTitle='Expired Drug'
            icon={<Medication size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>459</h3>}
          />

          </Col>
          
            
        </Row>
       <Row>
        <PharmacyData />
       </Row>
    </div>
    )

}
export default Drug