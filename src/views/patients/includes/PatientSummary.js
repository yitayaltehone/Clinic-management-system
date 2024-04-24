import * as React from 'react'  
import Accordion from '@mui/material/Accordion'  
import AccordionDetails from '@mui/material/AccordionDetails'  
import AccordionSummary from '@mui/material/AccordionSummary'  
import Typography from '@mui/material/Typography'  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'  
import { Fragment } from 'react'
import '../../../global/style.css'
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Badge,
  Alert,
  Modal,
  Label,
  Button,
  CardBody,
  Progress,
  CardTitle,
  ModalBody,
  CardHeader,
  ModalHeader
} from 'reactstrap'
const PatientSummary = () => {
  
  const [expanded, setExpanded] = React.useState('panel1')  
  const [classNames, getClassnames] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)  
    getClassnames(isExpanded ? panel : false)
  }
  return (
    <Fragment>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Summary of Patient History </CardTitle>
      </CardHeader>
      <CardBody>
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className = {classNames === "panel1" ? 'selected' : 'ShirinkAccourdion'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Physical Examination On 12/12/2022
          </Typography>
          <Typography sx={{ color: 'text.primary' }} className = "examinationonProgress">Examination on Progress</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className = {classNames === "panel2" ? 'selected' : 'ShirinkAccourdion'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>   Physical Examination On 12/12/2022</Typography>
          <Typography sx={{ color: 'text.secondary' }} className = "examinationCompleted">
          Examination Completed
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className = {classNames === "panel3" ? 'selected' : 'ShirinkAccourdion'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Physical Examination On 12/12/2022
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} className = "examinationCompleted">
          Examination Completed
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className = {classNames === "panel4" ? 'selected' : 'ShirinkAccourdion'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>   Physical Examination On 12/12/2022</Typography>
          <Typography sx={{ color: 'text.warning' }} className = "examinationCompleted">
          Examination Completed
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available    No Data available 
            No Data available 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </CardBody>
    </Card>
    </Fragment>
  )  
}

export default PatientSummary